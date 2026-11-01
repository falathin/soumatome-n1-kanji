const minggu1Hari7 = {
    week: 1,
    day: 7,

    title: {
        id: "Hari 7",
        en: "Day 7"
    },

    subtitle: {
        id: "第1週 同じ部分・同じ音読みをもつ漢字を覚えよう① 7日目 実戦問題",
        en: "Week 1 Day 7 — Practical Exam"
    },

    source: {
        label: "Minggu 1 Hari 7",
        image: "assets/images/backgrounds/mobile-normal.png"
    },

    kanji: [],

    // ============================================================
    // FITUR UJIAN
    // ============================================================

    exam: {
        enabled: true,

        id: "week1-day7-exam",

        title: {
            id: "Ujian Minggu 1 - Hari 7",
            en: "Week 1 - Day 7 Practical Exam"
        },

        description: {
            id: "Ujian praktik gabungan Minggu 1. Pilih bacaan kanji yang benar, kanji yang sesuai, serta kosakata yang tepat berdasarkan konteks kalimat.",
            en: "A comprehensive Week 1 practical exam. Choose the correct kanji readings, kanji characters, and vocabulary according to sentence context."
        },

        subtitle: {
            id: "制限時間：15分 ・ 1問4点 × 25問 ・ 100点満点",
            en: "Time limit: 15 minutes · 4 points × 25 questions · 100 points"
        },

        settings: {
            totalQuestions: 25,
            timeLimitSeconds: 900,
            passingScore: 70,

            randomizeQuestions: true,
            randomizeOptions: true,

            showResultAfterSubmit: true,
            showCorrectAnswerAfterSubmit: true,
            showExplanationAfterSubmit: true,

            allowRetry: true,
            maxAttempts: 0
        },

        // Informasi tambahan ujian
        pointsPerQuestion: 4,
        maxScore: 100,

        answerReference: {
            id: "答えは別冊 p.3",
            en: "Answers: separate answer booklet p.3"
        },

        questionTypes: [
            {
                id: "reading",
                label: {
                    id: "Pilih bacaan yang benar",
                    en: "Choose the correct reading"
                }
            },
            {
                id: "kanji",
                label: {
                    id: "Pilih kanji atau kosakata yang benar",
                    en: "Choose the correct kanji or vocabulary"
                }
            }
        ],

        questions: [

            // ========================================================
            // READING - SOAL 1-10
            // ========================================================

            {
                id: "d7-01",
                type: "reading",

                question: {
                    id: "次の漢字の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the marked kanji."
                },

                prompt: "水の【抵抗】を少なくするために船体を流線型にする。",

                promptType: "reading",

                options: [
                    "しこう",
                    "ていこう",
                    "けいこう",
                    "きっこう"
                ],

                answer: "ていこう",

                explanation: {
                    id: "抵抗（ていこう）＝ perlawanan; hambatan。",
                    en: "抵抗（ていこう）means resistance."
                },

                sourceKanji: ["抵"]
            },

            {
                id: "d7-02",
                type: "reading",

                question: {
                    id: "次の漢字の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the marked kanji."
                },

                prompt: "大雨による土砂災害に【警戒】が必要です。",

                promptType: "reading",

                options: [
                    "げんかい",
                    "きょうかい",
                    "けいかい",
                    "ごうかい"
                ],

                answer: "けいかい",

                explanation: {
                    id: "警戒（けいかい）＝ kewaspadaan。",
                    en: "警戒（けいかい）means caution or vigilance."
                },

                sourceKanji: ["戒"]
            },

            {
                id: "d7-03",
                type: "reading",

                question: {
                    id: "次の漢字の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the marked kanji."
                },

                prompt: "この野菜は【発汗】作用がある。",

                promptType: "reading",

                options: [
                    "はっかん",
                    "ほっかん",
                    "はっせん",
                    "ほっせん"
                ],

                answer: "はっかん",

                explanation: {
                    id: "発汗（はっかん）＝ keluarnya keringat。",
                    en: "発汗（はっかん）means perspiration or sweating."
                },

                sourceKanji: ["汗"]
            },

            {
                id: "d7-04",
                type: "reading",

                question: {
                    id: "次の漢字の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the marked kanji."
                },

                prompt: "民間レベルの国際交流に【貢献】する。",

                promptType: "reading",

                options: [
                    "ぐこん",
                    "かいけん",
                    "こうけん",
                    "こうなん"
                ],

                answer: "こうけん",

                explanation: {
                    id: "貢献（こうけん）＝ kontribusi; sumbangsih。",
                    en: "貢献（こうけん）means contribution."
                },

                sourceKanji: ["貢"]
            },

            {
                id: "d7-05",
                type: "reading",

                question: {
                    id: "次の漢字の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the marked kanji."
                },

                prompt: "その工場の安全管理への【懸念】が高まっている。",

                promptType: "reading",

                options: [
                    "けねん",
                    "けんねん",
                    "けいねん",
                    "しんねん"
                ],

                answer: "けねん",

                explanation: {
                    id: "懸念（けねん）＝ kekhawatiran; kecemasan。",
                    en: "懸念（けねん）means concern or worry."
                },

                sourceKanji: ["懸"]
            },

            {
                id: "d7-06",
                type: "reading",

                question: {
                    id: "次の熟語の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the following word."
                },

                prompt: "【骨髄】移植手術に成功する。",

                promptType: "reading",

                options: [
                    "こつじい",
                    "こつゆう",
                    "こつじゅう",
                    "こつずい"
                ],

                answer: "こつずい",

                explanation: {
                    id: "骨髄（こつずい）＝ sumsum tulang。",
                    en: "骨髄（こつずい）means bone marrow."
                },

                sourceKanji: ["髄"]
            },

            {
                id: "d7-07",
                type: "reading",

                question: {
                    id: "次の熟語の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the following word."
                },

                prompt: "外国人の生活【全般】に関する相談に応じます。",

                promptType: "reading",

                options: [
                    "ぜんぱん",
                    "ぜんばん",
                    "ぜんはん",
                    "ぜんせん"
                ],

                answer: "ぜんぱん",

                explanation: {
                    id: "全般（ぜんぱん）＝ keseluruhan; umum。",
                    en: "全般（ぜんぱん）means the whole or general scope."
                },

                sourceKanji: ["般"]
            },

            {
                id: "d7-08",
                type: "reading",

                question: {
                    id: "次の熟語の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the following word."
                },

                prompt: "事件に対する【動揺】が市民の間に広がっている。",

                promptType: "reading",

                options: [
                    "どうよう",
                    "どうじょう",
                    "どうかん",
                    "どうちょう"
                ],

                answer: "どうよう",

                explanation: {
                    id: "動揺（どうよう）＝ keguncangan; keresahan。",
                    en: "動揺（どうよう）means disturbance or agitation."
                },

                sourceKanji: ["揺"]
            },

            {
                id: "d7-09",
                type: "reading",

                question: {
                    id: "次の熟語の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the following word."
                },

                prompt: "【合唱】コンクールで優勝する。",

                promptType: "reading",

                options: [
                    "ごうしょう",
                    "がっそう",
                    "がっしょう",
                    "ごうそう"
                ],

                answer: "がっしょう",

                explanation: {
                    id: "合唱（がっしょう）＝ paduan suara。",
                    en: "合唱（がっしょう）means chorus or group singing."
                },

                sourceKanji: ["唱"]
            },

            {
                id: "d7-10",
                type: "reading",

                question: {
                    id: "次の熟語の読み方として正しいものを選びなさい。",
                    en: "Choose the correct reading of the following word."
                },

                prompt: "【石碑】に刻まれた詩を読む。",

                promptType: "reading",

                options: [
                    "いしひ",
                    "せっこう",
                    "しゃくひ",
                    "せきひ"
                ],

                answer: "せきひ",

                explanation: {
                    id: "石碑（せきひ）＝ prasasti batu; monumen batu。",
                    en: "石碑（せきひ）means a stone monument or stele."
                },

                sourceKanji: ["碑"]
            },

            // ========================================================
            // KANJI - SOAL 11-20
            // ========================================================

            {
                id: "d7-11",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "大学では法律を（せんこう）した。",

                promptType: "reading",

                options: [
                    "細工",
                    "成功",
                    "専攻",
                    "聴講"
                ],

                answer: "専攻",

                explanation: {
                    id: "専攻（せんこう）＝ jurusan; bidang spesialisasi。",
                    en: "専攻（せんこう）means major or specialization."
                },

                sourceKanji: ["攻"]
            },

            {
                id: "d7-12",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "この部屋の（しょうめい）は明るすぎる。",

                promptType: "reading",

                options: [
                    "招明",
                    "照明",
                    "紹明",
                    "昭明"
                ],

                answer: "照明",

                explanation: {
                    id: "照明（しょうめい）＝ penerangan; pencahayaan。",
                    en: "照明（しょうめい）means lighting or illumination."
                },

                sourceKanji: ["照"]
            },

            {
                id: "d7-13",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "教材を（こうにゅう）する。",

                promptType: "reading",

                options: [
                    "構入",
                    "講入",
                    "購入",
                    "溝入"
                ],

                answer: "購入",

                explanation: {
                    id: "購入（こうにゅう）＝ pembelian。",
                    en: "購入（こうにゅう）means purchase."
                },

                sourceKanji: ["購"]
            },

            {
                id: "d7-14",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "仕事の帰りに（どうりょう）と飲みにいく。",

                promptType: "reading",

                options: [
                    "同僚",
                    "同寮",
                    "同療",
                    "同嬢"
                ],

                answer: "同僚",

                explanation: {
                    id: "同僚（どうりょう）＝ rekan kerja。",
                    en: "同僚（どうりょう）means colleague."
                },

                sourceKanji: ["僚"]
            },

            {
                id: "d7-15",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "最近の子どもたちは様々な（じゅく）へ通っている。",

                promptType: "reading",

                options: [
                    "熟",
                    "塾",
                    "宿",
                    "学"
                ],

                answer: "塾",

                explanation: {
                    id: "塾（じゅく）＝ bimbingan belajar; sekolah tambahan。",
                    en: "塾（じゅく）means a cram school or private tutoring school."
                },

                sourceKanji: ["塾"]
            },

            {
                id: "d7-16",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "夏は涼しい山の別（　）で過ごす。",

                promptType: "reading",

                options: [
                    "荘",
                    "州",
                    "郷",
                    "庭"
                ],

                answer: "荘",

                explanation: {
                    id: "別荘（べっそう）＝ vila; rumah peristirahatan。",
                    en: "別荘（べっそう）means vacation cottage or villa."
                },

                sourceKanji: ["荘"]
            },

            {
                id: "d7-17",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "電車の時刻（　）が改定になる。",

                promptType: "reading",

                options: [
                    "票",
                    "俵",
                    "表",
                    "標"
                ],

                answer: "表",

                explanation: {
                    id: "時刻表（じこくひょう）＝ jadwal kereta atau tabel waktu。",
                    en: "時刻表（じこくひょう）means timetable."
                },

                sourceKanji: ["表"]
            },

            {
                id: "d7-18",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "本日の会議の議（　）を務めさせていただきます。",

                promptType: "reading",

                options: [
                    "帳",
                    "張",
                    "長",
                    "腸"
                ],

                answer: "長",

                explanation: {
                    id: "議長（ぎちょう）＝ ketua rapat; ketua sidang。",
                    en: "議長（ぎちょう）means chairperson or meeting chairman."
                },

                sourceKanji: ["長"]
            },

            {
                id: "d7-19",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "（　）気圧の接近に伴い、大雪になるでしょう。",

                promptType: "reading",

                options: [
                    "底",
                    "低",
                    "抵",
                    "邸"
                ],

                answer: "低",

                explanation: {
                    id: "低気圧（ていきあつ）＝ tekanan udara rendah。",
                    en: "低気圧（ていきあつ）means low atmospheric pressure."
                },

                sourceKanji: ["低"]
            },

            {
                id: "d7-20",
                type: "kanji",

                question: {
                    id: "文脈に合う漢字を選びなさい。",
                    en: "Choose the kanji that best fits the context."
                },

                prompt: "2mもある（　）大な魚が捕獲された。",

                promptType: "reading",

                options: [
                    "冒",
                    "未",
                    "朱",
                    "巨"
                ],

                answer: "巨",

                explanation: {
                    id: "巨大（きょだい）＝ sangat besar; raksasa。",
                    en: "巨大（きょだい）means enormous or gigantic."
                },

                sourceKanji: ["巨"]
            },

            // ========================================================
            // VOCABULARY / CONTEXT - SOAL 21-25
            // ========================================================

            {
                id: "d7-21",
                type: "kanji",

                question: {
                    id: "文脈に合う語を選びなさい。",
                    en: "Choose the vocabulary that best fits the context."
                },

                prompt: "当ホテルは（　）の名所として有名な湖畔にあります。",

                promptType: "reading",

                options: [
                    "紅葉",
                    "湖畔",
                    "色彩",
                    "多彩",
                    "庭園",
                    "味覚",
                    "魅力"
                ],

                answer: "紅葉",

                explanation: {
                    id: "紅葉（こうよう）＝ daun musim gugur. 紅葉の名所 adalah tempat terkenal untuk melihat daun musim gugur.",
                    en: "紅葉（こうよう）means autumn leaves. 紅葉の名所 refers to a famous autumn foliage viewing spot."
                },

                sourceKanji: ["紅"]
            },

            {
                id: "d7-22",
                type: "kanji",

                question: {
                    id: "文脈に合う語を選びなさい。",
                    en: "Choose the vocabulary that best fits the context."
                },

                prompt: "当ホテルは紅葉の名所として有名な（　）にあります。",

                promptType: "reading",

                options: [
                    "紅葉",
                    "湖畔",
                    "色彩",
                    "多彩",
                    "庭園",
                    "味覚",
                    "魅力"
                ],

                answer: "湖畔",

                explanation: {
                    id: "湖畔（こはん）＝ tepi danau。",
                    en: "湖畔（こはん）means lakeside."
                },

                sourceKanji: ["湖"]
            },

            {
                id: "d7-23",
                type: "kanji",

                question: {
                    id: "文脈に合う語を選びなさい。",
                    en: "Choose the vocabulary that best fits the context."
                },

                prompt: "（　）豊かな庭園を眺めながら料理長自慢の秋の味覚をお楽しみください。",

                promptType: "reading",

                options: [
                    "色彩",
                    "多彩",
                    "庭園",
                    "魅力",
                    "味覚",
                    "紅葉",
                    "湖畔"
                ],

                answer: "色彩",

                explanation: {
                    id: "色彩豊かな（しきさいゆたかな）＝ kaya warna; penuh warna。",
                    en: "色彩豊かな（しきさいゆたかな）means rich in color or colorful."
                },

                sourceKanji: ["彩"]
            },

            {
                id: "d7-24",
                type: "kanji",

                question: {
                    id: "文脈に合う語を選びなさい。",
                    en: "Choose the vocabulary that best fits the context."
                },

                prompt: "色彩豊かな（　）を眺めながら料理長自慢の秋の味覚をお楽しみください。",

                promptType: "reading",

                options: [
                    "魅力",
                    "味覚",
                    "紅葉",
                    "色彩",
                    "多彩",
                    "庭園",
                    "湖畔"
                ],

                answer: "庭園",

                explanation: {
                    id: "庭園（ていえん）＝ taman; kebun.",
                    en: "庭園（ていえん）means garden."
                },

                sourceKanji: ["庭"]
            },

            {
                id: "d7-25",
                type: "kanji",

                question: {
                    id: "文脈に合う語を選びなさい。",
                    en: "Choose the vocabulary that best fits the context."
                },

                prompt: "色彩豊かな庭園を眺めながら料理長自慢の秋の（　）をお楽しみください。",

                promptType: "reading",

                options: [
                    "魅力",
                    "味覚",
                    "紅葉",
                    "色彩",
                    "多彩",
                    "庭園",
                    "湖畔"
                ],

                answer: "味覚",

                explanation: {
                    id: "秋の味覚（あきのみかく）＝ cita rasa atau makanan khas musim gugur.",
                    en: "秋の味覚（あきのみかく）means the flavors or seasonal foods of autumn."
                },

                sourceKanji: ["味"]
            }
        ]
    }
};

export default minggu1Hari7;