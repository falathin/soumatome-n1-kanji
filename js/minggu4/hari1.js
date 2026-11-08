// JLPT Week 4 — Day 1: 難しい読みを覚えよう
// Sumber utama: transkripsi pengguna. Ejaan sumber dipertahankan; catatan verifikasi dipisahkan.

const contoh = (jp, furigana, translation, context) => ({ jp, furigana, translation, context });
const kosakata = (word, reading, meaning, usage, nuance, concept, examples, notes = "") => ({
    word, reading, meaning, usage, nuance, concept, examples: examples.map(x => contoh(...x)), ...(notes ? { notes } : {})
});
const kanjiItem = (id, character, meaning, onyomi, kunyomi, concept, explanation, vocabulary, notes = "") => ({
    id, character, meaning, onyomi, kunyomi, concept, explanation, vocabulary, ...(notes ? { notes } : {})
});

const minggu4Hari1 = {
    week: 4,
    day: 1,
    title: { id: "Hari 1", en: "Day 1" },
    subtitle: { id: "Bacaan sulit: 相互・首相・相性", en: "Difficult readings: 相互・首相・相性" },
    theme: "第4週 難しい読みを覚えよう",
    focusReadings: ["そうご", "しゅしょう", "あいしょう"],
    openingQuiz: {
        question: "利口な人 の読みは？",
        choices: ["りくち", "りく", "りこう"],
        answer: "りこう",
        fullReading: "りこうなひと",
        translation: "orang yang pintar/cerdas",
        explanation: "利口 dibaca りこう. Di sini 口 tidak dibaca くち secara terpisah; kata 利口 merupakan kosakata gabungan dengan bacaan on'yomi yang sudah mapan."
    },
    kanji: [
        kanjiItem("w4d1-kanji-ma", "間", "jarak, sela, waktu, atau hubungan; maknanya bergantung pada gabungan katanya", ["カン", "ケン"], ["あいだ", "ま"],
            "Gagasan inti 間 adalah ruang atau sela di antara dua hal. Dari gagasan ruang, maknanya meluas menjadi rentang waktu (夜間・瞬間), lingkungan sosial (世間), dan hubungan (間柄).",
            "On'yomi カン dan ケン terutama terlihat dalam kata majemuk, sedangkan あいだ dan ま muncul dalam kata yang lebih dekat dengan pemakaian Jepang asli. Bacaan tidak dapat dipilih hanya dari karakter tunggal: kenali kosakata utuhnya. Contohnya 夜間 dibaca やかん, tetapi 世間 dibaca せけん.", [
                kosakata("夜間", "やかん", "malam hari; waktu malam", "Dipakai dalam jadwal, layanan, aturan, dan keterangan waktu yang berlangsung pada malam hari.", "Lebih ringkas dan cenderung tertulis/formal daripada 夜 (よる) yang berarti malam secara umum.", "間 menandai rentang waktu: 夜間 adalah rentang waktu pada malam hari.", [
                    ["夜間は入口を閉鎖します。", "やかんは いりぐちを へいさします。", "Pada malam hari, pintu masuk akan ditutup.", "Pemberitahuan atau aturan fasilitas."],
                    ["夜間の運転は十分に注意してください。", "やかんの うんてんは じゅうぶんに ちゅういしてください。", "Berhati-hatilah saat mengemudi pada malam hari.", "Imbauan keselamatan."]
                ]),
                kosakata("人間", "にんげん", "manusia", "Digunakan untuk membicarakan manusia sebagai makhluk, sifat, atau keberadaan sosial.", "Lebih konseptual daripada 人 (ひと), yang sering menunjuk seseorang secara konkret.", "Gabungan ini menunjuk manusia sebagai makhluk yang hidup di dalam dunia dan relasi antarmanusia.", [
                    ["人間は失敗から学ぶことができる。", "にんげんは しっぱいから まなぶことができる。", "Manusia dapat belajar dari kegagalan.", "Pernyataan umum/reflektif."],
                    ["人間関係で悩んでいる友人の話を聞いた。", "にんげんかんけいで なやんでいる ゆうじんの はなしを きいた。", "Saya mendengarkan cerita teman yang sedang memiliki masalah hubungan antarmanusia.", "Percakapan tentang relasi sosial."]
                ]),
                kosakata("この間", "このあいだ", "baru-baru ini; beberapa waktu lalu", "Digunakan saat merujuk kejadian yang terjadi belum lama ini.", "Ungkapan percakapan yang alami; tidak harus berarti jarak waktu yang sangat pendek.", "あいだ di sini menunjuk rentang waktu yang dekat dengan saat berbicara.", [
                    ["この間、駅で先生に会いました。", "このあいだ、えきで せんせいに あいました。", "Baru-baru ini saya bertemu guru di stasiun.", "Menceritakan pengalaman baru-baru ini."],
                    ["この間借りた本を返しに行きます。", "このあいだ かりた ほんを かえしに いきます。", "Saya akan pergi mengembalikan buku yang saya pinjam beberapa waktu lalu.", "Percakapan sehari-hari."]
                ]),
                kosakata("束の間", "つかのま", "waktu yang sangat singkat; sekejap", "Sering dipakai dalam ungkapan seperti 束の間の休息 atau 束の間の幸せ.", "Bernuansa sastra atau ekspresif; menekankan bahwa suatu keadaan hanya berlangsung sebentar.", "束の間 membingkai waktu sebagai sela singkat yang segera berlalu.", [
                    ["束の間の休みを利用して、実家に帰った。", "つかのまの やすみを りようして、じっかに かえった。", "Saya memanfaatkan waktu istirahat yang singkat untuk pulang ke rumah orang tua.", "Narasi pengalaman."],
                    ["彼らは束の間の平和を楽しんだ。", "かれらは つかのまの へいわを たのしんだ。", "Mereka menikmati kedamaian yang hanya berlangsung sekejap.", "Narasi dengan nuansa sastra."]
                ]),
                kosakata("瞬間", "しゅんかん", "saat; momen yang sangat singkat", "Digunakan untuk menunjuk titik waktu tertentu, misalnya その瞬間 (pada saat itu).", "Lebih menekankan satu momen yang sekejap daripada rentang waktu seperti 夜間.", "瞬 berarti sekejap; 間 membentuk satuan momen atau titik waktu.", [
                    ["その瞬間、電話が鳴った。", "その しゅんかん、でんわが なった。", "Tepat pada saat itu, telepon berdering.", "Urutan peristiwa dalam cerita."],
                    ["写真を撮る瞬間に、全員が笑った。", "しゃしんを とる しゅんかんに、ぜんいんが わらった。", "Semua orang tersenyum pada saat foto diambil.", "Kejadian pada satu momen tertentu."]
                ]),
                kosakata("世間", "せけん", "masyarakat; dunia sekitar; pandangan umum", "Dipakai dalam ungkapan 世間の目 (pandangan masyarakat) dan 世間知らず (tidak mengenal dunia/kurang pengalaman sosial).", "Menunjuk lingkungan sosial secara luas, bukan sekadar satu orang atau komunitas kecil.", "間 pada kata ini memakai bacaan khusus けん; kata utuhnya perlu dihafalkan sebagai satu kosakata.", [
                    ["世間の目を気にしすぎないほうがいい。", "せけんの めを きにしすぎない ほうが いい。", "Sebaiknya jangan terlalu memikirkan pandangan masyarakat.", "Nasihat tentang tekanan sosial."],
                    ["彼は世間知らずだと言われた。", "かれは せけんしらずだと いわれた。", "Dia dikatakan kurang mengenal dunia luar.", "Penilaian terhadap pengalaman sosial seseorang."]
                ]),
                kosakata("間柄", "あいだがら", "hubungan atau relasi antara orang-orang", "Umum dalam tulisan maupun percakapan yang menjelaskan jenis hubungan, misalnya 親しい間柄.", "Lebih menekankan status/kualitas hubungan daripada tindakan berkomunikasi.", "あいだ + がら menunjuk sifat hubungan yang terbentuk di antara dua pihak.", [
                    ["二人は師弟の間柄です。", "ふたりは していの あいだがらです。", "Keduanya memiliki hubungan guru dan murid.", "Menjelaskan relasi formal."],
                    ["彼とは何でも話せる間柄だ。", "かれとは なんでも はなせる あいだがらだ。", "Saya memiliki hubungan dengannya sehingga bisa membicarakan apa saja.", "Menjelaskan kedekatan personal."]
                ]),
                kosakata("居間", "いま", "ruang keluarga; ruang tempat keluarga berkumpul", "Dipakai untuk menyebut ruangan di rumah yang digunakan untuk duduk atau berkumpul.", "Bacaan いま tidak dapat ditebak dari onyomi; hafalkan sebagai kata utuh.", "居 berarti berada/tinggal dan 間 berarti ruang; gabungannya menunjuk ruang untuk berada bersama.", [
                    ["父は居間で新聞を読んでいる。", "ちちは いまで しんぶんを よんでいる。", "Ayah sedang membaca koran di ruang keluarga.", "Aktivitas rumah tangga."],
                    ["居間の窓を開けて、部屋の空気を入れ替えた。", "いまの まどを あけて、へやの くうきを いれかえた。", "Saya membuka jendela ruang keluarga untuk mengganti udara di ruangan.", "Kegiatan sehari-hari di rumah."]
                ])
            ],
            "Koreksi transkripsi: judul sumber tertulis「問 / 間」, tetapi seluruh kosakata dan bacaan yang menyusul memakai 間, bukan 問. Pertahankan catatan bahwa sumber menulis keduanya; materi pembelajaran di sini dikelompokkan di bawah 間 karena 夜間・人間・瞬間・世間・間柄・居間 semuanya mengandung 間. 問 berarti pertanyaan/bertanya dan tidak cocok dengan daftar tersebut."),
        kanjiItem("w4d1-kanji-kuchi", "口", "mulut; juga dapat merujuk pada cara berbicara atau jumlah orang", ["コウ", "ク"], ["くち"],
            "口 berpusat pada mulut sebagai organ bicara dan makan. Dari sana terbentuk makna cara bicara (口調), sifat banyak/sedikit bicara (無口), dan hitungan populasi (人口).",
            "Dalam kata majemuk Sino-Jepang, 口 sering berbunyi コウ atau ク. Dalam kata yang lebih langsung seperti 口 (mulut) atau 早口, bentuk kunyomi くち muncul. Bacaan こう/く tidak selalu dapat dipilih dari makna; perhatikan kosakata yang sudah mapan.", [
                kosakata("利口な", "りこうな", "pintar; cerdas; pandai memahami keadaan", "Kata sifat-na untuk menilai kecerdasan praktis atau kepandaian seseorang/hewan.", "Dapat bernuansa kecerdikan praktis; tidak selalu sama dengan 知識が豊富 (berpengetahuan luas).", "口 di sini berada dalam gabungan berbacaan こう; makna kata utuhnya adalah kepandaian.", [
                    ["あの子は利口で、説明を一度聞いただけで理解した。", "あのこは りこうで、せつめいを いちど きいただけで りかいした。", "Anak itu cerdas dan memahami penjelasan hanya setelah mendengarnya sekali.", "Memuji kemampuan memahami."],
                    ["利口な方法を考えて、時間を節約した。", "りこうな ほうほうを かんがえて、じかんを せつやくした。", "Saya memikirkan cara yang cerdas dan menghemat waktu.", "Kecerdikan dalam memilih cara."]
                ]),
                kosakata("口調", "くちょう", "nada bicara; gaya atau cara seseorang berbicara", "Dipakai untuk mendeskripsikan kesan suara atau cara menyampaikan sesuatu.", "Bukan isi ucapan, melainkan bagaimana ucapan itu terdengar: lembut, tegas, santai, dan sebagainya.", "くち menunjuk mulut/bicara, sedangkan 調 menunjuk nada atau irama.", [
                    ["先生の口調はいつも穏やかだ。", "せんせいの くちょうは いつも おだやかだ。", "Nada bicara guru selalu tenang.", "Deskripsi cara bicara."],
                    ["彼は厳しい口調で注意した。", "かれは きびしい くちょうで ちゅういした。", "Dia menegur dengan nada bicara yang keras.", "Situasi teguran."]
                ]),
                kosakata("無口な", "むくちな", "pendiam; tidak banyak berbicara", "Kata sifat-na untuk menggambarkan orang yang cenderung sedikit bicara.", "Menjelaskan kebiasaan atau sifat seseorang, bukan keadaan satu percakapan tertentu.", "無 berarti tanpa/sedikit dan 口 berkaitan dengan bicara: orang yang tidak banyak mengeluarkan kata-kata.", [
                    ["弟は無口だが、家族のことをよく考えている。", "おとうとは むくちだが、かぞくのことを よく かんがえている。", "Adik laki-laki saya pendiam, tetapi sangat memikirkan keluarganya.", "Deskripsi karakter."],
                    ["無口な人でも、親しい友人とはよく話すことがある。", "むくちな ひとでも、したしい ゆうじんとは よく はなすことがある。", "Bahkan orang pendiam terkadang banyak berbicara dengan teman dekat.", "Penjelasan umum tentang sifat."]
                ]),
                kosakata("人口", "じんこう", "jumlah penduduk; populasi", "Dipakai dalam statistik, laporan, dan pembahasan demografi.", "Istilah administratif/statistik; bukan jumlah orang yang hadir dalam satu acara.", "人 berarti orang dan 口 di sini berfungsi sebagai satuan jumlah orang dalam populasi.", [
                    ["この町の人口は年々減少している。", "このまちの じんこうは ねんねん げんしょうしている。", "Populasi kota ini berkurang dari tahun ke tahun.", "Laporan demografi."],
                    ["人口の増加に伴って、住宅が不足している。", "じんこうの ぞうかに ともなって、じゅうたくが ふそくしている。", "Seiring bertambahnya populasi, perumahan menjadi tidak mencukupi.", "Pembahasan kebijakan/perkotaan."]
                ]),
                kosakata("異口同音", "いくどうおん", "serempak mengatakan hal yang sama; suara bulat", "Biasanya digunakan dalam pola 異口同音に～と言う.", "Ungkapan empat karakter yang agak formal/tulisan; bukan sekadar berbicara bersamaan secara kebetulan.", "Secara konseptual, banyak mulut (異口) menghasilkan bunyi/pendapat yang sama (同音).", [
                    ["参加者は異口同音に賛成だと言った。", "さんかしゃは いくどうおんに さんせいだと いった。", "Para peserta serempak mengatakan bahwa mereka setuju.", "Rapat atau laporan hasil diskusi."],
                    ["その案について、委員たちは異口同音に支持を表明した。", "そのあんについて、いいんたちは いくどうおんに しじを ひょうめいした。", "Mengenai usulan itu, para anggota komite menyatakan dukungan dengan suara bulat.", "Konteks formal."]
                ]) ,
                kosakata("早口", "はやくち", "cara berbicara cepat; ucapan yang cepat", "Dipakai dalam pola 早口で話す atau 早口言葉.", "Menggambarkan kecepatan berbicara, bukan nada atau volume suara.", "早い (cepat) + 口 (bicara) membentuk gagasan berbicara dengan cepat.", [
                    ["緊張すると、つい早口になってしまう。", "きんちょうすると、つい はやくちに なってしまう。", "Saat gugup, tanpa sadar saya jadi berbicara cepat.", "Percakapan tentang kebiasaan bicara."],
                    ["もう少しゆっくり話してください。早口だと聞き取れません。", "もうすこし ゆっくり はなしてください。はやくちだと ききとれません。", "Tolong bicara sedikit lebih pelan. Kalau terlalu cepat, saya tidak bisa menangkapnya.", "Meminta lawan bicara memperlambat ucapan."]
                ])
            ]),
        kanjiItem("w4d1-kanji-言", "言", "mengatakan; kata atau ucapan", ["ゲン", "ゴン"], ["いう", "こと"],
            "言 menghubungkan tindakan berkata dengan isi ujaran. Dalam kata majemuk, bentuk on'yomi ゲン/ゴン banyak muncul pada istilah abstrak; kunyomi いう/こと tampak pada bentuk verbal dan kata asli Jepang.",
            "言う adalah verba 'mengatakan', sedangkan 言葉 (ことば) berarti kata/bahasa. Pada kosakata majemuk, bacaan seperti はつげん dan でんごん dipelajari sebagai satuan; jangan memaksakan bacaan いう pada setiap gabungan.", [
                kosakata("発言", "はつげん", "pernyataan; ucapan yang disampaikan", "Umum dalam rapat, diskusi, wawancara, dan pemberitaan.", "Lebih formal daripada 言う; sering menunjuk kontribusi lisan seseorang dalam forum.", "発 berarti mengeluarkan/menyampaikan; 言 adalah ucapan: sebuah pernyataan yang dikeluarkan.", [
                    ["会議では全員が自由に発言できる。", "かいぎでは ぜんいんが じゆうに はつげんできる。", "Dalam rapat, semua orang dapat menyampaikan pendapat dengan bebas.", "Aturan diskusi."],
                    ["大臣の発言がニュースで取り上げられた。", "だいじんの はつげんが ニュースで とりあげられた。", "Pernyataan menteri itu diangkat dalam berita.", "Konteks media."]
                ]),
                kosakata("伝言", "でんごん", "pesan titipan; pesan yang disampaikan kepada orang lain", "Dipakai ketika seseorang menitipkan pesan untuk diteruskan.", "Berbeda dari 発言: 伝言 berorientasi pada meneruskan pesan, bukan pernyataan di forum.", "伝える berarti menyampaikan; 言 adalah kata-kata yang disampaikan kepada pihak lain.", [
                    ["部長から伝言を預かっています。", "ぶちょうから でんごんを あずかっています。", "Saya menerima pesan titipan dari kepala bagian.", "Situasi kantor."],
                    ["帰ったら、母に電話するよう伝言してください。", "かえったら、ははに でんわするよう でんごんしてください。", "Tolong sampaikan pesan kepada ibu agar menelepon ketika sudah pulang.", "Meminta seseorang meneruskan pesan."]
                ]),
                kosakata("言い訳", "いいわけ", "alasan atau dalih untuk membela diri", "Sering muncul dalam pola 言い訳をする／言い訳は聞きたくない.", "Kerap bernada negatif ketika alasan dianggap tidak mengubah kesalahan atau tanggung jawab.", "言う + 訳 (alasan/penjelasan) menghasilkan kata untuk penjelasan yang dipakai membela diri.", [
                    ["遅刻した理由を説明しても、言い訳に聞こえるかもしれない。", "ちこくした りゆうを せつめいしても、いいわけに きこえるかもしれない。", "Walaupun menjelaskan alasan terlambat, hal itu mungkin terdengar seperti dalih.", "Situasi meminta maaf."],
                    ["言い訳をする前に、自分の行動を振り返ろう。", "いいわけを するまえに、じぶんの こうどうを ふりかえろう。", "Sebelum mencari dalih, mari meninjau tindakan sendiri.", "Nasihat/refleksi."]
                ]),
                kosakata("一言言う", "ひとこという", "mengatakan sepatah kata; memberi komentar singkat", "Digunakan ketika hendak menyampaikan sesuatu secara singkat.", "一言 menekankan singkatnya ucapan; bisa berupa komentar, teguran, atau pesan.", "一言 (ひとこと) adalah satu ungkapan singkat, lalu 言う menyatakan tindakan mengucapkannya.", [
                    ["帰る前に、一言言っておきたいことがあります。", "かえるまえに、ひとこと いっておきたいことが あります。", "Sebelum pulang, ada satu hal singkat yang ingin saya sampaikan.", "Memulai komentar singkat."],
                    ["彼に一言言うつもりだったが、会えなかった。", "かれに ひとこと いうつもりだったが、あえなかった。", "Saya berniat mengatakan sesuatu kepadanya, tetapi tidak sempat bertemu.", "Narasi percakapan."]
                ]),
                kosakata("方言", "ほうげん", "dialek; ragam bahasa daerah", "Dipakai untuk membahas variasi bahasa berdasarkan wilayah.", "Istilah linguistik; berbeda dari aksen (アクセント), yang terutama menyangkut pola tekanan/pelafalan.", "方 menunjuk wilayah/arah dan 言 menunjuk bahasa/ucapan: bentuk bahasa yang khas suatu daerah.", [
                    ["祖母は今でも地元の方言で話す。", "そぼは いまでも じもとの ほうげんで はなす。", "Nenek saya sampai sekarang berbicara dengan dialek daerah asalnya.", "Percakapan keluarga."],
                    ["この方言の意味を若い人に尋ねた。", "この ほうげんの いみを わかいひとに たずねた。", "Saya menanyakan arti dialek ini kepada orang yang lebih muda.", "Konteks pelestarian bahasa."]
                ]),
                kosakata("無言", "むごん", "tanpa berkata-kata; diam", "Dipakai untuk menggambarkan keadaan tanpa ucapan, misalnya 無言で立ち去る.", "Menunjuk keadaan/sikap diam pada situasi tertentu; berbeda dari 無口 yang merupakan sifat orang.", "無 berarti tanpa dan 言 berarti kata-kata: ketiadaan ucapan.", [
                    ["彼は無言で部屋を出ていった。", "かれは むごんで へやを でていった。", "Dia meninggalkan ruangan tanpa berkata-kata.", "Narasi tindakan."],
                    ["質問に対して、彼女はしばらく無言だった。", "しつもんに たいして、かのじょは しばらく むごんだった。", "Terhadap pertanyaan itu, dia terdiam beberapa saat.", "Keadaan dalam percakapan."]
                ]),
                kosakata("言い付け", "いいつけ", "perintah atau instruksi yang diberikan seseorang", "Sering muncul dalam ungkapan 親の言い付けを守る.", "Dapat berarti perintah, biasanya dari orang yang memiliki otoritas atau kedudukan lebih tinggi.", "言いつける adalah menyampaikan perintah; bentuk nomina 言い付け merujuk pada perintah itu.", [
                    ["先生の言い付けを守って、廊下を走らなかった。", "せんせいの いいつけを まもって、ろうかを はしらなかった。", "Saya mematuhi perintah guru dan tidak berlari di koridor.", "Kepatuhan pada instruksi."],
                    ["母から早く帰るように言い付けられた。", "ははから はやく かえるように いいつけられた。", "Saya diperintahkan ibu untuk segera pulang.", "Konteks keluarga."]
                ]),
                kosakata("独り言", "ひとりごと", "berbicara sendiri; monolog", "Dipakai untuk ucapan yang dikatakan seseorang tanpa secara langsung berbicara kepada lawan bicara.", "Bisa terdengar tanpa sengaja atau sebagai gumaman; bukan percakapan dua arah.", "独り berarti sendirian dan 言 berarti ucapan: kata-kata yang diucapkan seorang diri.", [
                    ["彼は考え事をしながら独り言を言っていた。", "かれは かんがえごとを しながら ひとりごとを いっていた。", "Dia berbicara sendiri sambil memikirkan sesuatu.", "Deskripsi kebiasaan."],
                    ["独り言のつもりだったのに、友人に聞かれていた。", "ひとりごとの つもりだったのに、ゆうじんに きかれていた。", "Saya mengira hanya bergumam sendiri, tetapi ternyata didengar teman.", "Situasi sehari-hari."]
                ])
            ]),
        kanjiItem("w4d1-kanji-ai", "相", "saling; satu sama lain; pasangan atau pihak yang berhadapan", ["ソウ", "ショウ"], ["あい"],
            "相 sering menandai hubungan timbal balik atau keadaan yang dilihat di antara dua pihak. Dalam 相互 unsur saling sangat jelas; dalam 相性, maknanya berkembang menjadi kecocokan antara dua orang/benda.",
            "Bacaan ソウ/ショウ muncul pada kosakata majemuk seperti 相互・相違・真相・首相・外相; あい muncul pada kata seperti 相性 dan 相変わらず. Bacaan ショウ tampak pada 首相・外相, sedangkan ソウ pada banyak kata lain.", [
                kosakata("相談に乗る", "そうだんに のる", "mendengarkan konsultasi seseorang dan membantu memberi saran", "Pola 相談に乗る berarti bersedia mendengar masalah dan memberi pertimbangan.", "Berbeda dari 相談する (berkonsultasi): 相談に乗る menempatkan diri sebagai pihak yang membantu mendengar.", "相手 (pihak lain) dan 談 (pembicaraan) membentuk konsultasi; 乗る berarti ikut membantu menanggung pembicaraan/masalah.", [
                    ["困ったことがあれば、いつでも相談に乗ります。", "こまったことが あれば、いつでも そうだんに のります。", "Kalau ada masalah, saya selalu bersedia mendengarkan dan membantu memberi saran.", "Menawarkan bantuan."],
                    ["先輩が進路について相談に乗ってくれた。", "せんぱいが しんろについて そうだんに のってくれた。", "Kakak tingkat bersedia mendengarkan dan memberi saran tentang pilihan masa depan saya.", "Konsultasi pendidikan/karier."]
                ]),
                kosakata("相互", "そうご", "timbal balik; saling", "Digunakan dalam istilah formal seperti 相互理解 dan 相互協力.", "Lebih formal dan konseptual daripada お互い (おたがい) dalam percakapan sehari-hari.", "相 dan 互 sama-sama menekankan hubungan antar pihak; kata ini menandai aksi atau keadaan dua arah.", [
                    ["相互理解を深めることが大切だ。", "そうごりかいを ふかめることが たいせつだ。", "Penting untuk memperdalam pemahaman timbal balik.", "Pernyataan dalam diskusi."],
                    ["両社は相互に情報を交換している。", "りょうしゃは そうごに じょうほうを こうかんしている。", "Kedua perusahaan saling bertukar informasi.", "Konteks bisnis/formal."]
                ]),
                kosakata("首相", "しゅしょう", "perdana menteri", "Jabatan kepala pemerintahan dalam konteks politik Jepang dan sejumlah negara lain.", "Istilah jabatan resmi; bukan 首 (くび, leher) dalam makna tubuh.", "首 dapat berarti kepala/pemimpin, sementara 相 dalam gabungan ini merupakan bagian dari nama jabatan yang dibaca しょう.", [
                    ["首相は記者会見で新しい方針を説明した。", "しゅしょうは きしゃかいけんで あたらしい ほうしんを せつめいした。", "Perdana menteri menjelaskan kebijakan baru dalam konferensi pers.", "Berita politik."],
                    ["首相の発言が国会で議論された。", "しゅしょうの はつげんが こっかいで ぎろんされた。", "Pernyataan perdana menteri dibahas di parlemen.", "Konteks pemerintahan."]
                ]),
                kosakata("相性", "あいしょう", "kecocokan; kompatibilitas", "Dipakai untuk kecocokan orang, benda, metode, atau perangkat.", "Tidak selalu berarti hubungan romantis; dapat menggambarkan apakah dua hal cocok saat digunakan bersama.", "相 menunjuk pihak-pihak yang berhubungan; 性 menunjuk sifat. 相性 adalah kesesuaian sifat di antara dua pihak.", [
                    ["この二人は仕事の相性がいい。", "この ふたりは しごとの あいしょうが いい。", "Kedua orang ini cocok saat bekerja bersama.", "Kecocokan rekan kerja."],
                    ["新しいソフトと古いパソコンは相性が悪い。", "あたらしい ソフトと ふるい パソコンは あいしょうが わるい。", "Perangkat lunak baru dan komputer lama tidak kompatibel.", "Konteks teknologi."]
                ]),
                kosakata("相違", "そうい", "perbedaan; ketidaksamaan", "Sering digunakan dalam tulisan formal, laporan, atau dokumen perbandingan.", "Lebih formal daripada 違い (ちがい); sering muncul sebagai 相違がある／相違点.", "相 mengacu pada hal yang dibandingkan, 違 berarti berbeda: keadaan tidak sama di antara dua hal.", [
                    ["両者の説明には大きな相違がある。", "りょうしゃの せつめいには おおきな そういが ある。", "Ada perbedaan besar di antara penjelasan kedua pihak.", "Perbandingan formal."],
                    ["契約内容に相違がないか確認してください。", "けいやくないように そういが ないか かくにんしてください。", "Harap periksa apakah tidak ada perbedaan dalam isi kontrak.", "Pemeriksaan dokumen."]
                ]),
                kosakata("真相", "しんそう", "fakta sebenarnya; keadaan yang sesungguhnya", "Digunakan ketika membicarakan hal yang sebenarnya terjadi di balik suatu kejadian.", "Lebih kuat daripada 事実 biasa karena sering menyiratkan kebenaran yang belum terungkap.", "真 berarti benar/asli; 相 menunjuk keadaan: kondisi yang benar-benar terjadi.", [
                    ["警察は事件の真相を調べている。", "けいさつは じけんの しんそうを しらべている。", "Polisi sedang menyelidiki fakta sebenarnya dari peristiwa itu.", "Berita/penyelidikan."],
                    ["長い調査の末、ようやく真相が明らかになった。", "ながい ちょうさの すえ、ようやく しんそうが あきらかに なった。", "Setelah penyelidikan panjang, akhirnya fakta sebenarnya menjadi jelas.", "Narasi investigasi."]
                ]),
                kosakata("外相", "がいしょう", "menteri luar negeri", "Istilah jabatan kabinet yang menangani urusan luar negeri.", "Singkatan/jabatan resmi; dalam penggunaan umum juga dijumpai 外務大臣 (がいむだいじん).", "外 berarti luar negeri; 相 di sini merupakan unsur jabatan yang dibaca しょう.", [
                    ["外相は隣国の代表と会談した。", "がいしょうは りんごくの だいひょうと かいだんした。", "Menteri luar negeri mengadakan pertemuan dengan perwakilan negara tetangga.", "Berita diplomasi."],
                    ["新しい外相が外交方針を発表した。", "あたらしい がいしょうが がいこうほうしんを はっぴょうした。", "Menteri luar negeri yang baru mengumumkan kebijakan diplomatik.", "Konteks politik."]
                ]),
                kosakata("相変わらず", "あいかわらず", "seperti biasa; tetap tidak berubah", "Adverbia untuk menyatakan keadaan yang tidak berubah dari sebelumnya.", "Bisa netral, positif, atau negatif menurut konteks dan intonasi.", "相 dibaca あい di sini; seluruh kata merupakan ungkapan mapan dan tidak diterjemahkan dengan memisahkan tiap karakter.", [
                    ["彼は相変わらず忙しそうだ。", "かれは あいかわらず いそがしそうだ。", "Dia tampaknya tetap sibuk seperti biasanya.", "Mengamati keadaan seseorang."],
                    ["この店のラーメンは相変わらずおいしい。", "この みせの ラーメンは あいかわらず おいしい。", "Ramen di restoran ini tetap enak seperti biasa.", "Pujian atas kualitas yang konsisten."]
                ])
            ]),
        kanjiItem("w4d1-kanji-shou", "省", "menghilangkan/menghemat; meninjau atau merenungkan diri; kementerian", ["ショウ", "セイ"], ["はぶく", "かえりみる"],
            "省 memiliki dua kelompok konsep yang perlu dibedakan: mengurangi atau menghilangkan bagian yang tidak perlu (はぶく), dan melihat kembali tindakan diri sendiri (かえりみる). Dalam nama kementerian, 省 adalah lembaga pemerintahan.",
            "Bacaan ショウ tampak dalam 省略・外務省・省エネ・帰省; セイ pada 反省. Kunyomi はぶく berhubungan dengan pengurangan, sedangkan かえりみる berhubungan dengan refleksi. Ingat makna melalui kosakata, bukan dengan satu terjemahan tunggal.", [
                kosakata("省略する", "しょうりゃくする", "menyingkat; menghilangkan bagian yang tidak perlu", "Digunakan untuk teks, uraian, prosedur, atau bagian yang sengaja tidak disebutkan.", "Lebih formal/tertulis daripada 飛ばす; tidak selalu berarti memotong secara sembarangan.", "省 di sini berarti mengurangi bagian, 略 berarti menyederhanakan/meringkas.", [
                    ["長い説明は省略して、結論から話します。", "ながい せつめいは しょうりゃくして、けつろんから はなします。", "Saya akan menyingkat penjelasan panjang dan langsung membahas kesimpulan.", "Presentasi."],
                    ["名前の読み方は紙面の都合で省略した。", "なまえの よみかたは しめんの つごうで しょうりゃくした。", "Cara membaca nama dihilangkan karena keterbatasan ruang.", "Keterangan editorial."]
                ]),
                kosakata("外務省", "がいむしょう", "Kementerian Luar Negeri Jepang", "Nama lembaga pemerintah Jepang yang menangani urusan luar negeri.", "Nama institusi resmi; jangan diterjemahkan sebagai 'provinsi luar negeri'.", "外務 berarti urusan luar negeri, dan 省 adalah kementerian/lembaga setingkat kementerian.", [
                    ["外務省のウェブサイトで渡航情報を確認した。", "がいむしょうの ウェブサイトで とこうじょうほうを かくにんした。", "Saya memeriksa informasi perjalanan di situs Kementerian Luar Negeri.", "Mencari informasi resmi."],
                    ["外務省は各国の大使館と連絡を取っている。", "がいむしょうは かっこくの たいしかんと れんらくを とっている。", "Kementerian Luar Negeri berkomunikasi dengan kedutaan di berbagai negara.", "Urusan diplomatik."]
                ]),
                kosakata("反省する", "はんせいする", "merenungkan kesalahan atau tindakan sendiri; introspeksi", "Digunakan setelah melakukan kesalahan atau ingin memperbaiki tindakan.", "Bukan sekadar menyesal; biasanya mengandung unsur meninjau perilaku agar tidak terulang.", "反 berarti kembali/berbalik, 省 berarti meninjau diri: melihat kembali tindakan sendiri.", [
                    ["失敗の原因をよく反省した。", "しっぱいの げんいんを よく はんせいした。", "Saya merenungkan dengan sungguh-sungguh penyebab kegagalan.", "Evaluasi diri."],
                    ["反省した点を次の仕事に生かしたい。", "はんせいした てんを つぎの しごとに いかしたい。", "Saya ingin menerapkan hal-hal yang saya pelajari dari introspeksi ke pekerjaan berikutnya.", "Perbaikan setelah evaluasi."]
                ]),
                kosakata("無駄を省く", "むだを はぶく", "menghilangkan pemborosan", "Digunakan untuk mengurangi penggunaan waktu, biaya, bahan, atau tenaga yang tidak diperlukan.", "省く menekankan menghapus unsur yang tidak perlu; bukan merenungkan pemborosan.", "無駄 adalah sesuatu yang sia-sia; 省く berarti menyingkirkannya.", [
                    ["作業の順番を見直して、無駄を省いた。", "さぎょうの じゅんばんを みなおして、むだを はぶいた。", "Saya meninjau urutan pekerjaan dan menghilangkan pemborosan.", "Peningkatan efisiensi."],
                    ["無駄を省けば、費用を抑えられる。", "むだを はぶけば、ひようを おさえられる。", "Dengan menghilangkan pemborosan, biaya dapat ditekan.", "Perencanaan anggaran."]
                ]),
                kosakata("自らを省みる", "みずからを かえりみる", "merenungkan diri sendiri; mengevaluasi diri", "Ungkapan formal/reflektif untuk meninjau sikap atau perilaku sendiri.", "Lebih tertulis dan serius daripada 自分を振り返る.", "自ら berarti diri sendiri; 省みる berarti menengok kembali diri dan tindakan.", [
                    ["失敗したときこそ、自らを省みる必要がある。", "しっぱいした ときこそ、みずからを かえりみる ひつようが ある。", "Justru ketika gagal, kita perlu mengevaluasi diri sendiri.", "Refleksi formal."],
                    ["彼は自らを省みて、発言の仕方を改めた。", "かれは みずからを かえりみて、はつげんの しかたを あらためた。", "Dia meninjau dirinya sendiri lalu memperbaiki cara berbicaranya.", "Narasi perubahan sikap."]
                ]),
                kosakata("省エネ", "しょうエネ", "penghematan energi; hemat energi", "Umum pada peralatan, rumah, kebijakan, dan gaya hidup.", "Bentuk singkat yang lazim dari 省エネルギー; sering dipakai pada label produk.", "省 berarti menghemat/mengurangi, エネ adalah singkatan エネルギー.", [
                    ["この冷蔵庫は省エネ性能が高い。", "この れいぞうこは しょうエネせいのうが たかい。", "Kulkas ini memiliki kinerja hemat energi yang tinggi.", "Informasi produk."],
                    ["夏は省エネのために冷房の温度を調整する。", "なつは しょうエネの ために れいぼうの おんどを ちょうせいする。", "Pada musim panas, saya mengatur suhu pendingin untuk menghemat energi.", "Kebiasaan sehari-hari."]
                ]),
                kosakata("帰省", "きせい", "pulang ke kampung halaman/rumah keluarga", "Umum untuk kepulangan sementara ke daerah asal atau rumah orang tua, terutama saat liburan.", "Bukan sekadar pulang dari luar rumah; memiliki nuansa kembali ke rumah keluarga/daerah asal.", "帰 berarti pulang, 省 di sini termasuk bacaan ショウ pada kata yang sudah mapan.", [
                    ["お盆休みに実家へ帰省する予定です。", "おぼんやすみに じっかへ きせいする よていです。", "Saya berencana pulang ke rumah keluarga saat libur Obon.", "Rencana liburan keluarga."],
                    ["年末は帰省する人で駅が混雑する。", "ねんまつは きせいする ひとで えきが こんざつする。", "Pada akhir tahun, stasiun ramai oleh orang-orang yang pulang ke kampung halaman.", "Situasi transportasi musiman."]
                ]),
                kosakata("手間を省く", "てまを はぶく", "menghemat kerepotan atau tenaga kerja", "Digunakan untuk cara yang mengurangi langkah atau usaha yang diperlukan.", "手間 adalah waktu/tenaga yang dibutuhkan; 省く berarti mengurangi langkah yang tidak perlu.", "Secara konsep, usaha yang merepotkan dikurangi dengan menyederhanakan proses.", [
                    ["冷凍野菜を使うと、料理の手間を省ける。", "れいとうやさいを つかうと、りょうりの てまを はぶける。", "Dengan menggunakan sayuran beku, kerepotan memasak dapat dikurangi.", "Kegiatan memasak."],
                    ["申請をオンライン化して、手間を省いた。", "しんせいを オンラインかして、てまを はぶいた。", "Proses pengajuan dibuat daring sehingga kerepotan berkurang.", "Proses administrasi."]
                ])
            ]),
        kanjiItem("w4d1-kanji-hashi", "端", "ujung; tepi; sisi; bagian paling luar", ["タン"], ["はし", "はた", "は"],
            "端 menunjuk bagian tepi atau ujung sesuatu. Makna ini meluas ke keadaan yang tidak lengkap (中途半端), posisi terdepan (先端), dan sisa angka (端数).",
            "Kunyomi はし, はた, は dipilih berdasarkan kata: 道の端 (はし), 道端 (みちばた), 端数 (はすう). On'yomi タン terlihat pada 極端・先端. Gabungan tetap perlu dihafalkan sebagai kosakata.", [
                kosakata("極端な例", "きょくたんなれい", "contoh yang ekstrem", "Digunakan ketika sebuah contoh berada jauh di salah satu ujung rentang/keadaan.", "極端 dapat bersifat netral dalam analisis, tetapi sering menyiratkan sesuatu yang berlebihan.", "極 berarti paling/ekstrem dan 端 berarti ujung: keadaan yang berada di ujung rentang.", [
                    ["それは極端な例なので、一般化できない。", "それは きょくたんな れいなので、いっぱんかできない。", "Itu contoh yang ekstrem sehingga tidak bisa digeneralisasi.", "Diskusi analitis."],
                    ["極端な食事制限は健康に良くない。", "きょくたんな しょくじせいげんは けんこうに よくない。", "Pembatasan makan yang ekstrem tidak baik bagi kesehatan.", "Peringatan kesehatan umum."]
                ]),
                kosakata("道の端を歩く", "みちの はしを あるく", "berjalan di tepi jalan", "Menggambarkan posisi berjalan pada bagian sisi jalan.", "端 berarti pinggir; bukan persimpangan atau ujung jalan.", "道 adalah jalan dan 端 adalah sisi luarnya.", [
                    ["車に気をつけて、道の端を歩いてください。", "くるまに きをつけて、みちの はしを あるいてください。", "Berhati-hatilah terhadap kendaraan dan berjalanlah di tepi jalan.", "Petunjuk keselamatan."],
                    ["雨の日は道の端に水がたまりやすい。", "あめのひは みちの はしに みずが たまりやすい。", "Pada hari hujan, air mudah menggenang di tepi jalan.", "Deskripsi lingkungan."]
                ]),
                kosakata("道端の草を摘む", "みちばたの くさを つむ", "memetik rumput di pinggir jalan", "道端 berarti sisi jalan atau pinggir jalan.", "端 dibaca ばた dalam gabungan ini; bacaan berubah menurut pola kata majemuk.", "道 + 端 menunjuk bagian yang berada di sisi jalan.", [
                    ["子どもが道端の草を摘んでいた。", "こどもが みちばたの くさを つんでいた。", "Seorang anak sedang memetik rumput di pinggir jalan.", "Pengamatan sehari-hari."],
                    ["道端に咲く花を踏まないようにした。", "みちばたに さく はなを ふまないようにした。", "Saya berusaha agar tidak menginjak bunga yang tumbuh di pinggir jalan.", "Kepedulian terhadap lingkungan."]
                ]),
                kosakata("中途半端な行動", "ちゅうとはんぱな こうどう", "tindakan setengah-setengah; tindakan yang tidak tuntas", "Dipakai untuk menilai tindakan yang tidak dilakukan sampai selesai atau tidak konsisten.", "Sering bernada kritik; menunjukkan sesuatu yang tanggung atau tidak menyeluruh.", "中途 berarti di tengah proses; 半端 berarti tidak utuh. Bersama-sama menyatakan keadaan yang tidak tuntas.", [
                    ["中途半端な行動では、問題は解決しない。", "ちゅうとはんぱな こうどうでは、もんだいは かいけつしない。", "Dengan tindakan setengah-setengah, masalah tidak akan terselesaikan.", "Nasihat atau kritik."],
                    ["やると決めたなら、中途半端に終わらせないでください。", "やると きめたなら、ちゅうとはんぱに おわらせないでください。", "Kalau sudah memutuskan untuk melakukannya, jangan mengakhirinya setengah-setengah.", "Memberi dorongan untuk menuntaskan."]
                ]),
                kosakata("先端技術", "せんたんぎじゅつ", "teknologi mutakhir; teknologi paling maju", "Digunakan dalam berita, penelitian, industri, dan kebijakan teknologi.", "Lebih formal daripada 新しい技術; menyiratkan posisi terdepan dalam perkembangan.", "先 berarti paling depan dan 端 berarti ujung: teknologi yang berada di garis depan.", [
                    ["大学では先端技術の研究が進められている。", "だいがくでは せんたんぎじゅつの けんきゅうが すすめられている。", "Penelitian teknologi mutakhir sedang dikembangkan di universitas.", "Konteks akademik."],
                    ["先端技術を社会に役立てる方法を考える。", "せんたんぎじゅつを しゃかいに やくだてる ほうほうを かんがえる。", "Kami memikirkan cara memanfaatkan teknologi mutakhir bagi masyarakat.", "Diskusi inovasi."]
                ]),
                kosakata("言葉の端々に", "ことばの はしばしに", "tersirat dalam setiap bagian kecil perkataan", "Biasanya dipakai dalam pola 言葉の端々に気持ちが表れる.", "Bentuk ulang 端々 menekankan banyak bagian kecil, bukan satu ujung fisik.", "Nuansa atau perasaan terlihat dari bagian-bagian kecil ucapan.", [
                    ["彼女の言葉の端々に、感謝の気持ちが表れていた。", "かのじょの ことばの はしばしに、かんしゃの きもちが あらわれていた。", "Perasaan terima kasih tampak tersirat dalam setiap bagian perkataannya.", "Menafsirkan nuansa ucapan."],
                    ["言葉の端々に不満が感じられた。", "ことばの はしばしに ふまんが かんじられた。", "Rasa ketidakpuasan terasa tersirat dalam setiap perkataannya.", "Analisis suasana percakapan."]
                ]),
                kosakata("井戸端会議", "いどばたかいぎ", "obrolan santai/gosip di lingkungan sekitar", "Ungkapan untuk percakapan informal antartetangga atau orang yang berkumpul sambil berbincang.", "Bukan rapat resmi; sering memiliki nuansa obrolan sehari-hari, kadang bergosip.", "井戸端 adalah area sekitar sumur; 会議 di sini digunakan secara kiasan untuk obrolan ramai.", [
                    ["母たちは公園で井戸端会議をしていた。", "ははたちは こうえんで いどばたかいぎを していた。", "Para ibu sedang mengobrol santai seperti bergosip di taman.", "Konteks komunitas."],
                    ["近所の人との井戸端会議で地域の情報を知った。", "きんじょの ひととの いどばたかいぎで ちいきの じょうほうを しった。", "Saya mengetahui informasi lingkungan dari obrolan santai dengan tetangga.", "Pertukaran informasi sehari-hari."]
                ]),
                kosakata("端数を切り捨てる", "はすうを きりすてる", "membuang angka pecahan/sisa; membulatkan ke bawah", "Digunakan dalam perhitungan ketika bagian di bawah satuan tertentu dihapus tanpa menaikkan angka.", "切り捨てる berarti membuang sisa; berlawanan dengan 切り上げる (membulatkan ke atas). Jangan tertukar.", "端数 adalah bagian yang tersisa di luar satuan bulat; 切り捨てる menghapus bagian tersebut.", [
                    ["計算では一円未満の端数を切り捨てる。", "けいさんでは いちえんみまんの はすうを きりすてる。", "Dalam perhitungan, pecahan yang kurang dari satu yen dibuang/dibulatkan ke bawah.", "Aturan perhitungan."],
                    ["この方法では、小数点以下を切り捨てて整数にする。", "この ほうほうでは、しょうすうてんいかを きりすてて せいすうにする。", "Dengan metode ini, angka di belakang koma dibuang sehingga menjadi bilangan bulat.", "Instruksi matematika." ]
                ])
            ],
            "Catatan terjemahan: 端数を切り捨てる berarti membuang sisa/pecahan atau membulatkan ke bawah, bukan membulatkan ke atas. Pembulatan ke atas adalah 切り上げる. Data Jepang dari sumber dipertahankan."),
        kanjiItem("w4d1-kanji-nou", "納", "memasukkan, menyerahkan, membayar, menerima, atau mengakui; makna spesifik bergantung pada kata", ["ノウ", "ナッ"], ["おさめる"],
            "納 mengandung gagasan memasukkan atau menyerahkan sesuatu ke tempat/pihak yang semestinya. Dari situ muncul membayar pajak (納める), memasok barang (納入), dan menerima penjelasan sebagai masuk akal (納得).",
            "On'yomi ノウ muncul pada 納入・納税 (dan banyak kata lain), ナッ pada 納得・納豆. Kunyomi おさめる dipakai sebagai verba. Bacaan なっ dalam 納豆 adalah bagian dari bentuk kata yang sudah mapan, bukan aturan umum untuk semua gabungan.", [
                kosakata("料金を滞納する", "りょうきんを たいのうする", "menunggak pembayaran biaya/tagihan", "Dipakai ketika pembayaran yang seharusnya dilakukan tidak dibayar sampai melewati batas waktu.", "Bernuansa administratif/keuangan; lebih kuat daripada sekadar terlambat beberapa saat.", "滞 berarti tertahan/terlambat dan 納 berarti membayar/menyerahkan: pembayaran tertahan.", [
                    ["料金を三か月滞納すると、利用を停止される場合がある。", "りょうきんを さんかげつ たいのうすると、りようを ていしされる ばあいが ある。", "Jika biaya menunggak selama tiga bulan, penggunaan dapat dihentikan.", "Pemberitahuan layanan."],
                    ["家賃を滞納しないよう、毎月の支出を管理している。", "やちんを たいのうしないよう、まいつきの ししゅつを かんりしている。", "Saya mengatur pengeluaran bulanan agar tidak menunggak uang sewa.", "Pengelolaan keuangan pribadi."]
                ]),
                kosakata("納得がいかない", "なっとくが いかない", "tidak dapat menerima penjelasan; merasa belum puas/masuk akal", "Digunakan ketika alasan, hasil, atau keputusan belum terasa dapat diterima.", "Lebih menyatakan ketidakpuasan logis atau emosional daripada sekadar tidak mengerti.", "納得 berarti menerima sesuatu sebagai masuk akal; がいかない menyatakan penerimaan itu tidak tercapai.", [
                    ["説明を聞いても、まだ納得がいかない。", "せつめいを きいても、まだ なっとくが いかない。", "Walaupun sudah mendengar penjelasan, saya masih belum bisa menerimanya.", "Diskusi atau keberatan."],
                    ["結果に納得がいかず、もう一度理由を尋ねた。", "けっかに なっとくが いかず、もういちど りゆうを たずねた。", "Karena belum puas dengan hasilnya, saya menanyakan alasannya sekali lagi.", "Meminta penjelasan tambahan."]
                ]),
                kosakata("税金を納める", "ぜいきんを おさめる", "membayar/menyetorkan pajak", "Dipakai dalam konteks kewajiban pajak kepada pemerintah.", "納める lebih resmi daripada 払う ketika objeknya pajak atau pembayaran wajib.", "Pajak diserahkan kepada otoritas yang berhak menerimanya.", [
                    ["国民には法律に従って税金を納める義務がある。", "こくみんには ほうりつに したがって ぜいきんを おさめる ぎむが ある。", "Warga negara memiliki kewajiban membayar pajak sesuai hukum.", "Penjelasan kewajiban publik."],
                    ["私は期限までに税金を納めた。", "わたしは きげんまでに ぜいきんを おさめた。", "Saya membayar pajak sebelum batas waktu.", "Situasi administrasi."]
                ]),
                kosakata("品物を納入する", "しなものを のうにゅうする", "memasok atau mengirimkan barang kepada pihak penerima", "Umum dalam transaksi perusahaan, kontrak pemasok, dan pengadaan.", "Lebih formal daripada 送る; menandakan penyerahan barang sesuai pesanan/kontrak.", "品物 adalah barang dan 納入 berarti memasukkan/menyerahkan barang kepada pihak tujuan.", [
                    ["業者は金曜日までに品物を納入する予定だ。", "ぎょうしゃは きんようびまでに しなものを のうにゅうする よていだ。", "Pemasok berencana mengirimkan barang paling lambat hari Jumat.", "Jadwal pengadaan."],
                    ["指定された倉庫に品物を納入してください。", "していされた そうこに しなものを のうにゅうしてください。", "Harap pasok barang ke gudang yang telah ditentukan.", "Instruksi bisnis."]
                ]),
                kosakata("納豆", "なっとう", "natto; kedelai fermentasi khas Jepang", "Nama makanan; lazim muncul dalam konteks makanan dan kebiasaan sarapan Jepang.", "Bacaan なっとう merupakan bacaan kata tetap; jangan menyimpulkan bahwa 納 selalu dibaca ナッ.", "Sebagai nama makanan, kata ini perlu dipelajari utuh; makna karakter tidak perlu dipaksakan menjadi resep atau etimologi.", [
                    ["朝ご飯に納豆とご飯を食べた。", "あさごはんに なっとうと ごはんを たべた。", "Saya makan natto dan nasi untuk sarapan.", "Kebiasaan makan."],
                    ["納豆には独特のにおいと粘りがある。", "なっとうには どくとくの においと ねばりが ある。", "Natto memiliki aroma dan tekstur lengket yang khas.", "Deskripsi makanan."]
                ]),
                kosakata("商品を納める", "しょうひんを おさめる", "menyerahkan atau mengirimkan produk/barang", "Dipakai ketika penjual atau pemasok menyerahkan barang kepada pembeli/pemesan.", "納入 lebih sering terdengar administratif/kontraktual; 商品を納める menekankan tindakan menyerahkan barang yang dipesan.", "商品 adalah produk, おさめる menandai penyerahan ke pihak tujuan.", [
                    ["注文された商品を明日までに納めます。", "ちゅうもんされた しょうひんを あしたまでに おさめます。", "Kami akan menyerahkan barang yang dipesan paling lambat besok.", "Janji penjual kepada pelanggan."],
                    ["約束どおり、すべての商品を倉庫に納めた。", "やくそくどおり、すべての しょうひんを そうこに おさめた。", "Sesuai janji, semua barang telah diserahkan ke gudang.", "Pelaporan proses pengiriman."]
                ])
            ]),
        kanjiItem("w4d1-kanji-gara", "柄", "motif/corak; gagang; karakter atau kepribadian dalam ungkapan tertentu", ["ヘイ"], ["がら", "え"],
            "柄 memiliki dua pemakaian kunyomi yang perlu dipisahkan: がら muncul pada corak dan kepribadian (花柄・人柄), sedangkan え menunjuk gagang benda (傘の柄). Dalam 横柄, kata utuhnya bermakna angkuh.",
            "On'yomi ヘイ tampak pada 横柄 (おうへい). Kunyomi がら dan え tidak saling menggantikan: がら berhubungan dengan pola/sifat, え dengan pegangan. 無地 berarti tanpa motif dan disertakan sebagai pembanding, bukan bacaan/arti kanji 柄.", [
                kosakata("横柄な態度", "おうへいな たいど", "sikap angkuh, congkak, atau semena-mena", "Dipakai mengkritik sikap seseorang yang memperlakukan orang lain seolah lebih rendah.", "Bernada negatif dan cukup kuat; bukan sekadar percaya diri.", "横柄 adalah kata mapan dengan bacaan おうへい; jangan mengartikan karakter secara terpisah untuk menebak seluruh maknanya.", [
                    ["店員の横柄な態度に客が苦情を申し立てた。", "てんいんの おうへいな たいどに きゃくが くじょうを もうしたてた。", "Pelanggan mengajukan keluhan atas sikap angkuh pegawai toko.", "Keluhan layanan."],
                    ["立場に関係なく、横柄な態度を取ってはいけない。", "たちばに かんけいなく、おうへいな たいどを とってはいけない。", "Terlepas dari kedudukan, seseorang tidak boleh bersikap angkuh.", "Nasihat etika."]
                ]),
                kosakata("師弟の間柄", "していの あいだがら", "hubungan guru dan murid", "Menjelaskan relasi antara orang yang mengajar dan orang yang belajar.", "師弟の間柄 menekankan status hubungan; tidak selalu berarti keduanya sedang berada dalam kegiatan belajar saat itu.", "師弟 adalah guru dan murid; 間柄 adalah hubungan di antara keduanya.", [
                    ["二人は長年、師弟の間柄にある。", "ふたりは ながねん、していの あいだがらに ある。", "Keduanya telah lama memiliki hubungan guru dan murid.", "Deskripsi hubungan."],
                    ["師弟の間柄でも、互いへの敬意が大切だ。", "していの あいだがらでも、たがいへの けいいが たいせつだ。", "Bahkan dalam hubungan guru dan murid, rasa saling menghormati itu penting.", "Prinsip hubungan belajar."]
                ]),
                kosakata("柄", "がら", "motif atau corak; pola pada kain/benda", "Digunakan untuk menyebut desain berpola seperti 花柄 atau 水玉柄.", "Bacaan がら menunjuk pola/penampilan; berbeda dari え yang berarti gagang.", "柄 sebagai corak merupakan ciri visual yang tampak pada permukaan suatu benda.", [
                    ["この柄のシャツは春らしい。", "この がらの シャツは はるらしい。", "Kemeja bermotif ini terasa cocok untuk musim semi.", "Memilih pakaian."],
                    ["母は花柄のカーテンを選んだ。", "ははは はながらの カーテンを えらんだ。", "Ibu memilih tirai bermotif bunga.", "Konteks dekorasi rumah."]
                ]),
                kosakata("傘の柄", "かさの え", "gagang payung", "Digunakan untuk menyebut bagian pegangan payung.", "Di sini 柄 dibaca え, bukan がら; fungsi fisik sebagai pegangan membedakannya dari motif.", "柄 berarti bagian yang dipegang pada alat atau benda.", [
                    ["傘の柄が壊れてしまった。", "かさの えが こわれてしまった。", "Gagang payung itu rusak.", "Kondisi benda."],
                    ["傘の柄をしっかり握って歩いた。", "かさの えを しっかり にぎって あるいた。", "Saya berjalan sambil memegang gagang payung dengan erat.", "Penggunaan benda."]
                ]),
                kosakata("明るい人柄", "あかるい ひとがら", "kepribadian yang ceria dan ramah", "Dipakai untuk menjelaskan sifat dasar seseorang.", "人柄 lebih menekankan karakter atau kepribadian daripada penampilan luar.", "人 + 柄 memberi gagasan corak/sifat khas seseorang, yaitu karakter pribadinya.", [
                    ["彼女の明るい人柄は、職場の雰囲気をよくする。", "かのじょの あかるい ひとがらは、しょくばの ふんいきを よくする。", "Kepribadiannya yang ceria membuat suasana tempat kerja menjadi lebih baik.", "Deskripsi karakter."],
                    ["面接では経験だけでなく、人柄も見られる。", "めんせつでは けいけんだけでなく、ひとがらも みられる。", "Dalam wawancara, bukan hanya pengalaman tetapi juga kepribadian yang dinilai.", "Konteks wawancara kerja."]
                ]),
                kosakata("無地", "むじ", "polos; tanpa motif", "Dipakai untuk menjelaskan kain atau barang yang tidak memiliki corak.", "Merupakan lawan makna praktis bagi 柄 (motif), tetapi bukan bacaan lain dari kanji 柄.", "無 berarti tidak ada; 地 menunjuk permukaan/bahan: permukaan tanpa motif.", [
                    ["仕事用に無地のネクタイを買った。", "しごとように むじの ネクタイを かった。", "Saya membeli dasi polos untuk bekerja.", "Memilih pakaian."],
                    ["柄物より無地の服のほうが合わせやすい。", "がらものより むじの ふくの ほうが あわせやすい。", "Pakaian polos lebih mudah dipadukan daripada pakaian bermotif.", "Perbandingan gaya berpakaian."]
                ], "Kosakata pembanding dari sumber; tidak mengandung kanji 柄."),
                kosakata("ひしゃくの柄", "ひしゃくの え", "gagang gayung/sendok air tradisional", "Menamai bagian pegangan pada ひしゃく (alat untuk mengambil air).", "柄 dibaca え karena menunjuk pegangan benda.", "Sama seperti 傘の柄, karakter ini berarti pegangan yang digunakan tangan.", [
                    ["ひしゃくの柄を持って、水をくんだ。", "ひしゃくの えを もって、みずを くんだ。", "Saya memegang gagang gayung tradisional itu lalu mengambil air.", "Penggunaan alat tradisional."],
                    ["古いひしゃくの柄が少し曲がっている。", "ふるい ひしゃくの えが すこし まがっている。", "Gagang gayung tua itu sedikit bengkok.", "Deskripsi benda."]
                ])
            ]),
        kanjiItem("w4d1-kanji-miya", "宮", "istana atau tempat suci; dapat merujuk pada bangunan/lingkungan kekaisaran atau kuil", ["キュウ", "ク", "グウ"], ["みや"],
            "宮 berkaitan dengan tempat yang memiliki kedudukan khusus, seperti istana dan kuil Shinto. Makna tepatnya ditentukan oleh kosakata: 宮殿 adalah istana, sedangkan お宮 adalah kuil.",
            "Bacaan キュウ tampak pada 宮殿, ク pada 宮内庁, グウ pada 神宮, dan みや pada 宮様／お宮. Variasi ini adalah bacaan kosakata yang mapan; jangan menganggap semua bacaan dapat dipertukarkan.", [
                kosakata("宮殿", "きゅうでん", "istana; bangunan tempat tinggal resmi keluarga kerajaan", "Digunakan dalam konteks sejarah, kerajaan, dan bangunan resmi.", "Lebih khusus dan megah daripada 住居 (tempat tinggal) biasa.", "殿 berarti bangunan/gedung besar; 宮 menandai tempat kediaman agung.", [
                    ["観光客は古い宮殿を見学した。", "かんこうきゃくは ふるい きゅうでんを けんがくした。", "Para wisatawan mengunjungi istana tua itu.", "Wisata sejarah."],
                    ["宮殿の内部には貴重な美術品が展示されている。", "きゅうでんの ないぶには きちょうな びじゅつひんが てんじされている。", "Di bagian dalam istana dipamerkan karya seni yang berharga.", "Deskripsi bangunan bersejarah."]
                ]),
                kosakata("宮内庁", "くないちょう", "Badan Rumah Tangga Kekaisaran Jepang", "Nama lembaga pemerintah yang menangani urusan keluarga kekaisaran Jepang.", "Nama lembaga resmi; 宮 dibaca ク dalam nama ini, bukan キュウ atau みや.", "宮内 mengacu pada lingkungan/urusan istana kekaisaran; 庁 adalah badan atau kantor pemerintahan.", [
                    ["宮内庁は皇室に関する情報を公表している。", "くないちょうは こうしつに かんする じょうほうを こうひょうしている。", "Badan Rumah Tangga Kekaisaran mengumumkan informasi terkait keluarga kekaisaran.", "Informasi lembaga resmi."],
                    ["皇室関係の仕事をする行政機関は宮内庁と呼ばれる。", "こうしつかんけいの しごとを する ぎょうせいきかんは くないちょうと よばれる。", "Lembaga administrasi yang menangani urusan keluarga kekaisaran disebut Badan Rumah Tangga Kekaisaran.", "Penjelasan institusi."]
                ]),
                kosakata("神宮", "じんぐう", "kuil Shinto besar/utama yang memakai sebutan Jingu", "Muncul pada nama kuil tertentu, misalnya 伊勢神宮.", "Nama jenis/nama diri kuil; tidak semua kuil Shinto disebut 神宮.", "神 berarti dewa/kami dan 宮 berarti tempat suci; gabungan menunjuk tempat pemujaan Shinto yang memiliki status khusus.", [
                    ["伊勢神宮は三重県にある。", "いせじんぐうは みえけんに ある。", "Ise Jingū berada di Prefektur Mie.", "Informasi tempat."],
                    ["多くの人が初詣に神宮を訪れる。", "おおくの ひとが はつもうでに じんぐうを おとずれる。", "Banyak orang mengunjungi kuil Jingū untuk kunjungan pertama pada tahun baru.", "Tradisi tahun baru."]
                ]),
                kosakata("宮様", "みやさま", "sebutan hormat untuk anggota keluarga kekaisaran", "Digunakan sebagai sebutan hormat dalam konteks keluarga kekaisaran.", "Ungkapan hormat dan kontekstual; bukan sebutan umum untuk pemilik rumah atau pejabat biasa.", "宮 dibaca みや dalam kata ini; 様 menambahkan penghormatan.", [
                    ["記事では宮様のご訪問について報じていた。", "きじでは みやさまの ごほうもんについて ほうじていた。", "Artikel itu memberitakan kunjungan seorang anggota keluarga kekaisaran.", "Berita resmi."],
                    ["宮様をお迎えする準備が進められた。", "みやさまを おむかえする じゅんびが すすめられた。", "Persiapan untuk menyambut anggota keluarga kekaisaran telah dilakukan.", "Konteks seremoni."]
                ]),
                kosakata("お宮", "おみや", "kuil Shinto; tempat suci setempat", "Ungkapan yang lazim dipakai dalam percakapan untuk menyebut kuil Shinto.", "Lebih akrab daripada menyebut nama resmi kuil; makna tidak sama dengan istana 宮殿.", "お adalah awalan sopan/akrab; 宮 dibaca みや sebagai tempat suci.", [
                    ["子どものころ、近所のお宮でよく遊んだ。", "こどものころ、きんじょの おみやで よく あそんだ。", "Ketika kecil, saya sering bermain di kuil Shinto dekat rumah.", "Kenangan masa kecil."],
                    ["祭りの日には、お宮の周りに屋台が並ぶ。", "まつりの ひには、おみやの まわりに やたいが ならぶ。", "Pada hari festival, kios-kios berjajar di sekitar kuil Shinto.", "Suasana festival lokal."]
                ])
            ])
    ],
    exercises: [
        {
            id: "w4d1-r1-1", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "その女は（a. 無口 b. 無言）電話をかけて嫌がらせをした。",
            choices: [
                { label: "a", text: "無口（むくち）", meaning: "pendiam; tidak banyak bicara", whyNot: "無口 menggambarkan sifat orang. Tidak lazim membentuk 無口電話 untuk menyebut panggilan tanpa suara." },
                { label: "b", text: "無言（むごん）", meaning: "tanpa kata-kata; diam", why: "無言電話（むごんでんわ）adalah panggilan telepon ketika penelepon tidak berbicara. Ini kolokasi yang tepat." }
            ], answer: "b", answerWord: "無言", answerReading: "むごんでんわ",
            translation: "Perempuan itu melakukan panggilan telepon tanpa berkata-kata untuk mengganggu/meneror.",
            explanation: "Pilih 無言 karena kalimat membicarakan keadaan telepon yang tidak disertai ucapan. 無口 adalah sifat orang yang pendiam, sedangkan 無言 menjelaskan keadaan diam pada tindakan/kejadian."
        },
        {
            id: "w4d1-r1-2", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "（a. 言い付け b. 言い訳）は聞きたくない。今後注意するように。",
            choices: [
                { label: "a", text: "言い付け（いいつけ）", meaning: "perintah/instruksi", whyNot: "Makna 'perintah' tidak sesuai dengan sesuatu yang tidak ingin didengar sebagai alasan atas kesalahan." },
                { label: "b", text: "言い訳（いいわけ）", meaning: "alasan/dalih", why: "Kalimat menolak mendengar dalih dan meminta orang tersebut berhati-hati ke depannya; makna ini sesuai." }
            ], answer: "b", answerWord: "言い訳", answerReading: "いいわけ",
            translation: "Saya tidak mau mendengar alasan/dalih. Ke depannya, berhati-hatilah.",
            explanation: "言い訳 adalah alasan yang dipakai untuk membela diri. 言い付け berarti perintah yang diberikan kepada orang lain, sehingga tidak cocok dengan konteks teguran ini."
        },
        {
            id: "w4d1-r1-3", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "電力消費の無駄を（a. 省く b. 省みる）。",
            choices: [
                { label: "a", text: "省く（はぶく）", meaning: "menghilangkan/mengurangi", why: "Yang dilakukan terhadap pemborosan listrik adalah menyingkirkannya atau menguranginya." },
                { label: "b", text: "省みる（かえりみる）", meaning: "merenungkan/meninjau diri", whyNot: "省みる biasanya mengambil diri sendiri atau tindakan sendiri sebagai objek refleksi; tidak berarti menghapus pemborosan." }
            ], answer: "a", answerWord: "省く", answerReading: "はぶく",
            translation: "Menghilangkan pemborosan konsumsi listrik.",
            explanation: "Objeknya 無駄 (pemborosan), sehingga verba yang tepat adalah 省く. Bedakan dua kunyomi 省: はぶく = menghilangkan; かえりみる = meninjau diri."
        },
        {
            id: "w4d1-r1-4", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "中途（a. 極端 b. 半端）な改革ではなく、やるなら徹底的にやってほしい。",
            choices: [
                { label: "a", text: "極端（きょくたん）", meaning: "ekstrem", whyNot: "極端な改革 dapat berdiri sendiri, tetapi bukan gabungan tetap 中途極端; struktur yang diuji adalah 中途半端." },
                { label: "b", text: "半端（はんぱ）", meaning: "tidak utuh/setengah-setengah", why: "中途半端 adalah ungkapan tetap yang berarti tanggung atau tidak tuntas." }
            ], answer: "b", answerWord: "中途半端", answerReading: "ちゅうとはんぱ",
            translation: "Saya tidak ingin reformasi yang setengah-setengah; kalau memang dilakukan, saya ingin agar dilakukan secara menyeluruh.",
            explanation: "Pola tetapnya 中途半端な～. 極端 berarti ekstrem dan biasanya membentuk 極端な例／考え方, bukan 中途極端."
        },
        {
            id: "w4d1-r1-5", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "皇室関係の仕事をする行政機関を（a. 宮殿 b. 宮内）庁という。",
            choices: [
                { label: "a", text: "宮殿（きゅうでん）", meaning: "istana", whyNot: "宮殿 adalah bangunan istana, bukan nama badan administrasi." },
                { label: "b", text: "宮内（くない）", meaning: "bagian/lingkungan dalam istana", why: "Nama lembaga yang benar adalah 宮内庁（くないちょう）, Badan Rumah Tangga Kekaisaran Jepang." }
            ], answer: "b", answerWord: "宮内庁", answerReading: "くないちょう",
            translation: "Lembaga administrasi yang menangani urusan keluarga kekaisaran disebut Badan Rumah Tangga Kekaisaran.",
            explanation: "宮内庁 adalah nama institusi. 宮殿 berarti istana sebagai bangunan sehingga tidak dapat mengisi posisi sebelum 庁."
        },
        {
            id: "w4d1-r1-6", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "勝った試合のインタビューは監督の（a. 利口 b. 口調）も滑らかだった。",
            choices: [
                { label: "a", text: "利口（りこう）", meaning: "pintar/cerdas", whyNot: "利口 menggambarkan kecerdasan seseorang, bukan kelancaran cara berbicaranya dalam wawancara." },
                { label: "b", text: "口調（くちょう）", meaning: "nada/cara bicara", why: "口調 dapat dideskripsikan sebagai 滑らか (lancar), sehingga cocok untuk cara pelatih berbicara dalam wawancara." }
            ], answer: "b", answerWord: "口調", answerReading: "くちょう",
            translation: "Dalam wawancara setelah pertandingan yang dimenangkan, cara bicara pelatih juga lancar.",
            explanation: "滑らかな口調 adalah cara bicara yang lancar. 利口 berarti cerdas dan tidak cocok secara makna dengan 滑らかだった pada konteks suara/ucapan."
        },
        {
            id: "w4d1-r2-7", section: "練習Ⅱ", type: "reading-fill", prompt: "Pilih potongan bacaan yang mengisi bagian kosong.", answer: "i, c",
            items: [
                { prompt: "相性のいい二人 → ＿＿＿しょう", answer: "あい", answerReading: "あいしょう", answerWord: "相性", choice: "i", why: "相性 dibaca あいしょう; bagian yang hilang sebelum しょう adalah あい." },
                { prompt: "相互努力をする。 → ＿＿＿ご", answer: "そう", answerReading: "そうご", answerWord: "相互", choice: "c", why: "相互 dibaca そうご; bagian yang hilang sebelum ご adalah そう." }
            ],
            choices: ["a. がら", "b. けん", "c. そう", "d. しょう", "e. ま", "f. え", "g. なっ", "h. あいだ", "i. あい", "j. げん", "k. へい", "l. のう"],
            translation: "Dua orang yang cocok; melakukan upaya timbal balik.",
            explanation: "Nomor pertama menguji bacaan kun'yomi あい dalam 相性; nomor kedua menguji on'yomi そう dalam 相互. Bacaan kata utuh harus dikenali, bukan disusun dengan menebak satu bacaan tunggal 相."
        },
        {
            id: "w4d1-r2-8", section: "練習Ⅱ", type: "reading-fill", prompt: "Pilih potongan bacaan yang mengisi bagian kosong.", answer: "k, a",
            items: [
                { prompt: "横柄な店員 → おう＿＿＿", answer: "へい", answerReading: "おうへい", answerWord: "横柄", choice: "k", why: "横柄 dibaca おうへい, jadi bagian yang hilang ialah へい." },
                { prompt: "花柄のスカーフ → はな＿＿＿", answer: "がら", answerReading: "はながら", answerWord: "花柄", choice: "a", why: "花柄 dibaca はながら; 柄 memakai bacaan がら." }
            ],
            choices: ["a. がら", "b. けん", "c. そう", "d. しょう", "e. ま", "f. え", "g. なっ", "h. あいだ", "i. あい", "j. げん", "k. へい", "l. のう"],
            translation: "Pegawai toko yang angkuh; syal bermotif bunga.",
            explanation: "横柄 adalah kosakata Sino-Jepang dengan bacaan ヘイ, sedangkan 柄 dalam 花柄 memakai bacaan kun'yomi がら. Bacaan 柄 bergantung pada kosakata."
        },
        {
            id: "w4d1-r2-9", section: "練習Ⅱ", type: "reading-fill", prompt: "Pilih potongan bacaan yang mengisi bagian kosong.", answer: "g, l",
            items: [
                { prompt: "納得がいかない。 → ＿＿＿とく", answer: "なっ", answerReading: "なっとく", answerWord: "納得", choice: "g", why: "納得 dibaca なっとく; bagian yang hilang sebelum とく ialah なっ." },
                { prompt: "納入期限 → ＿＿＿にゅう", answer: "のう", answerReading: "のうにゅう", answerWord: "納入", choice: "l", why: "納入 dibaca のうにゅう; bagian yang hilang sebelum にゅう ialah のう." }
            ],
            choices: ["a. がら", "b. けん", "c. そう", "d. しょう", "e. ま", "f. え", "g. なっ", "h. あいだ", "i. あい", "j. げん", "k. へい", "l. のう"],
            translation: "Tidak bisa menerima/merasa belum puas; batas waktu penyerahan barang.",
            explanation: "納 memiliki bacaan khusus ナッ dalam 納得 dan ノウ dalam 納入. Bentuk gabungan yang sudah mapan perlu dihafalkan bersama bacaannya."
        },
        {
            id: "w4d1-r2-10", section: "練習Ⅱ", type: "reading-fill", prompt: "Pilih potongan bacaan yang mengisi bagian kosong.", answer: "e, b",
            items: [
                { prompt: "束の間の休み → つかの＿＿＿", answer: "ま", answerReading: "つかのま", answerWord: "束の間", choice: "e", why: "束の間 dibaca つかのま; bagian terakhirnya adalah ま." },
                { prompt: "世間知らず → せ＿＿＿", answer: "けん", answerReading: "せけん", answerWord: "世間", choice: "b", why: "世間 dibaca せけん; bagian yang hilang setelah せ adalah けん." }
            ],
            choices: ["a. がら", "b. けん", "c. そう", "d. しょう", "e. ま", "f. え", "g. なっ", "h. あいだ", "i. あい", "j. げん", "k. へい", "l. のう"],
            translation: "Istirahat singkat; orang yang tidak mengenal dunia/kurang pengalaman sosial.",
            explanation: "束の間 memakai bacaan kun'yomi ま, sedangkan 世間 memakai bacaan on'yomi けん. Kedua contoh memperlihatkan bahwa 間 memiliki beberapa bacaan berdasarkan kata utuh."
        }
    ],
    sourceNotes: [
        { id: "w4d1-note-1", topic: "Transkripsi 問 / 間", source: "Sumber menulis judul kelompok「問 / 間」, bacaan カン・ケン・あいだ・ま, lalu memberi kosakata 夜間・人間・この間・束の間・瞬間・世間・間柄・居間.", note: "Semua kosakata tersebut menggunakan kanji 間. 問 adalah kanji berbeda yang berarti bertanya/pertanyaan. Karena itu, entri kanji materi ditulis 間, sementara bentuk judul sumber tetap dicatat di sini sebagai kemungkinan salah transkripsi." },
        { id: "w4d1-note-2", topic: "端数を切り捨てる", source: "端数を切り捨てる — membuang angka pecahan atau membulatkan ke bawah.", note: "Terjemahan sumber sudah tepat jika dipahami sebagai pembulatan ke bawah. Jangan menerjemahkannya sebagai membulatkan ke atas; istilah untuk membulatkan ke atas ialah 切り上げる." }
    ]
};

export default minggu4Hari1;
