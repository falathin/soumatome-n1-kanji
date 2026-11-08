// JLPT Week 4 — Day 3: 難しい読みを覚えよう（難しい訓読み・とまどいやすい読み）
// Sumber menyediakan bacaan kata utuh, bukan tabel lengkap onyomi/kunyomi tiap karakter.

const contoh = (jp, furigana, translation, context) => ({ jp, furigana, translation, context });
const kosakata = (word, reading, meaning, usage, nuance, concept, examples, notes = "") => ({
    word, reading, meaning, usage, nuance, concept, examples: examples.map(x => contoh(...x)), ...(notes ? { notes } : {})
});
const unit = (id, character, meaning, reading, readingType, concept, explanation, vocabulary, relatedWords = [], notes = "") => ({
    id, character, meaning, sourceWordReading: reading, readingType, onyomi: [], kunyomi: [],
    readingScope: "Transkripsi Day 3 memberi bacaan kosakata utuh, bukan inventaris lengkap onyomi/kunyomi. Kolom onyomi/kunyomi dibiarkan kosong agar tidak mengarang daftar bacaan.",
    concept, explanation, vocabulary, ...(relatedWords.length ? { relatedWords } : {}), ...(notes ? { notes } : {})
});

const minggu4Hari3 = {
    week: 4,
    day: 3,
    title: { id: "Hari 3", en: "Day 3" },
    subtitle: { id: "Bacaan kun'yomi sulit dan bacaan yang mudah tertukar: 浜辺・雨具・家主", en: "Difficult kun'yomi and easily confused readings: 浜辺・雨具・家主" },
    theme: "第4週 難しい読みを覚えよう",
    focusReadings: ["はまべ", "あまぐ", "やぬし"],
    openingQuiz: {
        question: "頭文字 の読みは？",
        choices: ["ず", "かしら", "とう"],
        answer: "かしらもじ",
        fullReading: "かしらもじ",
        translation: "inisial nama; huruf pertama nama",
        explanation: "Dalam 頭文字, 頭 dibaca かしら dan 文字 dibaca もじ. Di sini 頭 membawa makna 'yang pertama/bagian awal', bukan kepala secara fisik."
    },
    kanji: [
        unit("w4d3-word-01", "頭文字", "inisial nama; huruf pertama dari nama", "かしらもじ", "gabungan kun'yomi (かしら + もじ)",
            "頭 dapat menunjuk bagian paling awal atau yang memimpin; dalam 頭文字, makna itu menunjuk huruf awal nama.",
            "Kata ini dibaca sebagai gabungan かしら + もじ. Jangan membaca 頭 di sini sebagai ず atau とう. Bacaan kata utuh perlu diingat.", [
                kosakata("頭文字", "かしらもじ", "inisial nama; huruf pertama dari nama", "Digunakan pada formulir, daftar, atau instruksi yang meminta inisial seseorang.", "Lebih khusus dari 頭 (kepala); merujuk huruf awal, bukan seluruh nama.", "頭 di sini bermakna bagian awal; 文字 berarti huruf/karakter.", [
                    ["申込書には名前の頭文字を書いてください。", "もうしこみしょには なまえの かしらもじを かいてください。", "Tuliskan inisial nama Anda pada formulir pendaftaran.", "Instruksi mengisi formulir."],
                    ["荷物には持ち主の頭文字を記した。", "にもつには もちぬしの かしらもじを しるした。", "Saya menuliskan inisial pemilik pada barang bawaan itu.", "Memberi penanda kepemilikan."]
                ])
            ]),
        unit("w4d3-word-02", "浜辺", "pantai; tepi pantai", "はまべ", "gabungan kun'yomi dengan perubahan bunyi (はま + べ)",
            "浜辺 menunjuk area tepi laut/pantai. Unsur 辺 menjadi べ pada gabungan ini.",
            "Bedakan 浜辺 (はまべ), 海辺 (うみべ), dan 岸辺 (きしべ). Ketiganya dapat diterjemahkan sebagai tepi air, tetapi titik acuannya berbeda: pantai berpasir, tepi laut secara umum, dan tepi sungai/danau/air.", [
                kosakata("浜辺", "はまべ", "pantai; tepi pantai", "Digunakan untuk pantai, khususnya area pesisir yang menjadi tepian laut.", "Lebih memberi gambaran pantai sebagai bentang pesisir daripada garis pantai teknis.", "浜 berarti pesisir/pantai; 辺 berarti sisi/tepi.", [
                    ["子どもたちは浜辺で貝殻を拾っていた。", "こどもたちは はまべで かいがらを ひろっていた。", "Anak-anak sedang mengumpulkan kulit kerang di pantai.", "Kegiatan di pantai."],
                    ["夕方、浜辺を散歩すると風が気持ちいい。", "ゆうがた、はまべを さんぽすると かぜが きもちいい。", "Saat berjalan-jalan di pantai pada sore hari, anginnya terasa menyenangkan.", "Suasana pesisir."]
                ])
            ], [
                kosakata("海辺", "うみべ", "tepi laut; kawasan dekat laut", "Dipakai secara umum untuk area di tepi laut.", "Lebih luas daripada pantai berpasir; dapat mencakup tebing atau kawasan pesisir.", "海 + 辺 menunjuk sisi/tepian laut.", [
                    ["海辺の町で小さな宿に泊まった。", "うみべの まちで ちいさな やどに とまった。", "Saya menginap di penginapan kecil di kota tepi laut.", "Perjalanan."],
                    ["海辺には潮の香りが広がっていた。", "うみべには しおの かおりが ひろがっていた。", "Aroma laut menyebar di kawasan tepi laut.", "Deskripsi suasana."]
                ]),
                kosakata("岸辺", "きしべ", "tepian sungai, danau, atau perairan", "Digunakan untuk sisi daratan di sepanjang perairan.", "岸 lebih menonjolkan tepian/tebing daratan; tidak khusus pantai laut.", "岸 + 辺 menunjuk daerah di sisi perairan.", [
                    ["岸辺に座って、川の流れを眺めた。", "きしべに すわって、かわの ながれを ながめた。", "Saya duduk di tepi sungai dan memandangi alirannya.", "Suasana alam."],
                    ["岸辺の草むらに小鳥がいた。", "きしべの くさむらに ことりが いた。", "Ada burung kecil di rerumputan tepi air.", "Pengamatan alam."]
                ])
            ]),
        unit("w4d3-word-03", "雨具", "perlengkapan hujan", "あまぐ", "gabungan kun'yomi dengan perubahan bacaan (あま + ぐ)",
            "雨具 adalah kategori perlengkapan yang melindungi dari hujan. Kata ini mencakup beberapa benda, bukan hanya payung.",
            "Bandingkan 雨具 (あまぐ) dengan 雨傘 (あまがさ) dan 雨靴 (あまぐつ). Unsur 雨 dibaca あま dalam gabungan ini; perubahan bunyi pada unsur kedua merupakan bagian dari bacaan kata.", [
                kosakata("雨具", "あまぐ", "perlengkapan hujan", "Digunakan sebagai istilah umum bagi payung, jas hujan, sepatu bot hujan, dan perlengkapan lain.", "Lebih luas daripada 雨傘 yang hanya berarti payung hujan.", "雨 berarti hujan dan 具 berarti perlengkapan/alat.", [
                    ["天気予報を見て、雨具を準備した。", "てんきよほうを みて、あまぐを じゅんびした。", "Setelah melihat prakiraan cuaca, saya menyiapkan perlengkapan hujan.", "Persiapan sebelum keluar."],
                    ["遠足には雨具を必ず持ってきてください。", "えんそくには あまぐを かならず もってきてください。", "Untuk kegiatan jalan-jalan sekolah, harap selalu membawa perlengkapan hujan.", "Instruksi sekolah."]
                ])
            ], [
                kosakata("雨傘", "あまがさ", "payung hujan", "Digunakan untuk menyebut payung yang dipakai saat hujan.", "Lebih khusus daripada 傘; dibedakan dari 日傘 (ひがさ, payung matahari).", "雨 + 傘 menunjuk payung untuk hujan.", [
                    ["駅に雨傘を置き忘れてしまった。", "えきに あまがさを おきわすれてしまった。", "Saya tidak sengaja meninggalkan payung hujan di stasiun.", "Kejadian sehari-hari."],
                    ["雨傘と日傘を玄関に並べてある。", "あまがさと ひがさを げんかんに ならべてある。", "Payung hujan dan payung matahari disusun di pintu masuk.", "Membedakan fungsi payung."]
                ]),
                kosakata("雨靴", "あまぐつ", "sepatu hujan; sepatu bot untuk cuaca hujan", "Digunakan untuk alas kaki yang melindungi kaki dari air hujan atau genangan.", "Bukan payung; termasuk perlengkapan hujan yang dipakai di kaki.", "雨 + 靴 menunjuk sepatu yang digunakan saat hujan.", [
                    ["子どもに新しい雨靴を買った。", "こどもに あまぐつを かった。", "Saya membelikan sepatu hujan baru untuk anak.", "Perlengkapan musim hujan."],
                    ["雨靴を履けば、水たまりでも歩きやすい。", "あまぐつを はけば、みずたまりでも あるきやすい。", "Jika memakai sepatu hujan, berjalan di genangan air menjadi lebih mudah.", "Kegunaan benda."]
                ])
            ]),
        unit("w4d3-word-04", "手際", "keterampilan, ketangkasan, atau efisiensi dalam melakukan pekerjaan", "てぎわ", "gabungan kun'yomi (て + ぎわ)",
            "手際 menilai bagaimana seseorang menangani pekerjaan: terampil, lancar, dan efisien. Akhiran 際 dibaca ぎわ pada kata ini.",
            "Pola pentingnya 手際がいい dan 手際よく. Bandingkan 窓際 (まどぎわ, dekat jendela) dan 別れ際 (わかれぎわ, saat berpisah); 際 memberi nuansa posisi/waktu di sekitar suatu batas atau momen.", [
                kosakata("手際", "てぎわ", "ketangkasan; kecakapan; cara kerja yang efisien", "Umum dalam penilaian terhadap cara seseorang melakukan tugas, memasak, mengemas, atau menangani urusan.", "手際がいい bernada pujian; menilai proses dan kelancaran kerja, bukan hanya hasil.", "手 berarti tangan/tindakan dan 際 menunjuk cara menangani pada saat bekerja; kata utuh menilai keterampilan pelaksanaan.", [
                    ["ベテランの店員は手際よく商品を包装した。", "ベテランの てんいんは てぎわよく しょうひんを ほうそうした。", "Pegawai toko yang berpengalaman mengemas barang dengan cekatan.", "Layanan toko."],
                    ["彼女は手際がいいので、準備がすぐに終わった。", "かのじょは てぎわが いいので、じゅんびが すぐに おわった。", "Karena dia cekatan, persiapan segera selesai.", "Kerja tim." ]
                ])
            ], [
                kosakata("窓際", "まどぎわ", "dekat jendela; sisi jendela", "Menunjuk tempat atau posisi di dekat jendela.", "Menekankan posisi fisik; bukan keterampilan seperti 手際.", "窓 + 際 berarti sisi/area dekat jendela.", [
                    ["窓際の席に座りたいです。", "まどぎわの せきに すわりたいです。", "Saya ingin duduk di tempat dekat jendela.", "Memilih tempat duduk."],
                    ["窓際に観葉植物を置いた。", "まどぎわに かんようしょくぶつを おいた。", "Saya meletakkan tanaman hias di dekat jendela.", "Menata ruangan."]
                ]),
                kosakata("別れ際", "わかれぎわ", "saat berpisah; tepat ketika akan berpisah", "Digunakan untuk momen terakhir sebelum orang berpisah.", "Menunjuk batas/momen waktu, bukan posisi benda.", "別れ + 際 berarti pada saat perpisahan.", [
                    ["別れ際に、彼女は小さく手を振った。", "わかれぎわに、かのじょは ちいさく てを ふった。", "Saat berpisah, dia melambaikan tangan kecil-kecilan.", "Adegan perpisahan."],
                    ["別れ際の一言が心に残った。", "わかれぎわの ひとことが こころに のこった。", "Satu kalimat yang diucapkan saat berpisah tetap membekas di hati.", "Refleksi hubungan." ]
                ])
            ]),
        unit("w4d3-word-05", "家主", "pemilik rumah; tuan tanah/landlord dalam konteks penyewaan", "やぬし", "gabungan kun'yomi (や + ぬし)",
            "家主 menunjuk pihak yang memiliki rumah atau menyewakan rumah. Kata ini berbeda dari 地主, yang menekankan pemilik tanah.",
            "家 dibaca や dan 主 dibaca ぬし pada kata ini. Bandingkan 地主 (じぬし) dan 家主 (やぬし) karena unsur 主 sama, tetapi kata pertama menunjuk pemilik tanah, sedangkan kedua pemilik rumah.", [
                kosakata("家主", "やぬし", "pemilik rumah; tuan tanah/pemilik properti sewaan", "Digunakan dalam konteks sewa rumah, pengelolaan properti, dan hubungan penyewa-pemilik.", "Lebih spesifik pada pemilik rumah/properti yang menjadi objek sewa; istilah formal lain ialah 大家 (おおや).", "家 berarti rumah dan 主 berarti pemilik/tuan.", [
                    ["家主に修理をお願いするため、電話をかけた。", "やぬしに しゅうりを おねがいするため、でんわを かけた。", "Saya menelepon pemilik rumah untuk meminta perbaikan.", "Hubungan penyewa dan pemilik."],
                    ["家主から契約更新について連絡があった。", "やぬしから けいやくこうしんについて れんらくが あった。", "Ada kabar dari pemilik rumah mengenai perpanjangan kontrak.", "Administrasi tempat tinggal."]
                ])
            ], [
                kosakata("地主", "じぬし", "pemilik tanah; tuan tanah", "Digunakan untuk orang yang memiliki tanah, terutama dalam konteks properti atau pertanian.", "Berbeda dari 家主 yang menekankan rumah/bangunan; sebuah pihak bisa saja memiliki keduanya, tetapi istilahnya menyorot objek yang berbeda.", "地 berarti tanah dan 主 berarti pemilik.", [
                    ["地主は農地の一部を貸している。", "じぬしは のうちの いちぶを かしている。", "Pemilik tanah menyewakan sebagian lahan pertanian.", "Konteks pertanahan."],
                    ["地主と家主が契約内容を確認した。", "じぬしと やぬしが けいやくないようを かくにんした。", "Pemilik tanah dan pemilik rumah memeriksa isi kontrak.", "Membandingkan status kepemilikan."]
                ])
            ]),
        unit("w4d3-word-06", "城跡", "bekas kastel; reruntuhan/situs peninggalan kastel", "しろあと／じょうせき", "dua bacaan: kun'yomi しろあと dan on'yomi じょうせき", 
            "城跡 menunjuk lokasi tempat kastel pernah berdiri. Kedua bacaan merujuk konsep yang sama; pemilihan bacaan dapat bergantung pada nama tempat atau kebiasaan penyebutan.",
            "Sumber memberikan dua bacaan: しろあと dan じょうせき. 城跡公園 dicontohkan dengan bacaan しろあとこうえん.", [
                kosakata("城跡", "しろあと／じょうせき", "bekas kastel; reruntuhan atau situs bekas kastel", "Digunakan untuk situs sejarah tempat kastel dahulu berada.", "しろあと terasa sebagai bacaan Jepang asli; じょうせき adalah bacaan Sino-Jepang yang juga digunakan pada nama/situs tertentu.", "城 adalah kastel dan 跡 adalah bekas/jejak: tempat yang menyimpan jejak kastel.", [
                    ["週末に古い城跡を見学した。", "しゅうまつに ふるい しろあとを けんがくした。", "Akhir pekan lalu saya mengunjungi situs bekas kastel tua.", "Wisata sejarah."],
                    ["この城跡から町全体を見渡せる。", "この しろあとから まちぜんたいを みわたせる。", "Dari situs bekas kastel ini, seluruh kota dapat terlihat.", "Deskripsi lokasi." ]
                ]),
                kosakata("城跡公園", "しろあとこうえん", "taman di situs bekas kastel", "Nama umum fasilitas taman yang dibangun di lokasi bekas kastel.", "Bentuk ini mempertahankan bacaan しろあと pada 城跡 dalam contoh sumber.", "城跡 + 公園 berarti taman yang berada di kawasan bekas kastel.", [
                    ["城跡公園では桜の季節に祭りが開かれる。", "しろあとこうえんでは さくらの きせつに まつりが ひらかれる。", "Di taman bekas kastel, festival diadakan pada musim bunga sakura.", "Acara musiman."],
                    ["城跡公園を散歩しながら歴史を学んだ。", "しろあとこうえんを さんぽしながら れきしを まなんだ。", "Saya belajar sejarah sambil berjalan-jalan di taman bekas kastel.", "Wisata edukatif." ]
                ])
            ]),
        unit("w4d3-word-07", "問屋", "pedagang grosir; pemasok/penyalur barang dalam jumlah besar", "とんや", "bacaan khusus kosakata (bukan pembacaan biasa tiap karakter)",
            "問屋 adalah pihak perantara dalam rantai distribusi yang memasok barang kepada toko atau penjual lain.",
            "Bacaan とんや tidak dapat ditebak dengan membaca 問 dan 屋 secara biasa. Perlakukan 問屋 sebagai kosakata utuh dan ingat konteks bisnis grosir.", [
                kosakata("問屋", "とんや", "pedagang grosir; pemasok barang ke toko/pengecer", "Dipakai dalam perdagangan untuk pihak yang memasok barang dalam jumlah besar.", "Berbeda dari 小売店 (こ売店/pengecer) yang menjual langsung kepada konsumen.", "Makna kata utuh menunjuk posisi perantara/grosir dalam distribusi barang.", [
                    ["店は問屋から商品を仕入れている。", "みせは とんやから しょうひんを しいれている。", "Toko itu membeli stok barang dari pedagang grosir.", "Rantai pasokan."],
                    ["問屋を通すと、多くの商品をまとめて注文できる。", "とんやを とおすと、おおくの しょうひんを まとめて ちゅうもんできる。", "Melalui grosir, banyak barang dapat dipesan sekaligus.", "Proses perdagangan." ]
                ])
            ]),
        unit("w4d3-word-08", "小川", "sungai kecil; anak sungai", "おがわ", "bacaan khusus gabungan kun'yomi; perubahan bunyi かわ → がわ", 
            "小川 menggambarkan aliran air kecil. 小 tidak dibaca しょう di sini, melainkan bagian dari bacaan mapan おがわ.",
            "Dalam 小川, 川 (かわ) berubah menjadi がわ karena rendaku/perubahan bunyi pada gabungan. Bacaan seluruh kata adalah おがわ.", [
                kosakata("小川", "おがわ", "sungai kecil; anak sungai", "Digunakan untuk aliran air kecil di alam atau daerah pedesaan.", "Lebih kecil daripada sungai besar; dapat juga menjadi nama keluarga/nama tempat, tetapi sumber memakainya sebagai kata umum.", "小 berarti kecil dan 川 berarti sungai.", [
                    ["家の近くには小川が流れている。", "いえの ちかくには おがわが ながれている。", "Ada sungai kecil yang mengalir dekat rumah.", "Deskripsi lingkungan."],
                    ["小川の流れる音を聞きながら休んだ。", "おがわの ながれる おとを ききながら やすんだ。", "Saya beristirahat sambil mendengarkan suara aliran sungai kecil.", "Suasana alam." ]
                ])
            ]),
        unit("w4d3-word-09", "小銭", "uang receh; uang pecahan kecil", "こぜに", "gabungan kun'yomi dengan perubahan bunyi", 
            "小銭 mengacu pada uang nominal kecil atau koin receh yang praktis untuk transaksi kecil.",
            "Bacaan こぜに adalah bacaan kata utuh; 銭 dapat dibaca ぜに dalam kata ini. Jangan menebak dari onyomi 小 (しょう).", [
                kosakata("小銭", "こぜに", "uang receh; koin/uang nominal kecil", "Dipakai saat membicarakan uang tunai pecahan kecil.", "Kontras dengan お札 (おさつ, uang kertas) atau 大きな金額.", "小 berarti kecil dan 銭 berarti uang/koin.", [
                    ["自動販売機を使うために小銭を用意した。", "じどうはんばいきを つかうために こぜにを よういした。", "Saya menyiapkan uang receh untuk menggunakan mesin penjual otomatis.", "Transaksi sehari-hari."],
                    ["小銭入れをかばんに入れておく。", "こぜにいれを かばんに いれておく。", "Saya menyimpan dompet koin di dalam tas.", "Menyiapkan uang receh." ]
                ]),
                kosakata("小銭入れ", "こぜにいれ", "dompet koin; tempat menyimpan uang receh", "Nama benda kecil untuk menyimpan koin atau uang pecahan kecil.", "Lebih khusus daripada 財布 (さいふ), yang dapat menyimpan uang kertas dan kartu juga.", "小銭 + 入れ berarti tempat untuk memasukkan uang receh.", [
                    ["小銭入れに百円玉を入れた。", "こぜにいれに ひゃくえんだまを いれた。", "Saya memasukkan koin seratus yen ke dompet koin.", "Mengatur uang tunai."],
                    ["小銭入れが見つからず、机の上を探した。", "こぜにいれが みつからず、つくえの うえを さがした。", "Saya tidak menemukan dompet koin dan mencari di atas meja.", "Kegiatan sehari-hari." ]
                ])
            ]),
        unit("w4d3-word-10", "本音", "perasaan, pendapat, atau keinginan yang sebenarnya", "ほんね", "gabungan bacaan on + kun yang mapan", 
            "本音 adalah apa yang sungguh dirasakan atau dipikirkan seseorang, berbeda dari 建前 yang ditampilkan secara sosial.",
            "Pasangan pentingnya 本音と建前. 本音 dibaca ほんね; jangan tertukar dengan 音色 (ねいろ), yang juga memiliki bunyi ね tetapi berarti karakter suara.", [
                kosakata("本音", "ほんね", "perasaan atau pendapat yang sebenarnya", "Dipakai saat membahas isi hati yang mungkin tidak disampaikan secara langsung.", "Sering dikontraskan dengan 建前 (たてまえ), yaitu sikap/pendapat yang ditampilkan demi norma sosial.", "本 berarti asli/sebenarnya dan 音 berarti suara: suara hati yang sesungguhnya.", [
                    ["会議では建前を話したが、友人には本音を伝えた。", "かいぎでは たてまえを はなしたが、ゆうじんには ほんねを つたえた。", "Dalam rapat saya menyampaikan sikap resmi, tetapi kepada teman saya mengungkapkan perasaan sebenarnya.", "Perbedaan situasi formal dan pribadi."],
                    ["本音と建前を使い分けるのは難しい。", "ほんねと たてまえを つかいわけるのは むずかしい。", "Sulit untuk membedakan penggunaan perasaan sebenarnya dan sikap yang ditampilkan.", "Pembahasan komunikasi sosial." ]
                ]),
                kosakata("建前", "たてまえ", "sikap/prinsip yang ditampilkan secara sosial; pernyataan resmi", "Dipakai berpasangan dengan 本音 untuk membedakan ekspresi publik dan perasaan sebenarnya.", "Tidak selalu berarti kebohongan; dapat berupa sikap yang disesuaikan dengan norma atau kepentingan sosial.", "建前 adalah posisi/ungkapan yang 'dibangun' dan ditampilkan di hadapan orang lain.", [
                    ["建前だけでなく、本当の考えも聞かせてください。", "たてまえだけでなく、ほんとうの かんがえも きかせてください。", "Bukan hanya sikap resmi, tolong sampaikan juga pemikiran Anda yang sebenarnya.", "Diskusi terbuka."],
                    ["職場では建前を守ることが必要な場面もある。", "しょくばでは たてまえを まもることが ひつような ばめんも ある。", "Di tempat kerja, ada situasi ketika menjaga sikap formal memang diperlukan.", "Etika profesional." ]
                ], "Kata pembanding yang secara eksplisit terdapat dalam contoh sumber.")
            ]),
        unit("w4d3-word-11", "音色", "warna/karakter suara; timbre", "ねいろ／おんしょく", "dua bacaan kosakata: bacaan kun majemuk dan on'yomi", 
            "音色 menggambarkan kualitas khas suara yang membuat satu instrumen atau sumber suara terdengar berbeda dari yang lain.",
            "Sumber memberi dua bacaan, ねいろ dan おんしょく. Keduanya menunjuk konsep timbre, tetapi pemakaiannya dapat berbeda menurut konteks. Contoh sumber menggunakan バイオリンの音色.", [
                kosakata("音色", "ねいろ／おんしょく", "warna atau karakter suara; timbre", "Dipakai untuk membahas suara alat musik, suara manusia, atau kualitas bunyi.", "ねいろ terdengar alami dalam deskripsi musik sehari-hari; おんしょく lebih teknis/tertulis pada konteks akustik atau musik.", "音 berarti suara dan 色 berarti warna; istilah ini memakai 'warna' sebagai metafora kualitas suara.", [
                    ["バイオリンの音色がホールいっぱいに広がった。", "バイオリンの ねいろが ホールいっぱいに ひろがった。", "Karakter suara biola menyebar memenuhi seluruh aula.", "Deskripsi pertunjukan musik."],
                    ["楽器によって音色が大きく異なる。", "がっきによって おんしょくが おおきく ことなる。", "Karakter suara sangat berbeda bergantung pada alat musiknya.", "Penjelasan musik/akustik." ]
                ])
            ]),
        unit("w4d3-word-12", "炎", "nyala api; kobaran api", "ほのお", "kun'yomi khusus", 
            "炎 menunjuk api yang menyala, sering dengan gambaran gerakan atau kobaran yang terlihat.",
            "Bacaan ほのお adalah kun'yomi yang perlu diingat sebagai kosakata utuh. Jangan mencampurkannya dengan kata 火 (ひ), yang lebih umum untuk api secara umum.", [
                kosakata("炎", "ほのお", "nyala api; lidah/kobaran api", "Dipakai untuk api yang tampak menyala, misalnya lilin, api unggun, atau kebakaran.", "Lebih visual dan ekspresif daripada 火; sering muncul pada deskripsi suasana atau peristiwa.", "Makna kata menyoroti bentuk nyala yang tampak, bukan hanya unsur api secara abstrak.", [
                    ["ろうそくの炎が静かに揺れていた。", "ろうそくの ほのおが しずかに ゆれていた。", "Nyala lilin berayun dengan tenang.", "Deskripsi suasana."],
                    ["風が強くなり、炎が大きく揺れた。", "かぜが つよくなり、ほのおが おおきく ゆれた。", "Angin menguat dan nyala api bergoyang besar.", "Pengamatan api." ]
                ])
            ]),
        unit("w4d3-word-13", "日付", "tanggal; penanggalan yang dicantumkan pada dokumen", "ひづけ", "kun'yomi gabungan dengan perubahan bunyi", 
            "日付 menunjuk tanggal tertentu, terutama ketika dituliskan pada formulir, surat, atau catatan.",
            "日 dibaca ひ dan 付く/付ける dalam gabungan menghasilkan づけ pada kata ini. Bacaan utuhnya ひづけ.", [
                kosakata("日付", "ひづけ", "tanggal; keterangan hari/bulan/tahun", "Dipakai untuk mengisi tanggal pada surat, dokumen, formulir, atau catatan.", "Lebih mengacu pada tanggal yang dicantumkan; 日 (ひ) sendiri dapat berarti hari atau matahari.", "日 berarti hari dan 付 berarti melekat/ditambahkan: keterangan hari yang dilekatkan pada dokumen.", [
                    ["申込書に今日の日付を記入してください。", "もうしこみしょに きょうの ひづけを きにゅうしてください。", "Tuliskan tanggal hari ini pada formulir pendaftaran.", "Administrasi."],
                    ["写真の裏に撮影した日付を書いた。", "しゃしんの うらに さつえいした ひづけを かいた。", "Saya menulis tanggal pengambilan foto di bagian belakang foto.", "Mengarsipkan foto." ]
                ])
            ]),
        unit("w4d3-word-14", "夜明け", "fajar; waktu menjelang matahari terbit", "よあけ", "kun'yomi gabungan", 
            "夜明け adalah peralihan dari malam menuju pagi, saat cahaya mulai muncul sebelum matahari terbit.",
            "夜 dibaca よ dan 明け dibaca あけ. Maknanya adalah 'terbukanya' malam menuju terang; jangan disamakan dengan 正午 (tengah hari).", [
                kosakata("夜明け", "よあけ", "fajar; menjelang matahari terbit", "Dipakai untuk waktu pagi sangat awal dan sering dalam narasi perjalanan atau suasana alam.", "Lebih puitis/deskriptif daripada 朝 (あさ) yang berarti pagi secara luas.", "夜 berarti malam dan 明け berarti menjadi terang/berakhir: saat malam berakhir.", [
                    ["夜明けとともに山を出発した。", "よあけと ともに やまを しゅっぱつした。", "Kami berangkat dari gunung bersamaan dengan datangnya fajar.", "Narasi perjalanan."],
                    ["夜明け前の空はまだ暗かった。", "よあけまえの そらは まだ くらかった。", "Langit sebelum fajar masih gelap.", "Deskripsi waktu." ]
                ])
            ]),
        unit("w4d3-word-15", "小包", "paket atau bingkisan kecil yang dikirim", "こづつみ", "bacaan khusus gabungan kun'yomi dengan perubahan bunyi", 
            "小包 adalah barang yang dikemas untuk dikirim melalui pos atau jasa pengiriman.",
            "Bacaan kata utuh こづつみ; つつみ berubah menjadi づつみ dalam gabungan. Jangan membaca karakter 小 sebagai しょう di sini.", [
                kosakata("小包", "こづつみ", "paket; bingkisan kiriman", "Digunakan untuk paket yang dikirim melalui pos atau kurir.", "Kata yang lazim pada konteks pengiriman; lebih khusus daripada 荷物 yang berarti barang/bawaan secara umum.", "小 berarti kecil dan 包 menunjuk bungkus/paket.", [
                    ["実家から小包が届いた。", "じっかから こづつみが とどいた。", "Sebuah paket tiba dari rumah keluarga saya.", "Menerima kiriman."],
                    ["小包の中には本と手紙が入っていた。", "こづつみの なかには ほんと てがみが はいっていた。", "Di dalam paket itu terdapat buku dan surat.", "Membuka paket." ]
                ])
            ]),
        unit("w4d3-word-16", "鳥居", "gerbang khas kuil Shinto", "とりい", "bacaan khusus kosakata", 
            "鳥居 adalah gerbang yang menjadi penanda pintu masuk atau batas ruang suci dalam kuil Shinto.",
            "Bacaan とりい perlu dihafalkan sebagai satu kosakata. Jangan menebak bacaan karakter 鳥 dan 居 secara terpisah untuk menghasilkan kata ini.", [
                kosakata("鳥居", "とりい", "gerbang khas kuil Shinto", "Ditemukan di pintu masuk atau jalur menuju area kuil Shinto.", "Benda budaya/agama yang khas Jepang; tidak sama dengan gerbang umum 門 (もん).", "鳥居 merupakan istilah budaya yang menunjuk struktur gerbang di kawasan suci Shinto; pelajari sebagai satu kesatuan.", [
                    ["神社の鳥居の前で一礼した。", "じんじゃの とりいの まえで いちれいした。", "Saya membungkuk sekali di depan gerbang kuil Shinto.", "Etika berkunjung ke kuil."],
                    ["赤い鳥居が山道の入口に立っている。", "あかい とりいが やまみちの いりぐちに たっている。", "Gerbang merah berdiri di pintu masuk jalur pegunungan.", "Deskripsi tempat." ]
                ])
            ]),
        unit("w4d3-word-17", "双子", "anak kembar; dua anak yang lahir dari satu kehamilan", "ふたご", "kun'yomi khusus kosakata", 
            "双子 merujuk pada dua anak yang merupakan pasangan kembar. Kata ini dipahami sebagai satu kesatuan dan tidak dibaca dengan onyomi karakter satu per satu.",
            "双子 dibaca ふたご; unsur 子 di sini tidak dibaca し atau す. Perubahan bunyi こ menjadi ご terjadi dalam gabungan.", [
                kosakata("双子", "ふたご", "anak kembar", "Digunakan untuk dua saudara yang lahir sebagai kembar.", "Dapat merujuk pada kembar identik atau tidak identik; kata ini sendiri tidak menjelaskan jenis kembarnya.", "双 berarti sepasang dan 子 berarti anak.", [
                    ["双子の兄弟は同じ学校に通っている。", "ふたごの きょうだいは おなじ がっこうに かよっている。", "Saudara laki-laki kembar itu bersekolah di tempat yang sama.", "Konteks keluarga/sekolah."],
                    ["近所に双子の赤ちゃんが生まれた。", "きんじょに ふたごの あかちゃんが うまれた。", "Sepasang bayi kembar lahir di lingkungan sekitar.", "Berita keluarga." ]
                ])
            ]),
        unit("w4d3-word-18", "兆し", "tanda; gejala atau pertanda awal", "きざし", "kun'yomi khusus kosakata", 
            "兆し menunjuk petunjuk awal bahwa suatu perubahan atau peristiwa mulai tampak, misalnya pemulihan atau perubahan cuaca.",
            "Bacaan きざし merupakan kun'yomi yang perlu dihafalkan. Sering dipakai dalam pola 回復の兆しを見せる.", [
                kosakata("兆し", "きざし", "tanda; pertanda; gejala awal", "Digunakan untuk tanda awal perubahan, baik positif maupun negatif.", "Lebih abstrak daripada tanda fisik sederhana; lazim dalam berita dan analisis.", "兆し adalah gejala awal yang mengisyaratkan sesuatu akan terjadi.", [
                    ["景気は回復の兆しを見せている。", "けいきは かいふくの きざしを みせている。", "Perekonomian menunjukkan tanda-tanda pemulihan.", "Berita ekonomi."],
                    ["長い雨の後、天気が回復する兆しが見えた。", "ながい あめの あと、てんきが かいふくする きざしが みえた。", "Setelah hujan panjang, tampak tanda-tanda cuaca akan membaik.", "Perubahan cuaca." ]
                ])
            ]),
        unit("w4d3-word-19", "自ら", "diri sendiri; secara langsung oleh diri sendiri", "みずから", "kun'yomi khusus", 
            "自ら menekankan bahwa orang yang dimaksud melakukan sesuatu dengan tangannya sendiri atau mengambil tindakan secara pribadi.",
            "Sering muncul pada subjek berwenang dalam tulisan, misalnya 社長自ら. Lebih formal daripada 自分で dalam beberapa konteks.", [
                kosakata("自ら", "みずから", "diri sendiri; secara langsung/pribadi", "Dipakai ketika seseorang melakukan tindakan sendiri, bukan hanya menyuruh orang lain.", "Sering memberi penekanan bahwa tindakan dilakukan langsung oleh orang yang disebut.", "自 berarti diri; 自ら menegaskan keterlibatan langsung diri sendiri.", [
                    ["社長自らが社員の手本となる。", "しゃちょう みずからが しゃいんの てほんと なる。", "Direktur sendiri menjadi teladan bagi para karyawan.", "Konteks kepemimpinan."],
                    ["彼は自ら現場に足を運んで状況を確認した。", "かれは みずから げんばに あしを はこんで じょうきょうを かくにんした。", "Dia sendiri datang langsung ke lokasi untuk memeriksa keadaan.", "Tindakan langsung." ]
                ])
            ]),
        unit("w4d3-word-20", "専ら", "terutama; sebagian besar; semata-mata", "もっぱら", "kun'yomi khusus", 
            "専ら menunjukkan bahwa suatu kegiatan atau pilihan dilakukan terutama pada satu hal, atau hampir seluruhnya terfokus pada hal tersebut.",
            "Bacaan もっぱら tidak dapat ditebak dari bacaan umum 専. Kata ini berfungsi sebagai adverbia.", [
                kosakata("専ら", "もっぱら", "terutama; sebagian besar; khususnya", "Digunakan sebelum verba atau frasa untuk menunjukkan fokus/kebiasaan utama.", "Bisa berarti 'hampir selalu' atau 'terutama', bergantung pada konteks; lebih tertulis daripada ほとんど dalam beberapa kalimat.", "専 berarti khusus/terpusat; kata もっぱら mengekspresikan fokus yang terkonsentrasi pada satu hal.", [
                    ["家では専らニュース番組を見ている。", "いえでは もっぱら ニュースばんぐみを みている。", "Di rumah saya terutama menonton program berita.", "Kebiasaan menonton."],
                    ["休日は専ら読書をして過ごす。", "きゅうじつは もっぱら どくしょを して すごす。", "Pada hari libur, saya menghabiskan waktu terutama dengan membaca.", "Rutinitas pribadi." ]
                ])
            ]),
        unit("w4d3-word-21", "巧みな", "terampil; mahir; cerdik atau piawai", "たくみな", "kun'yomi khusus sebagai kata sifat-na", 
            "巧み menilai keahlian atau kecerdikan dalam melakukan sesuatu, misalnya penggunaan kata atau teknik.",
            "Dipakai sebagai 巧みな + nomina atau dalam pola 言葉巧みに. Berbeda dari 手際 yang menekankan efisiensi proses; 巧み menyorot keterampilan/kemahiran.", [
                kosakata("巧みな", "たくみな", "terampil; mahir; cerdik", "Kata sifat-na untuk teknik, cara berbicara, gerakan, atau strategi yang dilakukan dengan piawai.", "Dapat bernada pujian; dalam 言葉巧みに bisa juga menyiratkan cara bicara yang licin/manipulatif sesuai konteks.", "巧 berarti terampil/mahir; kata ini menyorot kualitas teknik atau kecakapan.", [
                    ["職人は巧みな技で木を彫った。", "しょくにんは たくみな わざで きを ほった。", "Pengrajin itu mengukir kayu dengan teknik yang terampil.", "Keterampilan kerajinan."],
                    ["彼は言葉巧みに相手を説得した。", "かれは ことばたくみに あいてを せっとくした。", "Dia membujuk lawan bicaranya dengan kata-kata yang piawai.", "Retorika/persuasi." ]
                ])
            ])
    ],
    confusingReadings: [
        unit("w4d3-conf-01", "夜行", "perjalanan malam; beroperasi/bepergian pada malam hari", "やこう", "bacaan kata majemuk on'yomi", "夜行 menandai perjalanan atau layanan yang berlangsung malam hari.", "Jangan membaca 夜 sebagai よる ketika membentuk kata ini; hafalkan 夜行列車 sebagai やこうれっしゃ.", [
            kosakata("夜行", "やこう", "perjalanan malam; perjalanan yang dilakukan malam hari", "Dipakai pada transportasi malam dan istilah seperti 夜行列車.", "Lebih formal dan khusus daripada 夜に行く.", "夜 berarti malam dan 行 berarti bergerak/pergi.", [
                ["夜行列車で東京へ向かった。", "やこうれっしゃで とうきょうへ むかった。", "Saya menuju Tokyo dengan kereta malam.", "Perjalanan malam."],
                ["夜行バスを利用すれば、朝早く到着できる。", "やこうバスを りようすれば、あさ はやく とうちゃくできる。", "Dengan menggunakan bus malam, kita bisa tiba pagi-pagi.", "Pilihan transportasi."]
            ])
        ]),
        unit("w4d3-conf-02", "格安", "sangat murah; berharga rendah", "かくやす", "bacaan kata majemuk", "格安 menilai harga yang jauh lebih murah dibandingkan harga umum atau pembanding.", "Kata ini sering dipakai pada layanan dan produk seperti 格安航空券. Tidak selalu berarti kualitas buruk, meskipun harga rendah dapat memiliki syarat tertentu.", [
            kosakata("格安", "かくやす", "sangat murah; harga sangat rendah", "Sering menjadi atribut produk, tiket, hotel, atau jasa.", "Lebih kuat daripada 安い; sering digunakan dalam iklan atau penawaran.", "格 menunjuk tingkat/kelas dan 安 berarti murah: harga pada tingkat rendah.", [
                ["格安航空券を見つけて、旅行を予約した。", "かくやすこうくうけんを みつけて、りょこうを よやくした。", "Saya menemukan tiket pesawat sangat murah lalu memesan perjalanan.", "Pemesanan perjalanan."],
                ["この店では家電を格安で販売している。", "この みせでは かでんを かくやすで はんばいしている。", "Toko ini menjual peralatan rumah tangga dengan harga sangat murah.", "Informasi belanja."]
            ])
        ]),
        unit("w4d3-conf-03", "屋外", "di luar ruangan; area luar bangunan", "おくがい", "bacaan kata majemuk on'yomi", "屋外 menunjuk lokasi di luar gedung atau ruang tertutup.", "Pasangannya 屋内 (おくない). Baca 屋外 sebagai おくがい; jangan tertukar dengan 野外 (やがい), yang menyoroti area terbuka/luar.", [
            kosakata("屋外", "おくがい", "di luar ruangan; area luar bangunan", "Dipakai dalam fasilitas, tempat parkir, kegiatan, dan aturan lokasi.", "Sering menjadi istilah fasilitas seperti 屋外駐車場; menekankan posisi di luar bangunan.", "屋 berarti bangunan/rumah dan 外 berarti luar.", [
                ["屋外駐車場は建物の裏にあります。", "おくがいちゅうしゃじょうは たてものの うらに あります。", "Tempat parkir luar ruangan berada di belakang gedung.", "Petunjuk fasilitas."],
                ["雨の日は屋外での活動を中止します。", "あめの ひは おくがいでの かつどうを ちゅうしします。", "Pada hari hujan, kegiatan di luar ruangan dibatalkan.", "Pengumuman kegiatan."]
            ])
        ]),
        unit("w4d3-conf-04", "屋内", "di dalam ruangan; bagian dalam bangunan", "おくない", "bacaan kata majemuk on'yomi", "屋内 menunjuk ruang dalam bangunan, biasanya sebagai lawan 屋外.", "屋内 dan 屋外 memiliki pola bacaan paralel: おくない dan おくがい. Perbedaan satu karakter terakhir mengubah lokasi menjadi dalam atau luar.", [
            kosakata("屋内", "おくない", "di dalam ruangan; interior bangunan", "Dipakai dalam aturan fasilitas, olahraga, tempat parkir tertutup, dan kegiatan dalam gedung.", "Pasangan langsung 屋外; menekankan ruang tertutup/bagian dalam bangunan.", "屋 berarti bangunan dan 内 berarti bagian dalam.", [
                ["屋内では帽子を脱いでください。", "おくないでは ぼうしを ぬいでください。", "Harap lepaskan topi di dalam ruangan.", "Aturan fasilitas."],
                ["雨が強くなったので、屋内に移動した。", "あめが つよくなったので、おくないに いどうした。", "Karena hujan semakin deras, kami berpindah ke dalam ruangan.", "Perubahan lokasi kegiatan."]
            ])
        ]),
        unit("w4d3-conf-05", "野外", "area terbuka; luar ruangan/alam terbuka", "やがい", "bacaan kata majemuk", "野外 sering digunakan untuk kegiatan yang dilakukan di ruang terbuka, seperti konser atau perkemahan.", "Bedakan dengan 屋外: 野外 lebih memberi kesan lapangan/alam terbuka, sedangkan 屋外 merupakan posisi di luar bangunan.", [
            kosakata("野外", "やがい", "area terbuka; luar ruangan", "Umum pada 野外コンサート, 野外活動, dan acara luar ruang.", "Cenderung menonjolkan ruang lapang/alam terbuka dibandingkan sekadar sisi luar gedung.", "野 berarti lapangan/alam terbuka dan 外 berarti luar.", [
                ["夏には野外コンサートが開かれる。", "なつには やがいコンサートが ひらかれる。", "Pada musim panas, konser luar ruang diadakan.", "Acara musik."],
                ["子どもたちは野外で自然観察をした。", "こどもたちは やがいで しぜんかんさつを した。", "Anak-anak melakukan pengamatan alam di area terbuka.", "Kegiatan pendidikan luar ruang."]
            ])
        ]),
        unit("w4d3-conf-06", "大木", "pohon besar; pohon yang berukuran sangat besar", "たいぼく", "bacaan kata majemuk on'yomi", "大木 menekankan ukuran pohon yang besar, sering juga memberi kesan pohon tua atau mencolok.", "Bacaan たいぼく tidak sama dengan おおき (pembacaan yang mungkin dibayangkan dari tiap karakter); hafalkan sebagai kosakata.", [
            kosakata("大木", "たいぼく", "pohon besar", "Dipakai dalam deskripsi alam, taman, hutan, atau lanskap.", "Lebih formal/deskriptif daripada 大きな木.", "大 berarti besar dan 木 berarti pohon.", [
                ["樹齢百年の大木が神社の境内に立っている。", "じゅれい ひゃくねんの たいぼくが じんじゃの けいだいに たっている。", "Pohon besar berusia seratus tahun berdiri di area kuil.", "Deskripsi pohon tua."],
                ["台風で公園の大木が倒れた。", "たいふうで こうえんの たいぼくが たおれた。", "Pohon besar di taman tumbang akibat topan.", "Berita cuaca." ]
            ])
        ]),
        unit("w4d3-conf-07", "正午", "tengah hari; pukul dua belas siang", "しょうご", "bacaan kata majemuk on'yomi", "正午 merupakan titik waktu tepat di tengah hari.", "Bedakan 正午 dari 昼 (ひる), yang dapat merujuk periode siang lebih luas.", [
            kosakata("正午", "しょうご", "tengah hari; pukul 12.00", "Dipakai untuk waktu yang tepat, jadwal, pengumuman, dan berita cuaca.", "Lebih tepat/formal daripada 昼ごろ.", "正 berarti tepat dan 午 menunjuk tengah hari dalam sistem waktu tradisional.", [
                ["正午に時計台の時報が鳴る。", "しょうごに とけいだいの じほうが なる。", "Pada tengah hari, penanda waktu dari menara jam berbunyi.", "Penanda waktu."],
                ["会議は正午から始まります。", "かいぎは しょうごから はじまります。", "Rapat dimulai pukul dua belas siang.", "Jadwal rapat."]
            ])
        ]),
        unit("w4d3-conf-08", "生地", "kain atau bahan tekstil; juga adonan/bahan dasar sesuai konteks", "きじ", "bacaan khusus kosakata", "生地 pada konteks pakaian berarti bahan kain sebelum menjadi pakaian jadi.", "Bacaan きじ harus diingat sebagai kata. Maknanya ditentukan konteks: tekstil pada 着物や洋服の生地, tetapi dapat berarti adonan pada konteks makanan.", [
            kosakata("生地", "きじ", "kain/bahan pakaian; bahan dasar", "Dipakai pada konteks pakaian, tekstil, dan juga bahan/adonan makanan.", "Dalam sumber, konteksnya kain untuk kimono atau pakaian Barat. Tidak sama dengan 生 (なま) yang berarti mentah.", "生地 menunjuk bahan dasar yang belum menjadi produk akhir.", [
                ["着物や洋服の生地を店で選んだ。", "きものや ようふくの きじを みせで えらんだ。", "Saya memilih bahan kain untuk kimono dan pakaian Barat di toko.", "Belanja tekstil."],
                ["この生地は柔らかくて、肌触りがいい。", "この きじは やわらかくて、はだざわりが いい。", "Kain ini lembut dan terasa nyaman di kulit.", "Menilai bahan pakaian."]
            ])
        ]),
        unit("w4d3-conf-09", "湯気", "uap air panas; uap yang mengepul dari makanan atau cairan panas", "ゆげ", "kun'yomi khusus kosakata", "湯気 terlihat ketika air panas atau makanan panas mengeluarkan uap.", "Bacaan 湯気 adalah ゆげ. Jangan tertukar dengan 湯 (ゆ) saja, yang berarti air panas.", [
            kosakata("湯気", "ゆげ", "uap air panas", "Dipakai untuk menggambarkan uap yang muncul dari teh, sup, nasi, atau air panas.", "Menekankan uap yang tampak; berbeda dari 水蒸気 yang merupakan istilah ilmiah untuk uap air.", "湯 berarti air panas dan 気 berkaitan dengan udara/uap.", [
                ["湯気の立ったご飯を食べた。", "ゆげの たった ごはんを たべた。", "Saya makan nasi yang masih mengepulkan uap.", "Makan makanan baru matang."],
                ["鍋から白い湯気が上がっている。", "なべから しろい ゆげが あがっている。", "Uap putih mengepul dari panci.", "Deskripsi memasak."]
            ])
        ]),
        unit("w4d3-conf-10", "幾分", "agak; sedikit; sampai tingkat tertentu", "いくぶん", "bacaan khusus kosakata", "幾分 berfungsi sebagai adverbia yang melemahkan atau mengukur perubahan dalam kadar tertentu.", "Dipakai pada kalimat seperti 幾分寒さが和らいだ. Maknanya lebih dekat dengan 'agak/sedikit' daripada jumlah yang pasti.", [
            kosakata("幾分", "いくぶん", "agak; sedikit; sampai taraf tertentu", "Digunakan untuk menyatakan perubahan atau kualitas dalam kadar yang tidak besar.", "Sedikit lebih formal daripada ちょっと dalam tulisan; bukan ukuran numerik pasti.", "Kata ini berfungsi sebagai penanda kadar/derajat yang terbatas.", [
                ["今日は幾分寒さも和らいだ。", "きょうは いくぶん さむさも やわらいだ。", "Hari ini rasa dingin agak berkurang.", "Laporan cuaca."],
                ["休んだおかげで、体調は幾分よくなった。", "やすんだ おかげで、たいちょうは いくぶん よくなった。", "Berkat beristirahat, kondisi tubuh saya sedikit membaik.", "Kondisi kesehatan umum."]
            ])
        ]),
        unit("w4d3-conf-11", "絵画", "lukisan; karya seni berupa gambar/lukisan", "かいが", "bacaan kata majemuk on'yomi", "絵画 menunjuk karya seni lukis sebagai bidang atau objek pameran.", "Lebih formal daripada 絵 (え) yang berarti gambar/lukisan secara umum.", [
            kosakata("絵画", "かいが", "lukisan; seni lukis", "Dipakai dalam museum, galeri, kritik seni, dan pendidikan seni.", "Istilah seni yang lebih formal; dapat menunjuk bidang seni lukis secara umum.", "絵 berarti gambar dan 画 berarti lukisan/garis visual.", [
                ["美術館で絵画の展覧会を見た。", "びじゅつかんで かいがの てんらんかいを みた。", "Saya melihat pameran lukisan di museum seni.", "Kunjungan museum."],
                ["彼女は日本の近代絵画を研究している。", "かのじょは にほんの きんだいかいがを けんきゅうしている。", "Dia meneliti seni lukis modern Jepang.", "Konteks akademik." ]
            ])
        ]),
        unit("w4d3-conf-12", "喪中", "masa berkabung setelah kematian anggota keluarga/kerabat", "もちゅう", "bacaan kata majemuk on'yomi", "喪中 merujuk periode ketika seseorang/keluarga sedang berkabung.", "Sumber memberi contoh 喪服 (もふく, pakaian berkabung). Kata ini berkaitan dengan adat berkabung; praktiknya dapat berbeda menurut keluarga dan budaya.", [
            kosakata("喪中", "もちゅう", "masa berkabung", "Digunakan dalam pemberitahuan seperti 喪中はがき ketika keluarga tidak mengirim ucapan tahun baru karena sedang berkabung.", "Istilah budaya/sosial; tidak identik dengan masa berkabung resmi yang seragam untuk semua orang.", "喪 berarti berkabung dan 中 berarti sedang berada dalam periode tersebut.", [
                ["喪中なので、今年は年賀状を出さない。", "もちゅうなので、ことしは ねんがじょうを ださない。", "Karena sedang dalam masa berkabung, tahun ini saya tidak mengirim kartu ucapan tahun baru.", "Adat tahun baru."],
                ["喪中の知らせを受け取り、静かにお悔やみを伝えた。", "もちゅうの しらせを うけとり、しずかに おくやみを つたえた。", "Setelah menerima kabar bahwa keluarga itu sedang berkabung, saya menyampaikan belasungkawa dengan tenang.", "Etika sosial." ]
            ])
        ], [
            kosakata("喪服", "もふく", "pakaian berkabung", "Digunakan untuk pakaian yang dikenakan pada upacara/peristiwa berkabung.", "Istilah budaya; bentuk dan aturan pemakaiannya dapat berbeda menurut situasi dan kebiasaan keluarga.", "喪 berarti berkabung dan 服 berarti pakaian.", [
                ["葬儀には喪服を着て出席した。", "そうぎには もふくを きて しゅっせきした。", "Saya menghadiri upacara pemakaman dengan mengenakan pakaian berkabung.", "Etika berpakaian pada upacara."],
                ["喪中の案内には、喪服を着た写真を使わないこともある。", "もちゅうの あんないには、もふくを きた しゃしんを つかわないことも ある。", "Dalam pemberitahuan masa berkabung, terkadang tidak menggunakan foto yang menampilkan pakaian berkabung.", "Konteks pemberitahuan sosial."]
            ])
        ])
    ],
    exercises: [
        {
            id: "w4d3-r1-1", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "ベテランの店員は（a. 手際 b. 巧み）よく商品を包装した。",
            choices: [
                { label: "a", text: "手際（てぎわ）", meaning: "ketangkasan/cara kerja yang efisien", why: "手際よく adalah pola adverbial yang alami, berarti mengemas barang dengan cekatan." },
                { label: "b", text: "巧み（たくみ）", meaning: "terampil/mahir", whyNot: "巧み biasanya dipakai sebagai 巧みな + nomina atau 巧みに + verba. Bentuk 巧みよく tidak tepat secara tata bahasa." }
            ], answer: "a", answerWord: "手際", answerReading: "てぎわよく",
            translation: "Pegawai toko yang berpengalaman mengemas barang dengan cekatan.",
            explanation: "Ungkapan yang sesuai adalah 手際よく商品を包装する. 巧み juga dapat berarti terampil, tetapi bentuknya harus 巧みに包装した atau 巧みな手つき, bukan 巧みよく."
        },
        {
            id: "w4d3-r1-2", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "（a. 生地 b. 湯気）のたった、炊きたてのご飯。",
            choices: [
                { label: "a", text: "生地（きじ）", meaning: "kain/bahan tekstil; adonan/bahan dasar", whyNot: "生地 merujuk bahan, misalnya kain pakaian atau adonan. Tidak cocok untuk nasi yang baru matang dan mengepulkan uap." },
                { label: "b", text: "湯気（ゆげ）", meaning: "uap air panas", why: "湯気が立つ adalah kolokasi untuk uap yang mengepul; sangat alami untuk nasi yang baru matang." }
            ], answer: "b", answerWord: "湯気", answerReading: "ゆげ",
            translation: "Nasi yang baru matang dan masih mengepulkan uap.",
            explanation: "Pola 湯気が立つ berarti uap mengepul. 生地 berarti kain atau bahan dasar sehingga tidak cocok dengan nasi matang."
        },
        {
            id: "w4d3-r1-3", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "（a. 音色 b. 本音）と建前を使い分ける。",
            choices: [
                { label: "a", text: "音色（ねいろ／おんしょく）", meaning: "warna/karakter suara", whyNot: "音色 berkaitan dengan kualitas bunyi atau timbre, bukan sikap sosial yang dikontraskan dengan 建前." },
                { label: "b", text: "本音（ほんね）", meaning: "perasaan/pendapat sebenarnya", why: "本音と建前 adalah pasangan ungkapan tetap untuk perasaan sebenarnya dan sikap yang ditampilkan." }
            ], answer: "b", answerWord: "本音", answerReading: "ほんね",
            translation: "Membedakan penggunaan perasaan/pendapat sebenarnya dan sikap yang ditampilkan.",
            explanation: "Pasangan yang benar ialah 本音と建前. 音色 berarti karakter suara, sehingga tidak cocok secara makna."
        },
        {
            id: "w4d3-r1-4", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "（a. 正午 b. 夜明け）の時報とともに、休憩する。",
            choices: [
                { label: "a", text: "正午（しょうご）", meaning: "tengah hari/pukul 12.00", why: "正午の時報 adalah penanda waktu tengah hari; beristirahat ketika penanda itu berbunyi merupakan konteks yang alami." },
                { label: "b", text: "夜明け（よあけ）", meaning: "fajar", whyNot: "夜明け adalah waktu pagi sangat awal. Secara tata bahasa dapat membentuk 夜明けの時報, tetapi konteks umum istirahat bersama penanda waktu pada soal mengarah pada 正午." }
            ], answer: "a", answerWord: "正午", answerReading: "しょうご",
            translation: "Beristirahat bersamaan dengan bunyi penanda waktu tengah hari.",
            explanation: "正午 adalah pukul dua belas siang. Pilihan 夜明け berarti fajar; walau bukan gabungan yang mustahil dalam semua konteks, tidak sesuai dengan situasi rutinitas istirahat yang ditargetkan soal."
        },
        {
            id: "w4d3-r1-5", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "夫が見るテレビ番組は、（a. 自ら b. 専ら）ニュースです。",
            choices: [
                { label: "a", text: "自ら（みずから）", meaning: "diri sendiri; secara langsung", whyNot: "自ら menerangkan siapa yang melakukan tindakan secara langsung; tidak bermakna 'terutama' dalam komposisi ini." },
                { label: "b", text: "専ら（もっぱら）", meaning: "terutama; sebagian besar; hampir selalu", why: "専らニュースです berarti program yang ditonton suami sebagian besar/terutama adalah berita." }
            ], answer: "b", answerWord: "専ら", answerReading: "もっぱら",
            translation: "Program televisi yang ditonton suami terutama adalah berita.",
            explanation: "専ら berfungsi sebagai adverbia yang menyatakan fokus utama. 自ら berarti melakukan sendiri dan tidak cocok untuk menyatakan jenis program yang ditonton."
        },
        {
            id: "w4d3-r1-6", section: "練習Ⅰ", type: "multiple-choice",
            prompt: "景気は回復の（a. 炎 b. 兆し）を見せている。",
            choices: [
                { label: "a", text: "炎（ほのお）", meaning: "nyala api", whyNot: "炎 berarti api yang menyala, tidak cocok dengan ungkapan ekonomi 回復の～を見せる." },
                { label: "b", text: "兆し（きざし）", meaning: "tanda atau gejala awal", why: "回復の兆しを見せる adalah ungkapan alami: menunjukkan tanda-tanda pemulihan." }
            ], answer: "b", answerWord: "兆し", answerReading: "きざし",
            translation: "Perekonomian menunjukkan tanda-tanda pemulihan.",
            explanation: "兆し berarti pertanda awal, sehingga tepat untuk membicarakan pemulihan ekonomi. 炎 hanya berarti nyala api."
        },
        {
            id: "w4d3-r2-7", section: "練習Ⅱ", type: "same-kanji-fill", prompt: "Isi kedua bagian kosong dengan kanji yang sama, kemudian tuliskan bacaan kata utuhnya.",
            items: [
                { prompt: "（　）川の流れる", answer: "小", answerReading: "おがわ", answerWord: "小川", choice: "h", why: "小川 dibaca おがわ; 川 berubah bunyi dari かわ menjadi がわ." },
                { prompt: "（　）包が届く", answer: "小", answerReading: "こづつみ", answerWord: "小包", choice: "h", why: "小包 dibaca こづつみ; つつみ berubah bunyi menjadi づつみ." }
            ],
            choices: ["a. 雨", "b. 上", "c. 家", "d. 大", "e. 子", "f. 外", "g. 中", "h. 小"],
            translation: "Sungai kecil mengalir; sebuah paket tiba.",
            explanation: "Kedua kata diawali kanji 小, tetapi bacaannya berbeda: 小川 = おがわ dan 小包 = こづつみ. Soal menguji pengenalan bacaan kata utuh dan perubahan bunyi.",
            answer: "h", answerWord: "小", answerReading: "おがわ／こづつみ"
        },
        {
            id: "w4d3-r2-8", section: "練習Ⅱ", type: "same-kanji-fill", prompt: "Isi kedua bagian kosong dengan kanji yang sama, kemudian tuliskan bacaan kata utuhnya.",
            items: [
                { prompt: "（　）傘と日傘", answer: "雨", answerReading: "あまがさ", answerWord: "雨傘", choice: "a", why: "雨傘 dibaca あまがさ; 雨 dibaca あま dalam gabungan ini." },
                { prompt: "（　）具の準備をする", answer: "雨", answerReading: "あまぐ", answerWord: "雨具", choice: "a", why: "雨具 dibaca あまぐ; 雨 tetap dibaca あま dan 具 menjadi ぐ." }
            ],
            choices: ["a. 雨", "b. 上", "c. 家", "d. 大", "e. 子", "f. 外", "g. 中", "h. 小"],
            translation: "Payung hujan dan payung matahari; menyiapkan perlengkapan hujan.",
            explanation: "Kedua kata memakai kanji 雨. Bacaan kata utuhnya berbeda pada unsur kedua: 雨傘 = あまがさ dan 雨具 = あまぐ.",
            answer: "a", answerWord: "雨", answerReading: "あまがさ／あまぐ"
        },
        {
            id: "w4d3-r2-9", section: "練習Ⅱ", type: "same-kanji-fill", prompt: "Isi kedua bagian kosong dengan kanji yang sama, kemudian tuliskan bacaan kata utuhnya.",
            items: [
                { prompt: "双（　）の赤ちゃん", answer: "子", answerReading: "ふたご", answerWord: "双子", choice: "e", why: "双子 dibaca ふたご; kanji yang mengisi bagian akhir adalah 子." },
                { prompt: "扇（　）で扇ぐ", answer: "子", answerReading: "せんす", answerWord: "扇子", choice: "e", why: "扇子 dibaca せんす; 子 dibaca す dalam kata ini." }
            ],
            choices: ["a. 雨", "b. 上", "c. 家", "d. 大", "e. 子", "f. 外", "g. 中", "h. 小"],
            translation: "Bayi kembar; mengipasi diri dengan kipas lipat.",
            explanation: "Kedua kata berakhir dengan 子, tetapi bacaannya tidak sama: 双子 = ふたご dan 扇子 = せんす. Ini contoh bacaan kosakata yang tidak bisa ditebak secara mekanis.",
            answer: "e", answerWord: "子", answerReading: "ふたご／せんす"
        },
        {
            id: "w4d3-r2-10", section: "練習Ⅱ", type: "same-kanji-fill", prompt: "Isi kedua bagian kosong dengan kanji yang sama, kemudian tuliskan bacaan kata utuhnya.",
            items: [
                { prompt: "屋（　）駐車場", answer: "外", answerReading: "おくがい", answerWord: "屋外駐車場", choice: "f", why: "屋外 dibaca おくがい; kata utuh 屋外駐車場 berarti tempat parkir di luar ruangan." },
                { prompt: "野（　）コンサート", answer: "外", answerReading: "やがい", answerWord: "野外コンサート", choice: "f", why: "野外 dibaca やがい; kata utuhnya berarti konser di area terbuka." }
            ],
            choices: ["a. 雨", "b. 上", "c. 家", "d. 大", "e. 子", "f. 外", "g. 中", "h. 小"],
            translation: "Tempat parkir luar ruangan; konser di area terbuka.",
            explanation: "Kedua kata memakai 外, tetapi bacaannya mengikuti unsur pertama: 屋外 = おくがい dan 野外 = やがい. 屋外 menekankan posisi di luar bangunan, sedangkan 野外 menekankan area terbuka.",
            answer: "f", answerWord: "外", answerReading: "おくがい／やがい"
        }
    ],
    sourceNotes: [
        { id: "w4d3-note-1", topic: "Lingkup bacaan Day 3", source: "Sumber memberikan bacaan kata/ungkapan utuh, misalnya 頭文字（かしらもじ）, 浜辺（はまべ）, 雨具（あまぐ）, dan seterusnya.", note: "Tidak ada daftar lengkap onyomi dan kunyomi per karakter. Karena itu file menyimpan bacaan fokus pada sourceWordReading dan tidak mengarang inventaris bacaan lainnya." },
        { id: "w4d3-note-2", topic: "城跡", source: "城跡（しろあと／じょうせき）.", note: "Kedua bacaan dipertahankan sebagaimana sumber. Contoh 城跡公園 menggunakan しろあとこうえん." },
        { id: "w4d3-note-3", topic: "音色", source: "音色（ねいろ／おんしょく）.", note: "Kedua bacaan dan makna 'warna/karakter suara' dipertahankan. Nuansa penggunaan dijelaskan tanpa menetapkan bahwa salah satu bacaan selalu salah." },
        { id: "w4d3-note-4", topic: "屋外・野外", source: "Sumber membedakan 屋外（おくがい）dan 野外（やがい）.", note: "屋外 menyorot lokasi di luar gedung; 野外 lebih menonjolkan ruang terbuka/alam terbuka. Dalam sebagian konteks maknanya dapat bertumpang tindih, tetapi fokus nuansanya berbeda." }
    ]
};

export default minggu4Hari3;
