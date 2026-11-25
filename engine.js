window.practiceEngine = (() => {
  const passMark = 700;

  function shuffled(values) {
    const result = [...values];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const next = Math.floor(Math.random() * (index + 1));
      [result[index], result[next]] = [result[next], result[index]];
    }
    return result;
  }

  function choicesFor(question, correctPosition) {
    if (question.type === 'wordBank') return shuffled(question.bank.map((_, index) => index));
    if (question.type === 'dropdown') return question.slots.map(slot => shuffled(slot.choices.map((_, index) => index)));
    const order = shuffled(question.choices.map((_, index) => index));
    if (correctPosition !== undefined) {
      const current = order.indexOf(question.answer);
      [order[current], order[correctPosition]] = [order[correctPosition], order[current]];
    }
    return order;
  }

  function correctPositions(questions, order) {
    const positions = new Map();
    const multipleChoice = order.filter(index => !questions[index].type && Number.isInteger(questions[index].answer));
    for (const size of new Set(multipleChoice.map(index => questions[index].choices.length))) {
      const indices = multipleChoice.filter(index => questions[index].choices.length === size);
      const slotCycle = shuffled(Array.from({ length: size }, (_, index) => index));
      const slots = shuffled(indices.map((_, index) => slotCycle[index % size]));
      indices.forEach((questionIndex, index) => positions.set(questionIndex, slots[index]));
    }
    return positions;
  }

  function newCard(question, questionIndex, correctPosition) {
    return {
      questionIndex,
      retry: false,
      order: choicesFor(question, correctPosition),
      response: Array(question.slots?.length ?? 1).fill(null),
      checked: false,
      marked: false,
      skipped: false
    };
  }

  function testingOrder(exam, questions, previousOrder) {
    const previous = new Set(previousOrder);
    const indices = shuffled(distinctIndices(questions));
    const shuffledIndices = indices.filter(index => !previous.has(index)).concat(indices.filter(index => previous.has(index)));
    const size = Math.min(exam.testingSize ?? questions.length, shuffledIndices.length);
    let buckets = [{ eligible: shuffledIndices, count: size, picked: [] }];
    if (exam.testingGroups) {
      const groups = exam.testingGroups.map((count, group) => ({
        eligible: shuffledIndices.filter(index => questions[index].group === group), count, picked: []
      }));
      if (groups.every(bucket => bucket.eligible.length >= bucket.count)) buckets = groups;
    }

    const families = new Set();
    const familyOf = index => exerciseFamily(exam, questions[index]);
    const pick = (bucket, index) => {
      bucket.picked.push(index);
      families.add(familyOf(index));
    };
    for (const format of shuffled([undefined, 'dropdown', 'wordBank'])) {
      const candidates = shuffled(buckets).filter(bucket => bucket.picked.length < bucket.count).flatMap(bucket =>
        bucket.eligible.filter(index => questions[index].type === format && !families.has(familyOf(index))).map(index => ({ bucket, index })));
      const choice = candidates.find(({ index }) => !previous.has(index)) ?? candidates[0];
      if (choice) pick(choice.bucket, choice.index);
    }
    for (const bucket of shuffled(buckets)) {
      for (const index of bucket.eligible) {
        if (bucket.picked.length >= bucket.count) break;
        if (!families.has(familyOf(index))) pick(bucket, index);
      }
      const remainder = bucket.eligible.filter(index => !bucket.picked.includes(index));
      bucket.picked.push(...remainder.slice(0, bucket.count - bucket.picked.length));
    }

    if (previous.size === size && buckets.every(bucket => bucket.picked.every(index => previous.has(index)))) {
      for (const bucket of shuffled(buckets)) {
        const replacement = bucket.eligible.find(index => !previous.has(index) && bucket.picked.some(picked => questions[picked].type === questions[index].type && familyOf(index) === familyOf(picked)));
        if (replacement === undefined) continue;
        const position = bucket.picked.findIndex(index => questions[index].type === questions[replacement].type && familyOf(index) === familyOf(replacement));
        bucket.picked[position] = replacement;
        break;
      }
    }

    return shuffled(buckets.flatMap(bucket => bucket.picked));
  }

  function distinctIndices(questions) {
    const seen = new Set();
    return questions.flatMap((question, index) => {
      const identity = JSON.stringify([question.prompt, question.code, question.choices?.slice().sort(), question.bank?.slice().sort(), question.slots?.map(slot => slot.choices?.slice().sort())]);
      if (seen.has(identity)) return [];
      seen.add(identity);
      return [index];
    });
  }

  function exerciseFamily(exam, question) {
    return question.family ?? (exam.simulation ? question.topic : `${question.topic}:${question.explanation.replace(/-?\d+(?:[.,]\d+)*/g, '#')}`);
  }

  function shuffledPractice(exam, questions) {
    const families = new Map();
    for (const index of shuffled(distinctIndices(questions))) {
      const family = exerciseFamily(exam, questions[index]);
      if (!families.has(family)) families.set(family, []);
      families.get(family).push(index);
    }
    const order = [];
    while (families.size) {
      const round = shuffled([...families]);
      if (order.length && round.length > 1 && round[0][0] === exerciseFamily(exam, questions[order.at(-1)])) {
        [round[0], round[1]] = [round[1], round[0]];
      }
      for (const [family, indices] of round) {
        order.push(indices.pop());
        if (!indices.length) families.delete(family);
      }
    }
    return order;
  }

  function create(exam, questions, mode, previousOrder, now = Date.now()) {
    const testing = mode === 'testing';
    const lessonOrder = mode === 'training' && exam.lessonOrder === true;
    let order;
    if (testing) order = testingOrder(exam, questions, previousOrder);
    else {
      order = mode === 'shuffled-training' ? shuffledPractice(exam, questions) : distinctIndices(questions);
      if (mode === 'training' && !lessonOrder) order.sort((a, b) => questions[a].difficulty - questions[b].difficulty);
    }
    if (mode !== 'training' && order.length > 1 && order.every((value, index) => value === previousOrder?.[index])) {
      [order[0], order[1]] = [order[1], order[0]];
    }
    const positions = correctPositions(questions, order);
    return {
      examId: exam.id,
      mode,
      ...(lessonOrder ? { lessonOrder } : {}),
      simulation: testing && exam.simulation === true,
      order,
      cards: order.map(index => newCard(questions[index], index, positions.get(index))),
      current: 0,
      furthest: 0,
      deadline: testing ? now + exam.minutes * 60000 : null,
      updated: now,
      submitted: null,
      expired: false
    };
  }

  function grade(question, card) {
    if (card.response.some(value => value === null)) return 'unanswered';
    const answers = question.slots?.map(slot => slot.answer) ?? [question.answer];
    const correct = answers.every((answer, index) => matches(answer, card.response[index]));
    return correct ? 'correct' : 'incorrect';
  }

  function matches(answer, response) {
    return Array.isArray(answer) ? answer.includes(response) : response === answer;
  }

  function check(attempt, questions) {
    const card = attempt.cards[attempt.current];
    const question = questions[card.questionIndex];
    const result = grade(question, card);
    if (attempt.mode === 'testing' || card.checked || result === 'unanswered') return result;
    card.checked = true;
    return result;
  }

  function remaining(attempt, now = Date.now()) {
    return attempt.deadline === null ? null : Math.max(0, Math.ceil((attempt.deadline - now) / 1000));
  }

  function progress(attempt) {
    const originals = attempt.cards.filter(card => !card.retry);
    const retries = attempt.cards.filter(card => card.retry);
    const isComplete = card => card.response.every(value => value !== null);
    return {
      answered: originals.filter(isComplete).length,
      total: originals.length,
      reviews: retries.length,
      pending: retries.filter(card => !card.checked).length,
      marked: attempt.cards.filter(card => card.marked).length
    };
  }

  function summarize(attempt, questions) {
    const retries = new Map(attempt.cards.filter(card => card.retry).map(card => [card.questionIndex, card]));
    const items = attempt.cards.filter(card => !card.retry).map((card, index) => {
      const question = questions[card.questionIndex];
      const retry = retries.get(card.questionIndex);
      return {
        card, index, question, retry,
        result: grade(question, card),
        retryResult: retry ? grade(question, retry) : null
      };
    });
    const correct = items.filter(item => item.result === 'correct').length;
    const incorrect = items.filter(item => item.result === 'incorrect').length;
    const unanswered = items.length - correct - incorrect;
    const recovered = items.filter(item => item.retryResult === 'correct').length;
    const score = Math.round(correct * 1000 / items.length);
    return { items, correct, incorrect, unanswered, recovered, score, passed: correct * 1000 >= passMark * items.length };
  }

  return { passMark, create, grade, matches, check, remaining, progress, summarize };
})();
