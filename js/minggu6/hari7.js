const minggu6Hari7 = {
    "week": 6,
    "day": 7,
    "title": {
        "id": "Hari 7",
        "en": "Day 7"
    },
    "subtitle": {
        "id": "第6週 実戦問題 — Ujian praktik Minggu 6",
        "en": "Week 6 — Practical Exam"
    },
    "source": {
        "label": "Minggu 6 Hari 7",
        "image": "assets/images/backgrounds/mobile-normal.png"
    },
    "kanji": [
        {
            "id": "week6-day7-completion-marker",
            "character": "完",
            "meaning": {
                "id": "Penanda penyelesaian Hari 7; bukan materi kanji baru.",
                "en": "Day 7 completion marker; not new kanji study material."
            },
            "onyomi": [
                {
                    "text": "カン",
                    "reading": "カン"
                }
            ],
            "kunyomi": [],
            "usage": {
                "id": "Kartu ini hanya digunakan sebagai penanda penyelesaian ujian besar Hari 7.",
                "en": "This card is used only as a completion marker for the Day 7 major exam."
            },
            "nuance": {
                "id": "完 dipakai sebagai simbol “selesai”; kartu ini tidak dimaksudkan sebagai pembahasan lengkap kanji 完.",
                "en": "完 is used as a symbol of completion; this card is not intended as a full study entry for kanji 完."
            },
            "philosophy": {
                "id": "Selesaikan seluruh ujian, periksa hasilnya, lalu tandai kartu ini sebagai hafal untuk menutup Minggu 6.",
                "en": "Complete the entire exam, review the result, then mark this card as memorized to close Week 6."
            },
            "vocabulary": [
                {
                    "word": "完了",
                    "reading": "かんりょう",
                    "meaning": {
                        "id": "selesai; penyelesaian",
                        "en": "completion; finish"
                    }
                }
            ],
            "sourceNote": "Completion marker only."
        }
    ],
    "notes": [
        {
            "id": "Kartu 完 hanya berfungsi sebagai penanda bahwa seluruh rangkaian Minggu 6 telah diselesaikan.",
            "en": "The 完 card only marks completion of the full Week 6 sequence."
        },
        {
            "id": "Ujian besar berisi 25 soal, dengan 10 soal pertama mengikuti transkripsi halaman 107 dan 15 soal tambahan disusun dari materi Hari 4–6.",
            "en": "The major exam contains 25 questions: the first 10 follow the supplied transcription of page 107, and 15 additional questions are based on Days 4–6."
        }
    ],
    "exam": {
        "enabled": true,
        "id": "week6-day7-major-exam",
        "title": {
            "id": "Ujian Besar Minggu 6 - Hari 7",
            "en": "Week 6 - Day 7 Major Exam"
        },
        "description": {
            "id": "Ujian praktik gabungan Minggu 6. Soal menguji bacaan kanji, pemilihan kosakata, pasangan antonim, ungkapan tetap, dan 四字熟語.",
            "en": "A comprehensive Week 6 practical exam covering kanji readings, vocabulary selection, antonyms, fixed expressions, and 四字熟語."
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
        "answerReference": {
            "id": "答えは別冊を参照してください。",
            "en": "Refer to the separate answer key."
        },
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
                "id": "w6d7-01",
                "type": "reading",
                "question": {
                    "id": "次の漢字の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the marked kanji."
                },
                "prompt": "この辺りは【趣】のある店が並んでいる。",
                "promptType": "reading",
                "options": [
                    "かがやき",
                    "おもむき",
                    "ひらめき",
                    "ひたむき"
                ],
                "answer": "おもむき",
                "explanation": {
                    "id": "趣（おもむき）は、場所や物事が持つ味わい・風情を表します。",
                    "en": "趣（おもむき）means charm, atmosphere, or distinctive appeal."
                },
                "sourceKanji": [
                    "趣"
                ]
            },
            {
                "id": "w6d7-02",
                "type": "reading",
                "question": {
                    "id": "次の漢字の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the marked kanji."
                },
                "prompt": "選手たちは【技】を磨いて試合に臨んだ。",
                "promptType": "reading",
                "options": [
                    "わざ",
                    "えだ",
                    "ひざ",
                    "うで"
                ],
                "answer": "わざ",
                "explanation": {
                    "id": "技（わざ）は技術や技能を指します。",
                    "en": "技（わざ）means a skill or technique."
                },
                "sourceKanji": [
                    "技"
                ]
            },
            {
                "id": "w6d7-03",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "手のひらの【静脈】で本人を認証するシステムがある。",
                "promptType": "reading",
                "options": [
                    "せいみゃく",
                    "そうみゃく",
                    "じょうみゃく",
                    "ちょうみゃく"
                ],
                "answer": "じょうみゃく",
                "explanation": {
                    "id": "静脈（じょうみゃく）は動脈（どうみゃく）と対になる血管です。",
                    "en": "静脈（じょうみゃく）means vein, contrasted with 動脈（どうみゃく）, artery."
                },
                "sourceKanji": [
                    "静"
                ]
            },
            {
                "id": "w6d7-04",
                "type": "reading",
                "question": {
                    "id": "次の漢字の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the marked kanji."
                },
                "prompt": "【志】を果たして故郷に帰る。",
                "promptType": "reading",
                "options": [
                    "こころみ",
                    "こころがけ",
                    "こころえ",
                    "こころざし"
                ],
                "answer": "こころざし",
                "explanation": {
                    "id": "志（こころざし）は目標や理想に向かう強い意志を表します。",
                    "en": "志（こころざし）means aspiration or strong purpose."
                },
                "sourceKanji": [
                    "志"
                ]
            },
            {
                "id": "w6d7-05",
                "type": "reading",
                "question": {
                    "id": "次の漢字の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the marked kanji."
                },
                "prompt": "あの役人の行為は腹に【据え】かねる。",
                "promptType": "reading",
                "options": [
                    "こらえ",
                    "すえ",
                    "あつらえ",
                    "かまえ"
                ],
                "answer": "すえ",
                "explanation": {
                    "id": "据える（すえる）の連用形は据え（すえ）です。",
                    "en": "据え is the continuative form of 据える（すえる）."
                },
                "sourceKanji": [
                    "据"
                ]
            },
            {
                "id": "w6d7-06",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "【推薦】入学で高校に入る。",
                "promptType": "reading",
                "options": [
                    "ちゅうせん",
                    "すいしょう",
                    "ちゅうしょう",
                    "すいせん"
                ],
                "answer": "すいせん",
                "explanation": {
                    "id": "推薦（すいせん）は人や物事を適切だとして勧めることです。",
                    "en": "推薦（すいせん）means recommendation."
                },
                "sourceKanji": [
                    "推"
                ]
            },
            {
                "id": "w6d7-07",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "彼は【炊事】、洗濯、掃除、何でもできます。",
                "promptType": "reading",
                "options": [
                    "すいじ",
                    "けつじ",
                    "いくじ",
                    "かじ"
                ],
                "answer": "すいじ",
                "explanation": {
                    "id": "炊事（すいじ）は食事の準備や調理をすることです。",
                    "en": "炊事（すいじ）means cooking and kitchen work."
                },
                "sourceKanji": [
                    "炊"
                ]
            },
            {
                "id": "w6d7-08",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "【扶養】家族がいると所得税が控除される。",
                "promptType": "reading",
                "options": [
                    "ほよう",
                    "こよう",
                    "ふよう",
                    "かよう"
                ],
                "answer": "ふよう",
                "explanation": {
                    "id": "扶養（ふよう）は家族などの生活を支えることです。",
                    "en": "扶養（ふよう）means supporting a dependent."
                },
                "sourceKanji": [
                    "扶"
                ]
            },
            {
                "id": "w6d7-09",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "私は大ざっぱですが、息子は【几帳面】です。",
                "promptType": "reading",
                "options": [
                    "くちょうめん",
                    "まじめ",
                    "きちょうめん",
                    "まめ"
                ],
                "answer": "きちょうめん",
                "explanation": {
                    "id": "几帳面（きちょうめん）は細かいところまで注意が行き届き、きちんとしている様子です。",
                    "en": "几帳面（きちょうめん）means meticulous, methodical, and orderly."
                },
                "sourceKanji": [
                    "几"
                ]
            },
            {
                "id": "w6d7-10",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "悠長にしている暇はない。【迅速】に対応するように。",
                "promptType": "reading",
                "options": [
                    "じんそく",
                    "しゅんそく",
                    "さっそく",
                    "びんそく"
                ],
                "answer": "じんそく",
                "explanation": {
                    "id": "迅速（じんそく）は物事を速く進めることです。",
                    "en": "迅速（じんそく）means rapid or prompt."
                },
                "sourceKanji": [
                    "迅"
                ]
            },
            {
                "id": "w6d7-11",
                "type": "reading",
                "question": {
                    "id": "次の表現の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the expression."
                },
                "prompt": "【誤解を招く】",
                "promptType": "reading",
                "options": [
                    "ごかいをまねく",
                    "ごかいをとなえる",
                    "ごかいをはかる",
                    "ごかいをねる"
                ],
                "answer": "ごかいをまねく",
                "explanation": {
                    "id": "誤解を招く（ごかいをまねく）は誤解を引き起こすという意味です。",
                    "en": "誤解を招く means to cause a misunderstanding."
                },
                "sourceKanji": [
                    "誤",
                    "招"
                ]
            },
            {
                "id": "w6d7-12",
                "type": "reading",
                "question": {
                    "id": "次の表現の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the expression."
                },
                "prompt": "【融通が利く】",
                "promptType": "reading",
                "options": [
                    "ゆうずうがきく",
                    "ゆうつうがきく",
                    "ゆずうがきく",
                    "ゆうずうがりく"
                ],
                "answer": "ゆうずうがきく",
                "explanation": {
                    "id": "融通が利く（ゆうずうがきく）は柔軟に対応できるという意味です。",
                    "en": "融通が利く means to be flexible and adaptable."
                },
                "sourceKanji": [
                    "融",
                    "利"
                ]
            },
            {
                "id": "w6d7-13",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "【時代錯誤】",
                "promptType": "reading",
                "options": [
                    "じだいさくご",
                    "じだいさっご",
                    "じたいさくご",
                    "じだいさくこう"
                ],
                "answer": "じだいさくご",
                "explanation": {
                    "id": "時代錯誤（じだいさくご）は時代に合わない考え方や発言を指します。",
                    "en": "時代錯誤（じだいさくご）means anachronistic or out of step with the times."
                },
                "sourceKanji": [
                    "錯"
                ]
            },
            {
                "id": "w6d7-14",
                "type": "reading",
                "question": {
                    "id": "次の熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "【妥協案】",
                "promptType": "reading",
                "options": [
                    "だきょうあん",
                    "だこうあん",
                    "たいきょうあん",
                    "だきょうおん"
                ],
                "answer": "だきょうあん",
                "explanation": {
                    "id": "妥協案（だきょうあん）は互いに譲り合ってまとめた案です。",
                    "en": "妥協案（だきょうあん）means a compromise proposal."
                },
                "sourceKanji": [
                    "妥"
                ]
            },
            {
                "id": "w6d7-15",
                "type": "reading",
                "question": {
                    "id": "次の言葉の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the word."
                },
                "prompt": "【懲りない】",
                "promptType": "reading",
                "options": [
                    "こりない",
                    "こらない",
                    "ちょうりない",
                    "こりたない"
                ],
                "answer": "こりない",
                "explanation": {
                    "id": "懲りない（こりない）は経験や注意を受けても行動を改めないことです。",
                    "en": "懲りない（こりない）means not learning one’s lesson."
                },
                "sourceKanji": [
                    "懲"
                ]
            },
            {
                "id": "w6d7-16",
                "type": "kanji",
                "question": {
                    "id": "文脈に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the context."
                },
                "prompt": "双方が少しずつ譲り合い、現実的な（　）をまとめた。",
                "promptType": "reading",
                "options": [
                    "妥協案",
                    "豪華案",
                    "現状案",
                    "迅速案"
                ],
                "answer": "妥協案",
                "explanation": {
                    "id": "妥協案（だきょうあん）は、互いに譲り合ってまとめる案です。",
                    "en": "妥協案 is a proposal formed through mutual concessions."
                },
                "sourceKanji": [
                    "妥"
                ]
            },
            {
                "id": "w6d7-17",
                "type": "kanji",
                "question": {
                    "id": "反対の意味になる言葉を選びなさい。",
                    "en": "Choose the antonym."
                },
                "prompt": "敏感な ⇔ （　）",
                "promptType": "reading",
                "options": [
                    "鈍感な",
                    "慎重な",
                    "柔軟な",
                    "悠長な"
                ],
                "answer": "鈍感な",
                "explanation": {
                    "id": "敏感な（びんかんな）の反対は鈍感な（どんかんな）です。",
                    "en": "鈍感な is the antonym of 敏感な."
                },
                "sourceKanji": [
                    "敏",
                    "鈍"
                ]
            },
            {
                "id": "w6d7-18",
                "type": "kanji",
                "question": {
                    "id": "文脈に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the context."
                },
                "prompt": "先頭のランナーとの距離を（　）追いついた。",
                "promptType": "reading",
                "options": [
                    "縮めて",
                    "伸ばして",
                    "膨張して",
                    "収縮して"
                ],
                "answer": "縮めて",
                "explanation": {
                    "id": "距離を縮めるは、二つの位置の隔たりを小さくすることです。",
                    "en": "距離を縮める means to reduce the distance between two positions."
                },
                "sourceKanji": [
                    "縮"
                ]
            },
            {
                "id": "w6d7-19",
                "type": "kanji",
                "question": {
                    "id": "反対の意味になる言葉を選びなさい。",
                    "en": "Choose the contrasting term."
                },
                "prompt": "理論 ⇔ （　）",
                "promptType": "reading",
                "options": [
                    "実践",
                    "虚偽",
                    "真実",
                    "肯定"
                ],
                "answer": "実践",
                "explanation": {
                    "id": "理論（りろん）と実践（じっせん）は、理屈や考えと実際の行動を対比します。",
                    "en": "理論 and 実践 contrast theory with practical action."
                },
                "sourceKanji": [
                    "理"
                ]
            },
            {
                "id": "w6d7-20",
                "type": "kanji",
                "question": {
                    "id": "文脈に合う言葉を選びなさい。",
                    "en": "Choose the word that best fits the context."
                },
                "prompt": "この道路は（　）的に渋滞している。",
                "promptType": "reading",
                "options": [
                    "慢性",
                    "悠長",
                    "迅速",
                    "敏感"
                ],
                "answer": "慢性",
                "explanation": {
                    "id": "慢性的（まんせいてき）は長く続いている状態を表します。",
                    "en": "慢性的 means chronic or continuing over a long period."
                },
                "sourceKanji": [
                    "慢"
                ]
            },
            {
                "id": "w6d7-21",
                "type": "kanji",
                "question": {
                    "id": "反対の意味になる言葉を選びなさい。",
                    "en": "Choose the contrasting term."
                },
                "prompt": "酷評 ⇔ （　）",
                "promptType": "reading",
                "options": [
                    "絶賛",
                    "駄作",
                    "悲劇",
                    "没落"
                ],
                "answer": "絶賛",
                "explanation": {
                    "id": "酷評（こくひょう）は厳しい批評、絶賛（ぜっさん）は非常に高い評価です。",
                    "en": "酷評 is harsh criticism; 絶賛 is high praise."
                },
                "sourceKanji": [
                    "酷"
                ]
            },
            {
                "id": "w6d7-22",
                "type": "reading",
                "question": {
                    "id": "次の四字熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the four-character idiom."
                },
                "prompt": "【一言一句】",
                "promptType": "reading",
                "options": [
                    "いちごんいっく",
                    "いちげんいっく",
                    "いちごんいちく",
                    "いっげんいっく"
                ],
                "answer": "いちごんいっく",
                "explanation": {
                    "id": "一言一句（いちごんいっく）は一つ一つの言葉を指します。",
                    "en": "一言一句 means every single word."
                },
                "sourceKanji": [
                    "言"
                ]
            },
            {
                "id": "w6d7-23",
                "type": "reading",
                "question": {
                    "id": "次の四字熟語の読み方として最もよいものを選びなさい。",
                    "en": "Choose the best reading of the four-character idiom."
                },
                "prompt": "【試行錯誤】",
                "promptType": "reading",
                "options": [
                    "しこうさくご",
                    "しぎょうさくご",
                    "しこうさっご",
                    "しこうさくこう"
                ],
                "answer": "しこうさくご",
                "explanation": {
                    "id": "試行錯誤（しこうさくご）は試して失敗を直しながら方法を探すことです。",
                    "en": "試行錯誤 means trial and error."
                },
                "sourceKanji": [
                    "試"
                ]
            },
            {
                "id": "w6d7-24",
                "type": "kanji",
                "question": {
                    "id": "文脈に合う四字熟語を選びなさい。",
                    "en": "Choose the idiom that best fits the context."
                },
                "prompt": "状況が急に変わったので、計画をその場に合わせて調整した。",
                "promptType": "reading",
                "options": [
                    "臨機応変",
                    "右往左往",
                    "自信喪失",
                    "無色透明"
                ],
                "answer": "臨機応変",
                "explanation": {
                    "id": "臨機応変は状況に応じて対応を変えることです。",
                    "en": "臨機応変 means adapting to the circumstances."
                },
                "sourceKanji": [
                    "臨"
                ]
            },
            {
                "id": "w6d7-25",
                "type": "kanji",
                "question": {
                    "id": "文脈に合う四字熟語を選びなさい。",
                    "en": "Choose the idiom that best fits the context."
                },
                "prompt": "結婚式、葬式など人生の重要な儀式をまとめて何というか。",
                "promptType": "reading",
                "options": [
                    "冠婚葬祭",
                    "和洋折衷",
                    "喜怒哀楽",
                    "起承転結"
                ],
                "answer": "冠婚葬祭",
                "explanation": {
                    "id": "冠婚葬祭は冠礼・婚礼・葬儀・祭礼など人生の節目の儀式を表す言葉です。",
                    "en": "冠婚葬祭 is a collective term for important life ceremonies such as weddings and funerals."
                },
                "sourceKanji": [
                    "冠"
                ]
            }
        ]
    }
};

export default minggu6Hari7;
