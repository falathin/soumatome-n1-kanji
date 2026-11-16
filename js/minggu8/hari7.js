const minggu8Hari7 = {
    "week": 8,
    "day": 7,
    "title": {
        "id": "Hari 7",
        "en": "Day 7"
    },
    "subtitle": {
        "id": "第8週 新聞を読もう — 実戦問題",
        "en": "Week 8 — Practical Exam"
    },
    "source": {
        "label": "Minggu 8 Hari 7",
        "image": "assets/images/backgrounds/mobile-normal.png",
        "referencePages": {
            "id": "Halaman 136–137",
            "en": "Pages 136–137"
        }
    },
    "kanji": [
        {
            "id": "w8d7-completion-marker",
            "character": "完",
            "meaning": {
                "id": "Penanda penyelesaian Hari 7",
                "en": "Day 7 completion marker"
            },
            "onyomi": [
                {
                    "text": "カン",
                    "reading": "かん"
                }
            ],
            "kunyomi": [
                {
                    "text": "まったく",
                    "reading": "まったく"
                }
            ],
            "vocabulary": [
                {
                    "word": "完了",
                    "reading": "かんりょう",
                    "meaning": {
                        "id": "selesai; penyelesaian",
                        "en": "completion; finished"
                    }
                }
            ],
            "usage": {
                "id": "Kartu ini hanya digunakan sebagai penanda penyelesaian ujian Hari 7.",
                "en": "This card is only used as a completion marker for the Day 7 exam."
            },
            "nuance": {
                "id": "Tidak termasuk materi pembelajaran kanji; seluruh materi utama di Hari 7 disajikan melalui ujian.",
                "en": "This is not a kanji lesson; all core Day 7 content is presented through the exam."
            },
            "philosophy": {
                "id": "Kerjakan seluruh 25 soal, tinjau alasan jawaban, lalu tandai modul selesai.",
                "en": "Complete all 25 questions, review the reasoning, then mark the module as complete."
            },
            "sourceNote": "Completion marker only."
        }
    ],
    "exam": {
        "enabled": true,
        "id": "week8-day7-exam",
        "title": {
            "id": "Ujian Minggu 8 - Hari 7",
            "en": "Week 8 - Day 7 Practical Exam"
        },
        "description": {
            "id": "Ujian praktik Minggu 8 berdasarkan materi politik, isu internasional, ekonomi, kesehatan, peristiwa kriminal, dan kehidupan sosial. Soal 1–10 menguji bacaan, 11–15 penulisan kanji, 16–20 pelengkap kata, dan 21–25 kosakata dalam konteks kalimat.",
            "en": "Week 8 practical exam covering politics, international issues, the economy, health, crime, and social life. Questions 1–10 test readings, 11–15 kanji spelling, 16–20 word completion, and 21–25 vocabulary in context."
        },
        "subtitle": {
            "id": "制限時間：15分 ・ 1問4点 × 25問 ・ 100点満点",
            "en": "Time limit: 15 minutes · 4 points × 25 questions · 100 points"
        },
        "settings": {
            "totalQuestions": 25,
            "timeLimitSeconds": 900,
            "passingScore": 70,
            "randomizeQuestions": false,
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
            "id": "答えは別冊 p.15",
            "en": "Answers: separate answer booklet p.15"
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
                    "id": "Pilih penulisan kanji yang benar",
                    "en": "Choose the correct kanji spelling"
                }
            },
            {
                "id": "context",
                "label": {
                    "id": "Pilih kata yang sesuai konteks",
                    "en": "Choose the word that fits the context"
                }
            }
        ],
        "questions": [
            {
                "id": "d7-01",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "病気を克服して社会に復帰する。",
                "promptType": "sentence",
                "options": [
                    "かっぷく",
                    "こくふく",
                    "こうふく",
                    "かいふく"
                ],
                "answer": "こくふく",
                "explanation": {
                    "id": "克服（こくふく） berarti mengatasi penyakit atau kesulitan. Bacaan lain tidak sesuai dengan kata 克服.",
                    "en": "克服（こくふく）means to overcome an illness or difficulty. The other readings do not match 克服."
                }
            },
            {
                "id": "d7-02",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "児童虐待事件の再発防止に取り組む。",
                "promptType": "sentence",
                "options": [
                    "じょくたい",
                    "ぎょくたい",
                    "ごくたい",
                    "ぎゃくたい"
                ],
                "answer": "ぎゃくたい",
                "explanation": {
                    "id": "虐待 dibaca ぎゃくたい dan berarti penganiayaan atau perlakuan buruk.",
                    "en": "虐待 is read ぎゃくたい and means abuse or mistreatment."
                }
            },
            {
                "id": "d7-03",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "皇太子様がA国首相を表敬訪問した。",
                "promptType": "sentence",
                "options": [
                    "おうたいし",
                    "こうたいし",
                    "のうたいし",
                    "ほうたいし"
                ],
                "answer": "こうたいし",
                "explanation": {
                    "id": "皇太子 dibaca こうたいし, yaitu putra mahkota.",
                    "en": "皇太子 is read こうたいし and means Crown Prince."
                }
            },
            {
                "id": "d7-04",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "B市教育委員会は給食費の滞納に対して法的措置を申し立てた。",
                "promptType": "sentence",
                "options": [
                    "そち",
                    "しょち",
                    "そうち",
                    "しょうち"
                ],
                "answer": "そち",
                "explanation": {
                    "id": "措置 dibaca そち dan berarti langkah atau tindakan resmi.",
                    "en": "措置 is read そち and means a measure or official action."
                }
            },
            {
                "id": "d7-05",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "エコカーの大衆化が進んでいる。",
                "promptType": "sentence",
                "options": [
                    "だいしゅうか",
                    "たいしゅうか",
                    "たいきゅうか",
                    "だいきゅうか"
                ],
                "answer": "たいしゅうか",
                "explanation": {
                    "id": "大衆化 dibaca たいしゅうか, yaitu proses menjadi umum atau digunakan masyarakat luas.",
                    "en": "大衆化 is read たいしゅうか, meaning popularization or becoming widespread among the public."
                }
            },
            {
                "id": "d7-06",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "派遣法の改正で雇用情勢が悪化する懸念がある。",
                "promptType": "sentence",
                "options": [
                    "かよう",
                    "しゅうよう",
                    "こよう",
                    "とうよう"
                ],
                "answer": "こよう",
                "explanation": {
                    "id": "雇用 dibaca こよう dan berarti ketenagakerjaan atau employment.",
                    "en": "雇用 is read こよう and means employment."
                }
            },
            {
                "id": "d7-07",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "A工業が昨年来、高値を更新している。",
                "promptType": "sentence",
                "options": [
                    "たかち",
                    "こうち",
                    "こうちょく",
                    "たかね"
                ],
                "answer": "たかね",
                "explanation": {
                    "id": "高値 dibaca たかね, berarti harga tinggi atau rekor harga tertinggi dalam konteks pasar.",
                    "en": "高値 is read たかね and means a high price or record-high price in a market context."
                }
            },
            {
                "id": "d7-08",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "胃腸の調子が悪く吐き気もする。",
                "promptType": "sentence",
                "options": [
                    "あきけ",
                    "はきけ",
                    "ときけ",
                    "かきけ"
                ],
                "answer": "はきけ",
                "explanation": {
                    "id": "吐き気 dibaca はきけ dan berarti rasa mual.",
                    "en": "吐き気 is read はきけ and means nausea."
                }
            },
            {
                "id": "d7-09",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "敵を欺くにはまず味方から、という表現があります。",
                "promptType": "sentence",
                "options": [
                    "あざむく",
                    "おもむく",
                    "そむく",
                    "さばく"
                ],
                "answer": "あざむく",
                "explanation": {
                    "id": "欺く dibaca あざむく dan berarti menipu atau memperdaya.",
                    "en": "欺く is read あざむく and means to deceive."
                }
            },
            {
                "id": "d7-10",
                "type": "reading",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "少子化対策担当大臣が認可保育所を視察した。",
                "promptType": "sentence",
                "options": [
                    "そしか",
                    "しょしか",
                    "しょうしか",
                    "せいすか"
                ],
                "answer": "しょうしか",
                "explanation": {
                    "id": "少子化 dibaca しょうしか dan berarti penurunan angka kelahiran.",
                    "en": "少子化 is read しょうしか and means a declining birth rate."
                }
            },
            {
                "id": "d7-11",
                "type": "kanji",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "救急搬送されたかんじゃが何軒もの病院で受け入れを拒否された。",
                "promptType": "sentence",
                "options": [
                    "傷者",
                    "看者",
                    "病者",
                    "患者"
                ],
                "answer": "患者",
                "explanation": {
                    "id": "患者（かんじゃ）berarti pasien; inilah penulisan kanji yang tepat untuk かんじゃ.",
                    "en": "患者（かんじゃ）means patient; it is the correct kanji spelling for かんじゃ."
                }
            },
            {
                "id": "d7-12",
                "type": "kanji",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "働く母親の増加とともに保育園、たくじしょの需要が伸びている。",
                "promptType": "sentence",
                "options": [
                    "宅児所",
                    "託児所",
                    "拓児所",
                    "択児所"
                ],
                "answer": "託児所",
                "explanation": {
                    "id": "託児所（たくじしょ）berarti tempat penitipan anak.",
                    "en": "託児所（たくじしょ）means a childcare center or nursery."
                }
            },
            {
                "id": "d7-13",
                "type": "kanji",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "高齢化社会におけるしょうがい学習センターの意義は大きい。",
                "promptType": "sentence",
                "options": [
                    "寿命",
                    "生涯",
                    "災害",
                    "衝突"
                ],
                "answer": "生涯",
                "explanation": {
                    "id": "生涯（しょうがい）berarti sepanjang hidup; 生涯学習 adalah pembelajaran sepanjang hayat.",
                    "en": "生涯（しょうがい）means a lifetime; 生涯学習 is lifelong learning."
                }
            },
            {
                "id": "d7-14",
                "type": "kanji",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "ごみの不法投棄はしょばつされます。",
                "promptType": "sentence",
                "options": [
                    "賞罰",
                    "財閥",
                    "処罰",
                    "派閥"
                ],
                "answer": "処罰",
                "explanation": {
                    "id": "処罰（しょばつ）berarti hukuman atau tindakan menghukum.",
                    "en": "処罰（しょばつ）means punishment or penalization."
                }
            },
            {
                "id": "d7-15",
                "type": "kanji",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "野生の動物におそわれる事件が増えている。",
                "promptType": "sentence",
                "options": [
                    "襲われる",
                    "恐われる",
                    "惹われる",
                    "誘われる"
                ],
                "answer": "襲われる",
                "explanation": {
                    "id": "襲われる adalah bentuk pasif dari 襲う（おそう）, berarti diserang.",
                    "en": "襲われる is the passive form of 襲う（おそう）, meaning to be attacked."
                }
            },
            {
                "id": "d7-16",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "A市長選で当選の中山（　）は、当選の喜びを次のように述べた。",
                "promptType": "sentence",
                "options": [
                    "殿",
                    "君",
                    "氏",
                    "様"
                ],
                "answer": "氏",
                "explanation": {
                    "id": "氏（し） adalah sebutan formal yang diletakkan setelah nama seseorang dalam berita.",
                    "en": "氏（し） is a formal suffix placed after a person's name in news writing."
                }
            },
            {
                "id": "d7-17",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "世論調査で内閣の支持（　）が低下していることがわかった。",
                "promptType": "sentence",
                "options": [
                    "率",
                    "割",
                    "卒",
                    "輪"
                ],
                "answer": "率",
                "explanation": {
                    "id": "支持率（しじりつ） adalah tingkat dukungan atau approval rating.",
                    "en": "支持率（しじりつ） means approval rating."
                }
            },
            {
                "id": "d7-18",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "B県知事は報道（　）の質問に終始笑顔で答えた。",
                "promptType": "sentence",
                "options": [
                    "衆",
                    "陣",
                    "盟",
                    "営"
                ],
                "answer": "陣",
                "explanation": {
                    "id": "報道陣（ほうどうじん） berarti kelompok wartawan atau press corps.",
                    "en": "報道陣（ほうどうじん） means the press corps."
                }
            },
            {
                "id": "d7-19",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "今回の選挙では保守（　）が優勢とみられている。",
                "promptType": "sentence",
                "options": [
                    "圏",
                    "流",
                    "式",
                    "派"
                ],
                "answer": "派",
                "explanation": {
                    "id": "保守派（ほしゅは） berarti kelompok atau faksi konservatif.",
                    "en": "保守派（ほしゅは） means the conservative faction."
                }
            },
            {
                "id": "d7-20",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "新聞の投書（　）に投稿する。",
                "promptType": "sentence",
                "options": [
                    "枠",
                    "覧",
                    "欄",
                    "班"
                ],
                "answer": "欄",
                "explanation": {
                    "id": "投書欄（とうしょらん） adalah kolom surat atau opini pembaca di surat kabar.",
                    "en": "投書欄（とうしょらん） is the letters-to-the-editor column in a newspaper."
                }
            },
            {
                "id": "d7-21",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "政府は、大地震に見舞われたA国の（　）から要請を受けた。",
                "promptType": "sentence",
                "options": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "answer": "大統領",
                "explanation": {
                    "id": "Urutan kalimat sumber adalah A国の大統領から要請を受ける, yaitu menerima permintaan dari presiden negara A.",
                    "en": "The source sentence reads A国の大統領から要請を受ける: the request comes from Country A's president."
                },
                "sharedQuestionGroup": "d7-problem4",
                "sharedWordBank": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "useEachWordOnce": true,
                "sourcePrompt": "政府は、大地震に見舞われたA国の [21] ( ) から [22] ( ) を受け、[23] ( ) [24] ( ) を決定し、医療チームを [25] ( ) に向かわせた。"
            },
            {
                "id": "d7-22",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "政府は、大地震に見舞われたA国の大統領から（　）を受けた。",
                "promptType": "sentence",
                "options": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "answer": "要請",
                "explanation": {
                    "id": "要請（ようせい） berarti permintaan resmi; frasa yang sesuai adalah 要請を受ける.",
                    "en": "要請（ようせい） means a formal request; the natural phrase is 要請を受ける."
                },
                "sharedQuestionGroup": "d7-problem4",
                "sharedWordBank": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "useEachWordOnce": true,
                "sourcePrompt": "政府は、大地震に見舞われたA国の [21] ( ) から [22] ( ) を受け、[23] ( ) [24] ( ) を決定し、医療チームを [25] ( ) に向かわせた。"
            },
            {
                "id": "d7-23",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "政府は要請を受け、（　）支援策を決定した。",
                "promptType": "sentence",
                "options": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "answer": "緊急",
                "explanation": {
                    "id": "緊急支援策 berarti langkah bantuan darurat yang diputuskan setelah bencana.",
                    "en": "緊急支援策 means emergency support measures decided after the disaster."
                },
                "sharedQuestionGroup": "d7-problem4",
                "sharedWordBank": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "useEachWordOnce": true,
                "sourcePrompt": "政府は、大地震に見舞われたA国の [21] ( ) から [22] ( ) を受け、[23] ( ) [24] ( ) を決定し、医療チームを [25] ( ) に向かわせた。"
            },
            {
                "id": "d7-24",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "政府は要請を受け、緊急（　）を決定した。",
                "promptType": "sentence",
                "options": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "answer": "支援策",
                "explanation": {
                    "id": "支援策（しえんさく） berarti langkah atau kebijakan bantuan.",
                    "en": "支援策（しえんさく） means support measures or assistance policy."
                },
                "sharedQuestionGroup": "d7-problem4",
                "sharedWordBank": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "useEachWordOnce": true,
                "sourcePrompt": "政府は、大地震に見舞われたA国の [21] ( ) から [22] ( ) を受け、[23] ( ) [24] ( ) を決定し、医療チームを [25] ( ) に向かわせた。"
            },
            {
                "id": "d7-25",
                "type": "context",
                "question": {
                    "id": "次の文の下線部または（　）に入る最もよいものを選びなさい。",
                    "en": "Choose the best reading, kanji spelling, or word to complete the sentence."
                },
                "prompt": "政府は医療チームを（　）に向かわせた。",
                "promptType": "sentence",
                "options": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "answer": "被災地",
                "explanation": {
                    "id": "被災地（ひさいち） adalah daerah yang terkena bencana; tim medis diarahkan ke lokasi terdampak.",
                    "en": "被災地（ひさいち） is a disaster-stricken area; the medical team is sent to the affected location."
                },
                "sharedQuestionGroup": "d7-problem4",
                "sharedWordBank": [
                    "被災地",
                    "大統領",
                    "要請",
                    "支援策",
                    "大気圏",
                    "緊急",
                    "請求"
                ],
                "useEachWordOnce": true,
                "sourcePrompt": "政府は、大地震に見舞われたA国の [21] ( ) から [22] ( ) を受け、[23] ( ) [24] ( ) を決定し、医療チームを [25] ( ) に向かわせた。"
            }
        ]
    }
};

export default minggu8Hari7;