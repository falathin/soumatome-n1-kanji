
const bonusWeek1 = {
    week: 1,
    type: "bonus",

    title: {
        id: "BONUS Minggu 1",
        en: "WEEK 1 BONUS"
    },

    subtitle: {
        id: "Kanji in Daily Life",
        en: "Spot the kanji around you"
    },

    description: {
        id: "Temukan kanji dari dunia sehari-hari.",
        en: "Find kanji in everyday life."
    },

    sections: [

        // ========================================================
        // SECTION 1 — JAPANESE SIGNS
        // ========================================================

        {
            id: "sign1",
            type: "vocabulary",

            title: {
                id: "サイン① — Tanda/Rambu 1",
                en: "サイン① — Signs 1"
            },

            description: {
                id: "Pelajari tulisan Jepang yang sering ditemukan pada tanda dan fasilitas umum.",
                en: "Learn Japanese expressions commonly found on signs and public facilities."
            },

            items: [
                {
                    word: "休憩コーナー",
                    reading: "きゅうけいコーナー",
                    meaning: {
                        id: "Area istirahat",
                        en: "Rest area"
                    }
                },
                {
                    word: "化粧室",
                    reading: "けしょうしつ",
                    meaning: {
                        id: "Toilet / ruang rias",
                        en: "Restroom / powder room"
                    }
                },
                {
                    word: "清潔に",
                    reading: "せいけつに",
                    meaning: {
                        id: "Jaga kebersihan",
                        en: "Keep clean"
                    }
                },
                {
                    word: "ゴミ入れ",
                    reading: "ゴミいれ",
                    meaning: {
                        id: "Tempat sampah",
                        en: "Trash bin"
                    }
                },
                {
                    word: "空き缶",
                    reading: "あきかん",
                    meaning: {
                        id: "Kaleng kosong",
                        en: "Empty can"
                    }
                },
                {
                    word: "空き瓶",
                    reading: "あきびん",
                    meaning: {
                        id: "Botol kosong",
                        en: "Empty bottle"
                    }
                },
                {
                    word: "自動扉",
                    reading: "じどうとびら",
                    meaning: {
                        id: "Pintu otomatis",
                        en: "Automatic door"
                    }
                },
                {
                    word: "洗浄中",
                    reading: "せんじょうちゅう",
                    meaning: {
                        id: "Sedang dibersihkan / dicuci",
                        en: "Being cleaned / washed"
                    }
                },
                {
                    word: "砂糖",
                    reading: "さとう",
                    meaning: {
                        id: "Gula",
                        en: "Sugar"
                    }
                }
            ]
        },

        // ========================================================
        // SECTION 2 — KANJI
        // ========================================================

        {
            id: "kanji-憩",
            type: "kanji",

            title: {
                id: "憩 — Istirahat",
                en: "憩 — Rest"
            },

            character: "憩",

            reading: "音読み：ケイ\n訓読み：いこ.い",

            meaning: {
                id: "Istirahat, relaksasi",
                en: "Rest, relaxation"
            }
        },

        {
            id: "kanji-粧",
            type: "kanji",

            title: {
                id: "粧 — Riasan",
                en: "粧 — Makeup"
            },

            character: "粧",

            reading: "音読み：ショウ",

            meaning: {
                id: "Riasan; kosmetik",
                en: "Makeup; cosmetics"
            }
        },

        {
            id: "kanji-潔",
            type: "kanji",

            title: {
                id: "潔 — Bersih",
                en: "潔 — Clean"
            },

            character: "潔",

            reading: "音読み：ケツ",

            meaning: {
                id: "Bersih; murni",
                en: "Clean; pure"
            }
        },

        {
            id: "kanji-缶",
            type: "kanji",

            title: {
                id: "缶 — Kaleng",
                en: "缶 — Can"
            },

            character: "缶",

            reading: "音読み：カン",

            meaning: {
                id: "Kaleng",
                en: "Can"
            }
        },

        {
            id: "kanji-瓶",
            type: "kanji",

            title: {
                id: "瓶 — Botol",
                en: "瓶 — Bottle"
            },

            character: "瓶",

            reading: "音読み：ビン",

            meaning: {
                id: "Botol",
                en: "Bottle"
            }
        },

        {
            id: "kanji-糖",
            type: "kanji",

            title: {
                id: "糖 — Gula",
                en: "糖 — Sugar"
            },

            character: "糖",

            reading: "音読み：トウ",

            meaning: {
                id: "Gula",
                en: "Sugar"
            }
        },

        {
            id: "kanji-扉",
            type: "kanji",

            title: {
                id: "扉 — Pintu",
                en: "扉 — Door"
            },

            character: "扉",

            reading: "訓読み：とびら",

            meaning: {
                id: "Pintu",
                en: "Door"
            }
        },

        {
            id: "kanji-浄",
            type: "kanji",

            title: {
                id: "浄 — Memurnikan",
                en: "浄 — Purify"
            },

            character: "浄",

            reading: "音読み：ジョウ",

            meaning: {
                id: "Bersih; murni; memurnikan",
                en: "Clean; pure; purify"
            }
        },

        // ========================================================
        // SECTION 3 — VOCABULARY
        // ========================================================

        {
            id: "vocabulary-sign1",
            type: "vocabulary",

            title: {
                id: "関連語彙 — Kosakata Tambahan",
                en: "関連語彙 — Related Vocabulary"
            },

            description: {
                id: "Pelajari kosakata yang menggunakan kanji dari tanda di atas.",
                en: "Learn vocabulary using the kanji introduced above."
            },

            items: [

                // 憩

                {
                    word: "休憩",
                    reading: "きゅうけい",
                    meaning: {
                        id: "Istirahat",
                        en: "A break"
                    }
                },
                {
                    word: "憩い",
                    reading: "いこい",
                    meaning: {
                        id: "Relaksasi",
                        en: "Relaxation"
                    }
                },

                // 粧

                {
                    word: "化粧品",
                    reading: "けしょうひん",
                    meaning: {
                        id: "Kosmetik",
                        en: "Cosmetics"
                    }
                },
                {
                    word: "化粧室",
                    reading: "けしょうしつ",
                    meaning: {
                        id: "Toilet / ruang rias",
                        en: "Restroom / powder room"
                    }
                },

                // 潔

                {
                    word: "清潔な",
                    reading: "せいけつな",
                    meaning: {
                        id: "Bersih",
                        en: "Clean"
                    }
                },
                {
                    word: "不潔な",
                    reading: "ふけつな",
                    meaning: {
                        id: "Tidak bersih; kotor",
                        en: "Unclean"
                    }
                },
                {
                    word: "簡潔な",
                    reading: "かんけつな",
                    meaning: {
                        id: "Ringkas; padat",
                        en: "Concise"
                    }
                },

                // 缶

                {
                    word: "空き缶",
                    reading: "あきかん",
                    meaning: {
                        id: "Kaleng kosong",
                        en: "Empty can"
                    }
                },
                {
                    word: "缶詰",
                    reading: "かんづめ",
                    meaning: {
                        id: "Makanan kaleng",
                        en: "Canned food"
                    }
                },

                // 瓶

                {
                    word: "瓶",
                    reading: "びん",
                    meaning: {
                        id: "Botol",
                        en: "A bottle"
                    }
                },
                {
                    word: "花瓶",
                    reading: "かびん",
                    meaning: {
                        id: "Vas bunga",
                        en: "Flower vase"
                    }
                },
                {
                    word: "瓶詰",
                    reading: "びんづめ",
                    meaning: {
                        id: "Barang dalam botol; dibotolkan",
                        en: "Bottled"
                    }
                },
                {
                    word: "空き瓶",
                    reading: "あきびん",
                    meaning: {
                        id: "Botol kosong",
                        en: "Empty bottle"
                    }
                },

                // 糖

                {
                    word: "砂糖",
                    reading: "さとう",
                    meaning: {
                        id: "Gula",
                        en: "Sugar"
                    }
                },
                {
                    word: "糖分",
                    reading: "とうぶん",
                    meaning: {
                        id: "Kandungan gula",
                        en: "Sugar content"
                    }
                },
                {
                    word: "糖尿病",
                    reading: "とうにょうびょう",
                    meaning: {
                        id: "Penyakit diabetes",
                        en: "Diabetes"
                    }
                },

                // 扉

                {
                    word: "扉",
                    reading: "とびら",
                    meaning: {
                        id: "Pintu",
                        en: "A door"
                    }
                },
                {
                    word: "自動扉",
                    reading: "じどうとびら",
                    meaning: {
                        id: "Pintu otomatis",
                        en: "Automatic door"
                    }
                },

                // 浄

                {
                    word: "洗浄剤",
                    reading: "せんじょうざい",
                    meaning: {
                        id: "Deterjen; bahan pembersih",
                        en: "Detergent; cleaning agent"
                    }
                },
                {
                    word: "浄化する",
                    reading: "じょうかする",
                    meaning: {
                        id: "Memurnikan; menjernihkan",
                        en: "To purify"
                    }
                }
            ]
        }
    ]
};

export default bonusWeek1;
