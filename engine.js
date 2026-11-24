window.practiceEngine = (() => {
  const passMark = 700;
  const reviewGap = 6;

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

  function correctPositions(questions) {
    const positions = new Map();
    for (const size of new Set(questions.filter(question => !question.type).map(question => question.choices.length))) {
      const indices = questions.flatMap((question, index) => (
        !question.type && question.choices.length === size && Number.isInteger(question.answer) ? [index] : []
      ));
      const slotCycle = shuffled(Array.from({ length: size }, (_, index) => index));
      const slots = shuffled(indices.map((_, index) => slotCycle[index % size]));
      indices.forEach((questionIndex, index) => positions.set(questionIndex, slots[index]));
    }
    return positions;
  }

  function newCard(question, questionIndex, correctPosition, retry = false) {
    return {
      questionIndex,
      retry,
      order: choicesFor(question, correctPosition),
      response: Array(question.slots?.length ?? 1).fill(null),
      checked: false,
      marked: false,
      skipped: false
    };
  }

  function create(exam, questions, mode, previousTestingOrder, now = Date.now()) {
    let order = questions.map((_, index) => index);
    if (mode === 'testing') {
      order = shuffled(order);
      if (order.length > 1 && order.every((value, index) => value === previousTestingOrder?.[index])) {
        const next = 1 + Math.floor(Math.random() * (order.length - 1));
        [order[0], order[next]] = [order[next], order[0]];
      }
    } else {
      order.sort((a, b) => questions[a].difficulty - questions[b].difficulty);
    }
    const positions = correctPositions(questions);
    return {
      examId: exam.id,
      mode,
      order,
      cards: order.map(index => newCard(questions[index], index, positions.get(index))),
      current: 0,
      furthest: 0,
      deadline: mode === 'testing' ? now + exam.minutes * 60000 : null,
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
    if (attempt.mode !== 'training' || card.checked || result === 'unanswered') return result;
    card.checked = true;
    if (result === 'incorrect' && !card.retry) {
      const reviewIndex = Math.min(attempt.furthest + reviewGap + 1, attempt.cards.length);
      attempt.cards.splice(reviewIndex, 0, newCard(question, card.questionIndex, undefined, true));
    }
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
