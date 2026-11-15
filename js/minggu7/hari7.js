const minggu7Hari7 = {
  "week": 7,
  "day": 7,
  "title": {
    "id": "Hari 7",
    "en": "Day 7"
  },
  "subtitle": {
    "id": "第7週 実戦問題 — Ujian Besar",
    "en": "Week 7 — Comprehensive Practical Exam"
  },
  "source": {
    "label": "Minggu 7 Hari 7",
    "image": "assets/images/backgrounds/mobile-normal.png"
  },
  "kanji": [
    {
      "id": "w7d7-completion-marker",
      "character": "完",
      "meaning": {
        "id": "Penanda penyelesaian Hari 7; bukan materi kanji baru.",
        "en": "Day 7 completion marker; not a new kanji lesson."
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
        "en": "This card is only used as a completion marker for the Day 7 comprehensive exam."
      },
      "nuance": {
        "id": "Tidak termasuk materi pembelajaran kanji Minggu 7. Fokus hari ini adalah ujian gabungan.",
        "en": "This is not part of the Week 7 kanji-learning material. The focus today is the comprehensive exam."
      },
      "philosophy": {
        "id": "Selesaikan seluruh ujian, periksa pembahasan, lalu tandai kartu ini sebagai hafal untuk menutup Minggu 7.",
        "en": "Complete the entire exam, review the explanations, then mark this card as memorized to close Week 7."
      },
      "vocabulary": [
        {
          "word": "完了",
          "reading": "かんりょう",
          "meaning": {
            "id": "penyelesaian; selesai",
            "en": "completion; finished"
          }
        }
      ],
      "sourceNote": "Completion marker only."
    }
  ],
  "exam": {
    "enabled": true,
    "id": "week7-day7-exam",
    "title": {
      "id": "Ujian Besar Minggu 7 - Hari 7",
      "en": "Week 7 - Day 7 Comprehensive Exam"
    },
    "description": {
      "id": "Ujian praktik gabungan berdasarkan materi Minggu 7. Soal mencakup bacaan kosakata, penulisan kanji, pembentukan kata, dan pemilihan kanji profesi. Setiap soal memiliki penjelasan, nuansa, dan filosofi pengingat.",
      "en": "A comprehensive practical exam based on Week 7. Questions cover vocabulary readings, kanji spelling, word formation, and professional titles. Every question includes an explanation, nuance, and a memory philosophy."
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
      "id": "答えは別冊 p.13",
      "en": "Answers: separate answer booklet p.13"
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
      }
    ],
    "questions": [
      {
        "id": "w7d7-01",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading of the marked word."
        },
        "prompt": "神社に試験の合格を【祈願】する。",
        "promptType": "reading",
        "options": [
          "きがん",
          "せつげん",
          "せつがん",
          "きげん"
        ],
        "answer": "きがん",
        "explanation": {
          "id": "祈願（きがん）は、神仏などに願い事をすることです。",
          "en": "祈願（きがん）means praying or wishing for something, often at a shrine or temple."
        },
        "nuance": {
          "id": "祈願は「願いを祈る」という意味の熟語です。",
          "en": "祈願 is a compound meaning to pray for a wish."
        },
        "philosophy": {
          "id": "Gabungkan arti kedua kanji: berdoa dan memohon.",
          "en": "Combine the meanings of the two kanji: praying and making a wish."
        },
        "sourceKanji": [
          "祈",
          "願"
        ]
      },
      {
        "id": "w7d7-02",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "彼は後輩から【慕】われている。",
        "promptType": "reading",
        "options": [
          "つたわれて",
          "したわれて",
          "まとわれて",
          "さそわれて"
        ],
        "answer": "したわれて",
        "explanation": {
          "id": "慕われて（したわれて）は、人から好かれ、親しまれているという意味です。",
          "en": "慕われて（したわれて）means to be admired, loved, or looked up to by others."
        },
        "nuance": {
          "id": "慕うは、相手を慕い、親しみや敬意を抱くことです。",
          "en": "慕う means to feel affection or admiration toward someone."
        },
        "philosophy": {
          "id": "後輩が先輩を慕う場面を思い浮かべましょう。",
          "en": "Picture juniors looking up to a senior."
        },
        "sourceKanji": [
          "慕"
        ]
      },
      {
        "id": "w7d7-03",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "【便宜上】、その人をAさんと呼ぶことにします。",
        "promptType": "reading",
        "options": [
          "べんぎじょう",
          "べんりじょう",
          "びんぎじょう",
          "びんりじょう"
        ],
        "answer": "べんぎじょう",
        "explanation": {
          "id": "便宜上（べんぎじょう）は、都合のために、便宜的にという意味です。",
          "en": "便宜上（べんぎじょう）means for convenience or practical purposes."
        },
        "nuance": {
          "id": "便宜は都合がよいこと、便宜上は都合に合わせた扱いを表します。",
          "en": "便宜 means convenience; 便宜上 refers to doing something for convenience."
        },
        "philosophy": {
          "id": "Ingat bahwa 上 di sini membentuk ungkapan 便宜上, bukan berarti lokasi di atas.",
          "en": "Remember that 上 forms the expression 便宜上 here; it does not mean a physical upper position."
        },
        "sourceKanji": [
          "便",
          "宜"
        ]
      },
      {
        "id": "w7d7-04",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "私は派遣社員から正社員になった。",
        "promptType": "reading",
        "options": [
          "はけん",
          "ほけん",
          "ひけん",
          "かけん"
        ],
        "answer": "はけん",
        "explanation": {
          "id": "派遣社員（はけんしゃいん）は、派遣会社を通じて働く社員です。",
          "en": "派遣社員（はけんしゃいん）is a temporary agency worker."
        },
        "nuance": {
          "id": "派遣は人を特定の職場などへ送り出すことです。",
          "en": "派遣 means dispatching or sending someone to a workplace or assignment."
        },
        "philosophy": {
          "id": "Hubungkan 派遣 dengan gagasan seseorang yang dikirim ke tempat kerja tertentu.",
          "en": "Connect 派遣 with the idea of someone being dispatched to a workplace."
        },
        "sourceKanji": [
          "派",
          "遣"
        ]
      },
      {
        "id": "w7d7-05",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "遺族に対して【哀悼】の意を表した。",
        "promptType": "reading",
        "options": [
          "あいたく",
          "すいとう",
          "あいとう",
          "すいたく"
        ],
        "answer": "あいとう",
        "explanation": {
          "id": "哀悼（あいとう）は、人の死を悲しみ、悼むことです。",
          "en": "哀悼（あいとう）means mourning or expressing sorrow for someone's death."
        },
        "nuance": {
          "id": "哀悼の意を表するは、亡くなった人を悼む気持ちを示す表現です。",
          "en": "哀悼の意を表する is an expression for showing condolences."
        },
        "philosophy": {
          "id": "Ingat ungkapan formal 哀悼の意を表する.",
          "en": "Remember the formal expression 哀悼の意を表する."
        },
        "sourceKanji": [
          "哀",
          "悼"
        ]
      },
      {
        "id": "w7d7-06",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "「奉仕品」というのは安売りのことだ。",
        "promptType": "reading",
        "options": [
          "ほうじ",
          "ほうし",
          "ほうじゅ",
          "ふじ"
        ],
        "answer": "ほうし",
        "explanation": {
          "id": "奉仕品（ほうしひん）は、特別に安く売られる商品を指します。",
          "en": "奉仕品（ほうしひん）refers to goods sold at a special low price."
        },
        "nuance": {
          "id": "奉仕は通常「ほうし」と読みます。選択肢の重複を避け、異なる誤答に整理しています。",
          "en": "奉仕 is normally read ほうし. The duplicated choice in the transcription has been replaced with a distinct distractor."
        },
        "philosophy": {
          "id": "Hafalkan kata utuh 奉仕品 agar tidak terpancing pilihan dengan bunyi mirip.",
          "en": "Memorize the complete word 奉仕品 so similar-sounding distractors do not mislead you."
        },
        "sourceKanji": [
          "奉",
          "仕"
        ]
      },
      {
        "id": "w7d7-07",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "その商品は【在庫】がございます。",
        "promptType": "reading",
        "options": [
          "さいこ",
          "ざいこ",
          "そうこ",
          "そんこ"
        ],
        "answer": "ざいこ",
        "explanation": {
          "id": "在庫（ざいこ）は、商品などが倉庫や店に残っていることです。",
          "en": "在庫（ざいこ）means stock or inventory."
        },
        "nuance": {
          "id": "在庫は「現在ある商品・品物の蓄え」を表します。",
          "en": "在庫 refers to goods currently held in stock."
        },
        "philosophy": {
          "id": "Bayangkan daftar barang yang masih tersedia di toko.",
          "en": "Picture a list of items still available in a store."
        },
        "sourceKanji": [
          "在",
          "庫"
        ]
      },
      {
        "id": "w7d7-08",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "ピアノの【伴奏】で歌を歌う。",
        "promptType": "reading",
        "options": [
          "けんそう",
          "はんそう",
          "ほうそう",
          "ばんそう"
        ],
        "answer": "ばんそう",
        "explanation": {
          "id": "伴奏（ばんそう）は、歌や主旋律に合わせて音楽を演奏することです。",
          "en": "伴奏（ばんそう）means musical accompaniment."
        },
        "nuance": {
          "id": "伴うは一緒に行うこと、奏は音楽を演奏することに関係します。",
          "en": "伴う means to accompany, while 奏 relates to playing music."
        },
        "philosophy": {
          "id": "Hubungkan kosakata dengan gambaran piano yang mengiringi nyanyian.",
          "en": "Connect the word with the image of a piano accompanying a song."
        },
        "sourceKanji": [
          "伴",
          "奏"
        ]
      },
      {
        "id": "w7d7-09",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "【平穏無事】な毎日を送る。",
        "promptType": "reading",
        "options": [
          "へいいん",
          "へいおん",
          "へいぼん",
          "へいあん"
        ],
        "answer": "へいおん",
        "explanation": {
          "id": "平穏無事（へいおんぶじ）は、変わった問題や事故がなく穏やかなことです。",
          "en": "平穏無事（へいおんぶじ）means calm and peaceful, without trouble or incident."
        },
        "nuance": {
          "id": "平穏は穏やかな状態、無事は問題がない状態を表します。",
          "en": "平穏 means peacefulness; 無事 means being free from trouble."
        },
        "philosophy": {
          "id": "Ingat sebagai gabungan dua gagasan: tenang dan tanpa masalah.",
          "en": "Remember it as two combined ideas: peaceful and trouble-free."
        },
        "sourceKanji": [
          "平",
          "穏",
          "無",
          "事"
        ]
      },
      {
        "id": "w7d7-10",
        "type": "reading",
        "question": {
          "id": "次の言葉の読み方として最もよいものを選びなさい。",
          "en": "Choose the best reading."
        },
        "prompt": "あの日のことは今でも【鮮明】に覚えている。",
        "promptType": "reading",
        "options": [
          "せんめい",
          "ようめい",
          "しょうめい",
          "とうめい"
        ],
        "answer": "せんめい",
        "explanation": {
          "id": "鮮明（せんめい）は、はっきりしていて、ぼやけていない様子です。",
          "en": "鮮明（せんめい）means vivid, distinct, or clear."
        },
        "nuance": {
          "id": "記憶や映像が鮮明だというと、細部までよく分かるという意味です。",
          "en": "A vivid memory or image is clear down to its details."
        },
        "philosophy": {
          "id": "Bayangkan kenangan yang masih tampak jelas.",
          "en": "Picture a memory that remains clear."
        },
        "sourceKanji": [
          "鮮",
          "明"
        ]
      },
      {
        "id": "w7d7-11",
        "type": "kanji",
        "question": {
          "id": "次の言葉を漢字で書くとき、最もよいものを選びなさい。",
          "en": "Choose the correct kanji spelling."
        },
        "prompt": "ゆいごん状を書いておく。",
        "promptType": "reading",
        "options": [
          "遺言",
          "遣言",
          "結言",
          "由言"
        ],
        "answer": "遺言",
        "explanation": {
          "id": "遺言（ゆいごん）は、亡くなった後の財産や意思などについて残す言葉です。",
          "en": "遺言（ゆいごん）is a will or testament stating one's wishes for after death."
        },
        "nuance": {
          "id": "遺言は遺す言葉という構成で覚えられます。",
          "en": "遺言 can be remembered as words left behind."
        },
        "philosophy": {
          "id": "Hubungkan 遺 dengan sesuatu yang ditinggalkan untuk masa setelahnya.",
          "en": "Connect 遺 with something left behind for the future."
        },
        "sourceKanji": [
          "遺",
          "言"
        ]
      },
      {
        "id": "w7d7-12",
        "type": "kanji",
        "question": {
          "id": "次の言葉を漢字で書くとき、最もよいものを選びなさい。",
          "en": "Choose the correct kanji spelling."
        },
        "prompt": "さよなら満塁ホームランで勝った。",
        "promptType": "reading",
        "options": [
          "満累",
          "満塁",
          "満系",
          "満墨"
        ],
        "answer": "満塁",
        "explanation": {
          "id": "満塁（まんるい）は、野球で一塁・二塁・三塁すべてに走者がいる状態です。",
          "en": "満塁（まんるい）means the bases are loaded in baseball."
        },
        "nuance": {
          "id": "塁は野球のベースを表し、満塁は三つの塁が埋まった状態です。",
          "en": "塁 refers to a base in baseball; 満塁 means all three bases are occupied."
        },
        "philosophy": {
          "id": "Bayangkan tiga base terisi pelari.",
          "en": "Picture all three bases occupied by runners."
        },
        "sourceKanji": [
          "満",
          "塁"
        ]
      },
      {
        "id": "w7d7-13",
        "type": "kanji",
        "question": {
          "id": "次の言葉を漢字で書くとき、最もよいものを選びなさい。",
          "en": "Choose the correct kanji spelling."
        },
        "prompt": "はものの持ち込みは禁止されています。",
        "promptType": "reading",
        "options": [
          "歯物",
          "刃物",
          "力物",
          "刃本"
        ],
        "answer": "刃物",
        "explanation": {
          "id": "刃物（はもの）は、刃のついた道具を指します。",
          "en": "刃物（はもの）means a bladed tool or cutting implement."
        },
        "nuance": {
          "id": "刃は刃先・刃の部分を表す漢字です。",
          "en": "刃 is the kanji for a blade or cutting edge."
        },
        "philosophy": {
          "id": "Perhatikan perbedaan bentuk 刃 dan 歯.",
          "en": "Notice the difference between 刃 and 歯."
        },
        "sourceKanji": [
          "刃",
          "物"
        ]
      },
      {
        "id": "w7d7-14",
        "type": "kanji",
        "question": {
          "id": "次の言葉を漢字で書くとき、最もよいものを選びなさい。",
          "en": "Choose the correct kanji spelling."
        },
        "prompt": "お金とは一生えんがないだろうと占い師に言われた。",
        "promptType": "reading",
        "options": [
          "録",
          "緑",
          "縁",
          "禄"
        ],
        "answer": "縁",
        "explanation": {
          "id": "縁（えん）は、人と人とのつながりや関係を表します。",
          "en": "縁（えん）means a connection, bond, or relationship between people."
        },
        "nuance": {
          "id": "縁がある・縁がないは、人や物事との巡り合わせを表す表現です。",
          "en": "縁がある and 縁がない describe whether a connection or fate exists."
        },
        "philosophy": {
          "id": "Ingat bahwa kata ini berkaitan dengan hubungan atau jodoh.",
          "en": "Remember that this word relates to connections or fate."
        },
        "sourceKanji": [
          "縁"
        ]
      },
      {
        "id": "w7d7-15",
        "type": "kanji",
        "question": {
          "id": "次の言葉を漢字で書くとき、最もよいものを選びなさい。",
          "en": "Choose the correct kanji spelling."
        },
        "prompt": "そぼくな疑問をぶつけてみた。",
        "promptType": "reading",
        "options": [
          "素直",
          "素朴",
          "率直",
          "率朴"
        ],
        "answer": "素朴",
        "explanation": {
          "id": "素朴（そぼく）は、飾り気がなく、自然で素直な様子です。",
          "en": "素朴（そぼく）means simple, unsophisticated, or natural."
        },
        "nuance": {
          "id": "素朴な疑問は、飾らない率直な疑問という意味合いです。",
          "en": "素朴な疑問 is a plain, straightforward question."
        },
        "philosophy": {
          "id": "Hubungkan 素朴 dengan sesuatu yang sederhana dan tidak dibuat-buat.",
          "en": "Connect 素朴 with something simple and unpretentious."
        },
        "sourceKanji": [
          "素",
          "朴"
        ]
      },
      {
        "id": "w7d7-16",
        "type": "kanji",
        "question": {
          "id": "（　）に入る最もよい漢字を選びなさい。",
          "en": "Choose the kanji that best completes the word."
        },
        "prompt": "飛行機は（　）気流に巻き込まれた。",
        "promptType": "reading",
        "options": [
          "乱",
          "重",
          "猛",
          "悪"
        ],
        "answer": "乱",
        "explanation": {
          "id": "乱気流（らんきりゅう）は、空気の流れが不規則に乱れている状態です。",
          "en": "乱気流（らんきりゅう）means turbulence, irregular movement of air."
        },
        "nuance": {
          "id": "乱は整っていない、秩序が乱れた状態を表します。",
          "en": "乱 expresses a disordered or irregular state."
        },
        "philosophy": {
          "id": "Bayangkan aliran udara yang berubah-ubah dan tidak stabil.",
          "en": "Picture an unstable air current changing direction."
        },
        "sourceKanji": [
          "乱"
        ]
      },
      {
        "id": "w7d7-17",
        "type": "kanji",
        "question": {
          "id": "（　）に入る最もよい漢字を選びなさい。",
          "en": "Choose the kanji that best completes the word."
        },
        "prompt": "エコーと呼ばれる（　）音波による検査を受ける。",
        "promptType": "reading",
        "options": [
          "低",
          "高",
          "超",
          "微"
        ],
        "answer": "超",
        "explanation": {
          "id": "超音波（ちょうおんぱ）は、人間の耳に聞こえる範囲を超える高い周波数の音波です。",
          "en": "超音波（ちょうおんぱ）means ultrasound, sound waves beyond the range of human hearing."
        },
        "nuance": {
          "id": "超は「限界を超える」という意味を持ちます。",
          "en": "超 carries the idea of going beyond a limit."
        },
        "philosophy": {
          "id": "Ingat 超 sebagai sesuatu yang melampaui batas biasa.",
          "en": "Remember 超 as something that goes beyond the usual limit."
        },
        "sourceKanji": [
          "超",
          "音",
          "波"
        ]
      },
      {
        "id": "w7d7-18",
        "type": "kanji",
        "question": {
          "id": "（　）に入る最もよい漢字を選びなさい。",
          "en": "Choose the kanji that best completes the word."
        },
        "prompt": "真っ暗は嫌なので、（　）電球だけつけて寝ます。",
        "promptType": "reading",
        "options": [
          "仮",
          "正",
          "豆",
          "副"
        ],
        "answer": "豆",
        "explanation": {
          "id": "豆電球（まめでんきゅう）は、小型の電球を指します。",
          "en": "豆電球（まめでんきゅう）means a small bulb or miniature lamp."
        },
        "nuance": {
          "id": "豆は小さな粒を連想させ、小型のものを表す語に使われます。",
          "en": "豆 evokes a small bean and appears in words describing small objects."
        },
        "philosophy": {
          "id": "Bayangkan ukuran kecil seperti sebutir kacang.",
          "en": "Picture something small, about the size of a bean."
        },
        "sourceKanji": [
          "豆",
          "電",
          "球"
        ]
      },
      {
        "id": "w7d7-19",
        "type": "kanji",
        "question": {
          "id": "（　）に入る最もよい漢字を選びなさい。",
          "en": "Choose the kanji that best completes the word."
        },
        "prompt": "日本（　）公開の古い映画を見に行く。",
        "promptType": "reading",
        "options": [
          "初",
          "名",
          "急",
          "序"
        ],
        "answer": "初",
        "explanation": {
          "id": "日本初公開（にほんはつこうかい）は、日本で初めて公開されることです。",
          "en": "日本初公開（にほんはつこうかい）means a first release or screening in Japan."
        },
        "nuance": {
          "id": "初は「最初」を表し、初公開は初めての公開です。",
          "en": "初 means first or initial; 初公開 is a first public release."
        },
        "philosophy": {
          "id": "Hubungkan 初 dengan sesuatu yang terjadi untuk pertama kali.",
          "en": "Connect 初 with something happening for the first time."
        },
        "sourceKanji": [
          "初",
          "公開"
        ]
      },
      {
        "id": "w7d7-20",
        "type": "kanji",
        "question": {
          "id": "（　）に入る最もよい漢字を選びなさい。",
          "en": "Choose the kanji that best completes the word."
        },
        "prompt": "（　）文化間コミュニケーションを学ぶ。",
        "promptType": "reading",
        "options": [
          "俗",
          "異",
          "諸",
          "被"
        ],
        "answer": "異",
        "explanation": {
          "id": "異文化間（いぶんかかん）は、異なる文化の間という意味です。",
          "en": "異文化間（いぶんかかん）means between different cultures."
        },
        "nuance": {
          "id": "異は「違う」という意味を持ち、異文化は異なる文化です。",
          "en": "異 means different; 異文化 refers to different cultures."
        },
        "philosophy": {
          "id": "Ingat bahwa 異 budaya berarti budaya yang berbeda.",
          "en": "Remember that 異文化 means different cultures."
        },
        "sourceKanji": [
          "異",
          "文化",
          "間"
        ]
      },
      {
        "id": "w7d7-21",
        "type": "kanji",
        "question": {
          "id": "職業を表す漢字として最もよいものを選びなさい。",
          "en": "Choose the kanji that correctly names the profession."
        },
        "prompt": "医（　）",
        "promptType": "reading",
        "options": [
          "者",
          "家",
          "師",
          "手",
          "士"
        ],
        "answer": "者",
        "explanation": {
          "id": "医者（いしゃ）は医療を行う人、つまり dokter/dokter medisです。",
          "en": "医者（いしゃ）means a doctor or medical practitioner."
        },
        "nuance": {
          "id": "医者は医療に従事する人を指します。",
          "en": "医者 refers to a person engaged in medical practice."
        },
        "philosophy": {
          "id": "Ingat gabungan tetap 医者.",
          "en": "Remember the established compound 医者."
        },
        "sourceKanji": [
          "医",
          "者"
        ]
      },
      {
        "id": "w7d7-22",
        "type": "kanji",
        "question": {
          "id": "職業を表す漢字として最もよいものを選びなさい。",
          "en": "Choose the kanji that correctly names the profession."
        },
        "prompt": "歌（　）",
        "promptType": "reading",
        "options": [
          "者",
          "家",
          "師",
          "手",
          "士"
        ],
        "answer": "手",
        "explanation": {
          "id": "歌手（かしゅ）は歌を歌う人、つまり penyanyiです。",
          "en": "歌手（かしゅ）means a singer."
        },
        "nuance": {
          "id": "手 dalam 歌手 berfungsi membentuk nama profesi.",
          "en": "手 in 歌手 forms the name of a profession."
        },
        "philosophy": {
          "id": "Pasangkan 歌 dengan 手 untuk mengingat profesi penyanyi.",
          "en": "Pair 歌 with 手 to remember the profession of singer."
        },
        "sourceKanji": [
          "歌",
          "手"
        ]
      },
      {
        "id": "w7d7-23",
        "type": "kanji",
        "question": {
          "id": "職業を表す漢字として最もよいものを選びなさい。",
          "en": "Choose the kanji that correctly names the profession."
        },
        "prompt": "小説（　）",
        "promptType": "reading",
        "options": [
          "者",
          "家",
          "師",
          "手",
          "士"
        ],
        "answer": "家",
        "explanation": {
          "id": "小説家（しょうせつか）は小説を書く人、つまり penulis novelです。",
          "en": "小説家（しょうせつか）means a novelist."
        },
        "nuance": {
          "id": "家は、この語では特定の分野の専門家・作り手を示します。",
          "en": "家 in this word indicates a specialist or creator in a particular field."
        },
        "philosophy": {
          "id": "Ingat bahwa 小説家 adalah orang yang menulis 小説.",
          "en": "Remember that a 小説家 is someone who writes 小説."
        },
        "sourceKanji": [
          "小説",
          "家"
        ]
      },
      {
        "id": "w7d7-24",
        "type": "kanji",
        "question": {
          "id": "職業を表す漢字として最もよいものを選びなさい。",
          "en": "Choose the kanji that correctly names the profession."
        },
        "prompt": "看護（　）",
        "promptType": "reading",
        "options": [
          "者",
          "家",
          "師",
          "手",
          "士"
        ],
        "answer": "師",
        "explanation": {
          "id": "看護師（かんごし）は看護を専門とする職業です。",
          "en": "看護師（かんごし）is a professional nurse."
        },
        "nuance": {
          "id": "看護師は、性別に関係なく使う現在の一般的な職業名です。",
          "en": "看護師 is the general modern professional title regardless of gender."
        },
        "philosophy": {
          "id": "Pasangkan 看護 dengan 師 sebagai nama profesi.",
          "en": "Pair 看護 with 師 as the profession name."
        },
        "sourceKanji": [
          "看護",
          "師"
        ]
      },
      {
        "id": "w7d7-25",
        "type": "kanji",
        "question": {
          "id": "職業を表す漢字として最もよいものを選びなさい。",
          "en": "Choose the kanji that correctly names the profession."
        },
        "prompt": "保育（　）",
        "promptType": "reading",
        "options": [
          "者",
          "家",
          "師",
          "手",
          "士"
        ],
        "answer": "士",
        "explanation": {
          "id": "保育士（ほいくし）は、子どもの保育を専門に行う人です。",
          "en": "保育士（ほいくし）is a childcare professional."
        },
        "nuance": {
          "id": "保育士は保育の専門資格・職業名として使われます。",
          "en": "保育士 is used as the professional title for a childcare worker."
        },
        "philosophy": {
          "id": "Ingat pasangan tetap 保育士.",
          "en": "Remember the established compound 保育士."
        },
        "sourceKanji": [
          "保育",
          "士"
        ]
      }
    ]
  }
};

export default minggu7Hari7;
