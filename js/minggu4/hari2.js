// JLPT Week 4 — Day 2: 難しい読みを覚えよう（難しい音読み）
// Bacaan fokus disalin dari transkripsi sumber. Catatan koreksi/keraguan ditempatkan terpisah.

const contoh = (jp, furigana, translation, context) => ({ jp, furigana, translation, context });
const kosakata = (word, reading, meaning, usage, nuance, concept, examples, notes = "") => ({
    word, reading, meaning, usage, nuance, concept, examples: examples.map(x => contoh(...x)), ...(notes ? { notes } : {})
});
const kanjiItem = (id, character, meaning, sourceReading, concept, explanation, vocabulary, notes = "") => ({
    id, character, meaning, sourceFocusReading: sourceReading, onyomi: sourceReading, kunyomi: [],
    readingScope: "Sumber hanya mencantumkan bacaan sulit/fokus pada karakter ini, bukan daftar lengkap seluruh onyomi dan kunyomi.",
    concept, explanation, vocabulary, ...(notes ? { notes } : {})
});

const minggu4Hari2 = {
    week: 4,
    day: 2,
    title: { id: "Hari 2", en: "Day 2" },
    subtitle: { id: "Bacaan on'yomi yang sulit: 情緒・仮病・天然", en: "Difficult on'yomi readings: 情緒・仮病・天然" },
    theme: "第4週 難しい読みを覚えよう",
    focusReadings: ["じょうちょ", "けびょう", "てんねん"],
    openingQuiz: {
        question: "弟子 の読みは？",
        choices: ["ていし", "だいし", "でし"],
        answer: "でし",
        fullReading: "でし",
        translation: "murid atau pengikut seorang ahli/guru",
        explanation: "弟子 dibaca でし. Bacaan karakter dalam kosakata tertentu tidak selalu sama dengan bacaan yang paling sering dipelajari sebagai bacaan dasar; hafalkan kata utuhnya. Sumber juga mengingatkan bahwa 弟 memiliki bacaan selain テイ."
    },
    kanji: [
        kanjiItem("w4d2-kanji-弟", "弟", "adik laki-laki; dalam kosakata tertentu menjadi unsur kata untuk murid/pengikut", ["テ"],
            "Dalam kata 弟子, karakter 弟 merupakan bagian dari kosakata mapan yang dibaca でし. Jangan memaksakan bacaan テ atau テイ ketika membaca kata utuh itu.",
            "Sumber menampilkan fokus テ dan memberi 弟子（でし）sebagai contoh. Ini memperlihatkan bahwa bacaan karakter dalam kosakata dapat mengalami bentuk bacaan khusus/berubah bunyi. Untuk latihan ini yang harus diingat adalah pembacaan kata utuh 弟子 = でし.", [
                kosakata("弟子", "でし", "murid atau pengikut seorang ahli, guru, atau seniman", "Digunakan untuk hubungan belajar yang relatif dekat dengan seorang guru/ahli, terutama dalam seni tradisional, keterampilan, atau aliran tertentu.", "Lebih khusus daripada 学生: 弟子 sering menyiratkan belajar langsung di bawah bimbingan 師匠.", "弟子 menunjuk pihak yang menerima ajaran; kata ini dipahami sebagai satu kesatuan, bukan diterjemahkan dengan memisahkan makna 弟 dan 子.", [
                    ["彼は有名な陶芸家の弟子になった。", "かれは ゆうめいな とうげいかの でしに なった。", "Dia menjadi murid seorang perajin keramik terkenal.", "Hubungan belajar keterampilan."],
                    ["弟子たちは師匠の仕事を見て技術を学んだ。", "でしたちは ししょうの しごとを みて ぎじゅつを まなんだ。", "Para murid mempelajari keterampilan dengan mengamati pekerjaan guru mereka.", "Konteks pelatihan langsung."]
                ]),
                kosakata("師匠", "ししょう", "guru utama atau ahli yang membimbing murid", "Dipakai untuk menyebut guru/pembimbing dalam seni, kerajinan, bela diri, dan tradisi keterampilan.", "Pasangan relasional bagi 弟子; bukan sinonim umum untuk semua guru sekolah (先生).", "師匠 adalah pihak yang menguasai keterampilan dan membimbing 弟子.", [
                    ["師匠から道具の使い方を教わった。", "ししょうから どうぐの つかいかたを おそわった。", "Saya diajari cara menggunakan alat oleh guru utama.", "Belajar keterampilan tradisional."],
                    ["弟子は師匠の言葉を大切にしている。", "でしは ししょうの ことばを たいせつに している。", "Murid itu menghargai perkataan gurunya.", "Hubungan guru dan murid."]
                ], "Kata pembanding/lawan relasi yang secara eksplisit disebut di sumber.")
            ],
            "Catatan bacaan: sumber menulis fokus「弟（テ）」, tetapi kata contoh 弟子 dibaca でし, bukan ていし/てし. Bacaan kata yang diuji tetap でし; label テ pada sumber tidak boleh dipakai untuk membaca 弟子 secara langsung."),
        kanjiItem("w4d2-kanji-緒", "緒", "tali/benang; dalam kata abstrak dapat menandai perasaan atau suasana", ["チョ"],
            "緒 dalam 情緒 berkaitan dengan lapisan perasaan dan suasana batin. Kata majemuk 情緒 dipahami utuh sebagai nuansa emosional atau atmosfer yang dirasakan.",
            "Bacaan fokus チョ tampak di akhir 情緒（じょうちょ）. Bacaan kata gabungan ini tidak harus sama dengan pembacaan karakter satu per satu yang dibayangkan pembelajar; kenali 情緒 sebagai kosakata utuh.", [
                kosakata("情緒", "じょうちょ", "emosi; suasana batin; nuansa emosional", "Dipakai dalam pembahasan psikologi, sastra, suasana tempat, atau pengalaman yang membangkitkan perasaan.", "Lebih abstrak daripada 気分 (suasana hati sesaat); dapat mencakup atmosfer yang memengaruhi perasaan.", "情 menunjuk perasaan dan 緒 memberi nuansa rangkaian/untaian; secara konseptual kata ini menggambarkan keseluruhan suasana emosional.", [
                    ["この町には古い時代の情緒が残っている。", "この まちには ふるい じだいの じょうちょが のこっている。", "Nuansa zaman dahulu masih tersisa di kota ini.", "Deskripsi suasana kota."],
                    ["音楽を聞くと、懐かしい情緒がよみがえる。", "おんがくを きくと、なつかしい じょうちょが よみがえる。", "Ketika mendengarkan musik, suasana emosional yang penuh kenangan muncul kembali.", "Pengalaman pribadi/seni."]
                ]),
                kosakata("情緒豊かな町並み", "じょうちょゆたかな まちなみ", "pemandangan kota yang kaya nuansa khas/atmosfer", "Ungkapan deskriptif untuk kawasan yang memiliki suasana historis, tradisional, atau berkarakter kuat.", "豊か menilai kekayaan suasana; bukan berarti kota tersebut kaya secara materi.", "情緒 adalah atmosfer emosional, 豊か berarti kaya, 町並み adalah deretan/tampilan bangunan kota.", [
                    ["情緒豊かな町並みを歩きながら、古い建物を見学した。", "じょうちょゆたかな まちなみを あるきながら、ふるい たてものを けんがくした。", "Sambil berjalan menyusuri pemandangan kota yang kaya nuansa khas, saya mengunjungi bangunan-bangunan tua.", "Wisata budaya."],
                    ["この地域は情緒豊かな町並みで知られている。", "この ちいきは じょうちょゆたかな まちなみで しられている。", "Daerah ini dikenal karena deretan kotanya yang kaya atmosfer khas.", "Deskripsi daerah wisata."]
                ])
            ]),
        kanjiItem("w4d2-kanji-仮", "仮", "sementara; pura-pura; tidak sungguh-sungguh", ["ケ"],
            "仮病 memakai gagasan 'pura-pura' atau keadaan yang tidak benar-benar terjadi. Kata ini menyatakan sakit yang diklaim seolah nyata padahal dibuat-buat.",
            "Bacaan fokus ケ muncul dalam 仮病（けびょう）. Jangan menerapkan ケ ke semua kata berkanji 仮; misalnya 仮の名前 dibaca かり. Bacaan bergantung pada kosakata.", [
                kosakata("仮病", "けびょう", "pura-pura sakit", "Dipakai ketika seseorang mengaku sakit padahal sebenarnya tidak sakit, biasanya untuk menghindari kewajiban.", "Bernada negatif karena menyiratkan ketidakjujuran; berbeda dari 病気 (penyakit yang sungguh dialami).", "仮 berarti sementara/palsu dalam konteks ini, 病 berarti sakit: sakit yang dibuat seolah-olah nyata.", [
                    ["彼は学校を休むために仮病を使った。", "かれは がっこうを やすむために けびょうを つかった。", "Dia berpura-pura sakit agar bisa tidak masuk sekolah.", "Contoh perilaku tidak jujur."],
                    ["仮病だと疑われないようにするのではなく、正直に理由を話すべきだ。", "けびょうだと うたがわれないように するのではなく、しょうじきに りゆうを はなすべきだ。", "Daripada berusaha agar tidak dicurigai berpura-pura sakit, sebaiknya alasan disampaikan dengan jujur.", "Nasihat tentang kejujuran."]
                ]),
                kosakata("仮病を使う", "けびょうを つかう", "berpura-pura sakit", "Pola verba tetap: 仮病を使う.", "Ungkapan ini menilai tindakan berpura-pura sakit; bukan cara mengobati penyakit.", "仮病 + を使う adalah kolokasi yang lazim untuk melakukan tindakan tersebut.", [
                    ["大事な約束があるのに、仮病を使ってはいけない。", "だいじな やくそくが あるのに、けびょうを つかってはいけない。", "Walaupun ada janji penting, kita tidak boleh berpura-pura sakit.", "Konteks tanggung jawab."],
                    ["彼女は仮病を使わず、欠席の理由を説明した。", "かのじょは けびょうを つかわず、けっせきの りゆうを せつめいした。", "Dia tidak berpura-pura sakit dan menjelaskan alasan ketidakhadirannya.", "Konteks sekolah/kerja."]
                ])
            ]),
        kanjiItem("w4d2-kanji-然", "然", "demikian; seperti itu; dalam gabungan tertentu menandai keadaan/alami", ["ネン"],
            "Dalam 天然, 然 menjadi bagian dari kata yang menyatakan keadaan alami. Kata 天然 merujuk pada sesuatu yang berasal dari alam atau tidak dibuat secara artifisial.",
            "Bacaan fokus ネン tampak dalam 天然（てんねん）. Kata-kata turunannya seperti 天然記念物 dan 天然色 mempertahankan bacaan yang sama pada bagian 天然.", [
                kosakata("天然", "てんねん", "alami; natural; berasal dari alam", "Digunakan untuk bahan, sumber daya, atau sifat yang tidak dibuat secara buatan.", "Berlawanan dengan 人工 (じんこう, buatan); tidak selalu berarti 'murni' atau 'lebih baik'.", "天然 memadukan gagasan alam dan keadaan yang memang ada tanpa rekayasa manusia.", [
                    ["この温泉は天然の湯を利用している。", "この おんせんは てんねんの ゆを りようしている。", "Pemandian air panas ini menggunakan air alami.", "Fasilitas pemandian."],
                    ["天然素材を使った家具を選んだ。", "てんねんそざいを つかった かぐを えらんだ。", "Saya memilih perabot yang menggunakan bahan alami.", "Konteks produk."]
                ]),
                kosakata("天然記念物", "てんねんきねんぶつ", "monumen alam; objek alam yang dilindungi sebagai warisan", "Istilah resmi untuk spesies, formasi alam, atau objek alam yang ditetapkan untuk dilindungi.", "Ini adalah istilah pelestarian alam, bukan 'monumen' buatan manusia.", "天然 menandai asal alam; 記念物 adalah objek yang ditetapkan sebagai sesuatu yang bernilai untuk dilestarikan.", [
                    ["この鳥は国の天然記念物に指定されている。", "この とりは くにの てんねんきねんぶつに していされている。", "Burung ini ditetapkan sebagai monumen alam nasional.", "Informasi konservasi."],
                    ["天然記念物を観察するときは、自然環境を壊さないようにする。", "てんねんきねんぶつを かんさつするときは、しぜんかんきょうを こわさないようにする。", "Saat mengamati objek alam yang dilindungi, kita harus menjaga agar tidak merusak lingkungan alaminya.", "Etika pengamatan alam."]
                ]),
                kosakata("天然色", "てんねんしょく", "warna alami", "Dipakai untuk menyebut warna yang berasal dari bahan/proses alami, sesuai konteks.", "Berbeda dari 人工色 (warna buatan); pemakaian dapat lebih khusus dan tidak seumum 天然素材.", "天然 menunjukkan asal alami dan 色 menunjukkan warna.", [
                    ["染料によって、布に天然色をつけた。", "せんりょうによって、ぬのに てんねんしょくを つけた。", "Kain itu diberi warna alami menggunakan bahan pewarna.", "Konteks tekstil."],
                    ["天然色の石には一つ一つ異なる表情がある。", "てんねんしょくの いしには ひとつひとつ ことなる ひょうじょうが ある。", "Batu berwarna alami memiliki tampilan yang berbeda-beda satu sama lain.", "Deskripsi bahan alam."]
                ])
            ]),
        kanjiItem("w4d2-kanji-封", "封", "menutup atau menyegel; dalam istilah sejarah berkaitan dengan sistem feodal", ["ホウ"],
            "封建 merujuk pada sistem politik-sosial feodal. Bacaan ホウ pada 封 perlu dipelajari sebagai bagian dari kata majemuk.",
            "Kata inti pada sumber ialah 封建 dan 封建制度. Jangan menyamakan 封建 dengan 封筒 (ほうとう, amplop) meskipun berbagi kanji dan bacaan awal; maknanya ditentukan oleh gabungan.", [
                kosakata("封建", "ほうけん", "feodal; berkaitan dengan sistem feodalisme", "Digunakan dalam sejarah politik dan sosial untuk menjelaskan struktur kekuasaan feodal.", "Istilah historis/akademis; bukan istilah untuk seluruh bentuk pemerintahan tradisional.", "封建 adalah kosakata historis yang menunjuk sistem kekuasaan berbasis wilayah, status, dan hubungan penguasa-bawahan.", [
                    ["封建社会では、身分によって役割が決められていた。", "ほうけんしゃかいでは、みぶんによって やくわりが きめられていた。", "Dalam masyarakat feodal, peran ditentukan berdasarkan status sosial.", "Pembahasan sejarah."],
                    ["封建的な考え方が近代化の妨げになることもある。", "ほうけんてきな かんがえかたが きんだいかの さまたげに なることもある。", "Pola pikir feodal terkadang dapat menghambat modernisasi.", "Analisis sosial."]
                ]),
                kosakata("封建制度", "ほうけんせいど", "sistem feodal", "Istilah untuk tatanan politik-sosial feodal dalam pembahasan sejarah.", "Lebih spesifik daripada 封建 karena 制度 menekankan susunan atau sistem kelembagaannya.", "制度 berarti sistem/aturan; gabungannya menamai sistem sosial-politik feodal.", [
                    ["封建制度の下では、土地と身分が重要な意味を持った。", "ほうけんせいどの もとでは、とちと みぶんが じゅうような いみを もった。", "Di bawah sistem feodal, tanah dan status sosial memiliki arti penting.", "Sejarah masyarakat."],
                    ["授業で日本の封建制度について学んだ。", "じゅぎょうで にほんの ほうけんせいどについて まなんだ。", "Saya mempelajari sistem feodal Jepang dalam pelajaran.", "Konteks pendidikan."]
                ])
            ]),
        kanjiItem("w4d2-kanji-度", "度", "derajat, tingkat, atau ukuran; dalam kata tertentu berhubungan dengan persiapan", ["タク"],
            "Pada 支度, 度 memiliki bacaan khusus タク dalam kata yang bermakna persiapan. Kata ini harus dihafal sebagai satuan; jangan mengasumsikan bacaan ど/たび yang lebih umum.",
            "Sumber memusatkan bacaan タク pada 支度・旅支度・身支度. Seluruh kata mempertahankan bacaan したく/たびじたく/みじたく.", [
                kosakata("支度", "したく", "persiapan; menyiapkan diri atau sesuatu", "Sering digunakan dalam pola 支度をする dan 食事の支度.", "Lebih sehari-hari daripada 準備 dalam beberapa konteks, terutama kegiatan menyiapkan diri atau hidangan.", "支度 adalah kosakata mapan untuk tindakan menyiapkan; jangan memisahkan arti karakter secara kaku.", [
                    ["出かける支度ができました。", "でかける したくが できました。", "Persiapan untuk pergi sudah selesai.", "Persiapan sehari-hari."],
                    ["母は夕食の支度をしている。", "ははは ゆうしょくの したくを している。", "Ibu sedang menyiapkan makan malam.", "Kegiatan rumah tangga."]
                ]),
                kosakata("旅支度", "たびじたく", "persiapan perjalanan", "Digunakan ketika menyiapkan barang dan kebutuhan sebelum bepergian.", "Lebih spesifik daripada 支度 karena objek persiapannya adalah perjalanan.", "旅 + 支度 berarti menyiapkan diri/perlengkapan untuk perjalanan.", [
                    ["出発の前夜に旅支度を済ませた。", "しゅっぱつの ぜんやに たびじたくを すませた。", "Saya menyelesaikan persiapan perjalanan pada malam sebelum keberangkatan.", "Perencanaan perjalanan."],
                    ["旅支度には着替えと薬を入れておく。", "たびじたくには きがえと くすりを いれておく。", "Untuk persiapan perjalanan, saya memasukkan pakaian ganti dan obat-obatan.", "Menyiapkan perlengkapan."]
                ]),
                kosakata("身支度", "みじたく", "mempersiapkan diri; merapikan penampilan sebelum pergi", "Dipakai untuk persiapan pribadi seperti berpakaian, merapikan diri, dan bersiap keluar.", "Berfokus pada diri/penampilan seseorang, bukan persiapan barang perjalanan.", "身 berarti tubuh/diri; 支度 berarti persiapan: menyiapkan diri sendiri.", [
                    ["彼女は十分で身支度を整えた。", "かのじょは じゅっぷんで みじたくを ととのえた。", "Dia merapikan diri dalam sepuluh menit.", "Persiapan sebelum keluar."],
                    ["朝は身支度をしてから朝食を取る。", "あさは みじたくを してから ちょうしょくを とる。", "Pagi hari saya bersiap-siap dahulu, lalu sarapan.", "Rutinitas harian."]
                ])
            ]),
        kanjiItem("w4d2-kanji-rusu", "留・守", "留: tinggal/menahan; 守: menjaga. Dalam 留守 berarti tidak berada di rumah", ["ル", "ス"],
            "留守 merupakan kata utuh yang berarti sedang tidak ada di rumah. 留守番電話 adalah sistem yang menerima pesan ketika orang yang dituju tidak berada di rumah.",
            "Sumber memisahkan bacaan fokus 留（ル）dan 守（ス）. Kedua bagian membentuk bacaan るす; pelajari seluruh kosakata karena arti gabungannya tidak dapat diperoleh hanya dengan menerjemahkan karakter satu per satu.", [
                kosakata("留守", "るす", "tidak berada di rumah; sedang pergi", "Umum dalam percakapan sehari-hari, misalnya 留守です atau 留守にする.", "Bukan berarti rumah kosong selamanya; hanya menyatakan bahwa orang yang dicari sedang tidak ada.", "Dalam pemakaian modern, 留守 merujuk pada keadaan tidak berada di rumah; ini adalah makna kata utuh.", [
                    ["午後は留守にします。", "ごごは るすに します。", "Saya tidak akan berada di rumah pada siang/sore hari.", "Memberi tahu jadwal."],
                    ["訪ねてみたが、家族は留守だった。", "たずねてみたが、かぞくは るすだった。", "Saya mencoba berkunjung, tetapi keluarga itu sedang tidak ada di rumah.", "Kunjungan."]
                ]),
                kosakata("留守番電話", "るすばんでんわ", "mesin penjawab telepon; layanan pesan ketika penerima tidak ada", "Digunakan untuk sistem yang merekam pesan ketika penghuni tidak bisa menjawab telepon.", "Istilah teknologi/rumah tangga yang umum; jangan diterjemahkan secara harfiah sebagai 'telepon penjaga'.", "留守番 adalah menjaga rumah saat penghuni pergi; 電話 menandai fungsi telepon/pesan.", [
                    ["留守番電話にメッセージを残してください。", "るすばんでんわに メッセージを のこしてください。", "Silakan tinggalkan pesan di mesin penjawab telepon.", "Instruksi panggilan."],
                    ["帰宅してから留守番電話を確認した。", "きたくしてから るすばんでんわを かくにんした。", "Setelah pulang, saya memeriksa pesan di mesin penjawab telepon.", "Rutinitas rumah tangga."]
                ])
            ]),
        kanjiItem("w4d2-kanji-i", "井", "sumur; dalam 天井 menjadi bagian dari kata yang berarti langit-langit", ["ショウ"],
            "Kata 天井 berarti permukaan bagian atas ruangan (langit-langit). Dalam pasangan kontras yang diberikan sumber, 床 berarti lantai.",
            "Sumber mencantumkan 井（ショウ）, tetapi kosakata yang dicantumkan adalah 天井（てんじょう）. Dalam kata itu 井 dibaca じょう, bukan しょう. Bentuk fokus sumber tetap direkam dan perbedaan ini diberi catatan verifikasi.", [
                kosakata("天井", "てんじょう", "langit-langit; bagian atas interior ruangan", "Digunakan untuk bagian dalam ruangan yang berada di atas kepala penghuni.", "Berbeda dari 屋根 (やね, atap bangunan bagian luar); 天井 adalah permukaan bagian dalam.", "天 berarti langit/atas dan 井 merupakan bagian dari kata mapan 天井; secara konseptual merujuk permukaan paling atas ruangan.", [
                    ["天井に大きな照明が付いている。", "てんじょうに おおきな しょうめいが ついている。", "Lampu besar terpasang di langit-langit.", "Deskripsi ruangan."],
                    ["子どもは天井を見上げていた。", "こどもは てんじょうを みあげていた。", "Anak itu sedang mendongak melihat langit-langit.", "Situasi di dalam ruangan."]
                ]),
                kosakata("床", "ゆか", "lantai", "Kata pembanding bagi 天井 dalam konteks bagian dalam sebuah ruangan.", "Bukan kanji fokus hari ini; disertakan karena merupakan pasangan kontras yang disebut sumber.", "床 menunjuk permukaan tempat kaki berpijak, berlawanan posisi dengan 天井.", [
                    ["床にかばんを置かないでください。", "ゆかに かばんを おかないでください。", "Tolong jangan meletakkan tas di lantai.", "Aturan penggunaan ruangan."],
                    ["床をきれいに掃除した。", "ゆかを きれいに そうじした。", "Saya membersihkan lantai hingga bersih.", "Pekerjaan rumah."]
                ], "Kata pembanding yang secara eksplisit disebut di sumber.")
            ],
            "Catatan verifikasi: sumber menulis「井（ショウ）」, tetapi contoh 天井 dibaca てんじょう dan bagian 井 berbunyi じょう. Kemungkinan terjadi salah transkripsi pada bacaan fokus; data sumber dipertahankan di sourceFocusReading dan koreksinya dicatat di sini."),
        kanjiItem("w4d2-kanji-me", "目", "mata; dalam 面目 berarti kehormatan atau harga diri", ["ボク"],
            "面目 adalah kata yang berkaitan dengan wajah sosial, kehormatan, atau nama baik seseorang.面目ない mengungkapkan rasa malu karena merasa tidak dapat menjaga kehormatan.",
            "Bacaan fokus ボク muncul dalam 面目（めんぼく）. Kata ini dibaca sebagai satuan, bukan めんもく untuk materi sumber ini; bentuk 体面 juga dapat bermakna kehormatan tetapi bukan kosakata yang ditargetkan di sini.", [
                kosakata("面目", "めんぼく", "kehormatan; harga diri; muka/nama baik", "Digunakan dalam ungkapan 面目を保つ atau 面目を失う.", "Bernuansa sosial: bagaimana seseorang dipandang dan bagaimana kehormatannya terjaga.", "面 adalah wajah; 目 menjadi bagian dari kata yang secara utuh menunjuk wajah/kehormatan sosial.", [
                    ["彼は失敗して面目を失ったと感じている。", "かれは しっぱいして めんぼくを うしなったと かんじている。", "Dia merasa kehilangan kehormatan karena kegagalannya.", "Konteks sosial/kerja."],
                    ["この成果によって、チームの面目が保たれた。", "この せいかによって、チームの めんぼくが たもたれた。", "Berkat hasil ini, kehormatan tim tetap terjaga.", "Evaluasi hasil kerja."]
                ]),
                kosakata("面目ない", "めんぼくない", "merasa malu; merasa kehilangan muka/kehormatan", "Ungkapan untuk meminta maaf atau menyatakan rasa malu atas kegagalan/kesalahan.", "Lebih formal dan kuat daripada sekadar 恥ずかしい; sering muncul dalam permintaan maaf.", "面目 + ない menyatakan tidak memiliki muka/kehormatan dalam situasi tertentu.", [
                    ["期待に応えられず、面目ない気持ちです。", "きたいに こたえられず、めんぼくない きもちです。", "Saya merasa malu karena tidak dapat memenuhi harapan.", "Permintaan maaf formal."],
                    ["皆さんに迷惑をかけて、まことに面目ない。", "みなさんに めいわくを かけて、まことに めんぼくない。", "Saya sungguh merasa malu karena telah merepotkan kalian semua.", "Ungkapan penyesalan formal."]
                ])
            ]),
        kanjiItem("w4d2-kanji-kawa", "川", "sungai; dalam 河川 menjadi istilah formal untuk sungai-sungai/sistem sungai", ["セン"],
            "河川 adalah istilah umum/administratif untuk sungai sebagai kategori atau sistem perairan.",
            "Bacaan fokus セン tampak dalam 河川（かせん）. Kata ini memakai 河 dan 川 sebagai unsur bermakna serupa; bacaannya perlu dihafal sebagai gabungan.", [
                kosakata("河川", "かせん", "sungai-sungai; sungai sebagai kategori/sistem perairan", "Umum dalam laporan lingkungan, pengelolaan banjir, dan dokumen pemerintah.", "Lebih formal daripada 川 (かわ) dalam percakapan biasa.", "河 dan 川 sama-sama berkaitan dengan sungai; penggabungannya menjadi istilah kolektif/formal.", [
                    ["大雨のため、河川の水位が上がっている。", "おおあめの ため、かせんの すいいが あがっている。", "Karena hujan lebat, permukaan air sungai-sungai meningkat.", "Peringatan cuaca/banjir."],
                    ["市は河川の環境を守る活動を続けている。", "しは かせんの かんきょうを まもる かつどうを つづけている。", "Kota terus melakukan kegiatan untuk melindungi lingkungan sungai.", "Program lingkungan."]
                ])
            ]),
        kanjiItem("w4d2-kanji-dan", "団", "kelompok; bundel; dalam 布団 menjadi bagian dari kata alas tidur", ["トン"],
            "Dalam 布団, 団 merupakan bagian dari kosakata mapan untuk alas tidur/futon. 座布団 adalah bantalan yang diletakkan untuk duduk.",
            "Bacaan fokus トン muncul pada 布団（ふとん）dan 座布団（ざぶとん）. Jangan menebak arti hanya dari 団 sebagai 'kelompok'; kedua kata harus dipelajari utuh.", [
                kosakata("布団", "ふとん", "futon; alas tidur tradisional Jepang", "Digunakan untuk alas atau selimut tidur yang dapat dilipat/disimpan.", "Tidak sepenuhnya sama dengan ranjang berkaki; futon biasanya diletakkan di atas lantai/tatami.", "布 berarti kain dan 団 adalah unsur kata; 布団 merupakan nama perlengkapan tidur tradisional.", [
                    ["寒い夜は厚い布団を使う。", "さむい よるは あつい ふとんを つかう。", "Pada malam yang dingin, saya menggunakan futon yang tebal.", "Kebutuhan tidur."],
                    ["朝になったら布団をたたんで押し入れにしまう。", "あさに なったら ふとんを たたんで おしいれに しまう。", "Ketika pagi tiba, saya melipat futon dan menyimpannya di lemari.", "Kebiasaan rumah tangga Jepang."]
                ]),
                kosakata("座布団", "ざぶとん", "bantalan duduk tradisional Jepang", "Digunakan untuk duduk di lantai, sering di atas tatami.", "Berbeda dari 布団 untuk tidur; 座 menandakan fungsi duduk.", "座 berarti duduk; 布団 menandai bantalan berbahan kain.", [
                    ["お客様に座布団を出した。", "おきゃくさまに ざぶとんを だした。", "Saya mengeluarkan bantalan duduk untuk tamu.", "Menyambut tamu."],
                    ["畳の部屋では座布団に座って話した。", "たたみの へやでは ざぶとんに すわって はなした。", "Di ruangan bertatami, kami duduk di atas bantalan sambil berbincang.", "Situasi rumah tradisional."]
                ])
            ]),
        kanjiItem("w4d2-kanji-bun", "文", "kalimat, tulisan, atau ungkapan; dalam kata tertentu dibaca モン", ["モン"],
            "文句 berarti keluhan/protes; 注文 berarti pesanan; 文部科学省 merupakan nama kementerian. Walaupun berbagi kanji, makna kata-katanya berbeda.",
            "Bacaan fokus モン tampak pada 文句 dan 文部科学省. Pada 注文, 文 dibaca もん juga. Pelajari setiap kata dalam konteksnya karena 文 mempunyai bacaan lain di luar fokus hari ini.", [
                kosakata("文句", "もんく", "keluhan; protes; ungkapan/kata-kata", "Sering dipakai dalam 文句を言う (mengeluh) dan 文句がある (ada keberatan).", "Dapat berarti keluhan atau rangkaian kata dalam konteks tertentu; pada latihan ini artinya keluhan.", "文 menunjuk kata/ucapan dan 句 adalah frasa; dalam pemakaian umum 文句 dapat menjadi keluhan yang diucapkan.", [
                    ["サービスに文句があるなら、店員に伝えてください。", "サービスに もんくが あるなら、てんいんに つたえてください。", "Jika ada keluhan tentang layanan, sampaikan kepada pegawai toko.", "Keluhan pelanggan."],
                    ["彼は何にでも文句を言う。", "かれは なににでも もんくを いう。", "Dia mengeluhkan segala hal.", "Deskripsi kebiasaan." ]
                ]),
                kosakata("文部科学省", "もんぶかがくしょう", "Kementerian Pendidikan, Kebudayaan, Olahraga, Sains, dan Teknologi Jepang", "Nama kementerian Jepang yang menangani pendidikan, kebudayaan, olahraga, sains, dan teknologi.", "Nama institusi resmi; jangan diterjemahkan hanya sebagai kementerian pendidikan karena cakupan portofolionya lebih luas.", "文部・科学 adalah bidang yang digabung dalam nama lembaga; 省 menandai kementerian.", [
                    ["文部科学省は教育に関する政策を担当している。", "もんぶかがくしょうは きょういくに かんする せいさくを たんとうしている。", "Kementerian tersebut bertanggung jawab atas kebijakan yang berkaitan dengan pendidikan.", "Penjelasan institusi."],
                    ["文部科学省の資料を授業で使った。", "もんぶかがくしょうの しりょうを じゅぎょうで つかった。", "Saya menggunakan bahan dari kementerian tersebut dalam pelajaran.", "Konteks akademik." ]
                ]),
                kosakata("注文", "ちゅうもん", "pesanan; permintaan untuk memesan barang/makanan", "Digunakan di restoran, toko, dan transaksi barang/jasa.", "Lebih spesifik daripada 願い (permohonan); sering merujuk pada permintaan pembelian.", "注 berarti menuangkan/mengarahkan, 文 adalah kata/permintaan; secara utuh menjadi tindakan memesan.", [
                    ["店員にコーヒーを注文した。", "てんいんに コーヒーを ちゅうもんした。", "Saya memesan kopi kepada pegawai toko.", "Di kafe."],
                    ["注文した商品は来週届く予定です。", "ちゅうもんした しょうひんは らいしゅう とどく よていです。", "Barang yang dipesan rencananya akan tiba minggu depan.", "Transaksi belanja." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-to", "都", "ibu kota/metropolitan; dalam kata tertentu menjadi unsur yang berarti keadaan atau kesempatan", ["ツ"],
            "都合 berarti keadaan, kondisi, atau kenyamanan yang menentukan apakah sesuatu memungkinkan; 都度 berarti setiap kali.",
            "Bacaan fokus ツ muncul pada 都合（つごう）dan 都度（つど）. Kata-kata ini harus dibaca utuh; jangan otomatis membaca 都 sebagai と dalam semua gabungan.", [
                kosakata("都合", "つごう", "keadaan; kondisi; kenyamanan atau ketersediaan waktu", "Umum dalam pertanyaan 都合がいいですか dan ungkapan 都合により.", "Sering dipakai secara sopan untuk menanyakan waktu/ketersediaan; dapat juga berarti keadaan/pertimbangan.", "都合 merangkum keadaan yang memengaruhi apakah suatu tindakan dapat dilakukan.", [
                    ["明日の午後は都合がいいですか。", "あしたの ごごは つごうが いいですか。", "Apakah besok siang/sore waktunya cocok bagi Anda?", "Mengatur janji."],
                    ["都合により、会議の日程を変更します。", "つごうにより、かいぎの にっていを へんこうします。", "Karena suatu keadaan, jadwal rapat akan diubah.", "Pemberitahuan formal." ]
                ]),
                kosakata("都度", "つど", "setiap kali; pada tiap kesempatan", "Dipakai dalam tulisan formal atau petunjuk untuk menyatakan sesuatu dilakukan setiap kali kondisi terjadi.", "Lebih ringkas/formal daripada そのたびに.", "都度 menunjuk setiap kesempatan yang muncul; maknanya bersifat berulang.", [
                    ["変更があれば、その都度連絡してください。", "へんこうが あれば、そのつど れんらくしてください。", "Jika ada perubahan, silakan hubungi setiap kali terjadi.", "Instruksi kerja."],
                    ["申請は利用する都度、提出する必要がある。", "しんせいは りようする つど、ていしゅつする ひつようが ある。", "Pengajuan perlu diserahkan setiap kali layanan digunakan.", "Aturan administrasi." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-kougyou", "行", "pergi; melakukan; dalam kosakata tertentu berkaitan dengan kegiatan, barisan, dan administrasi", ["ギョウ"],
            "行事 adalah kegiatan/acara yang dijadwalkan; 行列 adalah deretan/antrean; 行政 adalah administrasi pemerintahan. Ketiganya memiliki nuansa berbeda meskipun berbagi kanji.",
            "Bacaan fokus ギョウ tampak pada ketiga kosakata. Jangan menyamakan 行列 sebagai barisan orang saja: konteks dapat berarti antrean atau susunan berderet.", [
                kosakata("行事", "ぎょうじ", "acara atau kegiatan yang diselenggarakan pada waktu tertentu", "Dipakai untuk kegiatan sekolah, budaya, tahunan, atau komunitas.", "Lebih terencana/terstruktur daripada aktivitas spontan sehari-hari.", "行 menandai pelaksanaan/kegiatan; 事 berarti hal/peristiwa.", [
                    ["学校では来月、文化祭という行事がある。", "がっこうでは らいげつ、ぶんかさいという ぎょうじが ある。", "Di sekolah, bulan depan ada acara bernama festival budaya.", "Kegiatan sekolah."],
                    ["地域の行事に家族で参加した。", "ちいきの ぎょうじに かぞくで さんかした。", "Saya ikut serta bersama keluarga dalam acara komunitas.", "Kegiatan masyarakat." ]
                ]),
                kosakata("行列", "ぎょうれつ", "antrean; barisan yang berderet", "Dipakai untuk antrean di toko/restoran maupun objek yang tersusun berderet.", "Konteks menentukan apakah artinya antrean orang atau deretan objek.", "行 berarti bergerak/berjalan dan 列 berarti barisan; gabungannya membentuk deretan.", [
                    ["人気の店の前には長い行列ができていた。", "にんきの みせの まえには ながい ぎょうれつが できていた。", "Antrean panjang terbentuk di depan restoran populer itu.", "Antrean pelanggan."],
                    ["参加者は二列の行列になって会場に入った。", "さんかしゃは にれつの ぎょうれつに なって かいじょうに はいった。", "Para peserta masuk ke lokasi dalam barisan dua lajur.", "Barisan acara." ]
                ]),
                kosakata("行政", "ぎょうせい", "administrasi pemerintahan; penyelenggaraan urusan publik", "Istilah formal dalam pemerintahan, kebijakan, dan pelayanan publik.", "Lebih luas daripada 役所 (kantor pemerintah); menunjuk fungsi/sistem administrasi.", "行 berarti menjalankan dan 政 berarti pemerintahan: pelaksanaan urusan pemerintahan.", [
                    ["行政サービスの手続きをオンラインで行える。", "ぎょうせいサービスの てつづきを オンラインで おこなえる。", "Prosedur layanan administrasi pemerintah dapat dilakukan secara daring.", "Pelayanan publik."],
                    ["行政は住民の意見を政策に反映させる必要がある。", "ぎょうせいは じゅうみんの いけんを せいさくに はんえいさせる ひつようが ある。", "Pemerintahan perlu mencerminkan pendapat warga ke dalam kebijakan.", "Diskusi tata kelola." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-tai", "体", "tubuh; bentuk atau penampilan luar; dalam kata tertentu dibaca テイ", ["テイ"],
            "世間体 dan 体裁 berkaitan dengan bagaimana sesuatu/orang tampak di mata orang lain. Keduanya menekankan penampilan sosial atau bentuk luar, bukan tubuh fisik.",
            "Bacaan fokus テイ muncul dalam 体裁（ていさい）dan 世間体（せけんてい）. Makna kata utuh lebih penting daripada menerjemahkan 体 sebagai 'tubuh' pada setiap contoh.", [
                kosakata("世間体", "せけんてい", "pandangan masyarakat; citra atau muka di mata orang lain", "Umum pada pola 世間体を気にする, yaitu terlalu memikirkan penilaian masyarakat.", "Bernuansa sosial dan reputasi; sering muncul dalam konteks tekanan untuk menjaga citra.", "世間 adalah masyarakat dan 体 di sini menunjuk tampilan/citra: bagaimana seseorang terlihat di mata umum.", [
                    ["彼は世間体を気にして、本当の希望を言えなかった。", "かれは せけんていを きにして、ほんとうの きぼうを いえなかった。", "Dia terlalu memikirkan pandangan masyarakat sehingga tidak bisa menyampaikan keinginannya yang sebenarnya.", "Tekanan sosial."],
                    ["世間体より、自分が納得できる選択をしたい。", "せけんていより、じぶんが なっとくできる せんたくを したい。", "Daripada memikirkan citra di mata masyarakat, saya ingin membuat pilihan yang bisa saya terima sendiri.", "Refleksi pribadi." ]
                ]),
                kosakata("体裁", "ていさい", "penampilan luar; bentuk yang tampak; kerapian penyajian", "Digunakan untuk format dokumen, penampilan, atau cara sesuatu terlihat dari luar.", "Dapat bermakna netral (format/penyajian) atau bernuansa menjaga penampilan di hadapan orang lain.", "体 menunjuk bentuk/tampilan dan 裁 berkaitan dengan menyusun/mengatur; kata utuh mengarah pada bentuk luar yang tersusun.", [
                    ["報告書の体裁を整えてから提出した。", "ほうこくしょの ていさいを ととのえてから ていしゅつした。", "Saya merapikan format laporan sebelum menyerahkannya.", "Dokumen kerja."],
                    ["体裁だけを整えても、中身が伴わなければ意味がない。", "ていさいだけを ととのえても、なかみが ともなわなければ いみが ない。", "Merapikan penampilan luar saja tidak berarti jika isinya tidak mendukung.", "Evaluasi kualitas." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-hatsu", "発", "mengeluarkan, memulai, atau berangkat; dalam kata tertentu berbunyi ホッ", ["ホッ"],
            "発作 adalah episode/serangan gejala yang terjadi; 発足 menandai organisasi mulai berdiri/beroperasi; 発起 berarti mengambil prakarsa.",
            "Bacaan fokus ホッ tampak pada 発作・発足・発起. Ketiganya perlu diingat sebagai kata utuh karena bacaan ホッ tidak otomatis berlaku pada semua kosakata dengan 発.", [
                kosakata("発作", "ほっさ", "serangan atau episode penyakit/gejala", "Dipakai untuk episode gejala medis seperti batuk, asma, atau kejang, sesuai konteks medis.", "Istilah medis; tidak selalu menunjukkan penyakit yang sama. Perlu melihat kata yang menerangkannya.", "発 berarti muncul/terjadi dan 作 merupakan bagian kata: gejala yang muncul sebagai suatu episode.", [
                    ["彼は突然、せきの発作に襲われた。", "かれは とつぜん、せきの ほっさに おそわれた。", "Dia tiba-tiba mengalami serangan batuk.", "Deskripsi kondisi kesehatan."],
                    ["発作が起きたときの対応を事前に確認しておく。", "ほっさが おきたときの たいおうを じぜんに かくにんしておく。", "Pastikan terlebih dahulu cara menangani ketika suatu episode gejala terjadi.", "Persiapan keselamatan medis umum." ]
                ]),
                kosakata("発足", "ほっそく", "pembentukan; mulai berdiri atau mulai beroperasi", "Digunakan untuk organisasi, komite, atau badan yang baru mulai beraktivitas.", "Lebih resmi daripada 始まる; lazim pada berita atau tulisan institusional.", "発 menandai permulaan/kemunculan; 足 merupakan bagian dari bentuk kata mapan ini.", [
                    ["新しい委員会が四月に発足した。", "あたらしい いいんかいが しがつに ほっそくした。", "Komite baru mulai dibentuk/beroperasi pada bulan April.", "Konteks organisasi."],
                    ["市民の声を聞くための組織が発足した。", "しみんの こえを きくための そしきが ほっそくした。", "Sebuah organisasi dibentuk untuk mendengarkan suara warga.", "Berita komunitas." ]
                ]),
                kosakata("発起", "ほっき", "memprakarsai; mengambil inisiatif untuk memulai sesuatu", "Sering muncul dalam bentuk 発起人 (ほっきにん), orang yang memprakarsai organisasi atau proyek.", "Lebih formal daripada 思いつく; menekankan tindakan mengambil prakarsa.", "発 berarti memulai dan 起 berarti bangkit: mengawali suatu kegiatan.", [
                    ["彼が発起人となって、地域の清掃活動を始めた。", "かれが ほっきにんとなって、ちいきの せいそうかつどうを はじめた。", "Dia menjadi penggagas dan memulai kegiatan bersih-bersih lingkungan.", "Inisiatif komunitas."],
                    ["友人たちの発起で勉強会が開かれた。", "ゆうじんたちの ほっきで べんきょうかいが ひらかれた。", "Atas prakarsa teman-teman, sebuah kelompok belajar diadakan.", "Kegiatan belajar." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-moto", "元", "asal; dasar; awal; dalam kosakata tertentu berbunyi ガン", ["ガン"],
            "元祖 menunjuk pencetus atau pendiri pertama; 元日 berarti hari pertama tahun, yaitu 1 Januari.",
            "Bacaan fokus ガン tampak pada 元祖（がんそ）dan 元日（がんじつ）. Jangan tertukar dengan bacaan もと/げん pada kata lain; ikuti kata utuh.", [
                kosakata("元祖", "がんそ", "pendiri pertama; pencetus awal; asal mula suatu gaya/produk", "Dipakai untuk menyebut pihak yang dianggap memulai sesuatu atau produk yang menjadi asal sebuah jenis.", "Sering digunakan dalam promosi makanan/produk; klaim '元祖' dapat bersifat historis atau komersial.", "元 berarti asal/awal; 祖 berarti leluhur/pelopor.", [
                    ["この店はその料理の元祖として知られている。", "この みせは その りょうりの がんそとして しられている。", "Restoran ini dikenal sebagai pencetus asli hidangan tersebut.", "Sejarah kuliner."],
                    ["元祖の味を守り続けている店もある。", "がんその あじを まもりつづけている みせも ある。", "Ada juga restoran yang terus mempertahankan cita rasa aslinya.", "Tradisi produk." ]
                ]),
                kosakata("元日", "がんじつ", "tanggal 1 Januari; hari pertama tahun baru", "Istilah kalender untuk hari pertama tahun baru.", "Lebih khusus daripada 正月 (しょうがつ), yang dapat merujuk pada periode tahun baru.", "元 berarti awal dan 日 berarti hari: hari pertama tahun.", [
                    ["元日は家族と一緒に過ごした。", "がんじつは かぞくと いっしょに すごした。", "Saya menghabiskan tanggal 1 Januari bersama keluarga.", "Tradisi tahun baru."],
                    ["元日には多くの店が休業する。", "がんじつには おおくの みせが きゅうぎょうする。", "Pada tanggal 1 Januari, banyak toko tutup.", "Informasi kalender/libur." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-sei", "生", "hidup; lahir; tumbuh; dalam kata tertentu berbunyi ショウ", ["ショウ"],
            "生じる berarti timbul/terjadi; 一生懸命 berarti dengan sungguh-sungguh; 生涯 menunjuk sepanjang hidup. Makna 'hidup/terjadi' memberi benang merah konseptual, tetapi ketiganya adalah kosakata mapan.",
            "Bacaan fokus ショウ tampak pada 生じる・一生懸命・生涯. Perhatikan bacaan kata utuh; 生 memiliki banyak bacaan lain seperti セイ dan うまれる.", [
                kosakata("生じる", "しょうじる", "timbul; terjadi; muncul", "Digunakan dalam tulisan formal untuk masalah, perbedaan, kerusakan, atau akibat yang muncul.", "Lebih formal daripada 起こる dalam beberapa konteks; sering dipakai untuk akibat atau kondisi abstrak.", "生 berarti muncul/terjadi: suatu keadaan baru mulai ada.", [
                    ["計画に予想外の問題が生じた。", "けいかくに よそうがいの もんだいが しょうじた。", "Masalah tak terduga muncul dalam rencana itu.", "Laporan pekerjaan."],
                    ["意見の違いから誤解が生じることがある。", "いけんの ちがいから ごかいが しょうじることが ある。", "Kesalahpahaman terkadang muncul dari perbedaan pendapat.", "Konteks komunikasi." ]
                ]),
                kosakata("一生懸命", "いっしょうけんめい", "dengan sungguh-sungguh; sekuat tenaga", "Adverbia yang umum dalam percakapan untuk usaha yang dilakukan secara serius dan tekun.", "Lebih alami dalam percakapan sehari-hari daripada 懸命に saja; dapat menerangkan belajar, bekerja, atau berlatih.", "Kata ini merupakan ungkapan mapan; maknanya sebagai satu kesatuan adalah mengerahkan usaha sepenuh hati.", [
                    ["合格するために一生懸命勉強した。", "ごうかくするために いっしょうけんめい べんきょうした。", "Saya belajar dengan sungguh-sungguh agar lulus.", "Persiapan ujian."],
                    ["彼女は一生懸命チームを支えている。", "かのじょは いっしょうけんめい チームを ささえている。", "Dia dengan sepenuh hati mendukung timnya.", "Kerja sama." ]
                ]),
                kosakata("生涯", "しょうがい", "seumur hidup; sepanjang hayat", "Digunakan dalam tulisan formal, biografi, dan pembahasan rentang hidup seseorang.", "Lebih formal daripada 一生 dalam beberapa konteks; menekankan keseluruhan perjalanan hidup.", "生 berarti hidup dan 涯 berarti batas/ujung: keseluruhan rentang hidup hingga akhir.", [
                    ["彼は生涯を教育に捧げた。", "かれは しょうがいを きょういくに ささげた。", "Dia mengabdikan seluruh hidupnya untuk pendidikan.", "Biografi."],
                    ["この経験は生涯忘れられないだろう。", "この けいけんは しょうがい わすれられないだろう。", "Pengalaman ini mungkin tidak akan terlupakan sepanjang hidup.", "Refleksi pribadi." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-mei", "名", "nama; reputasi; dalam kata tertentu berbunyi ミョウ", ["ミョウ"],
            "本名 adalah nama asli; 名字 adalah nama keluarga. Perbedaan ini penting: 本名 membedakan nama asli dari nama samaran, sedangkan 名字 menyebut nama keluarga.",
            "Bacaan fokus ミョウ tampak pada 本名（ほんみょう）dan 名字（みょうじ）. Pada 本名, karakter 名 memiliki bacaan みょう di akhir kata; nama keluarga juga dibaca みょうじ.", [
                kosakata("本名", "ほんみょう", "nama asli; nama resmi seseorang", "Dipakai untuk membedakan nama resmi dari nama pena, nama panggung, atau nama samaran.", "Tidak selalu berarti nama yang digunakan secara publik; kontrasnya dengan 芸名 atau ペンネーム.", "本 berarti asli/sebenarnya; 名 berarti nama.", [
                    ["作家は本名ではなく、ペンネームで活動している。", "さっかは ほんみょうではなく、ペンネームで かつどうしている。", "Penulis itu berkegiatan menggunakan nama pena, bukan nama aslinya.", "Konteks dunia tulis."],
                    ["申込書には本名を記入してください。", "もうしこみしょには ほんみょうを きにゅうしてください。", "Harap tuliskan nama asli pada formulir pendaftaran.", "Dokumen administrasi." ]
                ]),
                kosakata("名字", "みょうじ", "nama keluarga; nama belakang", "Digunakan untuk menyebut bagian nama yang diwariskan dalam keluarga.", "Dalam konteks Jepang, 名字 lazim dipakai sebagai istilah nama keluarga; juga dikenal 苗字 dengan arti sama.", "名字 adalah kata utuh yang menamai nama keluarga; pelafalan みょうじ perlu dihafal.", [
                    ["日本では名字を先に書くことが多い。", "にほんでは みょうじを さきに かくことが おおい。", "Di Jepang, nama keluarga sering ditulis lebih dahulu.", "Kebiasaan penulisan nama."],
                    ["同じ名字の人がクラスに三人いる。", "おなじ みょうじの ひとが クラスに さんにん いる。", "Ada tiga orang dengan nama keluarga yang sama di kelas.", "Konteks sekolah." ]
                ])
            ])
        ,
        kanjiItem("w4d2-kanji-yellow", "黄", "kuning; dalam gabungan tertentu dibaca オウ", ["オウ"],
            "黄 menjadi unsur kata 黄金 (emas) dan 緑黄色野菜 (sayuran dengan pigmen hijau dan kuning/oranye). Dalam kata majemuk, bacaannya mengikuti kosakata yang mapan.",
            "Bacaan fokus オウ muncul pada 黄金（おうごん）dan 緑黄色野菜（りょくおうしょくやさい）. Perhatikan bahwa pembacaan satu karakter tidak cukup untuk menebak keseluruhan kata.", [
                kosakata("黄金", "おうごん", "emas; sesuatu yang berwarna/bernilai seperti emas", "Digunakan untuk logam emas dan secara kiasan untuk masa atau kesempatan yang sangat berharga.", "Dapat bersifat literal (logam) atau kiasan (黄金時代, masa keemasan).", "黄 menunjuk warna kuning keemasan; 金 menunjuk logam/emas.", [
                    ["博物館には古代の黄金の装飾品が展示されている。", "はくぶつかんには こだいの おうごんの そうしょくひんが てんじされている。", "Di museum dipamerkan perhiasan emas dari zaman kuno.", "Koleksi museum."],
                    ["若い時期は学びの黄金時代とも言える。", "わかい じきは まなびの おうごんじだいとも いえる。", "Masa muda dapat disebut sebagai masa keemasan untuk belajar.", "Makna kiasan."]
                ]),
                kosakata("緑黄色野菜", "りょくおうしょくやさい", "sayuran hijau-kuning; sayuran berwarna hijau tua atau kuning-oranye", "Istilah nutrisi untuk kelompok sayuran yang kaya pigmen seperti karotenoid.", "Kategori gizi; bukan berarti setiap sayuran harus tampak campuran hijau dan kuning secara bersamaan.", "緑・黄 menunjuk kelompok warna, 色 berarti warna, dan 野菜 berarti sayuran.", [
                    ["緑黄色野菜を毎日の食事に取り入れている。", "りょくおうしょくやさいを まいにちの しょくじに とりいれている。", "Saya memasukkan sayuran hijau-kuning ke dalam menu sehari-hari.", "Kebiasaan makan sehat."],
                    ["にんじんやほうれん草は緑黄色野菜に分類される。", "にんじんや ほうれんそうは りょくおうしょくやさいに ぶんるいされる。", "Wortel dan bayam dikategorikan sebagai sayuran hijau-kuning.", "Penjelasan kelompok makanan."]
                ])
            ]),
        kanjiItem("w4d2-kanji-後", "後", "belakang; setelah; kemudian", ["コウ"],
            "後半 berarti paruh kedua, 後者 menunjuk pilihan yang disebut belakangan, dan 後方 berarti bagian belakang. Ketiganya mempertahankan gagasan posisi sesudah/di belakang.",
            "Bacaan fokus コウ muncul dalam 後半・後者・後方. Karakter 後 juga memiliki bacaan lain pada kosakata berbeda, tetapi daftar ini hanya menyimpan bacaan fokus dari sumber.", [
                kosakata("後半", "こうはん", "paruh kedua; bagian kedua", "Dipakai untuk waktu, pertandingan, buku, acara, dan periode yang dibagi dua.", "Berpasangan dengan 前半 (ぜんはん, paruh pertama).", "後 menunjuk bagian yang datang kemudian dan 半 berarti setengah.", [
                    ["試合の後半に、チームは二点を取った。", "しあいの こうはんに、チームは にてんを とった。", "Pada paruh kedua pertandingan, tim mencetak dua poin.", "Laporan pertandingan."],
                    ["本の後半では、主人公の考え方が変わる。", "ほんの こうはんでは、しゅじんこうの かんがえかたが かわる。", "Pada bagian kedua buku, cara berpikir tokoh utama berubah.", "Pembahasan bacaan."]
                ]),
                kosakata("後者", "こうしゃ", "yang disebut belakangan; pihak/opsi kedua dari dua hal", "Dipakai setelah menyebut dua pilihan atau dua hal, untuk merujuk pada yang kedua.", "Bentuk tulisan/formal; pasangannya 前者 (ぜんしゃ), yang disebut lebih dahulu.", "後 berarti belakangan dan 者 menunjuk pihak/benda yang dibicarakan.", [
                    ["車と電車なら、後者のほうが環境への負担が少ない。", "くるまと でんしゃなら、こうしゃの ほうが かんきょうへの ふたんが すくない。", "Di antara mobil dan kereta, yang disebut belakangan lebih sedikit membebani lingkungan.", "Membandingkan dua opsi."],
                    ["二つの案を比べると、後者が現実的だ。", "ふたつの あんを くらべると、こうしゃが げんじつてきだ。", "Jika membandingkan dua usulan, usulan yang kedua lebih realistis.", "Diskusi formal." ]
                ]),
                kosakata("後方", "こうほう", "bagian belakang; arah belakang", "Digunakan untuk lokasi, posisi, atau arah dalam laporan dan petunjuk.", "Lebih formal/objektif daripada 後ろ (うしろ).", "後 berarti belakang dan 方 berarti arah/sisi.", [
                    ["後方から車が近づいてきた。", "こうほうから くるまが ちかづいてきた。", "Sebuah mobil mendekat dari arah belakang.", "Peringatan situasi."],
                    ["荷物は車両の後方に置いてください。", "にもつは しゃりょうの こうほうに おいてください。", "Letakkan barang di bagian belakang kendaraan.", "Petunjuk penempatan." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-雨", "雨", "hujan; dalam kata majemuk dapat berbunyi ウ", ["ウ"],
            "雨天 dan 雨季 memakai 雨 untuk menunjukkan cuaca/musim hujan; 乾季 menjadi pembanding untuk musim kering.",
            "Bacaan fokus ウ tampak pada 雨天（うてん）dan 雨季（うき）. 乾季 bukan kosakata dengan kanji 雨; sumber mencantumkannya sebagai lawan/kontras makna.", [
                kosakata("雨天", "うてん", "cuaca hujan; keadaan ketika turun hujan", "Umum dalam pengumuman acara, olahraga, dan jadwal luar ruangan.", "Lebih formal daripada 雨の日; sering pada pengumuman seperti 雨天決行.", "雨 menunjuk hujan dan 天 berarti langit/cuaca.", [
                    ["雨天の場合も、試合は予定どおり行います。", "うてんの ばあいも、しあいは よていどおり おこないます。", "Bahkan jika hujan, pertandingan akan berlangsung sesuai jadwal.", "Pengumuman acara."],
                    ["雨天決行と書かれていたので、傘を持って出かけた。", "うてんけっこうと かかれていたので、かさを もって でかけた。", "Karena tertulis acara tetap berlangsung saat hujan, saya pergi membawa payung.", "Membaca pengumuman." ]
                ]),
                kosakata("雨季", "うき", "musim hujan", "Dipakai dalam konteks iklim dan pembagian musim di wilayah tropis/subtropis.", "Istilah klimatologi; padanannya di sumber adalah 乾季 (musim kemarau).", "雨 berarti hujan dan 季 berarti musim.", [
                    ["この地域の雨季は六月ごろに始まる。", "この ちいきの うきは ろくがつごろに はじまる。", "Musim hujan di wilayah ini dimulai sekitar bulan Juni.", "Informasi iklim."],
                    ["雨季には道路が冠水することがある。", "うきには どうろが かんすいすることが ある。", "Pada musim hujan, jalan terkadang tergenang air.", "Konteks lingkungan." ]
                ]),
                kosakata("乾季", "かんき", "musim kemarau; musim kering", "Dipakai sebagai kontras bagi 雨季 dalam pembahasan iklim.", "Bukan kosakata dengan kanji 雨; dimasukkan karena tercantum pada sumber sebagai lawan kata.", "乾 berarti kering dan 季 berarti musim.", [
                    ["乾季には川の水位が低くなる。", "かんきには かわの すいいが ひくくなる。", "Pada musim kemarau, permukaan air sungai menjadi rendah.", "Perubahan musim."],
                    ["乾季と雨季の長さは地域によって異なる。", "かんきと うきの ながさは ちいきによって ことなる。", "Panjang musim kemarau dan musim hujan berbeda-beda menurut wilayah.", "Perbandingan iklim." ]
                ], "Kata pembanding dari sumber; bukan kosakata berkanji 雨.")
            ]),
        kanjiItem("w4d2-kanji-yuu", "有", "ada; memiliki; keberadaan", ["ウ"],
            "有無 menanyakan ada atau tidaknya sesuatu; 有頂天 adalah keadaan sangat gembira; 未曾有 menyatakan kejadian yang belum pernah terjadi.",
            "Bacaan fokus ウ muncul dalam ketiga kata yang dicantumkan, tetapi arti kata utuhnya bervariasi. 有頂天 dan 未曾有 adalah kosakata mapan yang perlu dihafalkan sebagai satu kesatuan.", [
                kosakata("有無", "うむ", "ada atau tidaknya sesuatu; keberadaan atau ketiadaan", "Sering dalam pola 有無を確認する atau 有無にかかわらず.", "Bentuk formal/tertulis; sering dipakai dalam dokumen atau pemeriksaan.", "有 berarti ada dan 無 berarti tidak ada: pasangan untuk memeriksa keberadaan.", [
                    ["参加者の有無を事前に確認してください。", "さんかしゃの うむを じぜんに かくにんしてください。", "Harap periksa terlebih dahulu apakah ada peserta atau tidak.", "Administrasi acara."],
                    ["経験の有無は応募条件に関係ありません。", "けいけんの うむは おうぼじょうけんに かんけいありません。", "Ada atau tidaknya pengalaman tidak berkaitan dengan persyaratan pendaftaran.", "Informasi lowongan." ]
                ]),
                kosakata("有頂天", "うちょうてん", "sangat gembira sampai lupa diri; euforia", "Dipakai untuk menggambarkan seseorang yang terlalu gembira karena keberhasilan atau pujian.", "Dapat bernada kritik jika kegembiraan dianggap membuat seseorang kehilangan ketenangan.", "Kata ini merupakan ungkapan mapan; maknanya tidak dapat diterjemahkan dengan menjumlahkan arti karakter secara literal.", [
                    ["優勝が決まり、選手たちは有頂天になった。", "ゆうしょうが きまり、せんしゅたちは うちょうてんに なった。", "Setelah kemenangan dipastikan, para atlet sangat bersukacita.", "Perayaan kemenangan."],
                    ["少し褒められただけで有頂天になるのは早い。", "すこし ほめられただけで うちょうてんに なるのは はやい。", "Terlalu cepat merasa sangat bangga hanya karena sedikit dipuji.", "Nasihat agar tetap rendah hati." ]
                ]),
                kosakata("未曾有", "みぞう", "belum pernah terjadi sebelumnya; luar biasa/tiada banding", "Digunakan dalam berita atau tulisan formal untuk kejadian yang belum pernah dialami sebelumnya.", "Sering berkolokasi dengan bencana atau krisis; memiliki nuansa sangat besar/luar biasa.", "未 berarti belum dan 曾有 menunjuk pernah ada: sesuatu yang belum pernah ada/terjadi.", [
                    ["地域は未曾有の大雨に見舞われた。", "ちいきは みぞうの おおあめに みまわれた。", "Wilayah itu ditimpa hujan lebat yang belum pernah terjadi sebelumnya.", "Berita bencana."],
                    ["未曾有の危機に備えて、自治体が対策を進めている。", "みぞうの ききに そなえて、じちたいが たいさくを すすめている。", "Pemerintah daerah menyiapkan langkah-langkah untuk menghadapi krisis yang belum pernah terjadi sebelumnya.", "Kebijakan kesiapsiagaan." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-kai", "解", "melepaskan, memecahkan, melarutkan, atau menetralkan", ["ゲ"],
            "解毒 adalah penetralan/pengeluaran racun; 解熱剤 adalah obat yang menurunkan demam. Dalam dua kata ini 解 menjadi unsur yang bermakna menghilangkan efek atau memecahkan keadaan.",
            "Bacaan fokus ゲ tampak dalam 解毒（げどく）dan 解熱剤（げねつざい）. Bacaan ゲ bukan bacaan umum untuk semua kata dengan 解; ikuti kosakata.", [
                kosakata("解毒", "げどく", "penetralan racun; detoksifikasi", "Dipakai dalam konteks medis atau toksikologi untuk penanganan racun.", "Istilah khusus; tidak berarti semua program 'detoks' populer memiliki dasar medis.", "解 berarti mengurai/menghilangkan dan 毒 berarti racun.", [
                    ["医師は中毒の原因を調べ、必要な解毒処置を行った。", "いしは ちゅうどくの げんいんを しらべ、ひつような げどくしょちを おこなった。", "Dokter memeriksa penyebab keracunan dan melakukan penanganan penetralan racun yang diperlukan.", "Konteks medis."],
                    ["薬品の解毒については、専門家の指示に従う必要がある。", "やくひんの げどくについては、せんもんかの しじに したがう ひつようが ある。", "Untuk penanganan racun bahan kimia, perlu mengikuti petunjuk tenaga ahli.", "Informasi keselamatan." ]
                ]),
                kosakata("解熱剤", "げねつざい", "obat penurun demam; antipiretik", "Istilah untuk obat yang digunakan menurunkan demam.", "Istilah farmasi; pemilihan dan penggunaan obat mengikuti label serta saran tenaga kesehatan.", "解熱 berarti menurunkan/menghilangkan panas (demam), 剤 berarti sediaan obat.", [
                    ["解熱剤を使う前に、説明書をよく読んでください。", "げねつざいを つかうまえに、せつめいしょを よく よんでください。", "Sebelum menggunakan obat penurun demam, bacalah petunjuknya dengan saksama.", "Petunjuk penggunaan obat."],
                    ["熱が続く場合は、解熱剤だけに頼らず医療機関に相談する。", "ねつが つづく ばあいは、げねつざいだけに たよらず いりょうきかんに そうだんする。", "Jika demam berlanjut, jangan hanya mengandalkan obat penurun demam; konsultasikan dengan fasilitas kesehatan.", "Anjuran kesehatan umum." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-kou", "工", "pekerjaan/keahlian; rekayasa atau cara membuat", ["ク"],
            "工夫 berhubungan dengan menemukan cara/akal; 工面する berhubungan dengan mengusahakan uang; 大工 adalah tukang kayu. Bentuk kata menentukan maknanya.",
            "Bacaan fokus ク tampak pada 工夫（くふう）dan 工面（くめん）; 大工 dibaca だいく. Jangan menganggap 工 selalu dibaca ク karena terdapat bacaan lain di kata lain.", [
                kosakata("工夫", "くふう", "akal; ide kreatif; cara untuk membuat sesuatu lebih baik", "Dipakai pada pola 工夫する untuk mencari cara yang efektif atau kreatif.", "Berkaitan dengan metode/ide, bukan menyediakan uang.", "工 menunjuk pengerjaan dan 夫 merupakan unsur kata; kata utuh berarti merancang cara atau menyiasati sesuatu.", [
                    ["使いやすくなるように、机の配置を工夫した。", "つかいやすく なるように、つくえの はいちを くふうした。", "Saya mengatur tata letak meja dengan cara kreatif agar lebih mudah digunakan.", "Perbaikan ruang kerja."],
                    ["限られた材料で料理を工夫する。", "かぎられた ざいりょうで りょうりを くふうする。", "Saya mencari cara kreatif memasak dengan bahan yang terbatas.", "Kegiatan memasak." ]
                ]),
                kosakata("工面する", "くめんする", "mengusahakan atau menyediakan dana/uang", "Sering digunakan untuk mencari dana yang diperlukan, misalnya 学費を工面する.", "Berfokus pada pengaturan sumber uang, bukan mencari metode kreatif seperti 工夫する.", "Kata utuh 工面する berarti mengatur atau mengusahakan dana yang dibutuhkan.", [
                    ["引っ越し費用を工面するため、貯金を見直した。", "ひっこしひようを くめんするため、ちょきんを みなおした。", "Saya meninjau tabungan untuk mengusahakan biaya pindah rumah.", "Pengelolaan dana."],
                    ["彼は子どもの学費を工面している。", "かれは こどもの がくひを くめんしている。", "Dia sedang mengusahakan biaya sekolah anaknya.", "Keuangan keluarga." ]
                ]),
                kosakata("大工", "だいく", "tukang kayu; pekerja bangunan yang mengerjakan kayu", "Digunakan untuk profesi pengrajin/pembangun yang mengerjakan struktur kayu.", "Nama pekerjaan; tidak berarti 'alat besar'.", "Kata mapan yang menamai profesi tukang kayu; bacaannya だいく perlu dihafal.", [
                    ["大工が古い家の柱を修理している。", "だいくが ふるいいえの はしらを しゅうりしている。", "Tukang kayu sedang memperbaiki tiang rumah tua.", "Pekerjaan renovasi."],
                    ["祖父は若いころ大工として働いていた。", "そふは わかいころ だいくとして はたらいていた。", "Kakek bekerja sebagai tukang kayu ketika masih muda.", "Menceritakan pekerjaan." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-tei", "定", "menetapkan; menentukan; tetap", ["ジョウ"],
            "定規 adalah penggaris; 案の定 berarti seperti yang sudah diduga; 勘定 berarti perhitungan/tagihan. Bacaan ジョウ muncul dalam kosakata mapan ini.",
            "Sumber menuliskan bacaan fokus ジョウ. Perhatikan bunyi panjang じょう pada 定規・案の定・勘定; jangan keliru dengan bacaan てい pada kata lain.", [
                kosakata("定規", "じょうぎ", "penggaris", "Alat untuk mengukur atau menarik garis lurus.", "Dalam 三角定規 berarti penggaris segitiga; bacaan gabungan dapat berubah menjadi じょうぎ.", "定 berkaitan dengan menetapkan/menentukan ukuran, 規 berkaitan dengan aturan/standar.", [
                    ["定規を使って、まっすぐな線を引いた。", "じょうぎを つかって、まっすぐな せんを ひいた。", "Saya menggunakan penggaris untuk menarik garis lurus.", "Kegiatan belajar."],
                    ["三角定規で角度を測った。", "さんかくじょうぎで かくどを はかった。", "Saya mengukur sudut dengan penggaris segitiga.", "Pelajaran matematika." ]
                ]),
                kosakata("案の定", "あんのじょう", "seperti yang sudah diduga; sesuai perkiraan", "Adverbia untuk hasil yang terjadi sesuai dugaan sebelumnya.", "Sering menyiratkan dugaan yang terbukti benar, kadang bernuansa 'sudah bisa ditebak'.", "案 berarti perkiraan/rencana dan 定 menunjuk kepastian: hasilnya sesuai perkiraan.", [
                    ["案の定、電車は遅れて到着した。", "あんのじょう、でんしゃは おくれて とうちゃくした。", "Seperti yang sudah diduga, kereta tiba terlambat.", "Menceritakan hasil yang diperkirakan."],
                    ["十分に練習しなかったので、案の定うまくできなかった。", "じゅうぶんに れんしゅうしなかったので、あんのじょう うまく できなかった。", "Karena tidak berlatih cukup, seperti yang diduga saya tidak dapat melakukannya dengan baik.", "Evaluasi pengalaman." ]
                ]),
                kosakata("勘定", "かんじょう", "perhitungan; tagihan atau rekening yang harus dibayar", "Digunakan ketika menghitung biaya atau meminta tagihan di restoran/toko.", "Makna dapat berupa proses menghitung atau jumlah yang harus dibayar.", "勘 berkaitan dengan pertimbangan/perhitungan; 定 berhubungan dengan penetapan jumlah.", [
                    ["食事の勘定は私が払います。", "しょくじの かんじょうは わたしが はらいます。", "Tagihan makan akan saya bayar.", "Situasi restoran."],
                    ["人数を勘定してから、席を用意した。", "にんずうを かんじょうしてから、せきを よういした。", "Setelah menghitung jumlah orang, kami menyiapkan tempat duduk.", "Pengaturan acara." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-shitsu", "質", "mutu, sifat, atau barang yang digadaikan; dalam kata tertentu berbunyi シチ", ["シチ"],
            "人質 berarti sandera, sedangkan 質屋 adalah pegadaian. Pada dua kata ini 質 dibaca じち/しち sesuai gabungan dan perubahan bunyi; sumber menyoroti シチ.",
            "Bacaan fokus シチ tampak dalam 質屋（しちや）. 人質 dibaca ひとじち, dengan perubahan bunyi menjadi じち; catat bacaan kata utuh agar tidak salah mengaplikasikan シチ secara mekanis.", [
                kosakata("人質", "ひとじち", "sandera; orang yang ditahan untuk dijadikan alat tekanan", "Digunakan dalam berita, hukum, dan narasi untuk orang yang ditahan secara paksa.", "Kata ini memiliki perubahan bunyi しち → じち dalam gabungan 人質. Pelajari bacaan utuh ひとじち.", "人 berarti orang dan 質 berkaitan dengan jaminan/barang gadai; dalam kata ini menunjuk orang yang ditahan sebagai sandera.", [
                    ["事件では人質の安全が最優先された。", "じけんでは ひとじちの あんぜんが さいゆうせんされた。", "Dalam peristiwa itu, keselamatan para sandera menjadi prioritas utama.", "Berita hukum."],
                    ["警察は人質を安全に保護するために対応した。", "けいさつは ひとじちを あんぜんに ほごするために たいおうした。", "Polisi mengambil tindakan untuk melindungi sandera dengan aman.", "Deskripsi penanganan peristiwa." ]
                ]),
                kosakata("質屋", "しちや", "pegadaian; tempat meminjam uang dengan jaminan barang", "Digunakan untuk tempat yang menerima barang sebagai jaminan pinjaman.", "Istilah usaha; berbeda dari 質 (しつ, mutu) pada kosakata seperti 品質.", "質屋 adalah kata mapan untuk usaha gadai; bacaan シチ perlu diingat dalam konteks ini.", [
                    ["古い時計を質屋に預けた。", "ふるい とけいを しちやに あずけた。", "Saya menggadaikan jam tua di pegadaian.", "Konteks transaksi gadai."],
                    ["駅前の質屋は長年営業している。", "えきまえの しちやは ながねん えいぎょうしている。", "Pegadaian di depan stasiun telah beroperasi selama bertahun-tahun.", "Deskripsi tempat usaha." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-ko", "子", "anak; dalam kata tertentu menjadi unsur kata dengan bacaan ス", ["ス"],
            "様子 berarti keadaan/tampilan, 扇子 berarti kipas lipat, dan 椅子 berarti kursi. Ketiga kata memakai bacaan す pada 子, tetapi makna kata utuh berbeda.",
            "Bacaan fokus ス tampak pada 様子・扇子・椅子. Jangan menyamakan 子 di sini dengan bacaan こ yang umum pada anak; kosakata harus dipelajari secara utuh.", [
                kosakata("様子", "ようす", "keadaan; kondisi; penampilan atau tanda-tanda", "Digunakan untuk mengamati situasi orang, benda, atau keadaan yang sedang berlangsung.", "Sangat umum; dapat berarti kondisi objektif atau kesan yang tampak dari luar.", "様 menunjuk bentuk/keadaan dan 子 merupakan bagian dari kata mapan 様子.", [
                    ["少し様子を見てから決めましょう。", "すこし ようすを みてから きめましょう。", "Mari amati keadaannya sebentar sebelum memutuskan.", "Menunda keputusan sambil mengamati."],
                    ["彼女の様子がおかしいので、声をかけた。", "かのじょの ようすが おかしいので、こえを かけた。", "Karena keadaannya tampak tidak biasa, saya menyapanya.", "Mengamati kondisi seseorang." ]
                ]),
                kosakata("扇子", "せんす", "kipas lipat tradisional", "Digunakan untuk kipas tangan lipat, sering dijumpai dalam budaya Jepang.", "Berbeda dari うちわ yang kaku/tidak dilipat; 扇子 memiliki rangka yang dapat dilipat.", "扇 menunjuk kipas dan 子 adalah unsur pembentuk kata.", [
                    ["暑い日に扇子で風を送った。", "あつい ひに せんすで かぜを おくった。", "Pada hari yang panas, saya mengipasi diri dengan kipas lipat.", "Kegiatan sehari-hari."],
                    ["祖母は美しい絵が描かれた扇子を持っている。", "そぼは うつくしい えが かかれた せんすを もっている。", "Nenek memiliki kipas lipat yang dihiasi gambar indah.", "Benda budaya." ]
                ]),
                kosakata("椅子", "いす", "kursi", "Kata umum untuk tempat duduk berkaki atau kursi.", "Bentuk kanji 椅子 dapat juga ditulis いす dalam konteks biasa; bacaan 子 adalah す.", "椅子 adalah kosakata mapan untuk benda tempat duduk; tidak perlu memecah makna karakter untuk menghafalkan kata.", [
                    ["窓の近くに椅子を置いた。", "まどの ちかくに いすを おいた。", "Saya meletakkan kursi di dekat jendela.", "Menata ruangan."],
                    ["この椅子は長時間座っても疲れにくい。", "この いすは ちょうじかん すわっても つかれにくい。", "Kursi ini tidak mudah membuat lelah meskipun diduduki lama.", "Deskripsi furnitur." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-migi", "右", "kanan; arah kanan", ["ウ"],
            "右折 berarti belok kanan, 右派 dan 右翼 merujuk pada kelompok/posisi sayap kanan dalam spektrum politik atau susunan.",
            "Bacaan fokus ウ tampak pada 右折・右派・右翼. Untuk arah sehari-hari, 右 sering dibaca みぎ; materi ini berfokus pada bacaan dalam kata majemuk.", [
                kosakata("右折", "うせつ", "belok kanan", "Dipakai pada rambu lalu lintas, instruksi berkendara, dan petunjuk arah.", "Pasangannya 左折 (させつ, belok kiri).", "右 berarti kanan dan 折 berarti membelok.", [
                    ["次の交差点を右折してください。", "つぎの こうさてんを うせつしてください。", "Silakan belok kanan di persimpangan berikutnya.", "Petunjuk navigasi."],
                    ["この道路では午後六時まで右折できない。", "この どうろでは ごご ろくじまで うせつできない。", "Di jalan ini, belok kanan tidak diperbolehkan sampai pukul enam sore.", "Aturan lalu lintas." ]
                ]),
                kosakata("右派", "うは", "kelompok sayap kanan; faksi kanan", "Digunakan terutama dalam konteks politik atau pembagian kelompok berdasarkan pandangan.", "Istilah politik; arti spesifik spektrum kanan bergantung pada negara dan konteks.", "右 menunjuk posisi kanan dan 派 berarti faksi/aliran.", [
                    ["その政党には右派と左派の両方がいる。", "その せいとうには うはと さはの りょうほうが いる。", "Partai itu memiliki kelompok sayap kanan dan sayap kiri.", "Analisis politik."],
                    ["右派の議員が法案に反対した。", "うはの ぎいんが ほうあんに はんたいした。", "Anggota parlemen dari sayap kanan menentang rancangan undang-undang itu.", "Berita parlemen." ]
                ]),
                kosakata("右翼", "うよく", "sayap kanan; kelompok atau bagian sisi kanan", "Dipakai dalam konteks politik maupun istilah posisi/struktur, sesuai konteks.", "Dalam politik, dapat berdekatan dengan 右派 tetapi tidak selalu identik pada semua pemakaian.", "右 berarti kanan dan 翼 berarti sayap.", [
                    ["右翼の思想について、授業で歴史的背景を学んだ。", "うよくの しそうについて、じゅぎょうで れきしてき はいけいを まなんだ。", "Dalam pelajaran, kami mempelajari latar belakang sejarah pemikiran sayap kanan.", "Pembahasan akademis."],
                    ["飛行機の右翼に小さな傷が見つかった。", "ひこうきの うよくに ちいさな きずが みつかった。", "Ditemukan goresan kecil pada sayap kanan pesawat.", "Arti literal posisi." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-shita", "下", "bawah; bagian lebih rendah; dalam kata tertentu berbunyi ゲ", ["ゲ"],
            "上下 berarti atas dan bawah; 下旬 adalah sepuluh hari terakhir dalam bulan; 下水道 adalah saluran pembuangan/air limbah.",
            "Bacaan fokus ゲ muncul pada 上下（じょうげ）, 下旬（げじゅん）, dan 下水道（げすいどう）. Pada gabungan, bacaan dapat berbeda dari kunyomi した/しも.", [
                kosakata("上下", "じょうげ", "atas dan bawah; naik turun", "Digunakan untuk posisi vertikal, urutan, atau perubahan yang naik-turun.", "Dapat dipakai secara harfiah maupun kiasan, misalnya harga yang naik turun.", "上 dan 下 merupakan pasangan antonim untuk arah vertikal.", [
                    ["棚の上下を整理して、使いやすくした。", "たなの じょうげを せいりして、つかいやすくした。", "Saya merapikan bagian atas dan bawah rak agar mudah digunakan.", "Menata barang."],
                    ["気温の上下が激しいので、服装に注意しよう。", "きおんの じょうげが はげしいので、ふくそうに ちゅういしよう。", "Karena perubahan suhu naik-turunnya besar, mari perhatikan pakaian.", "Konteks cuaca." ]
                ]),
                kosakata("下旬", "げじゅん", "sepuluh hari terakhir dalam suatu bulan", "Pembagian kalender Jepang: 上旬 (awal bulan), 中旬 (pertengahan), 下旬 (akhir bulan).", "Makna waktu yang spesifik; bukan berarti tanggal terakhir saja.", "下 menunjuk bagian akhir/bawah dalam urutan; 旬 adalah periode sepuluh hari.", [
                    ["来月の下旬に試験がある。", "らいげつの げじゅんに しけんが ある。", "Ada ujian pada sepuluh hari terakhir bulan depan.", "Jadwal akademik."],
                    ["商品は十一月下旬に発売される予定だ。", "しょうひんは じゅういちがつ げじゅんに はつばいされる よていだ。", "Produk itu rencananya diluncurkan pada akhir November.", "Pengumuman produk." ]
                ]),
                kosakata("下水道", "げすいどう", "saluran pembuangan/air limbah; sistem sewerage", "Istilah infrastruktur kota untuk sistem yang mengalirkan dan mengolah air limbah.", "Istilah teknis/administratif; berbeda dari 上水道 (じょうすいどう), sistem air bersih.", "下水 berarti air limbah dan 道 menunjuk jaringan/saluran.", [
                    ["市は古い下水道を新しくする工事を始めた。", "しは ふるい げすいどうを あたらしくする こうじを はじめた。", "Pemerintah kota memulai pekerjaan untuk memperbarui saluran pembuangan lama.", "Proyek infrastruktur."],
                    ["大雨のときは下水道の水位に注意が必要だ。", "おおあめの ときは げすいどうの すいいに ちゅういが ひつようだ。", "Saat hujan lebat, perlu memperhatikan tinggi air di saluran pembuangan.", "Pengelolaan kota." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-tai-pair", "対", "berhadapan; pasangan; berlawanan atau saling", ["ツイ"],
            "一対 berarti satu pasang; 対になる berarti menjadi pasangan yang saling melengkapi atau cocok sebagai pasangan.",
            "Bacaan fokus ツイ tampak pada 一対（いっつい）dan 対になる（ついになる）. Ini berbeda dari bacaan たい dalam kata lain seperti 対応.", [
                kosakata("一対", "いっつい", "satu pasang", "Digunakan untuk dua benda yang dianggap satu set/pasangan.", "Lebih spesifik daripada 二つ; menekankan hubungan sebagai pasangan.", "一 berarti satu dan 対 berarti pasangan: satu set yang terdiri dari dua bagian.", [
                    ["一対の鳥が池のそばにいた。", "いっついの とりが いけの そばに いた。", "Sepasang burung berada di dekat kolam.", "Deskripsi alam."],
                    ["この器は一対で販売されている。", "この うつわは いっついで はんばいされている。", "Perangkat wadah ini dijual dalam satu pasang.", "Konteks belanja." ]
                ]),
                kosakata("対になる", "ついになる", "menjadi pasangan; berpasangan", "Dipakai ketika dua hal membentuk pasangan atau saling melengkapi.", "Bukan sekadar berada berdampingan; menunjukkan relasi pasangan.", "対 adalah satu pasangan; になる menyatakan terbentuknya hubungan itu.", [
                    ["この二つの言葉は対になる表現だ。", "この ふたつの ことばは ついになる ひょうげんだ。", "Kedua kata ini merupakan ungkapan yang berpasangan.", "Pembelajaran bahasa."],
                    ["左右の部品が対になるように並べてください。", "さゆうの ぶひんが ついになるように ならべてください。", "Susunlah komponen kiri dan kanan agar membentuk pasangan.", "Instruksi perakitan." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-ni", "似", "mirip; menyerupai", ["ジ"],
            "類似 menyatakan kemiripan antara dua hal; 擬似体験 adalah pengalaman simulasi yang menyerupai pengalaman nyata.",
            "Bacaan fokus ジ muncul pada 類似（るいじ）dan 擬似（ぎじ）. Bedakan 類似 = kemiripan aktual/serupa, sedangkan 擬似 = tiruan/simulasi yang menyerupai.", [
                kosakata("類似", "るいじ", "kemiripan; keserupaan", "Dipakai dalam analisis, klasifikasi, produk, dan perbandingan.", "Menunjuk adanya kesamaan antara dua hal; tidak selalu berarti satu adalah tiruan dari yang lain.", "類 berarti jenis/kelompok dan 似 berarti mirip: dua hal yang menyerupai dalam sifat tertentu.", [
                    ["この二つの文章には多くの類似点がある。", "この ふたつの ぶんしょうには おおくの るいじてんが ある。", "Ada banyak titik kemiripan di antara kedua teks ini.", "Analisis teks."],
                    ["類似した商品が市場に出ている。", "るいじした しょうひんが しじょうに でている。", "Produk-produk serupa tersedia di pasar.", "Konteks produk." ]
                ]),
                kosakata("擬似体験", "ぎじたいけん", "pengalaman simulasi; pengalaman tiruan yang menyerupai pengalaman nyata", "Digunakan dalam pelatihan, pendidikan, simulasi, dan teknologi virtual.", "Bukan pengalaman asli secara langsung; peserta mengalami situasi yang dibuat menyerupai kondisi nyata.", "擬似 berarti tiruan/simulasi dan 体験 berarti pengalaman.", [
                    ["訓練では、災害の擬似体験を通して対応を学ぶ。", "くんれんでは、さいがいの ぎじたいけんを とおして たいおうを まなぶ。", "Dalam pelatihan, peserta mempelajari penanganan melalui simulasi pengalaman bencana.", "Pendidikan kesiapsiagaan."],
                    ["仮想空間で海外旅行の擬似体験ができる。", "かそうくうかんで かいがいりょこうの ぎじたいけんが できる。", "Di ruang virtual, seseorang dapat merasakan simulasi perjalanan ke luar negeri.", "Teknologi virtual." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-o", "汚", "kotor; mencemari; menodai nama baik", ["オ"],
            "汚染 berarti pencemaran; 汚名返上 berarti memulihkan nama baik; 汚職 berarti korupsi atau penyalahgunaan jabatan. Makna 'kotor/noda' berkembang secara fisik maupun kiasan.",
            "Bacaan fokus オ muncul dalam 汚染・汚名返上・汚職. Kunyomi 汚す/汚れる tidak menjadi fokus daftar ini.", [
                kosakata("汚染", "おせん", "pencemaran; kontaminasi", "Digunakan dalam isu lingkungan, udara, air, tanah, dan bahan berbahaya.", "Istilah formal; sering muncul pada laporan ilmiah dan berita lingkungan.", "汚 berarti mengotori dan 染 berarti mewarnai/meresap: sesuatu menjadi tercemar.", [
                    ["工場の排水による川の汚染が問題になっている。", "こうじょうの はいすいによる かわの おせんが もんだいに なっている。", "Pencemaran sungai akibat limbah pabrik menjadi masalah.", "Isu lingkungan."],
                    ["大気汚染を減らすために、公共交通機関を利用する人が増えた。", "たいきおせんを へらすために、こうきょうこうつうきかんを りようする ひとが ふえた。", "Untuk mengurangi pencemaran udara, semakin banyak orang menggunakan transportasi umum.", "Kebijakan lingkungan." ]
                ]),
                kosakata("汚名返上", "おめいへんじょう", "memulihkan nama baik; menghapus reputasi buruk", "Dipakai ketika seseorang berusaha membuktikan diri dan menghilangkan penilaian negatif sebelumnya.", "Ungkapan formal; menekankan tindakan membalikkan reputasi buruk.", "汚名 adalah nama/reputasi buruk; 返上 berarti mengembalikan atau menyingkirkan beban itu.", [
                    ["選手は次の大会で汚名返上を目指している。", "せんしゅは つぎの たいかいで おめいへんじょうを めざしている。", "Atlet itu berusaha memulihkan nama baiknya pada turnamen berikutnya.", "Olahraga."],
                    ["彼は誤解を解き、汚名返上を果たした。", "かれは ごかいを とき、おめいへんじょうを はたした。", "Dia meluruskan kesalahpahaman dan berhasil memulihkan nama baiknya.", "Konteks reputasi." ]
                ]),
                kosakata("汚職", "おしょく", "korupsi; penyalahgunaan jabatan untuk keuntungan pribadi", "Istilah berita, hukum, dan pemerintahan.", "Istilah sosial/hukum dengan konotasi negatif; tidak sama dengan 汚染 lingkungan.", "汚 berarti menodai dan 職 berarti jabatan/pekerjaan: penyalahgunaan jabatan yang mencemari integritas.", [
                    ["政府は汚職を防ぐための制度を強化した。", "せいふは おしょくを ふせぐための せいどを きょうかした。", "Pemerintah memperkuat sistem untuk mencegah korupsi.", "Kebijakan antikorupsi."],
                    ["汚職事件について、第三者委員会が調査している。", "おしょくじけんについて、だいさんしゃいいんかいが ちょうさしている。", "Komite independen sedang menyelidiki kasus korupsi itu.", "Berita/investigasi." ]
                ])
            ]),
        kanjiItem("w4d2-kanji-to-ko", "戸", "pintu; satu rumah tangga/unit rumah", ["コ"],
            "戸籍 adalah catatan keluarga resmi Jepang; 一戸建て adalah rumah terpisah/satu unit bangunan rumah.",
            "Bacaan fokus コ tampak pada 戸籍（こせき）dan 一戸建て（いっこだて）. Dalam 一戸建て, bunyi menjadi いっこだて; pelajari perubahan bunyi pada kata utuh.", [
                kosakata("戸籍", "こせき", "catatan sipil/daftar keluarga resmi Jepang", "Istilah sistem administrasi keluarga Jepang yang mencatat hubungan keluarga dan status tertentu.", "Konsep administrasi yang khas Jepang; tidak persis sama dengan satu dokumen identitas Indonesia.", "戸 berkaitan dengan rumah tangga dan 籍 berarti daftar/registrasi; gabungannya adalah registrasi keluarga.", [
                    ["戸籍の証明書を市役所で取得した。", "こせきの しょうめいしょを しやくしょで しゅとくした。", "Saya memperoleh surat keterangan catatan keluarga di kantor kota.", "Administrasi kependudukan Jepang."],
                    ["結婚すると、戸籍に関する手続きが必要になる。", "けっこんすると、こせきに かんする てつづきが ひつように なる。", "Ketika menikah, diperlukan prosedur yang berkaitan dengan catatan keluarga.", "Administrasi keluarga." ]
                ]),
                kosakata("一戸建て", "いっこだて", "rumah tinggal terpisah; rumah satu bangunan untuk satu rumah tangga", "Digunakan dalam iklan properti dan pembahasan tipe hunian.", "Berbeda dari apartemen atau rumah susun; menunjuk bangunan rumah yang berdiri sendiri.", "一戸 berarti satu unit rumah tangga/bangunan dan 建て berarti bangunan yang didirikan.", [
                    ["郊外に一戸建てを買うのが夢です。", "こうがいに いっこだてを かうのが ゆめです。", "Impian saya adalah membeli rumah terpisah di pinggiran kota.", "Membicarakan hunian."],
                    ["一戸建てには庭が付いていることが多い。", "いっこだてには にわが ついていることが おおい。", "Rumah terpisah sering memiliki halaman.", "Deskripsi tipe rumah." ]
                ])
            ])
    ],
    exercises: [
        {
            id: "w4d2-r1-1", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "子どもの教育費を（a. 工夫 b. 工面）するために昼夜を問わず働く。",
            choices: [
                { label: "a", text: "工夫（くふう）", meaning: "akal/cara kreatif; upaya menemukan metode", whyNot: "工夫する berarti memikirkan cara atau menyiasati sesuatu. Yang dibutuhkan dalam kalimat adalah menyediakan uang untuk biaya pendidikan." },
                { label: "b", text: "工面（くめん）", meaning: "mengusahakan atau menyediakan uang", why: "Pola 教育費を工面する berarti mengusahakan dana untuk biaya pendidikan; cocok dengan konteks bekerja siang dan malam." }
            ], answer: "b", answerWord: "工面", answerReading: "くめん",
            translation: "Saya bekerja siang dan malam untuk mengusahakan biaya pendidikan anak.",
            explanation: "工面する berhubungan dengan menyiapkan/mencari dana. 工夫する berhubungan dengan menemukan cara yang kreatif. Karena objeknya 教育費 (biaya pendidikan), jawaban yang tepat adalah 工面."
        },
        {
            id: "w4d2-r1-2", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "（a. 未曾有 b. 有頂天）の水害に見舞われる。",
            choices: [
                { label: "a", text: "未曾有（みぞう）", meaning: "belum pernah terjadi sebelumnya; belum pernah ada", why: "未曾有の水害 berarti bencana banjir yang belum pernah terjadi sebelumnya; cocok dengan peristiwa buruk yang menimpa." },
                { label: "b", text: "有頂天（うちょうてん）", meaning: "sangat gembira sampai lupa diri", whyNot: "有頂天 menggambarkan keadaan emosi seseorang yang sangat senang, bukan sifat bencana." }
            ], answer: "a", answerWord: "未曾有", answerReading: "みぞう",
            translation: "Ditimpa bencana banjir yang belum pernah terjadi sebelumnya.",
            explanation: "未曾有 menjelaskan skala/keunikan kejadian yang belum pernah terjadi. Catatan sumber: 見舞われる di sini berarti 'ditimpa/mengalami' sesuatu yang buruk, bukan menerima kunjungan." 
        },
        {
            id: "w4d2-r1-3", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "トキという鳥は（a. 天然 b. 黄金）記念物に指定されている。",
            choices: [
                { label: "a", text: "天然（てんねん）", meaning: "alami", why: "天然記念物 adalah istilah tetap untuk objek alam yang ditetapkan untuk dilindungi; cocok untuk burung toki." },
                { label: "b", text: "黄金（おうごん）", meaning: "emas", whyNot: "黄金記念物 bukan istilah yang dimaksud; 黄金 berarti emas dan tidak berhubungan dengan penetapan objek alam." }
            ], answer: "a", answerWord: "天然記念物", answerReading: "てんねんきねんぶつ",
            translation: "Burung yang disebut toki ditetapkan sebagai monumen alam.",
            explanation: "天然記念物 adalah istilah pelestarian alam. 黄金 berarti emas; meski merupakan kata yang benar, gabungan 黄金記念物 tidak sesuai dengan konteks yang diuji."
        },
        {
            id: "w4d2-r1-4", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "必要な時、その（a. 都度 b. 都合）発行できる1回限りのクレジットカードがあるらしい。",
            choices: [
                { label: "a", text: "都度（つど）", meaning: "setiap kali; tiap kesempatan", why: "その都度発行できる berarti dapat diterbitkan setiap kali diperlukan; sesuai dengan kartu sekali pakai." },
                { label: "b", text: "都合（つごう）", meaning: "keadaan/kondisi/ketersediaan waktu", whyNot: "その都合発行 bukan pola yang alami. 都合 biasanya dipakai seperti 都合がいい atau 都合により." }
            ], answer: "a", answerWord: "都度", answerReading: "つど",
            translation: "Konon ada kartu kredit sekali pakai yang dapat diterbitkan setiap kali diperlukan.",
            explanation: "都度 adalah adverbia nominal 'setiap kali'. 都合 merujuk pada keadaan/ketersediaan, sehingga tidak dapat menggantikan 都度 dalam pola その都度発行できる."
        },
        {
            id: "w4d2-r1-5", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "この商品の（a. 類似 b. 疑似）品にご注意ください。",
            choices: [
                { label: "a", text: "類似（るいじ）", meaning: "kemiripan; serupa", why: "類似品 berarti produk lain yang mirip dengan produk ini. Ini kolokasi yang lazim pada peringatan produk." },
                { label: "b", text: "疑似（ぎじ）", meaning: "tiruan/simulasi/pseudo", whyNot: "疑似 dapat dipakai untuk sesuatu yang menyerupai atau simulasi, tetapi dalam kalimat peringatan tentang produk yang mirip, 類似品 adalah pilihan yang paling tepat dan lazim." }
            ], answer: "a", answerWord: "類似品", answerReading: "るいじひん",
            translation: "Harap berhati-hati terhadap produk yang mirip dengan produk ini.",
            explanation: "類似品 adalah istilah umum untuk barang yang serupa. 疑似品 dapat muncul dalam konteks tiruan/simulasi tertentu, tetapi bukan pilihan yang paling alami pada peringatan ini."
        },
        {
            id: "w4d2-r1-6", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "ハイジャック犯は乗客を（a. 弟子 b. 人質）に、燃料補給と食糧を要求した。",
            choices: [
                { label: "a", text: "弟子（でし）", meaning: "murid/pengikut ahli", whyNot: "弟子 adalah orang yang belajar di bawah bimbingan guru; tidak sesuai dengan konteks penumpang yang ditahan." },
                { label: "b", text: "人質（ひとじち）", meaning: "sandera", why: "乗客を人質にする berarti menjadikan penumpang sebagai sandera; cocok dengan struktur dan konteks kalimat." }
            ], answer: "b", answerWord: "人質", answerReading: "ひとじち",
            translation: "Pelaku pembajakan menjadikan penumpang sebagai sandera dan menuntut pengisian bahan bakar serta persediaan makanan.",
            explanation: "人質 adalah orang yang ditahan untuk dijadikan alat tekanan. 弟子 berarti murid dan tidak cocok. Kalimat ini dibahas sebagai kosakata pemahaman bacaan, bukan sebagai petunjuk tindakan." 
        },
        {
            id: "w4d2-r2-7", section: "練習Ⅱ", type: "kanji-fill", prompt: "Ubah bagian hiragana menjadi kanji yang tepat.", answer: "k, j",
            items: [
                { prompt: "うてん決行 → ＿＿＿天", answer: "雨", answerReading: "うてん", answerWord: "雨天", choice: "k", why: "雨天 dibaca うてん dan berarti cuaca hujan; 雨 adalah kanji untuk あめ/う." },
                { prompt: "うせつ禁止 → ＿＿＿折", answer: "右", answerReading: "うせつ", answerWord: "右折", choice: "j", why: "右折 dibaca うせつ dan berarti belok kanan; 右 adalah kanji untuk kanan." }
            ],
            choices: ["a. 有", "b. 下", "c. 井", "d. 定", "e. 解", "f. 子", "g. 都", "h. 仮", "i. 守", "j. 右", "k. 雨", "l. 生"],
            translation: "Keputusan tetap dilaksanakan meskipun hujan; larangan belok kanan.",
            explanation: "Kata pertama adalah 雨天決行 (tetap dilaksanakan saat hujan). Kata kedua adalah 右折禁止 (dilarang belok kanan). Pilihan lain tidak membentuk kosakata yang sesuai."
        },
        {
            id: "w4d2-r2-8", section: "練習Ⅱ", type: "kanji-fill", prompt: "Ubah bagian hiragana menjadi kanji yang tepat.", answer: "c, d",
            items: [
                { prompt: "てんじょうに描かれた絵 → 天＿＿＿", answer: "井", answerReading: "てんじょう", answerWord: "天井", choice: "c", why: "天井 adalah langit-langit; kanji yang hilang adalah 井." },
                { prompt: "三角じょうぎ → ＿＿＿規", answer: "定", answerReading: "さんかくじょうぎ", answerWord: "三角定規", choice: "d", why: "定規 dibaca じょうぎ dan berarti penggaris; 三角定規 adalah penggaris segitiga." }
            ],
            choices: ["a. 有", "b. 下", "c. 井", "d. 定", "e. 解", "f. 子", "g. 都", "h. 仮", "i. 守", "j. 右", "k. 雨", "l. 生"],
            translation: "Gambar yang dilukis pada langit-langit; penggaris segitiga.",
            explanation: "天井 ditulis dengan 天 + 井. 三角定規 ditulis dengan 三角 + 定規. Catatan bacaan 井 pada 天井: dibaca じょう, berbeda dari bacaan fokus ショウ yang tercantum di sumber."
        },
        {
            id: "w4d2-r2-9", section: "練習Ⅱ", type: "kanji-fill", prompt: "Ubah bagian hiragana menjadi kanji yang tepat.", answer: "f, i",
            items: [
                { prompt: "ようすを見に行く。 → 様＿＿＿", answer: "子", answerReading: "ようす", answerWord: "様子", choice: "f", why: "様子 dibaca ようす dan berarti keadaan/tampilan; kanji yang hilang adalah 子." },
                { prompt: "るすばん電話 → 留＿＿＿番", answer: "守", answerReading: "るすばんでんわ", answerWord: "留守番電話", choice: "i", why: "留守番電話 ditulis 留 + 守 + 番 + 電話; kanji yang hilang adalah 守." }
            ],
            choices: ["a. 有", "b. 下", "c. 井", "d. 定", "e. 解", "f. 子", "g. 都", "h. 仮", "i. 守", "j. 右", "k. 雨", "l. 生"],
            translation: "Pergi melihat keadaan; mesin penjawab telepon.",
            explanation: "様子 adalah kata utuh yang dibaca ようす. 留守番電話 memakai dua kanji 留 dan 守 pada bagian るす; jawaban kosong pada soal kedua adalah 守."
        },
        {
            id: "w4d2-r2-10", section: "練習Ⅱ", type: "kanji-fill", prompt: "Ubah bagian hiragana menjadi kanji yang tepat.", answer: "b, e",
            items: [
                { prompt: "来月のげじゅん → ＿＿＿旬", answer: "下", answerReading: "げじゅん", answerWord: "下旬", choice: "b", why: "下旬 dibaca げじゅん dan berarti sepuluh hari terakhir dalam satu bulan." },
                { prompt: "げねつざい → ＿＿＿熱剤", answer: "解", answerReading: "げねつざい", answerWord: "解熱剤", choice: "e", why: "解熱剤 dibaca げねつざい dan berarti obat penurun demam; kanji yang hilang adalah 解." }
            ],
            choices: ["a. 有", "b. 下", "c. 井", "d. 定", "e. 解", "f. 子", "g. 都", "h. 仮", "i. 守", "j. 右", "k. 雨", "l. 生"],
            translation: "Sepuluh hari terakhir bulan depan; obat penurun demam.",
            explanation: "下旬 adalah istilah pembagian tanggal dalam bulan (上旬, 中旬, 下旬). 解熱剤 adalah obat yang menurunkan demam."
        }
    ],
    sourceNotes: [
        { id: "w4d2-note-1", topic: "弟（テ）dan 弟子（でし）", source: "Sumber menulis 弟（テ）dan memberi 弟子（でし）.", note: "Bacaan kata 弟子 adalah でし. Jangan membaca kata itu sebagai ていし atau てし. Label fokus テ dari transkripsi tidak sama dengan pelafalan aktual kata contoh; pertahankan kedua data dan hafalkan kata utuh." },
        { id: "w4d2-note-2", topic: "井（ショウ）dan 天井（てんじょう）", source: "Sumber mencantumkan 井（ショウ）, lalu 天井（てんじょう）.", note: "Pada kata 天井, bagian 井 terdengar じょう (ten-jō), bukan しょう. Bacaan fokus ショウ kemungkinan salah transkripsi. Entri menyimpan bacaan sumber di sourceFocusReading dan memberi catatan bentuk yang benar pada kata contoh." },
        { id: "w4d2-note-3", topic: "Lingkup daftar onyomi/kunyomi", source: "Daftar Day 2 memberi potongan bacaan sulit untuk tiap karakter, bukan tabel bacaan lengkap.", note: "Karena itu, sourceFocusReading/onyomi hanya mencatat bacaan fokus yang diberikan. Kunyomi dibiarkan kosong, bukan diasumsikan tidak ada. Ini mencegah daftar parsial disajikan keliru sebagai inventaris bacaan lengkap." },
        { id: "w4d2-note-4", topic: "見舞われる", source: "Catatan sumber menyatakan 見舞われる berarti ditimpa atau mengalami sesuatu yang buruk.", note: "Makna ini dipakai dalam kalimat 水害に見舞われる. Bukan makna 'mengunjungi orang sakit' yang muncul pada penggunaan lain dari 見舞う." }
    ]
};

export default minggu4Hari2;
