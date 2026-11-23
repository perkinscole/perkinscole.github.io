// The home page lesson: pick a topic, then take it one step at a time.
(function () {
  var lessons = Array.prototype.slice.call(document.querySelectorAll('.lesson'));
  var bar = document.getElementById('lesson-bar');
  var track = document.getElementById('lesson-track');
  var fill = document.getElementById('lesson-fill');
  var count = document.getElementById('lesson-count');
  var exit = document.getElementById('lesson-exit');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DONE_KEY = 'cp-lessons-done';
  var active = null;

  function doneList() {
    try { return JSON.parse(localStorage.getItem(DONE_KEY)) || []; } catch (e) { return []; }
  }
  function markDone(id) {
    try {
      var list = doneList();
      if (list.indexOf(id) < 0) { list.push(id); localStorage.setItem(DONE_KEY, JSON.stringify(list)); }
    } catch (e) { /* private window: the badge just won't persist */ }
  }
  function paintDone() {
    var list = doneList();
    Array.prototype.forEach.call(document.querySelectorAll('.path'), function (card) {
      var done = list.indexOf(card.getAttribute('data-path')) >= 0;
      var len = card.querySelector('.len');
      card.classList.toggle('is-done', done);
      len.textContent = done ? 'Done' : len.getAttribute('data-len');
    });
  }

  function stepsOf(lesson) { return Array.prototype.slice.call(lesson.querySelectorAll('.step')); }

  function setProgress(lesson, index) {
    var total = stepsOf(lesson).length;
    var pct = Math.round(((index + 1) / total) * 100);
    fill.style.width = pct + '%';
    track.setAttribute('aria-valuenow', pct);
    count.textContent = (index + 1) + ' / ' + total;
  }

  function reveal(lesson, index, quiet) {
    var steps = stepsOf(lesson);
    var step = steps[index];
    if (!step) return;
    if (index > 0) steps[index - 1].classList.add('passed');
    step.classList.add('shown');
    setProgress(lesson, index);
    if (index === steps.length - 1) { markDone(lesson.id); paintDone(); }
    if (quiet) { window.scrollTo(0, 0); return; }
    step.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    var heading = step.querySelector('h2');
    if (heading) heading.focus({ preventScroll: true });
  }

  function resetLesson(lesson) {
    stepsOf(lesson).forEach(function (step) {
      step.classList.remove('shown', 'passed');
      var quiz = step.querySelector('.quiz');
      if (!quiz) return;
      step.classList.add('needs-answer');
      quiz.classList.remove('answered');
      Array.prototype.forEach.call(quiz.querySelectorAll('.option'), function (o) {
        o.disabled = false;
        o.classList.remove('is-correct', 'is-wrong');
      });
    });
  }

  function openLesson(lesson) {
    lessons.forEach(function (l) { l.classList.remove('active'); });
    resetLesson(lesson);
    lesson.classList.add('active');
    document.body.classList.add('in-lesson');
    bar.hidden = false;
    active = lesson;
    reveal(lesson, 0, true);
  }

  function showChooser() {
    lessons.forEach(function (l) { l.classList.remove('active'); });
    document.body.classList.remove('in-lesson');
    bar.hidden = true;
    active = null;
    paintDone();
    window.scrollTo(0, 0);
  }

  function route() {
    var id = location.hash.slice(1);
    var lesson = id && document.getElementById(id);
    if (lesson && lesson.classList.contains('lesson')) openLesson(lesson);
    else showChooser();
  }

  // Every step but the last gets a Continue button.
  lessons.forEach(function (lesson) {
    var steps = stepsOf(lesson);
    steps.forEach(function (step, i) {
      if (i === steps.length - 1) return;
      var actions = document.createElement('div');
      actions.className = 'step-actions';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn';
      btn.textContent = i === steps.length - 2 ? 'Finish' : 'Continue';
      btn.addEventListener('click', function () { reveal(lesson, i + 1); });
      actions.appendChild(btn);
      step.appendChild(actions);
    });
  });

  // Questions: one pick, then the answer and the reason.
  document.addEventListener('click', function (e) {
    var option = e.target.closest && e.target.closest('.option');
    if (!option || option.disabled) return;
    var quiz = option.closest('.quiz');
    var right = option.hasAttribute('data-correct');
    Array.prototype.forEach.call(quiz.querySelectorAll('.option'), function (o) {
      o.disabled = true;
      if (o.hasAttribute('data-correct')) o.classList.add('is-correct');
    });
    if (!right) option.classList.add('is-wrong');
    var verdict = quiz.querySelector('.verdict');
    verdict.textContent = right ? 'Correct.' : 'Not quite.';
    verdict.classList.toggle('ok', right);
    quiz.classList.add('answered');
    var step = quiz.closest('.step');
    step.classList.remove('needs-answer');
    var next = step.querySelector('.step-actions .btn');
    if (next) next.focus({ preventScroll: true });
  });

  exit.addEventListener('click', function () {
    history.pushState('', document.title, location.pathname + location.search);
    showChooser();
  });

  window.addEventListener('hashchange', route);
  window.addEventListener('popstate', route);
  route();
})();
