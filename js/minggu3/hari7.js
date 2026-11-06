const minggu3Hari7 = {
    "week": 3,
    "day": 7,
    "title": {
        "id": "Hari 7",
        "en": "Day 7"
    },
    "subtitle": {
        "id": "第3週 実戦問題",
        "en": "Week 3 — Practical Exam"
    },
    "source": {
        "label": "Minggu 3 Hari 7",
        "image": "assets/images/backgrounds/mobile-normal.png"
    },
    "kanji": [
        {
            "id": "week3-day7-001",
            "character": "完",
            "meaning": {
                "id": "sempurna; selesai; lengkap",
                "en": "complete; finished; perfect"
            },
            "onyomi": [
                {
                    "text": "カン",
                    "reading": "カン"
                }
            ],
            "kunyomi": [],
            "usage": {
                "id": "完了（かんりょう） berarti penyelesaian atau keadaan sudah selesai. Kartu ini hanya menjadi penanda agar Hari 7 dapat ditandai selesai setelah ujian.",
                "en": "完了（かんりょう）means completion. This card is only a marker so Day 7 can be marked complete after the exam."
            },
            "nuance": {
                "id": "完 menyatakan sesuatu yang telah lengkap atau tuntas. Kanji ini tidak memiliki bacaan kunyomi yang umum digunakan secara mandiri; karena itu daftar kunyomi dibiarkan kosong, bukan diisi bacaan yang tidak tepat.",
                "en": "完 expresses completeness or finality. It has no commonly used standalone kun reading, so its kunyomi list is correctly left empty."
            },
            "philosophy": {
                "id": "Jadikan 完 sebagai simbol akhir: kerjakan seluruh 25 soal ujian, lalu tandai kartu formalitas ini sebagai hafal untuk menyelesaikan Hari 7.",
                "en": "Use 完 as the symbol of completion: finish all 25 exam questions, then mark this placeholder card as memorized to complete Day 7."
            },
            "vocabulary": [
                {
                    "word": "完了",
                    "reading": "かんりょう",
                    "meaning": {
                        "id": "penyelesaian; selesai",
                        "en": "completion; finished"
                    }
                },
                {
                    "word": "完成",
                    "reading": "かんせい",
                    "meaning": {
                        "id": "penyelesaian; kesempurnaan",
                        "en": "completion; perfection"
                    }
                }
            ],
            "sourceNote": "Kartu formalitas penyelesaian Hari 7; bukan materi kanji utama."
        }
    ],
    "exam": {
        "enabled": true,
        "id": "week3-day7-exam",
        "title": {
            "id": "Ujian Praktik Minggu 3",
            "en": "Week 3 Practical Exam"
        },
        "description": {
            "id": "Ujian gabungan kosakata dan kanji dari materi Minggu 3. Pilih bacaan, penulisan, dan kata yang paling tepat sesuai konteks.",
            "en": "A comprehensive Week 3 exam covering vocabulary and kanji. Choose the correct reading, spelling, and word for each context."
        },
        "subtitle": {
            "id": "制限時間：15分 ・ 1問4点 × 25問 ・ 100点満点",
            "en": "Time limit: 15 minutes · 4 points × 25 questions · 100 points"
        },
        "settings": {
            "totalQuestions": 25,
            "timeLimitSeconds": 900,
            "passingScore": 70,
            "randomizeQuestions": true,
            "randomizeOptions": true,
            "showResultAfterSubmit": true,
            "showCorrectAnswerAfterSubmit": true,
            "showExplanationAfterSubmit": true,
            "allowRetry": true,
            "maxAttempts": 0
        },
        "pointsPerQuestion": 4,
        "maxScore": 100,
        "questionTypes": [
            {
                "id": "reading",
                "label": {
                    "id": "Pilih bacaan yang benar",
                    "en": "Choose the correct reading"
                }
            },
            {
                "id": "kanji",
                "label": {
                    "id": "Pilih kanji atau kosakata yang benar",
                    "en": "Choose the correct kanji or vocabulary"
                }
            }
        ],
        "questions": [
            {
                "id": "w3d7-exam-001",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "犯人に言いたいことは、罪を（　）ほしいということです。",
                "promptType": "word",
                "options": [
                    "つくろって",
                    "おぎなって",
                    "つぐなって",
                    "まかなって"
                ],
                "answer": "つぐなって",
                "explanation": {
                    "id": "罪を償う（つみをつぐなう）は、自分の罪や過ちに対して埋め合わせをすることです。",
                    "en": "罪を償う means to atone for or make amends for a crime."
                },
                "sourceKanji": [
                    "償"
                ]
            },
            {
                "id": "w3d7-exam-002",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "連なる水滴が真珠のネックレスのようだ。",
                "promptType": "word",
                "options": [
                    "つらなる",
                    "かさなる",
                    "つれなる",
                    "かせなる"
                ],
                "answer": "つらなる",
                "explanation": {
                    "id": "連なる（つらなる）は、ものが列になって続くことです。",
                    "en": "連なる means to form a row or continue in a line."
                },
                "sourceKanji": [
                    "連"
                ]
            },
            {
                "id": "w3d7-exam-003",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "恥ずかしくて目を（　）。",
                "promptType": "word",
                "options": [
                    "しばたかせた",
                    "はせた",
                    "そらせた",
                    "ふせた"
                ],
                "answer": "ふせた",
                "explanation": {
                    "id": "目を伏せる（めをふせる）は恥ずかしさなどから視線を下に向けることです。",
                    "en": "目を伏せる means to lower one’s eyes."
                },
                "sourceKanji": [
                    "伏"
                ]
            },
            {
                "id": "w3d7-exam-004",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "休憩時間にネクタイを（　）。",
                "promptType": "word",
                "options": [
                    "しめた",
                    "ゆるめた",
                    "そめた",
                    "あらためた"
                ],
                "answer": "ゆるめた",
                "explanation": {
                    "id": "緩める（ゆるめる）は締まっているものをゆるくすることです。",
                    "en": "緩める means to loosen something."
                },
                "sourceKanji": [
                    "緩"
                ]
            },
            {
                "id": "w3d7-exam-005",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "彼女のハートを（　）のは一体だれなんだろう。",
                "promptType": "word",
                "options": [
                    "いとめた",
                    "みとめた",
                    "しとめた",
                    "うけとめた"
                ],
                "answer": "いとめた",
                "explanation": {
                    "id": "射止める（いとめる）は、心を射止めるという形で人の愛情を得る意味にもなります。",
                    "en": "射止める can mean to win someone’s heart."
                },
                "sourceKanji": [
                    "射"
                ]
            },
            {
                "id": "w3d7-exam-006",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "近所付き合いが（　）。",
                "promptType": "word",
                "options": [
                    "きぜわしい",
                    "まぎらわしい",
                    "いとわしい",
                    "わずらわしい"
                ],
                "answer": "わずらわしい",
                "explanation": {
                    "id": "煩わしい（わずらわしい）は面倒でわずらわしく感じることです。",
                    "en": "煩わしい means troublesome or bothersome."
                },
                "sourceKanji": [
                    "煩"
                ]
            },
            {
                "id": "w3d7-exam-007",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "子どもの健やかな成長を願う。",
                "promptType": "word",
                "options": [
                    "こまやかな",
                    "すこやかな",
                    "なごやかな",
                    "すみやかな"
                ],
                "answer": "すこやかな",
                "explanation": {
                    "id": "健やか（すこやか）は、健康で元気な様子を表します。",
                    "en": "健やか means healthy and wholesome."
                },
                "sourceKanji": [
                    "健"
                ]
            },
            {
                "id": "w3d7-exam-008",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "華々しいデビューを飾る。",
                "promptType": "word",
                "options": [
                    "はなばなしい",
                    "そうぞうしい",
                    "はではでしい",
                    "こうごうしい"
                ],
                "answer": "はなばなしい",
                "explanation": {
                    "id": "華々しい（はなばなしい）は、目立って立派で輝かしい様子です。",
                    "en": "華々しい means brilliant or spectacular."
                },
                "sourceKanji": [
                    "華"
                ]
            },
            {
                "id": "w3d7-exam-009",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "夢に描いた世界が現実のものとなる。",
                "promptType": "word",
                "options": [
                    "ねがいた",
                    "さばいた",
                    "えがいた",
                    "かついだ"
                ],
                "answer": "えがいた",
                "explanation": {
                    "id": "描く（えがく）は絵やイメージを思い描くことです。",
                    "en": "描く means to draw or picture something in one’s mind."
                },
                "sourceKanji": [
                    "描"
                ]
            },
            {
                "id": "w3d7-exam-010",
                "type": "reading",
                "question": {
                    "id": "次の文に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the sentence."
                },
                "prompt": "体を壊して、何よりも健康が第一だと悟った。",
                "promptType": "word",
                "options": [
                    "さとった",
                    "かたった",
                    "いたった",
                    "たまわった"
                ],
                "answer": "さとった",
                "explanation": {
                    "id": "悟る（さとる）は物事の本質や事情を理解することです。",
                    "en": "悟る means to realize or understand."
                },
                "sourceKanji": [
                    "悟"
                ]
            },
            {
                "id": "w3d7-exam-011",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "ピストルのたまは、幸い体には当たらなかった。",
                "promptType": "reading",
                "options": [
                    "弾",
                    "球",
                    "玉",
                    "珠"
                ],
                "answer": "弾",
                "explanation": {
                    "id": "弾（たま）は弾丸を表す場合の表記です。",
                    "en": "弾 is used for a projectile or bullet."
                },
                "sourceKanji": [
                    "弾"
                ]
            },
            {
                "id": "w3d7-exam-012",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "弁護士をこころざして法学部に入学する。",
                "promptType": "reading",
                "options": [
                    "施して",
                    "促して",
                    "催して",
                    "志して"
                ],
                "answer": "志して",
                "explanation": {
                    "id": "志す（こころざす）は目標や職業を目指すことです。",
                    "en": "志す means to aspire to or aim for something."
                },
                "sourceKanji": [
                    "志"
                ]
            },
            {
                "id": "w3d7-exam-013",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "親元をはなれて下宿する。",
                "promptType": "reading",
                "options": [
                    "触れて",
                    "隠れて",
                    "離れて",
                    "揺れて"
                ],
                "answer": "離れて",
                "explanation": {
                    "id": "離れる（はなれる）は、ある場所や人から距離を置くことです。",
                    "en": "離れる means to leave or become separated."
                },
                "sourceKanji": [
                    "離"
                ]
            },
            {
                "id": "w3d7-exam-014",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "実現できそうにない目標をかかげる。",
                "promptType": "reading",
                "options": [
                    "掲げる",
                    "揚げる",
                    "遂げる",
                    "告げる"
                ],
                "answer": "掲げる",
                "explanation": {
                    "id": "掲げる（かかげる）は目標やスローガンなどを明確に示すことです。",
                    "en": "掲げる means to put forward or display a goal."
                },
                "sourceKanji": [
                    "掲"
                ]
            },
            {
                "id": "w3d7-exam-015",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "キツネやタヌキという動物は人間にばけると信じられていた。",
                "promptType": "reading",
                "options": [
                    "漬ける",
                    "化ける",
                    "老ける",
                    "授ける"
                ],
                "answer": "化ける",
                "explanation": {
                    "id": "化ける（ばける）は別の姿に変わることです。",
                    "en": "化ける means to transform or take another form."
                },
                "sourceKanji": [
                    "化"
                ]
            },
            {
                "id": "w3d7-exam-016",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "生（　）からといって、魚を料理しない家庭が増えているらしい。",
                "promptType": "reading",
                "options": [
                    "憎い",
                    "渋い",
                    "臭い",
                    "快い"
                ],
                "answer": "臭い",
                "explanation": {
                    "id": "生臭い（なまぐさい）は魚などの生のにおいがすることです。",
                    "en": "生臭い means fishy or having a raw smell."
                },
                "sourceKanji": [
                    "臭"
                ]
            },
            {
                "id": "w3d7-exam-017",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "私は母が針と糸で（　）物をする姿が好きだ。",
                "promptType": "reading",
                "options": [
                    "縫い",
                    "編み",
                    "買い",
                    "洗い"
                ],
                "answer": "縫い",
                "explanation": {
                    "id": "縫い物（ぬいもの）は針と糸で布を縫う作業です。",
                    "en": "縫い物 means sewing."
                },
                "sourceKanji": [
                    "縫"
                ]
            },
            {
                "id": "w3d7-exam-018",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "酒を酌み（　）ながら、商談をする。",
                "promptType": "reading",
                "options": [
                    "施し",
                    "交わし",
                    "負かし",
                    "浸し"
                ],
                "answer": "交わし",
                "explanation": {
                    "id": "酌み交わす（くみかわす）は互いに酒を注ぎ合って飲むことです。",
                    "en": "酌み交わす means to drink together, pouring for one another."
                },
                "sourceKanji": [
                    "酌"
                ]
            },
            {
                "id": "w3d7-exam-019",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "味噌ラーメン、大（　）1つ、お願いします。",
                "promptType": "reading",
                "options": [
                    "茂り",
                    "盛り",
                    "周り",
                    "狩り"
                ],
                "answer": "盛り",
                "explanation": {
                    "id": "大盛り（おおもり）は通常より量を多く盛った一人前です。",
                    "en": "大盛り means a large serving."
                },
                "sourceKanji": [
                    "盛"
                ]
            },
            {
                "id": "w3d7-exam-020",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "見たかったテレビの番組を見（　）しまった。",
                "promptType": "reading",
                "options": [
                    "怠けて",
                    "誤って",
                    "外して",
                    "損なって"
                ],
                "answer": "損なって",
                "explanation": {
                    "id": "見損なう（みそこなう）は見る機会を逃す・見られずに終わる意味です。",
                    "en": "見損なう can mean to miss the chance to see something."
                },
                "sourceKanji": [
                    "損"
                ]
            },
            {
                "id": "w3d7-exam-021",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "食品販売業を（　）Aさんが事件に巻き込まれた。",
                "promptType": "reading",
                "options": [
                    "営む",
                    "試みる",
                    "催す",
                    "扱う"
                ],
                "answer": "営む",
                "explanation": {
                    "id": "営む（いとなむ）は店や事業を運営することです。元の文章では「食品販売業を営む」と使われています。",
                    "en": "営む means to run a business; the source passage uses 食品販売業を営む."
                },
                "sourceKanji": [
                    "営"
                ]
            },
            {
                "id": "w3d7-exam-022",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "事件では金品など（　）ものがないことが確認された。",
                "promptType": "reading",
                "options": [
                    "奪われた",
                    "賄われた",
                    "補われた",
                    "伴われた"
                ],
                "answer": "奪われた",
                "explanation": {
                    "id": "奪う（うばう）の受け身形は奪われるです。",
                    "en": "奪われた is the passive form of 奪う, meaning taken away."
                },
                "sourceKanji": [
                    "奪"
                ]
            },
            {
                "id": "w3d7-exam-023",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "顔をひどく（　）あとがある。",
                "promptType": "reading",
                "options": [
                    "殴られた",
                    "縫われた",
                    "繕われた",
                    "導かれた"
                ],
                "answer": "殴られた",
                "explanation": {
                    "id": "殴る（なぐる）の受け身形は殴られるです。",
                    "en": "殴られた is the passive form of 殴る, meaning was hit."
                },
                "sourceKanji": [
                    "殴"
                ]
            },
            {
                "id": "w3d7-exam-024",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "警察は（　）による犯行とみて捜査している。",
                "promptType": "reading",
                "options": [
                    "恨み",
                    "誇り",
                    "潤い",
                    "勢い"
                ],
                "answer": "恨み",
                "explanation": {
                    "id": "恨み（うらみ）は相手への強い不満や憎しみの気持ちです。",
                    "en": "恨み means resentment or a grudge."
                },
                "sourceKanji": [
                    "恨"
                ]
            },
            {
                "id": "w3d7-exam-025",
                "type": "kanji",
                "question": {
                    "id": "下線部の読み・漢字として正しいものを選びなさい。",
                    "en": "Choose the correct reading or kanji."
                },
                "prompt": "警察は（　）人物を見た人がいなかったか情報を募っている。",
                "promptType": "reading",
                "options": [
                    "怪しい",
                    "健やかな",
                    "和やかな",
                    "速やかな"
                ],
                "answer": "怪しい",
                "explanation": {
                    "id": "怪しい（あやしい）は不審で疑わしい様子を表します。",
                    "en": "怪しい means suspicious or dubious."
                },
                "sourceKanji": [
                    "怪"
                ]
            }
        ]
    }
};

export default minggu3Hari7;
