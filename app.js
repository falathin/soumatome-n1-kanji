const STORAGE_KEY = 'soumatome_n1_data'

const translations = {
  id: {
    courseProgress: 'Progress Course',
    course: 'KURSUS',
    weeks: 'Minggu',
    navigate: 'NAVIGASI',
    weekDay: 'Minggu & Hari',
    week: 'Minggu',
    day: 'Hari',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    search: 'CARI',
    searchKanji: 'Cari Kanji',
    searchPlaceholder:
      'Cari kanji, kosakata, furigana, bacaan, arti...',
    startSearch: 'Ketik untuk mencari materi yang tersedia.',
    searching: 'Mencari...',
    settings: 'PENGATURAN',
    settingsTitle: 'Pengaturan Belajar',
    studyMode: 'Mode Hafalan',
    studyModeDesc: 'Sembunyikan petunjuk sampai kamu siap.',
    music: 'Musik',
    musicDesc: 'Gunakan file lokal di assets/audio/.',
    memorized: 'Hafal',
    somewhat: 'Agak Hafal',
    notMemorized: 'Tidak Hafal',
    notStudied: 'Belum dipelajari',
    onyomi: 'Onyomi',
    kunyomi: 'Kunyomi',
    usage: 'Penggunaan',
    nuance: 'Nuansa',
    philosophy: 'Filosofi / Konsep',
    vocabulary: 'Kosakata',
    vocabularyCount: 'kosakata',
    memoryStatus: 'Status hafalan',
    studyReveal: 'Tampilkan Jawaban',
    hideAnswer: 'Sembunyikan Jawaban',
    completeDay: 'Tandai Hari Selesai',
    completed: 'Hari selesai',
    completeHint:
      'Tandai selesai setelah semua kanji hari ini sudah diberi status.',
    template: 'TEMPLATE',
    templateHint:
      'Materi hari ini belum diisi. Struktur data sudah siap digunakan.',
    weekProgress: 'Progress Mingguan',
    daysCompleted: 'hari selesai',
    kanjiProgress: 'Progress Kanji',
    bonus: 'BONUS',
    bonusLocked: 'BONUS masih terkunci',
    bonusUnlocked: 'BONUS terbuka',
    sevenDaysCompleted: '7 HARI SELESAI',
    unlockBonus: 'BONUS TERBUKA',
    lockedUntil: 'Selesaikan Hari 1 sampai Hari 7 untuk membuka bonus.',
    continueNextWeek: 'Setelah bonus, lanjut ke Minggu berikutnya.',
    home: 'Beranda',
    emptyBonus:
      'Isi bagian di bonus.js untuk menambahkan review, kuis, mini game, scene, atau dialog.',
    noReading: 'Belum ada data.',
    speak: 'Bacakan',
    searchJump: 'Buka',
    matches: 'hasil',
    sourceOnly: 'MATERI',
    theme: 'Tema',
    language: 'Bahasa',
    humanMode: 'Human Mode',
    vampireMode: 'Vampire Mode',
    systemMode: 'System Mode',
    studyOn: 'Mode hafalan aktif',
    studyOff: 'Mode hafalan mati',
    musicOn: 'Musik aktif',
    musicOff: 'Musik mati',
    noAudio:
      'Belum ada file musik lokal. Tambahkan file di assets/audio/.',
    dayNeedsStatus:
      'Beri status pada semua kanji untuk menandai hari selesai.',
    dayComplete: 'Hari ini selesai. Kerja bagus.',
    weekComplete: 'Satu minggu selesai. BONUS terbuka.',
    bonusStillLocked: 'BONUS terkunci sampai 7 hari selesai.',
    searchTip:
      'Cari kanji, kosakata, furigana, bacaan, arti, dan penjelasan.',
    ttsUnavailable:
      'Speech Synthesis tidak tersedia di browser ini.',
    kanjiCards: 'Kanji Cards',
    loading: 'Memuat materi...',
    loadingHint: 'Menyiapkan halaman belajar...',
    dataError: 'Data materi tidak dapat dimuat.',
    dataErrorHint:
      'Periksa struktur folder dan jalankan static server, misalnya',
    readNotes: 'Catatan Bacaan',
    start: 'Mulai',
    randomCard: 'Kartu acak',
    quizCorrect: 'Benar.',
    quizWrong: 'Belum tepat.',
    sectionText: 'teks',
    sectionReview: 'review',
    sectionImage: 'gambar',
    sectionScene: 'scene',
    sectionKanji: 'kanji',
    sectionVocabulary: 'kosakata',
    sectionDialogue: 'dialog',
    sectionQuiz: 'kuis',
    sectionMiniGame: 'mini game',
    brandSubtitle: 'Buku Belajar Kanji',
    footerStack: 'Vanilla HTML • CSS • JavaScript • Bootstrap Icons',
    settingsClose: 'Tutup',
    mascotAlt: 'Maskot Mitsuki Nocturne',
    mascotToast: 'Mitsuki: 一緒に頑張ろう ✦',
    vampireToast: '01:00 ✦ Jam belajar malam',
    vampireSpecial: 'Waktu khusus pukul 01:00.',
    fallbackDay: 'Hari'
  },

  en: {
    courseProgress: 'Course Progress',
    course: 'COURSE',
    weeks: 'Weeks',
    navigate: 'NAVIGATE',
    weekDay: 'Week & Day',
    week: 'Week',
    day: 'Day',
    previous: 'Previous',
    next: 'Next',
    search: 'SEARCH',
    searchKanji: 'Search Kanji',
    searchPlaceholder:
      'Search kanji, vocabulary, furigana, readings, meanings...',
    startSearch: 'Type to search the available material.',
    searching: 'Searching...',
    settings: 'SETTINGS',
    settingsTitle: 'Study Settings',
    studyMode: 'Study Mode',
    studyModeDesc: 'Hide clues until you are ready.',
    music: 'Music',
    musicDesc: 'Use local files in assets/audio/.',
    memorized: 'Memorized',
    somewhat: 'Somewhat Memorized',
    notMemorized: 'Not Memorized',
    notStudied: 'Not studied',
    onyomi: 'Onyomi',
    kunyomi: 'Kunyomi',
    usage: 'Usage',
    nuance: 'Nuance',
    philosophy: 'Memory Concept',
    vocabulary: 'Vocabulary',
    vocabularyCount: 'vocabulary items',
    memoryStatus: 'Memory status',
    studyReveal: 'Show Answer',
    hideAnswer: 'Hide Answer',
    completeDay: 'Mark Day Complete',
    completed: 'Day completed',
    completeHint:
      'Complete the day after every kanji has a memory status.',
    template: 'TEMPLATE',
    templateHint:
      'No lesson material has been added yet. The data structure is ready to use.',
    weekProgress: 'Weekly Progress',
    daysCompleted: 'days completed',
    kanjiProgress: 'Kanji Progress',
    bonus: 'BONUS',
    bonusLocked: 'BONUS is locked',
    bonusUnlocked: 'BONUS is unlocked',
    sevenDaysCompleted: '7 DAYS COMPLETED',
    unlockBonus: 'BONUS UNLOCKED',
    lockedUntil:
      'Complete Day 1 through Day 7 to unlock the bonus.',
    continueNextWeek:
      'After the bonus, continue to the next week.',
    home: 'Home',
    emptyBonus:
      'Fill sections in bonus.js to add reviews, quizzes, mini games, scenes, or dialogue.',
    noReading: 'No data yet.',
    speak: 'Speak',
    searchJump: 'Open',
    matches: 'results',
    sourceOnly: 'MATERIAL',
    theme: 'Theme',
    language: 'Language',
    humanMode: 'Human Mode',
    vampireMode: 'Vampire Mode',
    systemMode: 'System Mode',
    studyOn: 'Study mode active',
    studyOff: 'Study mode off',
    musicOn: 'Music on',
    musicOff: 'Music off',
    noAudio:
      'No local music file yet. Add a file under assets/audio/.',
    dayNeedsStatus:
      'Give every kanji a status before completing this day.',
    dayComplete: 'Today is complete. Nice work.',
    weekComplete:
      'A week is complete. BONUS is unlocked.',
    bonusStillLocked:
      'BONUS stays locked until all 7 days are complete.',
    searchTip:
      'Search kanji, vocabulary, furigana, readings, meanings, and explanations.',
    ttsUnavailable:
      'Speech Synthesis is not available in this browser.',
    kanjiCards: 'Kanji Cards',
    loading: 'Loading lesson...',
    loadingHint: 'Preparing your study page...',
    dataError: 'Lesson data could not be loaded.',
    dataErrorHint:
      'Check the folder structure and run a static server, for example',
    readNotes: 'Reading Notes',
    start: 'Start',
    randomCard: 'Random card',
    quizCorrect: 'Correct.',
    quizWrong: 'Not quite.',
    sectionText: 'text',
    sectionReview: 'review',
    sectionImage: 'image',
    sectionScene: 'scene',
    sectionKanji: 'kanji',
    sectionVocabulary: 'vocabulary',
    sectionDialogue: 'dialogue',
    sectionQuiz: 'quiz',
    sectionMiniGame: 'mini game',
    brandSubtitle: 'Kanji Study Notebook',
    footerStack:
      'Vanilla HTML • CSS • JavaScript • Bootstrap Icons',
    settingsClose: 'Close',
    mascotAlt: 'Mitsuki Nocturne mascot',
    mascotToast: 'Mitsuki: 一緒に頑張ろう ✦',
    vampireToast: '01:00 ✦ Late-night study hour',
    vampireSpecial: 'A special moment at 01:00.',
    fallbackDay: 'Day'
  }
}

const curriculum = {
  1: {
    title: {
      id: '第1週 同じ部分・同じ音読みをもつ漢字を覚えよう① 11',
      en: 'Week 1 — Learn kanji with the same component and on-yomi ① 11'
    },
    days: {
      1: {
        id: '五・語・悟',
        en: '五・語・悟'
      },
      2: {
        id: '及・級・吸',
        en: '及・級・吸'
      },
      3: {
        id: '講・構・購',
        en: '講・構・購'
      },
      4: {
        id: '長・張・帳',
        en: '長・張・帳'
      },
      5: {
        id: '麻・磨・摩・魔',
        en: '麻・磨・摩・魔'
      },
      6: {
        id: '壮・荘',
        en: '壮・荘'
      },
      7: {
        id: '実戦問題［コラム］サイン①',
        en: 'Practice Questions [Column] Sign ①'
      }
    }
  },

  2: {
    title: {
      id: '第2週 同じ部分・同じ音読みをもつ漢字を覚えよう② 27',
      en: 'Week 2 — Learn kanji with the same component and on-yomi ② 27'
    },
    days: {
      1: {
        id: '放・訪・房・防',
        en: '放・訪・房・防'
      },
      2: {
        id: '違・偉・緯・衛',
        en: '違・偉・緯・衛'
      },
      3: {
        id: '凍・棟・練・陳',
        en: '凍・棟・練・陳'
      },
      4: {
        id: '欲・浴・裕',
        en: '欲・浴・裕'
      },
      5: {
        id: '生・性・姓',
        en: '生・性・姓'
      },
      6: {
        id: '由・油・抽',
        en: '由・油・抽'
      },
      7: {
        id: '実戦問題［コラム］サイン②',
        en: 'Practice Questions [Column] Sign ②'
      }
    }
  },

  3: {
    title: {
      id: '第3週 訓読みを覚えよう 43',
      en: 'Week 3 — Learn kun-yomi 43'
    },
    days: {
      1: {
        id: '生かす・生やす',
        en: '生かす・生やす'
      },
      2: {
        id: '平たい・平らかな',
        en: '平たい・平らかな'
      },
      3: {
        id: '憎い・幼い・快い',
        en: '憎い・幼い・快い'
      },
      4: {
        id: '伴う・狂う・誓う',
        en: '伴う・狂う・誓う'
      },
      5: {
        id: '縛る・絞る・殴る',
        en: '縛る・絞る・殴る'
      },
      6: {
        id: '用いる・率いる・侮る',
        en: '用いる・率いる・侮る'
      },
      7: {
        id: '実戦問題［コラム］植物と虫',
        en: 'Practice Questions [Column] Plants and Insects'
      }
    }
  },

  4: {
    title: {
      id: '第4週 難しい読みを覚えよう 59',
      en: 'Week 4 — Learn difficult readings 59'
    },
    days: {
      1: {
        id: '相互・首相・相性',
        en: '相互・首相・相性'
      },
      2: {
        id: '情緒・仮病・天然',
        en: '情緒・仮病・天然'
      },
      3: {
        id: '浜辺・雨具・家主',
        en: '浜辺・雨具・家主'
      },
      4: {
        id: '田舎・景色・迷子',
        en: '田舎・景色・迷子'
      },
      5: {
        id: '興味・興奮',
        en: '興味・興奮'
      },
      6: {
        id: '大家・大家',
        en: '大家・大家'
      },
      7: {
        id: '実戦問題［コラム］動物',
        en: 'Practice Questions [Column] Animals'
      }
    }
  },

  5: {
    title: {
      id: '第5週 語彙で覚えよう① 75',
      en: 'Week 5 — Learn through vocabulary ① 75'
    },
    days: {
      1: {
        id: '酢・巣',
        en: '酢・巣'
      },
      2: {
        id: '絶える・耐える・堪える',
        en: '絶える・耐える・堪える'
      },
      3: {
        id: '攻める・責める',
        en: '攻める・責める'
      },
      4: {
        id: '招待・正体',
        en: '招待・正体'
      },
      5: {
        id: '普通・不通',
        en: '普通・不通'
      },
      6: {
        id: '注射・駐車',
        en: '注射・駐車'
      },
      7: {
        id: '実戦問題［コラム］和風',
        en: 'Practice Questions [Column] Japanese Style'
      }
    }
  },

  6: {
    title: {
      id: '第6週 語彙で覚えよう② 91',
      en: 'Week 6 — Learn through vocabulary ② 91'
    },
    days: {
      1: {
        id: '弓・矢・盾',
        en: '弓・矢・盾'
      },
      2: {
        id: '返済・返却・返還',
        en: '返済・返却・返還'
      },
      3: {
        id: '分解・分析・分類・分配',
        en: '分解・分析・分類・分配'
      },
      4: {
        id: '融通が利く・便宜を図る',
        en: '融通が利く・便宜を図る'
      },
      5: {
        id: '天国↔地獄',
        en: '天国↔地獄'
      },
      6: {
        id: '単刀直入・一言一句',
        en: '単刀直入・一言一句'
      },
      7: {
        id: '実戦問題［コラム］ことわざ',
        en: 'Practice Questions [Column] Proverbs'
      }
    }
  },

  7: {
    title: {
      id: '第7週 いろいろな覚え方をしよう 107',
      en: 'Week 7 — Try different ways to memorize 107'
    },
    days: {
      1: {
        id: '困る・原因・囚人',
        en: '困る・原因・囚人'
      },
      2: {
        id: '隠れる・穏やか',
        en: '隠れる・穏やか'
      },
      3: {
        id: '再検査・再編成',
        en: '再検査・再編成'
      },
      4: {
        id: '選挙権・著作権',
        en: '選挙権・著作権'
      },
      5: {
        id: '1羽・1個・1軒',
        en: '1羽・1個・1軒'
      },
      6: {
        id: '再会する＝再び会う',
        en: '再会する＝再び会う'
      },
      7: {
        id: '実戦問題［コラム］物語',
        en: 'Practice Questions [Column] Story'
      }
    }
  },

  8: {
    title: {
      id: '第8週 新聞を読もう 123',
      en: 'Week 8 — Let’s read newspapers 123'
    },
    days: {
      1: {
        id: '政治について',
        en: '政治について'
      },
      2: {
        id: '国際問題について',
        en: '国際問題について'
      },
      3: {
        id: '経済・産業について',
        en: '経済・産業について'
      },
      4: {
        id: '医療・福祉・健康について',
        en: '医療・福祉・健康について'
      },
      5: {
        id: '事件・事故について',
        en: '事件・事故について'
      },
      6: {
        id: '社会について',
        en: '社会について'
      },
      7: {
        id: '実戦問題［コラム］日本の地理',
        en: 'Practice Questions [Column] Geography of Japan'
      }
    }
  }
}

const iconMap = {
  search: 'search',
  music: 'music-note-beamed',
  study: 'mortarboard-fill',
  arrowLeft: 'arrow-left',
  arrowRight: 'arrow-right',
  close: 'x-lg',
  lock: 'lock-fill',
  check: 'check2',
  volume: 'volume-up-fill',
  settings: 'gear-fill',
  sparkles: 'stars',
  play: 'play-fill',
  dice: 'dice-5-fill',
  trophy: 'trophy-fill',
  bookmark: 'bookmark-star-fill',
  moon: 'moon-stars-fill'
}

const sectionTypeMap = {
  text: 'sectionText',
  review: 'sectionReview',
  image: 'sectionImage',
  scene: 'sectionScene',
  kanji: 'sectionKanji',
  vocabulary: 'sectionVocabulary',
  dialogue: 'sectionDialogue',
  quiz: 'sectionQuiz',
  'mini-game': 'sectionMiniGame'
}

const state = {
  currentWeek: 1,
  currentDay: 1,
  currentView: 'day',
  currentData: null,
  currentBonus: null,
  searchCache: null,
  toastTimer: null,
  speech: null,
  easterEgg: false,
  storage: null
}

function $(selector, root = document) {
  return root.querySelector(selector)
}

function $$(selector, root = document) {
  return [...root.querySelectorAll(selector)]
}

function t(key) {
  return (
    translations[state.storage?.getLanguage?.() || 'id'][key] ||
    key
  )
}

function escapeHTML(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function icon(name, title = '') {
  const cls = iconMap[name] || name

  return `<i class="bi bi-${cls}"${
    title
      ? ` aria-label="${escapeHTML(title)}" role="img"`
      : ' aria-hidden="true"'
  }></i>`
}

function localPair(pair) {
  if (typeof pair === 'string') {
    return pair
  }

  const lang = state.storage.getLanguage()

  return pair?.[lang] || ''
}

function localField(value) {
  if (typeof value === 'string') {
    return value
  }

  const lang = state.storage.getLanguage()

  return value?.[lang] || ''
}

function getWeekDayKey(week, day) {
  return `week${week}-day${day}`
}

function getCurriculum(week, day) {
  const weekData = curriculum[week]

  if (!weekData) {
    return {
      weekTitle: {
        id: `${t('week')} ${week}`,
        en: `Week ${week}`
      },
      dayTitle: {
        id: `${t('fallbackDay')} ${day}`,
        en: `Day ${day}`
      }
    }
  }

  return {
    weekTitle: weekData.title,
    dayTitle:
      weekData.days?.[day] || {
        id: `${t('fallbackDay')} ${day}`,
        en: `Day ${day}`
      }
  }
}

function getWeekTitle(week) {
  return localPair(
    curriculum[week]?.title
  ) || `${t('week')} ${week}`
}

function getDayTitle(data) {
  const curriculumData = getCurriculum(
    data?.week,
    data?.day
  )

  return (
    localPair(curriculumData.dayTitle) ||
    localField(data?.title) ||
    `${t('fallbackDay')} ${data?.day || ''}`
  )
}

function getSectionTypeLabel(type) {
  const key = sectionTypeMap[type]
  return key ? t(key) : type
}

function showToast(message) {
  const toast = $('#toast')

  if (!toast) return

  clearTimeout(state.toastTimer)

  toast.textContent = message
  toast.classList.add('show')

  const liveRegion = $('#liveRegion')

  if (liveRegion) {
    liveRegion.textContent = message
  }

  state.toastTimer = setTimeout(
    () => toast.classList.remove('show'),
    2600
  )
}

const StorageManager = {
  defaults: {
    settings: {
      language: 'id',
      theme: 'human',
      musicEnabled: false,
      musicVolume: 0.5,
      studyMode: false
    },
    progress: {},
    completedDays: {},
    completedWeeks: {}
  },

  data: null,

  init() {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || 'null'
      )

      this.data = this.merge(
        this.defaults,
        saved
      )
    } catch {
      this.data = structuredClone(
        this.defaults
      )
    }

    this.persist()

    return this
  },

  merge(base, incoming) {
    const source =
      incoming &&
      typeof incoming === 'object'
        ? incoming
        : {}

    return {
      settings: {
        ...base.settings,
        ...(source.settings || {})
      },
      progress: {
        ...(source.progress || {})
      },
      completedDays: {
        ...(source.completedDays || {})
      },
      completedWeeks: {
        ...(source.completedWeeks || {})
      }
    }
  },

  persist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(this.data)
    )
  },

  getLanguage() {
    return this.data.settings.language
  },

  setLanguage(language) {
    this.data.settings.language =
      language === 'en' ? 'en' : 'id'

    this.persist()
  },

  getTheme() {
    return this.data.settings.theme
  },

  setTheme(theme) {
    this.data.settings.theme = theme
    this.persist()
  },

  getMusic() {
    return !!this.data.settings.musicEnabled
  },

  setMusic(enabled) {
    this.data.settings.musicEnabled =
      !!enabled

    this.persist()
  },

  setMusicVolume(volume) {
    this.data.settings.musicVolume =
      Math.max(
        0,
        Math.min(1, Number(volume))
      )

    this.persist()
  },

  getStudyMode() {
    return !!this.data.settings.studyMode
  },

  setStudyMode(enabled) {
    this.data.settings.studyMode =
      !!enabled

    this.persist()
  },

  setKanjiStatus(id, status) {
    if (!status) {
      delete this.data.progress[id]
    } else {
      this.data.progress[id] = {
        status,
        updatedAt: Date.now()
      }
    }

    this.persist()
  },

  getKanjiStatus(id) {
    return (
      this.data.progress[id]?.status ||
      null
    )
  },

  setDayCompleted(
    week,
    day,
    value = true
  ) {
    const key = getWeekDayKey(
      week,
      day
    )

    if (value) {
      this.data.completedDays[key] =
        true
    } else {
      delete this.data.completedDays[
        key
      ]
    }

    this.persist()
  },

  isDayCompleted(week, day) {
    return !!this.data.completedDays[
      getWeekDayKey(week, day)
    ]
  },

  setWeekCompleted(
    week,
    value = true
  ) {
    const key = `week${week}`

    if (value) {
      this.data.completedWeeks[key] =
        true
    } else {
      delete this.data.completedWeeks[
        key
      ]
    }

    this.persist()
  },

  isWeekCompleted(week) {
    return !!this.data.completedWeeks[
      `week${week}`
    ]
  }
}

state.storage = StorageManager.init()

function isBonusUnlocked(week) {
  return Array.from(
    { length: 7 },
    (_, i) => i + 1
  ).every(day =>
    StorageManager.isDayCompleted(
      week,
      day
    )
  )
}

function getWeekCompletionCount(week) {
  return Array.from(
    { length: 7 },
    (_, i) => i + 1
  ).filter(day =>
    StorageManager.isDayCompleted(
      week,
      day
    )
  ).length
}

function getCourseCompletionCount() {
  let count = 0

  for (let week = 1; week <= 8; week++) {
    count += getWeekCompletionCount(
      week
    )
  }

  return count
}

function setStaticIcons() {
  $$('.svg-icon').forEach(el => {
    el.innerHTML = icon(
      el.dataset.icon
    )
  })
}

function setupNavigation() {
  $('#prevButton')?.addEventListener(
    'click',
    () => navigateRelative(-1)
  )

  $('#nextButton')?.addEventListener(
    'click',
    () => navigateRelative(1)
  )

  $('#homeLink')?.addEventListener(
    'click',
    event => {
      event.preventDefault()
      loadDay(1, 1)
    }
  )

  $('#weekSelect')?.addEventListener(
    'change',
    event => {
      const week = Number(
        event.target.value
      )

      state.currentWeek = week

      populateDaySelector()

      loadDay(week, 1)
    }
  )

  $('#daySelect')?.addEventListener(
    'change',
    event => {
      const value = event.target.value

      if (value === 'bonus') {
        loadBonus(state.currentWeek)
      } else {
        loadDay(
          state.currentWeek,
          Number(value)
        )
      }
    }
  )
}

function setupWeekSelector() {
  const select =
    $('#weekSelect')

  if (!select) return

  select.innerHTML = Array.from(
    { length: 8 },
    (_, i) =>
      `<option value="${i + 1}">${escapeHTML(
        t('week')
      )} ${i + 1}</option>`
  ).join('')

  select.value = String(
    state.currentWeek
  )
}

function populateDaySelector() {
  const daySelect =
    $('#daySelect')

  if (!daySelect) return

  const ready =
    isBonusUnlocked(
      state.currentWeek
    )

  daySelect.innerHTML = [
    ...Array.from(
      { length: 7 },
      (_, i) =>
        `<option value="${i + 1}">${escapeHTML(
          t('day')
        )} ${i + 1}</option>`
    ),
    `<option value="bonus" ${
      ready ? '' : 'disabled'
    }>${escapeHTML(
      t('bonus')
    )}${
      ready
        ? ''
        : ` • ${escapeHTML(
            t('bonusLocked')
          )}`
    }</option>`
  ].join('')

  daySelect.value =
    state.currentView === 'bonus' &&
    ready
      ? 'bonus'
      : String(state.currentDay)
}

function navigateRelative(delta) {
  if (state.currentView === 'bonus') {
    if (
      delta > 0 &&
      state.currentWeek < 8
    ) {
      loadDay(
        state.currentWeek + 1,
        1
      )
    } else if (delta < 0) {
      loadDay(
        state.currentWeek,
        7
      )
    } else {
      showToast(
        t('continueNextWeek')
      )
    }

    return
  }

  if (delta > 0) {
    if (state.currentDay < 7) {
      loadDay(
        state.currentWeek,
        state.currentDay + 1
      )
    } else if (
      isBonusUnlocked(
        state.currentWeek
      )
    ) {
      loadBonus(
        state.currentWeek
      )
    } else {
      showToast(
        t('bonusStillLocked')
      )
    }
  } else {
    if (state.currentDay > 1) {
      loadDay(
        state.currentWeek,
        state.currentDay - 1
      )
    } else if (
      state.currentWeek > 1
    ) {
      loadDay(
        state.currentWeek - 1,
        7
      )
    } else {
      showToast(t('home'))
    }
  }
}

async function importDay(week, day) {
  const module = await import(
    `./js/minggu${week}/hari${day}.js?cache=${Date.now()}`
  )

  return module.default
}

async function importBonus(week) {
  const module = await import(
    `./js/minggu${week}/bonus.js?cache=${Date.now()}`
  )

  return module.default
}

async function loadWeek(week) {
  state.currentWeek = Math.max(
    1,
    Math.min(8, Number(week) || 1)
  )

  if ($('#weekSelect')) {
    $('#weekSelect').value =
      String(state.currentWeek)
  }

  renderWeekMap()
  populateDaySelector()

  return state.currentWeek
}

async function loadDay(
  week,
  day
) {
  state.currentView = 'day'
  state.currentWeek = Number(week)
  state.currentDay = Number(day)
  state.currentData = null

  await loadWeek(
    state.currentWeek
  )

  state.currentDay = Math.max(
    1,
    Math.min(
      7,
      state.currentDay
    )
  )

  populateDaySelector()
  showLoading()

  try {
    state.currentData =
      await importDay(
        state.currentWeek,
        state.currentDay
      )

    renderDay(
      state.currentData
    )

    updateMascot()
  } catch (error) {
    console.error(error)
    renderLoadError()
  }

  updateNavigationUI()
  scrollToTopIfRouteChange()
}

async function loadBonus(week) {
  state.currentView = 'bonus'
  state.currentWeek = Number(week)
  state.currentBonus = null

  await loadWeek(
    state.currentWeek
  )

  populateDaySelector()
  showLoading()

  try {
    state.currentBonus =
      await importBonus(
        state.currentWeek
      )

    renderBonus(
      state.currentBonus
    )

    if ($('#daySelect')) {
      $('#daySelect').value =
        'bonus'
    }

    updateMascot()
  } catch (error) {
    console.error(error)
    renderLoadError()
  }

  updateNavigationUI()
  scrollToTopIfRouteChange()
}

function scrollToTopIfRouteChange() {
  window.scrollTo({
    top: 0,
    behavior:
      window.matchMedia?.(
        '(prefers-reduced-motion: reduce)'
      )?.matches
        ? 'auto'
        : 'smooth'
  })
}

function showLoading() {
  $('#pageRoot').innerHTML = `
    <div class="empty-template loading-card">
      <div class="bonus-lock" style="margin:0 auto;">
        ${icon('sparkles')}
      </div>

      <h2 style="margin-top:16px;">
        ${escapeHTML(t('loading'))}
      </h2>

      <p>
        ${escapeHTML(t('loadingHint'))}
      </p>

      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `
}

function renderLoadError() {
  $('#pageRoot').innerHTML = `
    <div class="empty-template">
      <div class="bonus-lock" style="margin:0 auto;">
        ${icon('study')}
      </div>

      <h2 style="margin-top:16px;">
        ${escapeHTML(t('dataError'))}
      </h2>

      <p>
        ${escapeHTML(t('dataErrorHint'))}
        <code>python -m http.server 8080</code>.
      </p>
    </div>
  `
}

function renderWeekMap() {
  const target =
    $('#weekMap')

  if (!target) return

  target.innerHTML = Array.from(
    { length: 8 },
    (_, i) => {
      const week = i + 1
      const count =
        getWeekCompletionCount(
          week
        )
      const complete =
        count === 7
      const active =
        state.currentWeek ===
        week

      return `
        <button
          class="week-pill ${
            active ? 'active' : ''
          } ${
        complete ? 'complete' : ''
      }"
          type="button"
          data-week="${week}"
        >
          <span class="week-num">
            ${String(week).padStart(
              2,
              '0'
            )}
          </span>

          <span>
            <strong>
              ${escapeHTML(
                t('week')
              )} ${week}
            </strong>

            <small>
              ${count}/7
              ${escapeHTML(
                t('daysCompleted')
              )}
            </small>
          </span>

          <span
            class="week-check"
            aria-hidden="true"
          >
            ${
              complete
                ? icon('check')
                : ''
            }
          </span>
        </button>
      `
    }
  ).join('')

  $$('.week-pill', target).forEach(
    button =>
      button.addEventListener(
        'click',
        () =>
          loadDay(
            Number(
              button.dataset.week
            ),
            1
          )
      )
  )
}

function getHeroWallpaper(data) {
  if (
    !data?.source?.image
  ) {
    return ''
  }

  return escapeHTML(
    data.source.image
  )
}

function renderDay(data) {
  const week = data.week
  const day = data.day
  const isEmpty =
    !data.kanji?.length
  const counts =
    getDayKanjiCounts(data)

  const weekDone =
    isBonusUnlocked(week)

  const dayTitle =
    getDayTitle(data)

  const weekTitle =
    getWeekTitle(week)

  const wallpaper =
    getHeroWallpaper(data)

  const tabs =
    Array.from(
      { length: 7 },
      (_, i) => {
        const d = i + 1

        return `
          <button
            type="button"
            class="notebook-tab ${
              day === d
                ? 'active'
                : ''
            }"
            data-route-day="${d}"
          >
            ${escapeHTML(
              t('day')
            )} ${d}
          </button>
        `
      }
    ).join('') +
    `
      <button
        type="button"
        class="notebook-tab bonus"
        data-route-bonus="1"
      >
        ${escapeHTML(
          t('bonus')
        )}
        ${
          weekDone
            ? icon('sparkles')
            : icon('lock')
        }
      </button>
    `

  $('#pageRoot').innerHTML = `
    <section
      class="hero"
      ${
        wallpaper
          ? `style="--hero-wallpaper: url('${wallpaper}')"`
          : ''
      }
    >
      <div class="hero-copy">

        <div class="hero-kicker">
          <span class="hero-kicker-line"></span>

          <span>
            ${escapeHTML(
              t('week')
            )}
            ${String(week).padStart(
              2,
              '0'
            )}

            <span class="hero-kicker-dot">
              •
            </span>

            ${escapeHTML(
              t('day')
            )}
            ${String(day).padStart(
              2,
              '0'
            )}
          </span>
        </div>

        <div class="hero-title-wrap">
          <span class="hero-day-number">
            ${String(day).padStart(
              2,
              '0'
            )}
          </span>

          <div class="hero-title-content">
            <span class="hero-week-title">
              ${escapeHTML(
                weekTitle
              )}
            </span>

            <h1>
              ${escapeHTML(
                dayTitle
              )}
            </h1>

            ${
              localField(
                data.subtitle
              )
                ? `
                  <p class="hero-subtitle">
                    ${escapeHTML(
                      localField(
                        data.subtitle
                      )
                    )}
                  </p>
                `
                : ''
            }
          </div>
        </div>
      </div>
    </section>

    <div class="day-strip">
      <div class="notebook-tabs">
        ${tabs}
      </div>

      <div></div>

      <div class="day-meta">
        <strong>
          ${
            counts.total
              ? `${counts.memorized} / ${counts.total}`
              : '0'
          }
          ${escapeHTML(
            t('memorized')
          )}
        </strong>

        <span>
          ${escapeHTML(
            t('weekProgress')
          )}:
          ${getWeekCompletionCount(
            week
          )} / 7
        </span>
      </div>
    </div>

    ${renderProgressPanel(data)}

    ${
      isEmpty
        ? renderEmptyTemplate(
            data
          )
        : renderKanjiSection(
            data
          )
    }

    ${
      !isEmpty
        ? renderCompletionControl(
            data,
            counts
          )
        : ''
    }
  `

  $$('.notebook-tab[data-route-day]').forEach(
    el =>
      el.addEventListener(
        'click',
        () =>
          loadDay(
            week,
            Number(
              el.dataset.routeDay
            )
          )
      )
  )

  $(
    '.notebook-tab[data-route-bonus]'
  )?.addEventListener(
    'click',
    () =>
      weekDone
        ? loadBonus(week)
        : showToast(
            t('bonusStillLocked')
          )
  )

  bindDayInteractions()
}

function bindDayInteractions() {
  $$('.status-button').forEach(
    button =>
      button.addEventListener(
        'click',
        () => {
          StorageManager.setKanjiStatus(
            button.dataset
              .kanjiId,
            button.dataset
              .status
          )

          rerenderPreservingScroll(
            button.closest(
              '.kanji-card'
            )?.id
          )

          showToast(
            button.dataset.status ===
              'memorized'
              ? t('memorized')
              : t(
                  'memoryStatus'
                )
          )
        }
      )
  )

  $$('[data-study-reveal]').forEach(
    button =>
      button.addEventListener(
        'click',
        () => {
          const card =
            button.closest(
              '.kanji-card'
            )

          card?.classList.toggle(
            'study-revealed'
          )

          const visible =
            card?.classList.contains(
              'study-revealed'
            )

          button.innerHTML = `
            ${icon('sparkles')}
            ${escapeHTML(
              visible
                ? t('hideAnswer')
                : t(
                    'studyReveal'
                  )
            )}
          `
        }
      )
  )

  $$('.audio-button').forEach(
    button =>
      button.addEventListener(
        'click',
        () =>
          speakText(
            button.dataset.text,
            button
          )
      )
  )

  $('.complete-button')?.addEventListener(
    'click',
    () =>
      markCurrentDayComplete(
        state.currentData
      )
  )

  bindCardTilt()
}

function renderProgressPanel(data) {
  const counts =
    getDayKanjiCounts(data)

  const percent = counts.total
    ? Math.round(
        (counts.memorized /
          counts.total) *
          100
      )
    : 0

  return `
    <section
      class="progress-panel"
      aria-label="${escapeHTML(
        t('kanjiProgress')
      )}"
    >
      <div class="progress-header">
        <div>
          <div class="eyebrow">
            ${escapeHTML(
              t('kanjiProgress')
            )}
          </div>

          <div class="progress-title">
            ${escapeHTML(
              getWeekTitle(
                data.week
              )
            )}
          </div>
        </div>

        <div class="progress-numbers">
          <span class="progress-chip">
            ${counts.memorized}
            ${escapeHTML(
              t('memorized')
            )}
          </span>

          <span class="progress-chip">
            ${counts.somewhat}
            ${escapeHTML(
              t('somewhat')
            )}
          </span>

          <span class="progress-chip">
            ${counts.notMemorized}
            ${escapeHTML(
              t('notMemorized')
            )}
          </span>

          <span class="progress-chip">
            ${counts.notStudied}
            ${escapeHTML(
              t('notStudied')
            )}
          </span>
        </div>
      </div>

      <div class="progress-bar">
        <div
          class="progress-fill"
          style="width:${percent}%"
        ></div>
      </div>

      <div class="progress-foot">
        <span>
          ${counts.memorized} /
          ${counts.total || 0}
        </span>

        <strong>${percent}%</strong>
      </div>
    </section>
  `
}

function getDayKanjiCounts(data) {
  const kanji =
    data?.kanji || []

  const statuses =
    kanji.map(k =>
      StorageManager.getKanjiStatus(
        k.id
      )
    )

  return {
    total: kanji.length,
    memorized: statuses.filter(
      x => x === 'memorized'
    ).length,
    somewhat: statuses.filter(
      x => x === 'somewhat'
    ).length,
    notMemorized: statuses.filter(
      x => x === 'not-memorized'
    ).length,
    notStudied:
      statuses.filter(
        x => !x
      ).length
  }
}

function renderKanjiSection(
  data
) {
  return `
    <div class="section-title">
      <div>
        <span class="eyebrow">
          ${escapeHTML(
            getWeekTitle(
              data.week
            )
          )}
        </span>

        <h2>
          ${escapeHTML(
            t('kanjiCards')
          )}
        </h2>
      </div>

      <span class="scribble">
        覚えよう ✦
      </span>
    </div>

    <div class="kanji-grid">
      ${(data.kanji || [])
        .map(
          (kanji, index) =>
            renderKanjiCard(
              kanji,
              index
            )
        )
        .join('')}
    </div>
  `
}

function renderKanjiCard(
  kanji,
  index
) {
  const status =
    StorageManager.getKanjiStatus(
      kanji.id
    )

  const vocabulary =
    kanji.vocabulary || []

  const tilt =
    index % 3 === 0
      ? '-1.2deg'
      : index % 3 === 1
      ? '0.7deg'
      : '-0.4deg'

  const readingBlock = (
    label,
    items
  ) => `
    <div class="reading-block">
      <div class="reading-label">
        <span>
          ${escapeHTML(label)}
        </span>

        <span>
          ${items.length || ''}
        </span>
      </div>

      ${
        items.length
          ? items
              .map(
                item => `
                  <div class="reading-item">
                    <span
                      class="reading-word tts-target"
                      data-tts-text="${escapeHTML(
                        item.reading
                      )}"
                    >
                      ${escapeHTML(
                        item.text
                      )}
                    </span>

                    <button
                      type="button"
                      class="audio-button"
                      data-text="${escapeHTML(
                        item.reading
                      )}"
                      aria-label="${escapeHTML(
                        t('speak')
                      )}"
                      title="${escapeHTML(
                        t('speak')
                      )}"
                    >
                      ${icon(
                        'volume'
                      )}
                    </button>
                  </div>
                `
              )
              .join('')
          : `
              <div class="reading-empty">
                ${escapeHTML(
                  t('noReading')
                )}
              </div>
            `
      }
    </div>
  `

  return `
    <article
      class="kanji-card"
      id="${escapeHTML(
        kanji.id
      )}"
      style="
        --i:${index * 38}ms;
        --tilt:${tilt};
      "
    >
      <button
        class="study-reveal primary-button"
        type="button"
        data-study-reveal="${escapeHTML(
          kanji.id
        )}"
      >
        ${icon('sparkles')}
        ${escapeHTML(
          t('studyReveal')
        )}
      </button>

      <div class="kanji-top">
        <div
          class="kanji-character"
          aria-label="Kanji ${escapeHTML(
            kanji.character
          )}"
        >
          ${escapeHTML(
            kanji.character
          )}
        </div>

        <div class="kanji-info">
          <span class="kanji-label">
            <i class="bi bi-bookmark-star-fill"></i>
            KANJI
            ${String(
              index + 1
            ).padStart(2, '0')}
          </span>

          <h3>
            ${escapeHTML(
              kanji.character
            )}
          </h3>

          <div class="meaning">
            ${escapeHTML(
              localPair(
                kanji.meaning
              )
            )}
          </div>
        </div>
      </div>

      ${
        kanji.readingNotes?.length
          ? `
            <div class="reading-notes">
              <span class="eyebrow">
                ${escapeHTML(
                  t('readNotes')
                )}
              </span>

              ${kanji.readingNotes
                .map(
                  note => `
                    <p>
                      ${escapeHTML(
                        localPair(
                          note
                        )
                      )}
                    </p>
                  `
                )
                .join('')}
            </div>
          `
          : ''
      }

      <div class="reading-grid">
        ${readingBlock(
          t('onyomi'),
          kanji.onyomi || []
        )}

        ${readingBlock(
          t('kunyomi'),
          kanji.kunyomi || []
        )}
      </div>

      <div class="note-grid">
        ${renderInfoBox(
          t('usage'),
          kanji.usage
        )}

        ${renderInfoBox(
          t('nuance'),
          kanji.nuance
        )}

        ${renderInfoBox(
          t('philosophy'),
          kanji.philosophy
        )}
      </div>

      <div class="vocab-wrap">
        <div class="vocab-title-row">
          <h4>
            ${escapeHTML(
              t('vocabulary')
            )}
          </h4>

          <span class="vocab-count">
            ${icon('bookmark')}
            ${vocabulary.length}
            ${escapeHTML(
              t(
                'vocabularyCount'
              )
            )}
          </span>
        </div>

        <div class="vocab-grid">
          ${
            vocabulary.length
              ? vocabulary
                  .map(
                    renderVocabulary
                  )
                  .join('')
              : `
                  <div class="reading-empty">
                    ${escapeHTML(
                      t(
                        'noReading'
                      )
                    )}
                  </div>
                `
          }
        </div>
      </div>

      <div class="card-footer">
        <div class="status-block">
          <div class="status-label">
            ${escapeHTML(
              t(
                'memoryStatus'
              )
            )}
          </div>

          <div class="status-row">
            ${renderStatusButton(
              kanji.id,
              'memorized',
              t('memorized'),
              status
            )}

            ${renderStatusButton(
              kanji.id,
              'somewhat',
              t('somewhat'),
              status
            )}

            ${renderStatusButton(
              kanji.id,
              'not-memorized',
              t(
                'notMemorized'
              ),
              status
            )}
          </div>
        </div>
      </div>
    </article>
  `
}

function renderInfoBox(
  title,
  pair
) {
  if (!pair) return ''

  const text =
    localPair(pair)

  if (!text) return ''

  return `
    <div class="info-box">
      <h4>
        ${escapeHTML(title)}
      </h4>

      <p>
        ${escapeHTML(text)}
      </p>
    </div>
  `
}

function renderVocabulary(
  vocab
) {
  const meaning =
    localPair(
      vocab.meaning
    )

  return `
    <div class="vocab-item">
      <div class="vocab-main">
        <ruby>
          ${escapeHTML(
            vocab.word || ''
          )}

          <rt>
            ${escapeHTML(
              vocab.reading || ''
            )}
          </rt>
        </ruby>

        <button
          type="button"
          class="audio-button"
          data-text="${escapeHTML(
            vocab.reading || ''
          )}"
          aria-label="${escapeHTML(
            t('speak')
          )}"
          title="${escapeHTML(
            t('speak')
          )}"
        >
          ${icon('volume')}
        </button>
      </div>

      <div class="vocab-meaning">
        ${escapeHTML(meaning)}
      </div>
    </div>
  `
}

function renderStatusButton(
  id,
  status,
  label,
  active
) {
  const cls =
    status === 'somewhat'
      ? 'status-some'
      : status ===
        'not-memorized'
      ? 'status-no'
      : ''

  return `
    <button
      class="status-button ${cls} ${
    active === status
      ? 'active'
      : ''
  }"
      type="button"
      data-kanji-id="${escapeHTML(
        id
      )}"
      data-status="${status}"
    >
      ${escapeHTML(label)}
    </button>
  `
}

function renderCompletionControl(
  data,
  counts
) {
  const complete =
    StorageManager.isDayCompleted(
      data.week,
      data.day
    )

  const canComplete =
    counts.total > 0 &&
    counts.notStudied === 0

  return `
    <section class="complete-row">
      <div class="complete-copy">
        <h3>
          ${icon(
            complete
              ? 'check'
              : 'trophy'
          )}

          ${escapeHTML(
            complete
              ? t('completed')
              : t(
                  'completeDay'
                )
          )}
        </h3>

        <p>
          ${escapeHTML(
            complete
              ? t('dayComplete')
              : canComplete
              ? t(
                  'completeHint'
                )
              : t(
                  'dayNeedsStatus'
                )
          )}
        </p>
      </div>

      <button
        class="complete-button"
        type="button"
        ${
          complete || !canComplete
            ? 'disabled'
            : ''
        }
      >
        ${icon(
          complete
            ? 'check'
            : 'sparkles'
        )}

        ${escapeHTML(
          complete
            ? t('completed')
            : t(
                'completeDay'
              )
        )}
      </button>
    </section>
  `
}

function renderEmptyTemplate(data) {
  return `
    <section class="empty-template">
      <div
        class="bonus-lock"
        style="margin:0 auto;"
      >
        ${icon('study')}
      </div>

      <h2 style="margin-top:16px;">
        ${escapeHTML(
          getDayTitle(data)
        )}
      </h2>

      <p>
        ${escapeHTML(
          t('templateHint')
        )}
      </p>

      <span class="template-tag">
        ${icon('bookmark')}
        ${escapeHTML(
          t('template')
        )}
      </span>
    </section>
  `
}

function renderBonus(data) {
  const unlocked =
    isBonusUnlocked(data.week)

  const sectionCount =
    data.sections?.length || 0

  const title =
    localField(data.title) ||
    `${t('bonus')} ${getWeekTitle(
      data.week
    )}`

  const subtitle =
    localField(data.subtitle)

  const description =
    localField(data.description)

  $('#pageRoot').innerHTML = `
    <section
      class="bonus-card ${
        unlocked ? 'unlocked' : ''
      }"
    >
      <div class="bonus-lock">
        ${icon(
          unlocked
            ? 'sparkles'
            : 'lock'
        )}
      </div>

      <div
        class="eyebrow"
        style="margin-top:20px;"
      >
        ${escapeHTML(
          t('bonus')
        )}
        •
        ${escapeHTML(
          getWeekTitle(
            data.week
          )
        )}
      </div>

      <h1>
        ${escapeHTML(title)}
      </h1>

      ${
        subtitle
          ? `
            <div class="bonus-subtitle">
              ${escapeHTML(
                subtitle
              )}
            </div>
          `
          : ''
      }

      ${
        description
          ? `
            <p>
              ${escapeHTML(
                description
              )}
            </p>
          `
          : ''
      }

      <div class="bonus-badge">
        ${icon(
          unlocked
            ? 'trophy'
            : 'lock'
        )}

        ${escapeHTML(
          unlocked
            ? t('unlockBonus')
            : t('bonusLocked')
        )}
      </div>

      ${
        unlocked
          ? `
            <div class="bonus-preview">
              <div class="bonus-mini">
                <strong>
                  ${escapeHTML(
                    subtitle ||
                      t('bonus')
                  )}
                </strong>

                <p>
                  ${
                    sectionCount
                      ? `${sectionCount} ${escapeHTML(
                          t(
                            'matches'
                          )
                        )}`
                      : escapeHTML(
                          t(
                            'emptyBonus'
                          )
                        )
                  }
                </p>
              </div>

              <div class="bonus-mini">
                <strong>
                  7 / 7
                </strong>

                <p>
                  ${escapeHTML(
                    t(
                      'sevenDaysCompleted'
                    )
                  )}
                </p>
              </div>
            </div>

            ${
              sectionCount
                ? `
                  <div class="bonus-sections">
                    ${data.sections
                      .map(
                        (
                          section,
                          index
                        ) =>
                          renderBonusSection(
                            section,
                            index
                          )
                      )
                      .join('')}
                  </div>
                `
                : ''
            }
          `
          : `
            <div class="locked-copy">
              ${icon('lock')}

              <span>
                ${escapeHTML(
                  t(
                    'lockedUntil'
                  )
                )}
              </span>
            </div>
          `
      }
    </section>
  `

  if (unlocked) {
    bindBonusSectionInteractions()
    fireConfetti(30)
  }
}

function renderBonusSection(
  section,
  index
) {
  const type =
    section.type || 'text'

  const title = escapeHTML(
    localPair(section.title)
  )

  const typeLabel = escapeHTML(
    getSectionTypeLabel(type)
  )

  if (
    type === 'text' ||
    type === 'review'
  ) {
    const items =
      section.items || []

    return `
      <article
        class="bonus-mini bonus-section"
        data-section-index="${index}"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <p>
          ${escapeHTML(
            localPair(
              section.body ||
                section.description
            )
          )}
        </p>

        ${
          items.length
            ? `
              <div class="bonus-list">
                ${items
                  .map(
                    item =>
                      `
                        <div class="bonus-list-item">
                          ${escapeHTML(
                            localPair(
                              item
                            )
                          )}
                        </div>
                      `
                  )
                  .join('')}
              </div>
            `
            : ''
        }
      </article>
    `
  }

  if (
    type === 'image' ||
    type === 'scene'
  ) {
    return `
      <article
        class="bonus-mini bonus-section"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <p>
          ${escapeHTML(
            localPair(
              section.caption
            )
          )}
        </p>

        ${
          section.image
            ? `
              <img
                class="bonus-image"
                src="${escapeHTML(
                  section.image
                )}"
                alt="${escapeHTML(
                  title ||
                    t(
                      'bonus'
                    )
                )}"
              >
            `
            : ''
        }
      </article>
    `
  }

  if (type === 'kanji') {
    return `
      <article
        class="bonus-mini bonus-section"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <div class="bonus-kanji-row">
          <span class="bonus-kanji-character">
            ${escapeHTML(
              section.character ||
                '漢'
            )}
          </span>

          <div>
            <strong>
              ${escapeHTML(
                localPair(
                  section.meaning
                )
              )}
            </strong>

            <p>
              ${escapeHTML(
                section.reading || ''
              )}
            </p>
          </div>
        </div>
      </article>
    `
  }

  if (
    type === 'vocabulary'
  ) {
    return `
      <article
        class="bonus-mini bonus-section"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <div class="bonus-vocab-list">
          ${(section.items || [])
            .map(
              v => `
                <div class="bonus-list-item">
                  <ruby>
                    ${escapeHTML(
                      v.word || ''
                    )}

                    <rt>
                      ${escapeHTML(
                        v.reading ||
                          ''
                      )}
                    </rt>
                  </ruby>

                  <span>
                    ${escapeHTML(
                      localPair(
                        v.meaning
                      )
                    )}
                  </span>
                </div>
              `
            )
            .join('')}
        </div>
      </article>
    `
  }

  if (type === 'dialogue') {
    return `
      <article
        class="bonus-mini bonus-section"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <div class="dialogue">
          ${(section.lines || [])
            .map(
              line => `
                <div class="dialogue-line">
                  <strong>
                    ${escapeHTML(
                      line.speaker ||
                        ''
                    )}
                  </strong>

                  <span>
                    ${escapeHTML(
                      line.ja || ''
                    )}
                  </span>

                  <small>
                    ${escapeHTML(
                      localPair(
                        line.translation
                      )
                    )}
                  </small>
                </div>
              `
            )
            .join('')}
        </div>
      </article>
    `
  }

  if (type === 'quiz') {
    return `
      <article
        class="bonus-mini bonus-section bonus-quiz"
        data-answer="${escapeHTML(
          section.answer ?? ''
        )}"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <p>
          ${escapeHTML(
            localPair(
              section.question
            )
          )}
        </p>

        <div class="quiz-options">
          ${(section.options || [])
            .map(
              (option, i) => `
                <button
                  type="button"
                  class="soft-button quiz-option"
                  data-option="${i}"
                >
                  ${escapeHTML(
                    localPair(
                      option
                    )
                  )}
                </button>
              `
            )
            .join('')}
        </div>

        <div
          class="quiz-feedback"
          aria-live="polite"
        ></div>
      </article>
    `
  }

  if (type === 'mini-game') {
    return `
      <article
        class="bonus-mini bonus-section"
      >
        <span class="eyebrow">
          ${typeLabel}
        </span>

        <h3>${title}</h3>

        <p>
          ${escapeHTML(
            localPair(
              section.description
            )
          )}
        </p>

        <button
          type="button"
          class="primary-button mini-game-button"
        >
          ${escapeHTML(
            localField(
              section.action
            ) || t('start')
          )}
        </button>

        <div
          class="mini-game-output"
          aria-live="polite"
        ></div>
      </article>
    `
  }

  return `
    <article
      class="bonus-mini bonus-section"
    >
      <span class="eyebrow">
        ${typeLabel}
      </span>

      <h3>${title}</h3>

      <p>
        ${escapeHTML(
          localPair(
            section.body
          )
        )}
      </p>
    </article>
  `
}

function bindBonusSectionInteractions() {
  $$('.quiz-option').forEach(
    button =>
      button.addEventListener(
        'click',
        () => {
          const quiz =
            button.closest(
              '.bonus-quiz'
            )

          const answer = Number(
            quiz.dataset.answer
          )

          const chosen = Number(
            button.dataset.option
          )

          const feedback =
            $('.quiz-feedback', quiz)

          $$('.quiz-option', quiz).forEach(
            btn =>
              (btn.disabled = true)
          )

          feedback.textContent =
            chosen === answer
              ? t('quizCorrect')
              : t('quizWrong')
        }
      )
  )

  $$('.mini-game-button').forEach(
    button =>
      button.addEventListener(
        'click',
        () => {
          const section =
            button.closest(
              '.bonus-section'
            )

          const output =
            $('.mini-game-output', section)

          const pool = [
            '古',
            '語',
            '未',
            '魅',
            '工',
            '章',
            '郷',
            '朱'
          ]

          const pick =
            pool[
              Math.floor(
                Math.random() *
                  pool.length
              )
            ]

          output.textContent =
            `${t(
              'randomCard'
            )}: ${pick}`
        }
      )
  )
}

function markCurrentDayComplete(
  data
) {
  const counts =
    getDayKanjiCounts(data)

  if (
    !data.kanji?.length ||
    counts.notStudied > 0
  ) {
    showToast(
      t('dayNeedsStatus')
    )

    return
  }

  StorageManager.setDayCompleted(
    data.week,
    data.day,
    true
  )

  const weekComplete =
    Array.from(
      { length: 7 },
      (_, i) => i + 1
    ).every(day =>
      StorageManager.isDayCompleted(
        data.week,
        day
      )
    )

  if (weekComplete) {
    StorageManager.setWeekCompleted(
      data.week,
      true
    )

    showToast(
      t('weekComplete')
    )

    fireConfetti(46)
  } else {
    showToast(
      t('dayComplete')
    )

    fireConfetti(22)
  }

  renderWeekMap()
  populateDaySelector()
  renderDay(data)
  updateCourseProgress()
}

function rerenderPreservingScroll(
  targetId
) {
  const scrollY =
    window.scrollY

  if (state.currentData) {
    renderDay(
      state.currentData
    )

    if (targetId) {
      requestAnimationFrame(
        () =>
          document
            .getElementById(
              targetId
            )
            ?.scrollIntoView({
              block: 'center',
              behavior: 'smooth'
            })
      )
    }
  }

  window.scrollTo({
    top: scrollY,
    behavior: 'instant'
  })
}

function updateNavigationUI() {
  if ($('#weekSelect')) {
    $('#weekSelect').value =
      String(state.currentWeek)
  }

  if ($('#daySelect')) {
    $('#daySelect').value =
      state.currentView === 'day'
        ? String(
            state.currentDay
          )
        : 'bonus'
  }

  renderWeekMap()
  populateDaySelector()

  const prev =
    $('#prevButton')
  const next =
    $('#nextButton')

  if (!prev || !next) {
    return
  }

  const isLastDay =
    state.currentView === 'day' &&
    state.currentDay === 7

  prev.disabled =
    state.currentView === 'day' &&
    state.currentWeek === 1 &&
    state.currentDay === 1

  if (
    state.currentView === 'bonus'
  ) {
    next.disabled =
      state.currentWeek >= 8
  } else {
    next.disabled =
      isLastDay &&
      !isBonusUnlocked(
        state.currentWeek
      )
  }
}

function updateCourseProgress() {
  const done =
    getCourseCompletionCount()

  const value =
    state.storage.getLanguage() ===
    'id'
      ? `${done} / 56 hari`
      : `${done} / 56 days`

  if ($('#courseProgressValue')) {
    $('#courseProgressValue').textContent =
      value
  }
}

function setupLanguage() {
  const select =
    $('#languageSelect')

  if (!select) return

  select.value =
    state.storage.getLanguage()

  select.addEventListener(
    'change',
    event => {
      state.storage.setLanguage(
        event.target.value
      )

      applyTranslations()
      setupWeekSelector()
      populateDaySelector()
      updateCourseProgress()

      if (
        state.currentView ===
          'day' &&
        state.currentData
      ) {
        renderDay(
          state.currentData
        )
      }

      if (
        state.currentView ===
          'bonus' &&
        state.currentBonus
      ) {
        renderBonus(
          state.currentBonus
        )
      }

      updateNavigationUI()
      updateMascot()
    }
  )
}

function applyTranslations() {
  const language =
    state.storage.getLanguage()

  document.documentElement.lang =
    language === 'en'
      ? 'en'
      : 'id'

  $$('[data-i18n]').forEach(
    el => {
      el.textContent = t(
        el.dataset.i18n
      )
    }
  )

  $$(
    '[data-i18n-placeholder]'
  ).forEach(el => {
    el.placeholder = t(
      el.dataset.i18nPlaceholder
    )
  })

  $$(
    '[data-i18n-aria]'
  ).forEach(el => {
    el.setAttribute(
      'aria-label',
      t(el.dataset.i18nAria)
    )
  })

  $$(
    '[data-i18n-title]'
  ).forEach(el => {
    el.setAttribute(
      'title',
      t(el.dataset.i18nTitle)
    )
  })

  $('#languageSelect')?.setAttribute(
    'aria-label',
    t('language')
  )

  $('#themeSelect')?.setAttribute(
    'aria-label',
    t('theme')
  )

  updateCourseProgress()
}

function setupTheme() {
  const select =
    $('#themeSelect')

  if (!select) return

  select.value =
    state.storage.getTheme()

  select.addEventListener(
    'change',
    event => {
      state.storage.setTheme(
        event.target.value
      )

      applyTheme()
    }
  )

  const media =
    window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    )

  media?.addEventListener?.(
    'change',
    () => {
      if (
        state.storage.getTheme() ===
        'system'
      ) {
        applyTheme()
      }
    }
  )

  applyTheme()
}

function resolveTheme() {
  const chosen =
    state.storage.getTheme()

  if (chosen === 'system') {
    return window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    )?.matches
      ? 'vampire'
      : 'human'
  }

  return chosen === 'vampire'
    ? 'vampire'
    : 'human'
}

function applyTheme() {
  const resolved =
    resolveTheme()

  document.body.dataset.theme =
    resolved

  document.body.classList.toggle(
    'easter-1am',
    state.easterEgg
  )

  if ($('#themeSelect')) {
    $('#themeSelect').value =
      state.storage.getTheme()
  }

  loadMusicSource()
  updateMascot()
}

function setupMusic() {
  const button =
    $('#musicButton')

  const audio =
    $('#bgAudio')

  if (!button || !audio) {
    return
  }

  audio.volume =
    state.storage.data.settings.musicVolume

  button.setAttribute(
    'aria-pressed',
    String(
      state.storage.getMusic()
    )
  )

  button.addEventListener(
    'click',
    toggleMusic
  )

  $('#settingsMusicToggle')?.addEventListener(
    'click',
    toggleMusic
  )

  audio.addEventListener(
    'error',
    () => {
      if (
        state.storage.getMusic()
      ) {
        state.storage.setMusic(
          false
        )

        updateMusicUI()

        showToast(
          t('noAudio')
        )
      }
    }
  )
}

function loadMusicSource() {
  const audio =
    $('#bgAudio')

  if (!audio) return

  const resolved =
    resolveTheme()

  const preferred =
    resolved === 'vampire'
      ? 'assets/audio/vampire.mp3'
      : 'assets/audio/study.mp3'

  if (
    audio.dataset.src !==
    preferred
  ) {
    audio.src = preferred
    audio.dataset.src =
      preferred
    audio.load()
  }
}

async function toggleMusic() {
  const audio =
    $('#bgAudio')

  if (!audio) return

  const next =
    !state.storage.getMusic()

  state.storage.setMusic(next)

  audio.volume =
    state.storage.data.settings.musicVolume

  if (next) {
    loadMusicSource()

    try {
      await audio.play()
      showToast(
        t('musicOn')
      )
    } catch {
      state.storage.setMusic(
        false
      )

      showToast(
        t('noAudio')
      )
    }
  } else {
    audio.pause()

    showToast(
      t('musicOff')
    )
  }

  updateMusicUI()
}

function updateMusicUI() {
  const enabled =
    state.storage.getMusic()

  $('#musicButton')?.setAttribute(
    'aria-pressed',
    String(enabled)
  )

  $('#settingsMusicToggle')?.setAttribute(
    'aria-pressed',
    String(enabled)
  )
}

function setupStudyMode() {
  const button =
    $('#studyButton')

  if (!button) return

  button.setAttribute(
    'aria-pressed',
    String(
      state.storage.getStudyMode()
    )
  )

  $('#settingsStudyToggle')?.addEventListener(
    'click',
    toggleStudyMode
  )

  button.addEventListener(
    'click',
    toggleStudyMode
  )

  updateStudyUI()
}

function toggleStudyMode() {
  const next =
    !state.storage.getStudyMode()

  state.storage.setStudyMode(next)

  document.body.classList.toggle(
    'study-mode',
    next
  )

  updateStudyUI()

  showToast(
    next
      ? t('studyOn')
      : t('studyOff')
  )
}

function updateStudyUI() {
  const enabled =
    state.storage.getStudyMode()

  document.body.classList.toggle(
    'study-mode',
    enabled
  )

  $('#studyButton')?.setAttribute(
    'aria-pressed',
    String(enabled)
  )

  $('#settingsStudyToggle')?.setAttribute(
    'aria-pressed',
    String(enabled)
  )
}

function setupSearch() {
  const modal =
    $('#searchModal')

  const input =
    $('#searchInput')

  $('#searchButton')?.addEventListener(
    'click',
    () => {
      modal?.showModal()
      input?.focus()
    }
  )

  $('#closeSearch')?.addEventListener(
    'click',
    () => modal?.close()
  )

  input?.addEventListener(
    'input',
    async event => {
      const query =
        event.target.value
          .trim()
          .toLowerCase()

      if (!query) {
        $('#searchResults').innerHTML = `
          <div class="empty-search">
            ${escapeHTML(
              t(
                'startSearch'
              )
            )}
          </div>
        `
        return
      }

      $('#searchResults').innerHTML = `
        <div class="empty-search">
          ${escapeHTML(
            t('searching')
          )}
        </div>
      `

      renderSearchResults(
        await searchAll(query)
      )
    }
  )
}

async function searchAll(query) {
  if (!state.searchCache) {
    const imports = []

    for (
      let week = 1;
      week <= 8;
      week++
    ) {
      for (
        let day = 1;
        day <= 7;
        day++
      ) {
        imports.push(
          importDay(
            week,
            day
          ).catch(() => null)
        )
      }
    }

    state.searchCache = (
      await Promise.all(
        imports
      )
    ).filter(Boolean)
  }

  const results = []

  state.searchCache.forEach(
    dayData => {
      ;(
        dayData.kanji || []
      ).forEach(kanji => {
        const corpus = [
          kanji.character,
          kanji.meaning?.id,
          kanji.meaning?.en,

          ...(kanji.onyomi || []).flatMap(
            x => [
              x.text,
              x.reading
            ]
          ),

          ...(kanji.kunyomi || []).flatMap(
            x => [
              x.text,
              x.reading
            ]
          ),

          kanji.usage?.id,
          kanji.usage?.en,
          kanji.nuance?.id,
          kanji.nuance?.en,
          kanji.philosophy?.id,
          kanji.philosophy?.en,

          ...(kanji.vocabulary || []).flatMap(
            x => [
              x.word,
              x.reading,
              x.meaning?.id,
              x.meaning?.en
            ]
          )
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()

        if (
          corpus.includes(query)
        ) {
          const matchingVocab =
            (
              kanji.vocabulary ||
              []
            ).filter(v =>
              [
                v.word,
                v.reading,
                v.meaning?.id,
                v.meaning?.en
              ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase()
                .includes(query)
            )

          results.push({
            week: dayData.week,
            day: dayData.day,
            kanji,
            matchingVocab
          })
        }
      })
    }
  )

  return results.slice(0, 80)
}

function renderSearchResults(
  results
) {
  const target =
    $('#searchResults')

  if (!results.length) {
    target.innerHTML = `
      <div class="empty-search">
        ${escapeHTML(
          t('searchTip')
        )}

        <br><br>

        0 ${escapeHTML(
          t('matches')
        )}
      </div>
    `

    return
  }

  target.innerHTML = results
    .map(result => {
      const vocab =
        result.matchingVocab
          .slice(0, 3)
          .map(
            v =>
              `${escapeHTML(
                v.word
              )} <small>${escapeHTML(
                v.reading
              )}</small>`
          )
          .join(' · ')

      const meaning =
        localPair(
          result.kanji.meaning
        )

      const weekTitle =
        getWeekTitle(
          result.week
        )

      const dayTitle =
        getDayTitle({
          week: result.week,
          day: result.day
        })

      return `
        <button
          type="button"
          class="search-result"
          data-search-week="${
            result.week
          }"
          data-search-day="${
            result.day
          }"
          data-search-id="${escapeHTML(
            result.kanji.id
          )}"
        >
          <span class="search-kanji">
            ${escapeHTML(
              result.kanji
                .character
            )}
          </span>

          <span class="search-meta">
            <strong>
              ${escapeHTML(
                result.kanji
                  .character
              )}
              •
              ${escapeHTML(
                meaning
              )}
            </strong>

            <span>
              ${escapeHTML(
                weekTitle
              )}
            </span>

            <span>
              ${escapeHTML(
                dayTitle
              )}
            </span>

            ${
              vocab
                ? `<span>${vocab}</span>`
                : ''
            }
          </span>

          <span class="search-jump">
            ${escapeHTML(
              t(
                'searchJump'
              )
            )}
            ${icon(
              'arrowRight'
            )}
          </span>
        </button>
      `
    })
    .join('')

  $$('.search-result', target).forEach(
    button =>
      button.addEventListener(
        'click',
        async () => {
          const week = Number(
            button.dataset
              .searchWeek
          )

          const day = Number(
            button.dataset
              .searchDay
          )

          const id =
            button.dataset
              .searchId

          $('#searchModal').close()

          await loadDay(
            week,
            day
          )

          requestAnimationFrame(
            () =>
              document
                .getElementById(
                  id
                )
                ?.scrollIntoView({
                  block: 'center',
                  behavior:
                    'smooth'
                })
          )
        }
      )
  )
}

function speakText(
  text,
  triggerElement
) {
  if (
    !(
      'speechSynthesis' in
      window
    )
  ) {
    showToast(
      t('ttsUnavailable')
    )

    return
  }

  window.speechSynthesis.cancel()

  $$('.tts-active').forEach(
    el =>
      el.classList.remove(
        'tts-active'
      )
  )

  const target =
    triggerElement
      ?.closest('.reading-item')
      ?.querySelector(
        '.tts-target'
      ) ||
    triggerElement
      ?.closest('.vocab-item')
      ?.querySelector('ruby')

  if (target) {
    target.classList.add(
      'tts-active'
    )
  }

  const utterance =
    new SpeechSynthesisUtterance(
      text
    )

  utterance.lang =
    'ja-JP'
  utterance.rate = 0.83
  utterance.pitch = 1

  utterance.onstart = () =>
    target?.classList.add(
      'tts-active'
    )

  utterance.onend = () =>
    target?.classList.remove(
      'tts-active'
    )

  utterance.onerror = () =>
    target?.classList.remove(
      'tts-active'
    )

  window.speechSynthesis.speak(
    utterance
  )

  state.speech = utterance
}

function setupTTS() {
  window.addEventListener(
    'beforeunload',
    () =>
      window.speechSynthesis?.cancel()
  )
}

function getMascotVariant() {
  if (state.easterEgg) {
    return 'vampire'
  }

  if (
    state.currentView ===
    'bonus'
  ) {
    return 'success'
  }

  if (
    state.storage.getStudyMode()
  ) {
    return 'study'
  }

  if (
    !state.currentData?.kanji
      ?.length
  ) {
    return 'thinking'
  }

  return 'normal'
}

function updateMascot() {
  const variant =
    getMascotVariant()

  const mobileFile =
    `assets/images/mascot/mascot-${variant}.png`

  const desktopSource =
    $('#sidebarMascotSource')

  const img =
    $('#sidebarMascot')

  if (!img) return

  if (desktopSource) {
    desktopSource.srcset =
      'assets/images/mascot/desktop-normal.png'
  }

  img.src = mobileFile

  img.alt =
    state.easterEgg
      ? `${t(
          'mascotAlt'
        )} — Vampire`
      : t('mascotAlt')

  setMascotSpeech()
}

function setMascotSpeech() {
  const hour =
    new Date().getHours()

  let buckets

  if (
    hour >= 5 &&
    hour < 11
  ) {
    buckets = [
      [
        'おはようございます！',
        {
          id: 'Selamat pagi! Saatnya belajar kanji.',
          en: 'Good morning! Time for some kanji.'
        }
      ],
      [
        '朝の一文字です。',
        {
          id: 'Mari mulai dari satu kanji pagi ini.',
          en: 'Let’s start with one kanji this morning.'
        }
      ],
      [
        'おはよう。',
        {
          id: 'Pelan-pelan, yang penting konsisten.',
          en: 'Take it slowly. Consistency matters.'
        }
      ]
    ]
  } else if (
    hour >= 11 &&
    hour < 15
  ) {
    buckets = [
      [
        'こんにちは！',
        {
          id: 'Waktunya belajar kanji.',
          en: 'It is kanji study time.'
        }
      ],
      [
        'お昼ですね。',
        {
          id: 'Istirahat sebentar, lalu lanjut lagi.',
          en: 'Take a short break, then keep going.'
        }
      ],
      [
        '今日の漢字、見てみる？',
        {
          id: 'Mau lihat kanji hari ini?',
          en: 'Ready to see today’s kanji?'
        }
      ]
    ]
  } else if (
    hour >= 15 &&
    hour < 18
  ) {
    buckets = [
      [
        'おつかれさま！',
        {
          id: 'Sudah belajar sejauh ini. Bagus.',
          en: 'You have made it this far. Nice work.'
        }
      ],
      [
        '休憩も忘れないでね。',
        {
          id: 'Jangan lupa istirahat.',
          en: 'Do not forget to take a break.'
        }
      ],
      [
        '午後の漢字です。',
        {
          id: 'Lanjut satu kanji lagi.',
          en: 'Let’s take on one more kanji.'
        }
      ]
    ]
  } else if (
    hour >= 18 &&
    hour < 23
  ) {
    buckets = [
      [
        'こんばんは。',
        {
          id: 'Mari review kanji malam ini.',
          en: 'Let’s review some kanji tonight.'
        }
      ],
      [
        '夜の時間ですね。',
        {
          id: 'Suasana tenang untuk belajar.',
          en: 'A quiet time for studying.'
        }
      ],
      [
        'お気に入りの一文字は？',
        {
          id: 'Kanji mana yang paling kamu suka?',
          en: 'Which kanji is your favorite?'
        }
      ]
    ]
  } else if (
    hour === 23 ||
    hour === 0
  ) {
    buckets = [
      [
        'こんな時間まで勉強してるの？',
        {
          id: 'Masih belajar sampai selarut ini?',
          en: 'Still studying this late?'
        }
      ],
      [
        '夜ふかしですか？',
        {
          id: 'Jangan terlalu memaksakan diri.',
          en: 'Do not push yourself too hard.'
        }
      ],
      [
        'まだ続ける？',
        {
          id: 'Satu kanji lagi juga cukup.',
          en: 'One more kanji is enough.'
        }
      ]
    ]
  } else {
    buckets = [
      [
        'まだ起きてるの？',
        {
          id: 'Kamu masih bangun?',
          en: 'You are still awake?'
        }
      ],
      [
        '血がほしい。',
        {
          id: 'Aku ingin darah. Bercanda. Istirahat dulu.',
          en: 'I want blood. Just kidding. Get some rest.'
        }
      ],
      [
        '夜の気配がする。',
        {
          id: 'Malam terasa semakin sunyi.',
          en: 'The night feels especially quiet.'
        }
      ]
    ]
  }

  const pick =
    buckets[
      Math.floor(
        Math.random() *
          buckets.length
      )
    ]

  $('#bubbleJapanese').textContent =
    pick[0]

  $('#bubbleTranslation').textContent =
    localPair(pick[1])

  if (state.easterEgg) {
    $('#bubbleJapanese').textContent =
      [
        'まだ勉強してるの？',
        '血がほしい。',
        '夜の気配がする。'
      ][
        Math.floor(
          Math.random() * 3
        )
      ]

    $('#bubbleTranslation').textContent =
      t('vampireSpecial')
  }
}

function setupMascot() {
  updateMascot()

  setInterval(() => {
    checkEasterEgg()
    setMascotSpeech()
  }, 60000)

  $('#sidebarMascot')?.addEventListener(
    'load',
    () =>
      $('#sidebarMascotFrame')?.classList.add(
        'loaded'
      )
  )

  $('#sidebarMascot')?.addEventListener(
    'click',
    () => {
      setMascotSpeech()

      showToast(
        state.easterEgg
          ? t('vampireToast')
          : t('mascotToast')
      )
    }
  )
}

function checkEasterEgg() {
  const hour =
    new Date().getHours()

  const should = hour === 1

  if (
    should &&
    !state.easterEgg
  ) {
    state.easterEgg = true

    document.body.classList.add(
      'easter-1am'
    )

    applyTheme()

    showToast(
      '01:00 • Vampire Mode'
    )

    fireConfetti(12)
  } else if (
    !should &&
    state.easterEgg
  ) {
    state.easterEgg = false

    document.body.classList.remove(
      'easter-1am'
    )

    applyTheme()
  }
}

function fireConfetti(
  count = 34
) {
  const layer =
    document.createElement(
      'div'
    )

  layer.className =
    'confetti-layer'

  const colors = [
    'var(--rose)',
    'var(--gold)',
    'var(--cyan)',
    'var(--mint)',
    'var(--lilac)',
    'var(--peach)'
  ]

  for (
    let i = 0;
    i < count;
    i++
  ) {
    const piece =
      document.createElement(
        'span'
      )

    piece.className =
      'confetti'

    piece.style.left =
      `${Math.random() * 100}%`

    piece.style.setProperty(
      '--x',
      `${(Math.random() - 0.5) * 240}px`
    )

    piece.style.setProperty(
      '--rot',
      `${Math.random() * 360}deg`
    )

    piece.style.animationDelay =
      `${Math.random() * 0.25}s`

    piece.style.background =
      colors[i % colors.length]

    piece.style.opacity =
      String(
        0.65 +
          Math.random() * 0.35
      )

    layer.appendChild(piece)
  }

  document.body.appendChild(
    layer
  )

  setTimeout(
    () => layer.remove(),
    2200
  )
}

function setupSettingsModal() {
  const modal =
    $('#settingsModal')

  $('#settingsButton')?.addEventListener(
    'click',
    () => modal?.showModal()
  )

  $('#closeSettings')?.addEventListener(
    'click',
    () => modal?.close()
  )

  window.addEventListener(
    'keydown',
    event => {
      if (
        event.key.toLowerCase() ===
          's' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        ![
          'INPUT',
          'TEXTAREA',
          'SELECT'
        ].includes(
          document.activeElement
            ?.tagName
        )
      ) {
        event.preventDefault()

        modal?.showModal()

        $('#settingsStudyToggle')?.focus()
      }
    }
  )
}

function setupKeyboard() {
  window.addEventListener(
    'keydown',
    event => {
      if (
        [
          'INPUT',
          'TEXTAREA',
          'SELECT'
        ].includes(
          document.activeElement
            ?.tagName
        )
      ) {
        return
      }

      if (
        event.key ===
        'ArrowLeft'
      ) {
        navigateRelative(-1)
      }

      if (
        event.key ===
        'ArrowRight'
      ) {
        navigateRelative(1)
      }

      if (event.key === '/') {
        event.preventDefault()

        $('#searchModal')
          ?.showModal()

        $('#searchInput')?.focus()
      }
    }
  )
}

function bindRipples() {
  document.addEventListener(
    'click',
    event => {
      const button =
        event.target.closest(
          'button,.primary-button,.soft-button,.status-button,.complete-button,.icon-button'
        )

      if (
        !button ||
        button.disabled
      ) {
        return
      }

      const rect =
        button.getBoundingClientRect()

      const ripple =
        document.createElement(
          'span'
        )

      const size = Math.max(
        rect.width,
        rect.height
      )

      ripple.className =
        'ripple'

      ripple.style.width =
        ripple.style.height =
          `${size}px`

      ripple.style.left =
        `${event.clientX - rect.left - size / 2}px`

      ripple.style.top =
        `${event.clientY - rect.top - size / 2}px`

      button.appendChild(
        ripple
      )

      setTimeout(
        () => ripple.remove(),
        650
      )
    }
  )
}

function bindCardTilt() {
  const reduced =
    window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    )?.matches

  if (reduced) return

  $$('.kanji-card').forEach(
    card => {
      card.addEventListener(
        'pointermove',
        event => {
          const rect =
            card.getBoundingClientRect()

          const x =
            (event.clientX -
              rect.left) /
              rect.width -
            0.5

          const y =
            (event.clientY -
              rect.top) /
              rect.height -
            0.5

          card.style.setProperty(
            '--mx',
            `${(x + 0.5) * 100}%`
          )

          card.style.setProperty(
            '--my',
            `${(y + 0.5) * 100}%`
          )
        }
      )

      card.addEventListener(
        'pointerleave',
        () => {
          card.style.setProperty(
            '--mx',
            '50%'
          )

          card.style.setProperty(
            '--my',
            '50%'
          )
        }
      )
    }
  )
}

function initApp() {
  setStaticIcons()
  setupNavigation()
  setupWeekSelector()
  populateDaySelector()
  setupSearch()
  setupTTS()
  setupTheme()
  setupLanguage()
  setupMascot()
  setupMusic()
  setupStudyMode()
  setupSettingsModal()
  setupKeyboard()
  bindRipples()
  applyTranslations()
  updateMusicUI()
  updateStudyUI()
  updateCourseProgress()
  checkEasterEgg()

  loadDay(
    state.currentWeek,
    state.currentDay
  )
}

initApp()