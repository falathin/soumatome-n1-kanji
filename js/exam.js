const EXAM_STORAGE_KEY = 'soumatome_n1_exam_results'

const examState = {
  active: false,
  exam: null,
  questions: [],
  currentQuestion: 0,
  answers: {},
  startedAt: null,
  remainingSeconds: 0,
  timer: null,
  submitted: false,
  result: null
}

function examStorageRead() {
  try {
    return JSON.parse(
      localStorage.getItem(EXAM_STORAGE_KEY) || '{}'
    )
  } catch {
    return {}
  }
}

function examStorageWrite(data) {
  localStorage.setItem(
    EXAM_STORAGE_KEY,
    JSON.stringify(data)
  )
}

function shuffleArray(array) {
  const result = [...array]

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    )

    ;[result[i], result[j]] = [
      result[j],
      result[i]
    ]
  }

  return result
}

function examLocalText(value, language = 'id') {
  if (typeof value === 'string') {
    return value
  }

  if (!value || typeof value !== 'object') {
    return ''
  }

  return (
    value[language] ||
    value.id ||
    value.en ||
    ''
  )
}

function escapeExamHTML(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function examIcon(name) {
  const icons = {
    trophy: 'trophy-fill',
    clock: 'clock-fill',
    check: 'check2-circle',
    x: 'x-circle-fill',
    play: 'play-fill',
    arrow: 'arrow-right',
    rotate: 'arrow-clockwise',
    lock: 'lock-fill',
    star: 'star-fill'
  }

  return `<i class="bi bi-${
    icons[name] || name
  }"></i>`
}

function getExamLanguage() {
  return (
    document.documentElement.lang === 'en'
      ? 'en'
      : 'id'
  )
}

function getExamTranslation(id, en) {
  return getExamLanguage() === 'en'
    ? en
    : id
}

function getExamText() {
  return {
    exam: getExamTranslation(
      'Ujian',
      'Exam'
    ),

    start: getExamTranslation(
      'Mulai Ujian',
      'Start Exam'
    ),

    continue: getExamTranslation(
      'Lanjut',
      'Continue'
    ),

    next: getExamTranslation(
      'Soal Berikutnya',
      'Next Question'
    ),

    previous: getExamTranslation(
      'Soal Sebelumnya',
      'Previous Question'
    ),

    submit: getExamTranslation(
      'Kumpulkan Jawaban',
      'Submit Answers'
    ),

    retry: getExamTranslation(
      'Ulangi Ujian',
      'Retry Exam'
    ),

    question: getExamTranslation(
      'Soal',
      'Question'
    ),

    of: getExamTranslation(
      'dari',
      'of'
    ),

    score: getExamTranslation(
      'Nilai',
      'Score'
    ),

    correct: getExamTranslation(
      'Benar',
      'Correct'
    ),

    wrong: getExamTranslation(
      'Salah',
      'Wrong'
    ),

    unanswered: getExamTranslation(
      'Belum dijawab',
      'Unanswered'
    ),

    passed: getExamTranslation(
      'LULUS',
      'PASSED'
    ),

    failed: getExamTranslation(
      'BELUM LULUS',
      'NOT PASSED'
    ),

    timeUp: getExamTranslation(
      'Waktu habis.',
      'Time is up.'
    ),

    selectAnswer: getExamTranslation(
      'Pilih salah satu jawaban.',
      'Choose one answer.'
    ),

    explanation: getExamTranslation(
      'Pembahasan',
      'Explanation'
    ),

    correctAnswer: getExamTranslation(
      'Jawaban benar',
      'Correct answer'
    ),

    passingScore: getExamTranslation(
      'Nilai minimal',
      'Passing score'
    ),

    completed: getExamTranslation(
      'Ujian selesai',
      'Exam completed'
    ),

    noExam: getExamTranslation(
      'Ujian belum tersedia untuk hari ini.',
      'No exam is available for this day.'
    ),

    startDescription: getExamTranslation(
      'Uji pemahaman kanji yang baru kamu pelajari.',
      'Test your understanding of the kanji you have just studied.'
    )
  }
}

function getSavedExamResult(examId) {
  const data = examStorageRead()

  return data[examId] || null
}

function saveExamResult(examId, result) {
  const data = examStorageRead()

  data[examId] = {
    ...result,
    savedAt: Date.now()
  }

  examStorageWrite(data)
}

function stopExamTimer() {
  if (examState.timer) {
    clearInterval(examState.timer)
    examState.timer = null
  }
}

function formatExamTime(seconds) {
  const safe = Math.max(
    0,
    Number(seconds) || 0
  )

  const minutes = Math.floor(
    safe / 60
  )

  const secs = safe % 60

  return `${String(minutes).padStart(
    2,
    '0'
  )}:${String(secs).padStart(
    2,
    '0'
  )}`
}

function startExamTimer() {
  stopExamTimer()

  examState.timer = setInterval(() => {
    if (!examState.active || examState.submitted) {
      stopExamTimer()
      return
    }

    examState.remainingSeconds--

    updateExamTimer()

    if (
      examState.remainingSeconds <= 0
    ) {
      stopExamTimer()

      finishExam(true)
    }
  }, 1000)
}

function updateExamTimer() {
  const timer = document.querySelector(
    '#examTimer'
  )

  if (!timer) return

  timer.textContent =
    formatExamTime(
      examState.remainingSeconds
    )

  timer.classList.toggle(
    'exam-time-danger',
    examState.remainingSeconds <= 60
  )
}

function getQuestionCount(exam) {
  const settings =
    exam?.settings || {}

  const total =
    Number(settings.totalQuestions) || 0

  const available =
    exam?.questions?.length || 0

  if (!available) {
    return 0
  }

  if (!total) {
    return available
  }

  return Math.min(
    total,
    available
  )
}

function prepareExamQuestions(exam) {
  let questions = [
    ...(exam?.questions || [])
  ]

  const total =
    getQuestionCount(exam)

  if (
    exam?.settings
      ?.randomizeQuestions
  ) {
    questions =
      shuffleArray(questions)
  }

  questions =
    questions.slice(0, total)

  if (
    exam?.settings
      ?.randomizeOptions
  ) {
    questions =
      questions.map(question => ({
        ...question,
        options: shuffleArray(
          question.options || []
        )
      }))
  }

  return questions
}

function renderExamSection(
  data
) {
  const exam = data?.exam

  if (!exam?.enabled) {
    return ''
  }

  const questionCount =
    getQuestionCount(exam)

  const settings =
    exam.settings || {}

  const previous =
    getSavedExamResult(
      exam.id
    )

  const title =
    examLocalText(
      exam.title
    ) ||
    getExamText().exam

  const description =
    examLocalText(
      exam.description
    ) ||
    getExamText().startDescription

  const passedText = previous
    ? `
      <div class="exam-last-result">
        <span>
          ${examIcon('trophy')}
          ${getExamText().completed}
        </span>

        <strong>
          ${previous.score}%
        </strong>

        <small>
          ${
            previous.passed
              ? getExamText().passed
              : getExamText().failed
          }
        </small>
      </div>
    `
    : ''

  return `
    <section
      class="exam-section"
      id="examSection"
      data-exam-id="${escapeExamHTML(
        exam.id || ''
      )}"
    >
      <div class="exam-section-head">
        <div>
          <span class="eyebrow">
            ${escapeExamHTML(
              getExamText().exam
            )}
          </span>

          <h2>
            ${escapeExamHTML(title)}
          </h2>

          <p>
            ${escapeExamHTML(
              description
            )}
          </p>
        </div>

        <div class="exam-trophy">
          ${examIcon('trophy')}
        </div>
      </div>

      <div class="exam-info-grid">
        <div class="exam-info-card">
          <strong>
            ${questionCount}
          </strong>

          <span>
            ${escapeExamHTML(
              getExamText().question
            )}
          </span>
        </div>

        <div class="exam-info-card">
          <strong>
            ${formatExamTime(
              settings.timeLimitSeconds ||
                0
            )}
          </strong>

          <span>
            ${getExamLanguage() === 'en'
              ? 'Time limit'
              : 'Batas waktu'}
          </span>
        </div>

        <div class="exam-info-card">
          <strong>
            ${Number(
              settings.passingScore || 0
            )}%
          </strong>

          <span>
            ${escapeExamHTML(
              getExamText().passingScore
            )}
          </span>
        </div>
      </div>

      ${passedText}

      <button
        type="button"
        class="primary-button exam-start-button"
        id="examStartButton"
      >
        ${examIcon('play')}
        ${escapeExamHTML(
          previous
            ? getExamText().retry
            : getExamText().start
        )}
      </button>

      <div
        id="examApp"
        class="exam-app"
        hidden
      ></div>
    </section>
  `
}

function renderExamQuestion() {
  const app =
    document.querySelector(
      '#examApp'
    )

  if (!app) return

  const question =
    examState.questions[
      examState.currentQuestion
    ]

  if (!question) return

  const index =
    examState.currentQuestion

  const total =
    examState.questions.length

  const selected =
    examState.answers[
      question.id
    ]

  const progress =
    Math.round(
      ((index + 1) / total) *
        100
    )

  const questionText =
    examLocalText(
      question.question
    )

  const prompt =
    question.prompt || ''

  const type =
    question.type || 'reading'

  const options =
    question.options || []

  const isLast =
    index === total - 1

  app.innerHTML = `
    <div class="exam-running-header">

      <div>
        <strong>
          ${escapeExamHTML(
            getExamText().question
          )}
          ${index + 1}
          ${escapeExamHTML(
            getExamText().of
          )}
          ${total}
        </strong>
      </div>

      <div
        id="examTimer"
        class="exam-timer"
      >
        ${formatExamTime(
          examState.remainingSeconds
        )}
      </div>

    </div>

    <div class="exam-progress">
      <div
        class="exam-progress-fill"
        style="width:${progress}%"
      ></div>
    </div>

    <div class="exam-question-card">

      <div class="exam-question-type">
        ${
          type === 'kanji'
            ? '漢字'
            : '読み方'
        }
      </div>

      <div class="exam-question-text">
        ${escapeExamHTML(
          questionText
        )}
      </div>

      <div class="exam-prompt">
        ${escapeExamHTML(prompt)}
      </div>

      <div class="exam-options">

        ${options
          .map(
            (option, optionIndex) => `
              <button
                type="button"
                class="exam-option ${
                  selected === option
                    ? 'selected'
                    : ''
                }"
                data-exam-option="${escapeExamHTML(
                  option
                )}"
              >
                <span class="exam-option-number">
                  ${String(
                    optionIndex + 1
                  )}
                </span>

                <span class="exam-option-text">
                  ${escapeExamHTML(
                    option
                  )}
                </span>
              </button>
            `
          )
          .join('')}

      </div>
    </div>

    <div class="exam-navigation">

      <button
        type="button"
        class="soft-button"
        id="examPreviousButton"
        ${
          index === 0
            ? 'disabled'
            : ''
        }
      >
        <i class="bi bi-arrow-left"></i>
        ${escapeExamHTML(
          getExamText().previous
        )}
      </button>

      ${
        isLast
          ? `
            <button
              type="button"
              class="primary-button"
              id="examSubmitButton"
            >
              ${examIcon('check')}
              ${escapeExamHTML(
                getExamText().submit
              )}
            </button>
          `
          : `
            <button
              type="button"
              class="primary-button"
              id="examNextButton"
            >
              ${escapeExamHTML(
                getExamText().next
              )}
              ${examIcon('arrow')}
            </button>
          `
      }

    </div>
  `

  bindExamQuestionEvents()

  updateExamTimer()
}

function bindExamQuestionEvents() {
  const app =
    document.querySelector(
      '#examApp'
    )

  if (!app) return

  app
    .querySelectorAll(
      '[data-exam-option]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          const question =
            examState.questions[
              examState.currentQuestion
            ]

          if (!question) return

          examState.answers[
            question.id
          ] =
            button.dataset
              .examOption

          app
            .querySelectorAll(
              '[data-exam-option]'
            )
            .forEach(option => {
              option.classList.toggle(
                'selected',
                option === button
              )
            })
        }
      )
    })

  document
    .querySelector(
      '#examPreviousButton'
    )
    ?.addEventListener(
      'click',
      () => {
        if (
          examState.currentQuestion >
          0
        ) {
          examState.currentQuestion--

          renderExamQuestion()
        }
      }
    )

  document
    .querySelector(
      '#examNextButton'
    )
    ?.addEventListener(
      'click',
      () => {
        if (
          examState.currentQuestion <
          examState.questions.length -
            1
        ) {
          examState.currentQuestion++

          renderExamQuestion()
        }
      }
    )

  document
    .querySelector(
      '#examSubmitButton'
    )
    ?.addEventListener(
      'click',
      () => finishExam(false)
    )
}

function startExam(exam) {
  if (!exam?.questions?.length) {
    return
  }

  stopExamTimer()

  examState.active = true
  examState.exam = exam
  examState.questions =
    prepareExamQuestions(exam)

  examState.currentQuestion = 0
  examState.answers = {}
  examState.submitted = false
  examState.result = null

  examState.remainingSeconds =
    Number(
      exam.settings
        ?.timeLimitSeconds
    ) || 0

  examState.startedAt =
    Date.now()

  const app =
    document.querySelector(
      '#examApp'
    )

  if (!app) return

  app.hidden = false

  const startButton =
    document.querySelector(
      '#examStartButton'
    )

  if (startButton) {
    startButton.style.display =
      'none'
  }

  renderExamQuestion()

  if (
    examState.remainingSeconds > 0
  ) {
    startExamTimer()
  }

  app.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function finishExam(timeUp = false) {
  if (
    !examState.active ||
    examState.submitted
  ) {
    return
  }

  stopExamTimer()

  examState.submitted = true
  examState.active = false

  const questions =
    examState.questions

  let correct = 0

  const details =
    questions.map(question => {
      const userAnswer =
        examState.answers[
          question.id
        ]

      const isCorrect =
        userAnswer ===
        question.answer

      if (isCorrect) {
        correct++
      }

      return {
        id: question.id,
        prompt: question.prompt,
        userAnswer:
          userAnswer || null,
        correctAnswer:
          question.answer,
        correct: isCorrect,
        explanation:
          question.explanation
      }
    })

  const total =
    questions.length

  const score =
    total > 0
      ? Math.round(
          (correct / total) *
            100
        )
      : 0

  const passingScore =
    Number(
      examState.exam?.settings
        ?.passingScore
    ) || 0

  const passed =
    score >= passingScore

  examState.result = {
    score,
    correct,
    total,
    passed,
    timeUp,
    details
  }

  if (examState.exam?.id) {
    saveExamResult(
      examState.exam.id,
      examState.result
    )
  }

  renderExamResult()
}

function renderExamResult() {
  const app =
    document.querySelector(
      '#examApp'
    )

  if (!app) return

  const result =
    examState.result

  if (!result) return

  const text =
    getExamText()

  const statusClass =
    result.passed
      ? 'exam-passed'
      : 'exam-failed'

  app.innerHTML = `
    <div class="exam-result ${statusClass}">

      <div class="exam-result-icon">
        ${
          result.passed
            ? examIcon('trophy')
            : examIcon('x')
        }
      </div>

      <span class="eyebrow">
        ${escapeExamHTML(
          text.completed
        )}
      </span>

      <h3>
        ${result.score}%
      </h3>

      <strong class="exam-result-status">
        ${
          result.passed
            ? escapeExamHTML(
                text.passed
              )
            : escapeExamHTML(
                text.failed
              )
        }
      </strong>

      <div class="exam-result-summary">

        <div>
          <strong>
            ${result.correct}
          </strong>

          <span>
            ${escapeExamHTML(
              text.correct
            )}
          </span>
        </div>

        <div>
          <strong>
            ${
              result.total -
              result.correct
            }
          </strong>

          <span>
            ${escapeExamHTML(
              text.wrong
            )}
          </span>
        </div>

        <div>
          <strong>
            ${
              Object.keys(
                examState.answers
              ).length
                ? result.total -
                  Object.keys(
                    examState.answers
                  ).length
                : result.total
            }
          </strong>

          <span>
            ${escapeExamHTML(
              text.unanswered
            )}
          </span>
        </div>

      </div>

      ${
        result.timeUp
          ? `
            <div class="exam-timeup">
              ${examIcon('clock')}
              ${escapeExamHTML(
                text.timeUp
              )}
            </div>
          `
          : ''
      }

      ${
        examState.exam?.settings
          ?.showCorrectAnswerAfterSubmit
          ? renderExamReview()
          : ''
      }

      <button
        type="button"
        class="primary-button"
        id="examRetryButton"
      >
        ${examIcon('rotate')}
        ${escapeExamHTML(
          text.retry
        )}
      </button>

    </div>
  `

  document
    .querySelector(
      '#examRetryButton'
    )
    ?.addEventListener(
      'click',
      () =>
        startExam(
          examState.exam
        )
    )
}

function renderExamReview() {
  const text =
    getExamText()

  return `
    <div class="exam-review">

      <h4>
        ${escapeExamHTML(
          text.explanation
        )}
      </h4>

      ${examState.result.details
        .map(
          (detail, index) => `
            <div
              class="exam-review-item ${
                detail.correct
                  ? 'correct'
                  : 'wrong'
              }"
            >

              <div class="exam-review-number">
                ${
                  detail.correct
                    ? examIcon(
                        'check'
                      )
                    : examIcon(
                        'x'
                      )
                }

                ${index + 1}
              </div>

              <div class="exam-review-content">

                <strong>
                  ${escapeExamHTML(
                    detail.prompt ||
                      ''
                  )}
                </strong>

                <span>
                  ${escapeExamHTML(
                    text.correctAnswer
                  )}:
                  <b>
                    ${escapeExamHTML(
                      detail.correctAnswer ||
                        ''
                    )}
                  </b>
                </span>

                ${
                  detail.userAnswer
                    ? `
                      <span>
                        ${getExamLanguage() === 'en'
                          ? 'Your answer'
                          : 'Jawaban kamu'}:
                        <b>
                          ${escapeExamHTML(
                            detail.userAnswer
                          )}
                        </b>
                      </span>
                    `
                    : ''
                }

                ${
                  detail.explanation
                    ? `
                      <p>
                        ${escapeExamHTML(
                          examLocalText(
                            detail.explanation
                          )
                        )}
                      </p>
                    `
                    : ''
                }

              </div>

            </div>
          `
        )
        .join('')}

    </div>
  `
}

function bindExamStart() {
  const button =
    document.querySelector(
      '#examStartButton'
    )

  if (!button) return

  button.addEventListener(
    'click',
    () => {
      const section =
        document.querySelector(
          '#examSection'
        )

      if (!section) return

      const week =
        Number(
          section.dataset.examWeek
        )

      const day =
        Number(
          section.dataset.examDay
        )

      if (
        !window.__soumatomeCurrentData
      ) {
        return
      }

      startExam(
        window.__soumatomeCurrentData.exam
      )
    }
  )
}

function mountExam(data) {
  const existing =
    document.querySelector(
      '#examSection'
    )

  if (existing) {
    existing.remove()
  }

  const html =
    renderExamSection(data)

  if (!html) return

  const pageRoot =
    document.querySelector(
      '#pageRoot'
    )

  if (!pageRoot) return

  pageRoot.insertAdjacentHTML(
    'beforeend',
    html
  )

  const section =
    document.querySelector(
      '#examSection'
    )

  if (section) {
    section.dataset.examWeek =
      data.week

    section.dataset.examDay =
      data.day
  }

  window.__soumatomeCurrentData =
    data

  bindExamStart()
}

function resetExamUI() {
  stopExamTimer()

  examState.active = false
  examState.exam = null
  examState.questions = []
  examState.currentQuestion = 0
  examState.answers = {}
  examState.startedAt = null
  examState.remainingSeconds = 0
  examState.submitted = false
  examState.result = null
}

export {
  mountExam,
  resetExamUI,
  renderExamSection
}