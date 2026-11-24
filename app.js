(() => {
  const exams = window.practiceExams;
  const banks = window.practiceBanks;
  const engine = window.practiceEngine;
  const main = document.querySelector('#main');
  const modal = document.querySelector('#confirmation');
  const announcement = document.querySelector('#announcement');
  const header = document.querySelector('#header-context');
  const storageKey = 'java-practice-exams.v1';
  const labels = { training: 'Training', testing: 'Testing', correct: 'Correct', incorrect: 'Incorrect', unanswered: 'Unanswered' };
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let saveAvailable = true;
  let state = load();
  let view;
  let mode = 'training';
  let bankSelection = null;
  let resultFilter = 'review';

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved?.attempts && saved?.testingOrders) return saved;
    } catch (error) {
      if (!(error instanceof SyntaxError)) saveAvailable = false;
    }
    return { attempts: {}, testingOrders: {} };
  }

  function persist(attempt) {
    if (attempt) attempt.updated = Date.now();
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      if (saveAvailable) announce('Progress is available in this tab. Browser storage is unavailable.');
      saveAvailable = false;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  }

  function announce(message) {
    announcement.textContent = message;
  }

  function destination(screen, id) {
    return `#${screen}${id ? `/${id}` : ''}`;
  }

  function navigate(screen, id) {
    const hash = destination(screen, id);
    if (location.hash === hash) readRoute();
    else location.hash = hash;
  }

  function expire(attempt) {
    if (!attempt?.submitted && attempt?.mode === 'testing' && engine.remaining(attempt) === 0) {
      attempt.submitted = Date.now();
      attempt.expired = true;
      persist(attempt);
      return true;
    }
    return false;
  }

  function readRoute() {
    if (location.hash === '#main') return;
    const [, name, idText] = /^#(exam|setup|take|results)\/(\d+)$/.exec(location.hash) ?? [];
    const exam = exams.find(item => item.id === Number(idText));
    for (const saved of Object.values(state.attempts)) expire(saved);
    let screen = exam ? name : 'home';
    const attempt = state.attempts[exam?.id];
    if ((screen === 'take' || screen === 'results') && !attempt) screen = 'exam';
    if (screen === 'take' && attempt.submitted) screen = 'results';
    if (screen === 'results' && !attempt.submitted) screen = 'take';
    if (view?.screen !== screen || view?.exam !== exam) {
      bankSelection = null;
      if (screen === 'setup') mode = 'training';
      if (screen === 'results') resultFilter = 'review';
    }
    view = { screen, exam, questions: banks[exam?.id], attempt };
    if (modal.open) modal.close();
    render(true);
  }

  function backLink(text, hash = '#home') {
    return `<a class="back-link" href="${hash}">${text}</a>`;
  }

  function storageNotice() {
    return saveAvailable ? '' : '<p class="notice">Browser storage is unavailable. Keep this tab open to retain progress.</p>';
  }

  function timestamp(value) {
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(value);
  }

  function renderHome() {
    const rows = exams.map(exam => {
      const saved = state.attempts[exam.id];
      const count = banks[exam.id].length;
      const status = saved ? `<span class="status-tag">${saved.submitted ? 'Completed' : 'In progress'}</span>` : '';
      return `<article class="exam-row">
        <span class="exam-number" aria-hidden="true">${exam.id}</span>
        <div class="exam-info">
          <h3>${exam.title}</h3>
          <p>${exam.subtitle}</p>
        </div>
        <div class="exam-meta"><span>${count} questions</span>${status}</div>
        <a class="button secondary exam-action" aria-label="Open ${exam.title}" href="#exam/${exam.id}">${saved ? 'Open exam' : 'Start'}</a>
      </article>`;
    }).join('');
    main.innerHTML = `<section class="hero" aria-labelledby="page-title">
      <div class="hero-copy">
        <h1 id="page-title">Java Practice Exams</h1>
        <p>Practice with multiple choice, inline code dropdowns, and draggable code fragments.</p>
      </div>
      <dl class="hero-modes">
        <div><dt>Training</dt><dd>Instant explanations and review of missed questions</dd></div>
        <div><dt>Testing</dt><dd>Timed attempts with feedback after submission</dd></div>
      </dl>
    </section>
    ${storageNotice()}
    <section class="exam-list" aria-labelledby="exam-list-title">
      <h2 id="exam-list-title">Choose an exam</h2>
      ${rows}
    </section>`;
  }

  function renderExam() {
    const { exam, questions, attempt } = view;
    let saved = '';
    if (attempt) {
      const progress = engine.progress(attempt);
      const details = attempt.submitted ? `Completed ${timestamp(attempt.submitted)}` : `Last saved ${timestamp(attempt.updated)}`;
      saved = `<article class="surface start-card">
        <div><h2>${attempt.submitted ? 'Last result' : 'Saved attempt'}</h2><p>${details}</p></div>
        <dl class="quick-facts"><div><dt>Mode</dt><dd>${labels[attempt.mode]}</dd></div><div><dt>Progress</dt><dd>${progress.answered} / ${progress.total} answered</dd></div></dl>
        <a class="button primary" href="${destination(attempt.submitted ? 'results' : 'take', exam.id)}">${attempt.submitted ? 'View Results' : 'Resume Test'}</a>
      </article>`;
    }
    main.innerHTML = `<div class="narrow">
      ${backLink('All exams')}
      <div class="page-intro"><p class="eyebrow">${exam.subtitle}</p><h1>${exam.title}</h1><p>${exam.detail}</p></div>
      ${storageNotice()}
      <div class="start-cards ${saved ? 'has-saved' : ''}">
        <article class="surface start-card">
          <div><h2>New attempt</h2><p>${questions.length} questions · ${exam.minutes ? 'Training or Testing' : 'Training only'}</p></div>
          <a class="button primary" href="#setup/${exam.id}">New Test</a>
        </article>
        ${saved}
      </div>
    </div>`;
  }

  function setupFacts() {
    const { exam, questions } = view;
    const training = mode === 'training';
    return `<p class="mode-description">${training
      ? 'Check each answer for immediate feedback. Missed questions return after about six intervening questions, or sooner near the end.'
      : 'Work against the clock with shuffled questions. Correct answers and explanations appear after submission.'}</p>
      <dl class="setup-facts">
        <div><dt>Questions</dt><dd>${questions.length}</dd></div>
        <div><dt>Time allowed</dt><dd>${training ? 'Unlimited' : `${exam.minutes} min`}</dd></div>
        <div><dt>${training ? 'Scoring' : 'Passing score'}</dt><dd>${training ? 'First answers' : `${engine.passMark} / 1,000`}</dd></div>
      </dl>
      <p class="muted small">Each question counts once. For code completion, fill every blank correctly to earn the point.</p>`;
  }

  function renderSetup() {
    const { exam } = view;
    main.innerHTML = `<div class="narrow">
      ${backLink('Exam overview', destination('exam', exam.id))}
      <div class="page-intro"><p class="eyebrow">${exam.title}</p><h1>Test setup</h1><p>${exam.subtitle}</p></div>
      <section class="surface setup-panel" aria-label="Test settings">
        <div class="setup-fields">
          <label for="language-select">Language<select id="language-select"><option>English</option></select></label>
          <label for="mode-select">Mode<select id="mode-select">
            <option value="training" ${mode === 'training' ? 'selected' : ''}>Training</option>
            ${exam.minutes ? `<option value="testing" ${mode === 'testing' ? 'selected' : ''}>Testing</option>` : ''}
          </select></label>
        </div>
        <div id="setup-facts">${setupFacts()}</div>
        <div class="actions right"><a class="button secondary" href="#exam/${exam.id}">Cancel</a><button class="primary" data-action="start">Start Test</button></div>
      </section>
    </div>`;
  }

  function currentCard() {
    return view.attempt.cards[view.attempt.current];
  }

  function highlight(code) {
    const token = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/[^\n]*|\b(?:abstract|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|extends|false|final|finally|float|for|if|implements|import|int|interface|long|new|null|package|private|protected|public|return|short|static|super|switch|this|throw|throws|true|try|void|while)\b|\b\d+(?:\.\d+)?(?:[fFdDlL])?\b)/g;
    return code.split(token).map((part, index) => {
      if (index % 2 === 0) return escapeHtml(part);
      const kind = part.startsWith('/') ? 'comment' : /^["']/.test(part) ? 'string' : /^\d/.test(part) ? 'number' : 'keyword';
      return `<span class="syntax-${kind}">${escapeHtml(part)}</span>`;
    }).join('');
  }

  function codeBlock(code, blank) {
    const content = blank ? code.split(/\{\{(\d+)\}\}/g).map((part, index) => (
      index % 2 ? blank(Number(part)) : highlight(part)
    )).join('') : highlight(code);
    return `<pre><code>${content}</code></pre>`;
  }

  function radioOptions(question, card) {
    return `<fieldset class="choices" ${card.checked ? 'disabled' : ''}>
      <legend class="sr-only">Select one answer</legend>
      ${card.order.map((choice, position) => {
        const selected = card.response[0] === choice;
        const correct = engine.matches(question.answer, choice);
        const status = card.checked ? correct ? 'graded-correct' : selected ? 'graded-incorrect' : '' : '';
        return `<label class="choice ${status}">
        <input type="radio" name="answer" value="${choice}" ${card.response[0] === choice ? 'checked' : ''}>
        <span class="choice-letter">${alphabet[position]}</span>
        <span class="choice-text">${escapeHtml(question.choices[choice])}${status ? `<span class="sr-only"> (${correct ? 'correct option' : 'incorrect option'})</span>` : ''}</span>
        <span class="choice-indicator" aria-hidden="true"></span>
      </label>`;
      }).join('')}
    </fieldset>`;
  }

  function slotStatus(question, card, slot) {
    if (!card.checked) return '';
    return engine.matches(question.slots[slot].answer, card.response[slot]) ? 'correct' : 'incorrect';
  }

  function dropdowns(question, card) {
    return codeBlock(question.code, slot => {
      const status = slotStatus(question, card, slot);
      return `<select class="code-select ${status ? `graded-${status}` : ''}" data-slot="${slot}" aria-label="Blank ${slot + 1}${status ? `, ${status}` : ''}" ${card.checked ? 'disabled' : ''}>
      <option value="">Blank ${slot + 1}</option>${card.order[slot].map(choice => `<option value="${choice}" ${choice === card.response[slot] ? 'selected' : ''}>${escapeHtml(question.slots[slot].choices[choice])}</option>`).join('')}
    </select>`;
    });
  }

  function wordBank(question, card) {
    const slots = codeBlock(question.code, slot => {
      const value = card.response[slot];
      const text = value === null ? `Blank ${slot + 1}` : question.bank[value];
      const status = slotStatus(question, card, slot);
      return `<button class="code-slot ${value === null ? '' : 'filled'} ${status ? `graded-${status}` : ''}" data-action="place" data-slot="${slot}" ${card.checked ? 'disabled' : ''} aria-label="Blank ${slot + 1}${value === null ? '' : `, ${escapeHtml(text)}`}${status ? `, ${status}` : ''}">${escapeHtml(text)}</button>`;
    });
    return `${card.checked ? '' : '<p class="field-help">Drag a fragment to a blank, or select a fragment and then a blank. To clear a filled blank, select it with no fragment selected.</p>'}
      <div class="word-bank-layout"><fieldset class="word-bank" ${card.checked ? 'disabled' : ''}><legend>Word bank</legend>
        ${card.order.map(value => `<button type="button" class="bank-tile" data-action="pick" data-choice="${value}" draggable="${!card.checked}" aria-pressed="false">${escapeHtml(question.bank[value])}</button>`).join('')}
      </fieldset>${slots}</div>`;
  }

  function answerText(question, values) {
    const options = question.slots?.map(slot => slot.choices ?? question.bank) ?? [question.choices];
    return values.map((value, index) => {
      if (value === null) return '<span class="muted">Blank</span>';
      const valid = Array.isArray(value) ? value : [value];
      return valid.map(choice => `<code>${escapeHtml(options[index][choice])}</code>`).join(' or ');
    }).join('<span class="inline-separator"> · </span>');
  }

  function expected(question) {
    return answerText(question, question.slots?.map(slot => slot.answer) ?? [question.answer]);
  }

  function trainingFeedback(question, card) {
    if (!card.checked) return '';
    const grade = engine.grade(question, card);
    const retryMessage = grade === 'incorrect' && !card.retry ? 'This question has been added to your review queue.' : '';
    return `<section class="feedback ${grade}" id="answer-feedback" tabindex="-1" aria-label="Answer feedback">
      <h3>${grade === 'correct' ? 'Correct answer' : 'Incorrect answer'}</h3>
      ${grade === 'incorrect' ? `<p><strong>Correct answer</strong> ${expected(question)}</p>` : ''}
      <p>${escapeHtml(question.explanation)}</p>
      ${retryMessage ? `<p class="small">${retryMessage}</p>` : ''}
    </section>`;
  }

  function progressLabel(progress) {
    return `${progress.answered} of ${progress.total} answered`;
  }

  function formatClock(seconds) {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  }

  function renderQuiz() {
    const { exam, attempt, questions } = view;
    const card = currentCard();
    const question = questions[card.questionIndex];
    const progress = engine.progress(attempt);
    const originalNumber = attempt.order.indexOf(card.questionIndex) + 1;
    const title = card.retry ? 'Spaced review' : `Question ${originalNumber} of ${attempt.order.length}`;
    const training = attempt.mode === 'training';
    const type = question.type === 'wordBank' ? 'Word bank' : question.type === 'dropdown' ? 'Code dropdowns' : 'Multiple choice';
    const content = question.type === 'wordBank' ? wordBank(question, card) : question.type === 'dropdown' ? dropdowns(question, card)
      : `${question.code ? codeBlock(question.code) : ''}${radioOptions(question, card)}`;
    main.innerHTML = `<div class="quiz">
      <div class="quiz-top">
        <div><p class="eyebrow">${exam.title}</p><h1>${labels[attempt.mode]} attempt</h1></div>
        <div class="quiz-status">${training ? '<span class="mode-pill">Untimed</span>' : `<div class="clock" aria-label="Time remaining"><span>Time remaining</span><strong id="timer">${formatClock(engine.remaining(attempt))}</strong></div>`}
          <button class="secondary" data-action="overview">Overview</button></div>
      </div>
      ${storageNotice()}
      <div class="surface question-card">
        <div class="question-progress">
          <div><span id="progress-label">${progressLabel(progress)}</span>${training ? ` <span class="review-count" id="retry-count">${progress.pending} reviews pending</span>` : ''}</div>
          <progress id="exam-progress" aria-label="Answered questions" value="${progress.answered}" max="${progress.total}"></progress>
        </div>
        <div class="question-body">
          <div class="question-meta"><span>${title}</span><span>${type}</span></div>
          ${card.retry ? `<p class="review-label">Retry of Question ${originalNumber}</p>` : ''}
          <h2 tabindex="-1" id="question-title">${escapeHtml(question.prompt).replace(/\n/g, '<br>')}</h2>
          ${content}
          ${training ? trainingFeedback(question, card) : ''}
          ${training && !card.checked ? '<div class="check-row"><button class="primary" id="check-answer" data-action="check">Check Answer</button></div>' : ''}
        </div>
        <div class="quiz-controls">
          <button class="secondary" data-action="previous" ${attempt.current === 0 ? 'disabled' : ''}>Previous</button>
          <button class="text-button" id="reset-answer" data-action="reset">Reset</button>
          <button class="text-button mark" id="mark-answer" data-action="mark" aria-pressed="${card.marked}">${card.marked ? 'Marked for Review' : 'Mark for Review'}</button>
          <button class="text-button push" data-action="skip" ${card.checked ? 'disabled' : ''}>Skip</button>
          <button class="primary" data-action="next">${attempt.current === attempt.cards.length - 1 ? 'Finish' : 'Next'}</button>
        </div>
      </div>
      <div class="quiz-footer"><button class="text-button" data-action="submit">Submit Exam</button></div>
    </div>`;
    updateQuiz();
  }

  function updateQuiz() {
    const progress = engine.progress(view.attempt);
    const card = currentCard();
    document.querySelector('#progress-label').textContent = progressLabel(progress);
    document.querySelector('#exam-progress').value = progress.answered;
    const retries = document.querySelector('#retry-count');
    if (retries) retries.textContent = `${progress.pending} ${progress.pending === 1 ? 'review' : 'reviews'} pending`;
    document.querySelector('#reset-answer').disabled = card.checked || card.response.every(value => value === null);
    const check = document.querySelector('#check-answer');
    if (check) check.disabled = card.response.some(value => value === null);
    if (!card.checked && view.questions[card.questionIndex].type === 'wordBank') updateWordBank();
  }

  function updateWordBank() {
    const card = currentCard();
    const bank = view.questions[card.questionIndex].bank;
    for (const button of main.querySelectorAll('.bank-tile')) {
      button.setAttribute('aria-pressed', String(Number(button.dataset.choice) === bankSelection));
    }
    for (const slot of main.querySelectorAll('.code-slot')) {
      const index = Number(slot.dataset.slot);
      const value = card.response[index];
      slot.textContent = value === null ? `Blank ${index + 1}` : bank[value];
      slot.setAttribute('aria-label', `Blank ${index + 1}${value === null ? '' : `, ${bank[value]}`}`);
      slot.classList.toggle('filled', value !== null);
      slot.classList.toggle('ready', bankSelection !== null);
    }
  }

  function renderResults() {
    const { exam, questions, attempt } = view;
    const result = engine.summarize(attempt, questions);
    const training = attempt.mode === 'training';
    const items = resultFilter === 'review' ? result.items.filter(item => item.result !== 'correct') : result.items;
    const details = items.map(({ index, question, card, result: status, retry, retryResult }) => {
      const retryLabel = retryResult && (retry?.skipped ? 'Skipped' : labels[retryResult]);
      const answerSummary = card.skipped ? '<span class="muted">Skipped</span>' : answerText(question, card.response);
      return `<article class="surface result-item"><div class="result-item-top"><span>Question ${index + 1}</span>
        <span class="status-tag ${status}">${card.skipped ? 'Skipped' : labels[status]}</span></div>
        <h3>${escapeHtml(question.prompt)}</h3>
        ${question.code ? codeBlock(question.code, question.slots ? slot => `<span class="result-blank">Blank ${slot + 1}</span>` : null) : ''}
        <dl class="answer-summary"><div><dt>Your answer</dt><dd>${answerSummary}</dd></div>
        <div><dt>Correct answer</dt><dd>${expected(question)}</dd></div>
        ${retry ? `<div><dt>Spaced review</dt><dd><span class="status-tag ${retryResult}">${retryLabel}</span> ${retryResult !== 'unanswered' ? answerText(question, retry.response) : ''}</dd></div>` : ''}</dl>
        <p>${escapeHtml(question.explanation)}</p></article>`;
    }).join('');
    main.innerHTML = `<div class="narrow results">
      ${backLink('Exam overview', destination('exam', exam.id))}
      <div class="page-intro"><p class="eyebrow">${exam.title} · ${labels[attempt.mode]}</p><h1>Exam results</h1>
      ${attempt.expired ? '<p>Time expired and your answers were submitted.</p>' : ''}</div>
      <section class="surface result-summary" aria-label="Score summary">
        <div class="score"><span>${training ? 'First-pass score' : 'Score'}</span><strong>${result.score}<small> / 1,000</small></strong>
          ${training ? '' : `<span class="status-tag ${result.passed ? 'correct' : 'incorrect'}">${result.passed ? 'Passed' : 'Below passing score'}</span>`}</div>
        <dl class="result-stats">
          <div><dt>Correct</dt><dd class="text-correct">${result.correct}</dd></div>
          <div><dt>Incorrect</dt><dd class="text-incorrect">${result.incorrect}</dd></div>
          <div><dt>Unanswered</dt><dd>${result.unanswered}</dd></div>
          ${training ? `<div><dt>Fixed in review</dt><dd class="text-correct">${result.recovered}</dd></div>` : ''}
        </dl>
      </section>
      <div class="review-heading"><h2>Review answers</h2>
        <div class="filter-group" aria-label="Filter answers">
          <button class="secondary" data-action="filter" data-filter="review" aria-pressed="${resultFilter === 'review'}">Needs review</button>
          <button class="secondary" data-action="filter" data-filter="all" aria-pressed="${resultFilter === 'all'}">All answers</button>
        </div></div>
      ${details || '<p class="surface empty-result">All questions were answered correctly on the first pass.</p>'}
      <div class="actions right"><a href="#setup/${exam.id}" class="button primary">New Test</a></div>
    </div>`;
  }

  function render(focus = false) {
    header.hidden = view.screen !== 'take';
    if (view.screen === 'home') renderHome();
    if (view.screen === 'exam') renderExam();
    if (view.screen === 'setup') renderSetup();
    if (view.screen === 'take') renderQuiz();
    if (view.screen === 'results') renderResults();
    if (focus) {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
  }

  function dialog(title, content, controls) {
    modal.innerHTML = `<h2 id="confirmation-title">${title}</h2>${content}<div class="actions right">${controls}</div>`;
    if (!modal.open) modal.showModal();
  }

  function openOverview() {
    const { attempt } = view;
    const progress = engine.progress(attempt);
    const list = attempt.cards.map((card, index) => {
      const original = attempt.order.indexOf(card.questionIndex) + 1;
      const status = card.marked ? 'Marked' : card.skipped ? 'Skipped' : card.response.every(value => value !== null) ? 'Answered' : 'Open';
      return `<button class="secondary overview-item" data-action="jump" data-index="${index}" ${index === attempt.current ? 'aria-current="step"' : ''}>
        <strong>${card.retry ? `Review ${original}` : `Q${original}`}</strong><span>${status}</span></button>`;
    }).join('');
    dialog('Question overview', `<p>${progressLabel(progress)} · ${progress.marked} marked for review</p><div class="overview-grid">${list}</div>`, '<button class="secondary" data-action="close">Close</button>');
  }

  function openSubmit() {
    const { attempt } = view;
    const progress = engine.progress(attempt);
    const incomplete = progress.total - progress.answered;
    const unanswered = incomplete ? `<p>${incomplete} ${incomplete === 1 ? 'question is' : 'questions are'} unanswered and will receive zero points.</p>` : '';
    const reviews = progress.pending ? `<p>${progress.pending} ${progress.pending === 1 ? 'spaced review is' : 'spaced reviews are'} pending.</p>` : '';
    dialog('Submit this exam?', `<p>${progressLabel(progress)}. Your answers will be graded and your results will open.</p>${unanswered}${reviews}`,
      '<button class="secondary" data-action="close">Keep working</button><button class="primary" data-action="confirm-submit">Confirm Submission</button>');
  }

  function startAttempt() {
    const { exam, questions } = view;
    const attempt = engine.create(exam, questions, mode, state.testingOrders[exam.id]);
    if (mode === 'testing') state.testingOrders[exam.id] = attempt.order;
    state.attempts[exam.id] = attempt;
    persist(attempt);
    navigate('take', exam.id);
  }

  function submitAttempt() {
    if (view.attempt.submitted) return;
    view.attempt.submitted = Date.now();
    persist(view.attempt);
    navigate('results', view.exam.id);
  }

  function move(index) {
    const { attempt } = view;
    attempt.current = index;
    attempt.furthest = Math.max(attempt.furthest, index);
    bankSelection = null;
    persist(attempt);
    renderQuiz();
    document.querySelector('#question-title').focus();
  }

  function setAnswer(slot, value) {
    const card = currentCard();
    if (card.checked) return;
    card.response[slot] = value;
    card.skipped = false;
    persist(view.attempt);
    updateQuiz();
  }

  function checkAnswer() {
    const grade = engine.check(view.attempt, view.questions);
    if (grade === 'unanswered') return;
    bankSelection = null;
    persist(view.attempt);
    renderQuiz();
    document.querySelector('#answer-feedback').focus();
  }

  function next(skip = false) {
    const { attempt } = view;
    const card = currentCard();
    if (skip) {
      card.response.fill(null);
      card.skipped = true;
      persist(attempt);
    } else if (attempt.mode === 'training' && !card.checked && card.response.every(value => value !== null)) {
      checkAnswer();
      return;
    }
    if (attempt.current < attempt.cards.length - 1) move(attempt.current + 1);
    else {
      if (skip) renderQuiz();
      openSubmit();
    }
  }

  function pick(choice) {
    bankSelection = bankSelection === choice ? null : choice;
    updateWordBank();
    const question = view.questions[currentCard().questionIndex];
    announce(bankSelection === null ? 'Fragment selection cleared.' : `${question.bank[choice]} selected. Choose a blank.`);
  }

  function place(slot, value) {
    if (currentCard().checked) return;
    bankSelection = null;
    setAnswer(slot, value);
    const question = view.questions[currentCard().questionIndex];
    announce(value === null ? `Blank ${slot + 1} cleared.` : `Blank ${slot + 1} filled with ${question.bank[value]}.`);
  }

  function syncClock() {
    const attempt = view?.attempt;
    if (view?.screen !== 'take' || attempt.mode !== 'testing') return false;
    if (expire(attempt) || attempt.submitted) {
      navigate('results', view.exam.id);
      return true;
    }
    const timer = document.querySelector('#timer');
    const seconds = engine.remaining(attempt);
    if (timer) {
      timer.textContent = formatClock(seconds);
      timer.classList.toggle('low-time', seconds <= 60);
    }
    return false;
  }

  main.addEventListener('click', event => {
    const control = event.target.closest('[data-action]');
    if (!control || syncClock()) return;
    switch (control.dataset.action) {
      case 'start':
        if (view.attempt && !view.attempt.submitted) {
          dialog('Replace saved attempt?', '<p>Starting a new test replaces this exam’s saved progress.</p>',
            '<button class="secondary" data-action="close">Cancel</button><button class="primary" data-action="replace">Start New Test</button>');
        } else startAttempt();
        break;
      case 'overview': openOverview(); break;
      case 'previous': move(view.attempt.current - 1); break;
      case 'next': next(); break;
      case 'skip': next(true); break;
      case 'submit': openSubmit(); break;
      case 'check': checkAnswer(); break;
      case 'reset':
        currentCard().response.fill(null);
        currentCard().skipped = false;
        bankSelection = null;
        persist(view.attempt);
        renderQuiz();
        document.querySelector('#question-title').focus({ preventScroll: true });
        announce('Answer reset.');
        break;
      case 'mark': {
        const card = currentCard();
        card.marked = !card.marked;
        control.setAttribute('aria-pressed', String(card.marked));
        control.textContent = card.marked ? 'Marked for Review' : 'Mark for Review';
        persist(view.attempt);
        break;
      }
      case 'pick': pick(Number(control.dataset.choice)); break;
      case 'place': place(Number(control.dataset.slot), bankSelection); break;
      case 'filter':
        resultFilter = control.dataset.filter;
        renderResults();
        main.querySelector(`[data-filter="${resultFilter}"]`).focus();
        break;
    }
  });

  main.addEventListener('change', event => {
    const control = event.target;
    if (syncClock()) return;
    if (control.id === 'mode-select') {
      mode = control.value;
      document.querySelector('#setup-facts').innerHTML = setupFacts();
    } else if (control.name === 'answer') setAnswer(0, Number(control.value));
    else if (control.classList.contains('code-select')) setAnswer(Number(control.dataset.slot), control.value === '' ? null : Number(control.value));
  });

  const dragType = 'application/x-java-practice-fragment';
  main.addEventListener('dragstart', event => {
    const tile = event.target.closest('.bank-tile');
    if (!tile || syncClock()) return;
    event.dataTransfer.setData(dragType, tile.dataset.choice);
    event.dataTransfer.effectAllowed = 'copy';
  });

  main.addEventListener('dragover', event => {
    const slot = event.target.closest('.code-slot:not(:disabled)');
    if (!slot || !event.dataTransfer.types.includes(dragType)) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    slot.classList.add('drop-target');
  });

  main.addEventListener('dragleave', event => event.target.closest('.code-slot')?.classList.remove('drop-target'));

  main.addEventListener('drop', event => {
    const slot = event.target.closest('.code-slot:not(:disabled)');
    if (!slot || syncClock()) return;
    event.preventDefault();
    slot.classList.remove('drop-target');
    const raw = event.dataTransfer.getData(dragType);
    const choice = Number(raw);
    if (raw !== '' && currentCard().order.includes(choice)) place(Number(slot.dataset.slot), choice);
  });

  modal.addEventListener('click', event => {
    const control = event.target.closest('[data-action]');
    if (!control || syncClock()) return;
    modal.close();
    if (control.dataset.action === 'confirm-submit') submitAttempt();
    if (control.dataset.action === 'replace') startAttempt();
    if (control.dataset.action === 'jump') move(Number(control.dataset.index));
  });

  header.addEventListener('click', () => {
    if (syncClock()) return;
    persist(view.attempt);
    navigate('exam', view.exam.id);
  });

  window.addEventListener('hashchange', readRoute);
  document.addEventListener('visibilitychange', syncClock);
  window.setInterval(syncClock, 500);
  readRoute();
})();
