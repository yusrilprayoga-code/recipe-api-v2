const recipes = [
    {
        id: 1,
        name: 'Gudeg',
        region: 'Yogyakarta',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zqMOUBRm7hASm5_qikedo30eP3DprlvlOA&s',
        cookTime: '4 jam',
        difficulty: 'Sedang',
        ingredients: [
            '500 gram nangka muda, potong kecil',
            '400 ml santan',
            "100 gram gula merah, sisir",
            "2 lembar daun salam",
            "2 lembar daun jeruk",
            "2 batang serai, memarkan",
            "4 butir telur rebus"
        ],
        steps: [
            "1.	Rebus potongan nangka muda dengan santan, daun salam, daun jeruk, dan serai dalam panci besar dengan api kecil hingga nangka empuk dan santan mengental, sambil sesekali diaduk agar tidak gosong. Ini bisa memakan waktu sekitar 3 jam.",
            "2.	Setelah nangka empuk dan santan mengental, tambahkan gula merah, aduk rata, dan masak kembali hingga gula larut dan bumbu meresap ke dalam nangka. Biarkan selama sekitar 30 menit sambil sesekali diaduk.",
            "3.	Sajikan dengan telur rebus dan nasi hangat"
        ]
    },
    {
        id: 2,
        name: 'Rendang',
        region: 'Padang',
        portion: '6 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLH4zUny9vvB8bRQmPGd4TSoWefsZPH9cbkA&s',
        cookTime: '3 jam',
        difficulty: 'Tinggi',
        ingredients: [
            '1 kg daging sapi (pilih bagian yang berlemak untuk hasil lebih lezat), potong dadu',
            '500 ml santan kental',
            "3 lembar daun jeruk",
            "3 lembar daun salam",
            "2 batang serai, memarkan",
            "5 lembar daun kunyit, iris halus",
            "8 buah cabai merah besar, haluskan",
            "6 buah cabai merah keriting, haluskan",
            "2 ruas lengkuas, memarkan",
            "5 buah asam kandis",
            "2 sdm minyak goreng"
        ],
        steps: [
            "1.	Panaskan minyak dalam wajan, tumis bumbu halus, daun jeruk, daun salam, serai, dan daun kunyit hingga harum dan berubah warna.",
            "2.	Masukkan potongan daging sapi, aduk rata, dan tumis hingga daging berubah warna.",
            "3.	Tuangkan santan kental, aduk rata, dan masak dengan api kecil hingga santan mulai mengental dan berminyak. Ini bisa memakan waktu sekitar 2 jam.",
            "4.	Masukkan asam kandis, aduk rata, dan masak lagi hingga daging empuk dan bumbu meresap sempurna. Ini bisa memakan waktu sekitar 1 jam."
        ]
    },
    {
        id : 3,
        name: 'Pempek',
        region: 'Palembang',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgtGsbigLG52QJZVKIlekVrqe6YCX4x5USg&s',
        cookTime: '2 jam',
        difficulty: 'Sedang',
        ingredients: [
            '300 gram ikan tenggiri, giling halus',
            '200 gram tepung sagu',
            "2 butir telur",
            "500 ml air",
            "1 sdm garam",
            "1 sdm gula",
            "200 gram gula merah, sisir",
            "3 siung bawang putih, iris tipis",
            "5 buah cabai rawit, iris tipis",
            "1 lembar daun jeruk",
        ],
        steps: [
            "1.	Campur ikan tenggiri, tepung sagu, telur, garam, dan gula dalam wadah, aduk rata.",
            "2.	Tambahkan air sedikit demi sedikit sambil terus diaduk hingga adonan kalis.",
            "3.	Rebus semua bahan cuko hingga mendidih dan gula larut, lalu angkat, dan dinginkan.",
            "4.	Diamkan adonan selama 30 menit.",
            "5.	Bentuk adonan menjadi bulat pipih atau sesuai selera, lalu goreng dalam minyak panas hingga kecokelatan dan matang.",
            "6.	Sajikan pempek dengan cuko."
        ]
    },
    {
        id: 4,
        name: 'Sate Padang',
        region: 'Padang, Sumatera Barat',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2f60nti0GzNHWdevuIaOCrEjImDHBDTJuQ&s',
        cookTime: '2 jam',
        difficulty: 'Sedang',
        ingredients: [
            '500 gram daging sapi, potong dadu',
            '20 tusuk sate, rendam air',
            "500 ml kaldu sapi",
            "200 ml santan kental",
            "4 lembar daun jeruk",
            "2 batang serai, memarkan",
            "4 lembar daun salam",
            "2 sdm minyak goreng",
            "Bumbu sate Padang (bisa dibeli di toko bumbu khas Padang)",
            "Bumbu halus: 5 siung bawang merah, 3 siung bawang putih, 3 cm jahe, 2 cm kunyit",
            "Garam secukupnya"
        ],
        steps: [
            "1.	Tumis bumbu halus hingga harum, tambahkan bumbu sate Padang, daun jeruk, serai, dan daun salam.",
            "2.	Masukkan potongan daging sapi, aduk hingga daging berubah warna.",
            "3.	Tuangkan kaldu sapi dan santan, masak dengan api kecil hingga daging empuk dan bumbu meresap.",
            "4.	Tusukkan potongan daging pada tusuk sate, panggang hingga matang dan kecokelatan.",
            "5.	Sajikan sate Padang dengan bumbu kacang dan nasi putih."
        ]
    },
    {
        id: 5,
        name: 'Laksa Medan',
        region: 'Medan, Sumatera Utara',
        portion: '4 orang',
        image: 'https://lh4.googleusercontent.com/U--OYSbQmYLNbLL2EVSyvy42SuGe9xphXExsYfjxtyQRaGaLvhN6T0Dyk0hVC42XXoKnQuOKfYjIGJIjpmw0XpX8NSWurtCCDqgHuVXHOD4bEqVtH6ZL7_ks7pHQDEQYRG56cyj5Wa7lZm6b7MlpRBM',
        cookTime: '2 jam',
        difficulty: 'Sedang',
        ingredients: [
            "300 gram mie laksa",
            "300 gram daging ayam, rebus dan suwir-suwir",
            "200 gram udang, kupas kulit",
            "200 ml santan kental",
            "2 batang serai, memarkan",
            "4 lembar daun jeruk",
            "4 lembar daun salam",
            "3 cm lengkuas, memarkan",
            "5 buah cabai merah keriting, iris halus",
            "4 butir telur, rebus dan belah dua",
            "Bumbu halus: 6 siung bawang merah, 4 siung bawang putih, 2 cm kunyit, 2 cm jahe",
            "Garam dan gula secukupnya",
            "Minyak untuk menumis"
        ],
        steps: [
            "1.	Tumis bumbu halus hingga harum, tambahkan serai, lengkuas, daun jeruk, dan daun salam.",
            "2.	Masukkan daging ayam dan udang, aduk hingga berubah warna.",
            "3.	Tuangkan santan kental, aduk rata, dan masak hingga santan mendidih.",
            "4.	Rebus mie laksa hingga matang, tiriskan, dan sisihkan.",
            "5.	Sajikan mie laksa dengan kuah dan telur rebus."
        ]
    },
    {
        id: 6,
        name: 'Soto Banjar',
        region: 'Banjarmasin, Kalimantan Selatan',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlIDjSJiJruO-r8Y0CvjSB06xi00mHdlDpg&s',
        cookTime: '2 jam',
        difficulty: 'Sedang',
        ingredients: [
            "1 ekor ayam, potong menjadi 8 bagian",
            "200 gram tauge, seduh air panas",
            "200 gram mie soun, rendam air panas",
            "2 batang serai, memarkan",
            "3 lembar daun salam",
            "3 lembar daun jeruk",
            "3 cm lengkuas, memarkan",
            "3 cm jahe, memarkan",
            "4 butir telur, rebus dan belah dua",
            "Bumbu halus: 6 siung bawang merah, 4 siung bawang putih, 3 cm kunyit, 2 cm jahe",
            "Garam dan gula secukupnya",
            "Minyak untuk menumis"
        ],
        steps: [
            "1.	Tumis bumbu halus hingga harum, tambahkan serai, lengkuas, daun salam, dan daun jeruk.",
            "2.	Masukkan potongan ayam, aduk hingga berubah warna.",
            "3.	Tuangkan air secukupnya, masak hingga ayam empuk.",
            "4.	Rebus mie soun hingga matang, tiriskan, dan sisihkan.",
            "5.	Sajikan soto Banjar dengan tauge, soun, telur rebus, dan bawang goreng."
        ]
    },
    {
        id: 7,
        name: 'Lontong Balap',
        region: 'Surabaya, Jawa Timur',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVF01sUE0cz_x3NtjXQb9cbvXslE7V7cJWQ&s',
        cookTime: '1 jam',
        difficulty: 'Sedang',
        ingredients: [
            "2 buah tahu putih, potong dadu dan goreng",
            "200 gram tauge, seduh air panas",
            "200 gram lentho, goreng",
            "200 gram lontong, potong-potong",
            "Bawang goreng dan bawang merah goreng untuk taburan",
            "Air secukupnya",
            "Minyak untuk menumis",
            "Garam, gula, dan kaldu bubuk secukupnya",
            "150 gram kacang tanah, sangrai",
            "3 siung bawang putih, goreng",
            "5 cabai rawit",
            "2 sdm petis udang",
            "2 sdm kecap manis",
        ],
        steps: [
            "1.	Tumis bumbu kacang hingga harum, haluskan dengan blender dengan tambahan air secukupnya hingga halus.",
            "2.	Didihkan air dalam panci, masukkan tauge, rebus sebentar, angkat, dan tiriskan.",
            "3.	Siapkan mangkuk saji, letakkan lontong, tauge, lentho, dan tahu goreng di atasnya.",
            "4.	Siram dengan bumbu kacang, taburi bawang goreng dan bawang merah goreng.",
            "5.	Sajikan lontong balap selagi hangat."
        ]
    },
    {
        id: 8,
        name: 'Gulai Ikan Patin',
        region: 'Palembang, Sumatera Selatan',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMIbcq5tz2VCvb5OdUO7uR-G9KASrQC1MRg&s',
        cookTime: '1 jam',
        difficulty: 'Sedang',
        ingredients: [
            "500 gram ikan patin, bersihkan",
            "500 ml santan kental",
            "2 batang serai, memarkan",
            "3 lembar daun salam",
            "3 lembar daun jeruk",
            "3 cm lengkuas, memarkan",
            "3 cm jahe, memarkan",
            "5 buah cabai merah keriting, iris halus",
            "2 sdm minyak goreng",
            "Garam dan gula secukupnya"
        ],
        steps: [
            "1.	Panaskan minyak goreng, tumis cabai merah hingga harum.",
            "2.	Masukkan santan kental, daun salam, daun jeruk, serai, lengkuas, dan tomat. Aduk rata.",
            "3.	Masak dengan api sedang hingga santan mendidih.",
            "4.	Masukkan potongan ikan patin, garam, dan gula secukupnya. Aduk perlahan.",
            "5.	Masak hingga ikan matang dan kuah mengental.",
            "6.	Sajikan gulai ikan patin dengan nasi hangat."
        ]
    },
    {
        id: 9,
        name: 'Sate Ambal',
        region: 'Kebumen, Jawa Tengah',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SUntmyzWHAfMZltP9nOLQq9Ae5XwZQ8O9w&s',
        cookTime: '1 jam',
        difficulty: 'Sedang',
        ingredients: [
            "500 gram daging sapi, potong dadu",
            "20 tusuk sate, rendam air",
            "500 ml kaldu sapi",
            "200 ml santan kental",
            "4 lembar daun jeruk",
            "2 batang serai, memarkan",
            "4 lembar daun salam",
            "2 sdm minyak goreng",
            "Bumbu sate Padang (bisa dibeli di toko bumbu khas Padang)",
            "Bumbu halus: 5 siung bawang merah, 3 siung bawang putih, 3 cm jahe, 2 cm kunyit",
            "Garam secukupnya"
        ],
        steps: [
            "1.	Tumis bumbu halus hingga harum, tambahkan bumbu sate Padang, daun jeruk, serai, dan daun salam.",
            "2.	Masukkan potongan daging sapi, aduk hingga daging berubah warna.",
            "3.	Tuangkan kaldu sapi dan santan, masak dengan api kecil hingga daging empuk dan bumbu meresap.",
            "4.	Tusukkan potongan daging pada tusuk sate, panggang hingga matang dan kecokelatan.",
            "5.	Sajikan sate Ambal dengan bumbu kacang dan nasi putih."
        ]
    },
    {
        id : 10,
        name: 'Ikan Pepes',
        region: 'Bandung, Jawa Barat',
        portion: '4 orang',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8F1-eFFgSxkiE6NNVWuTvG31Ja7IcYPI7tQ&s',
        cookTime: '1 jam',
        difficulty: 'Sedang',
        ingredients: [
            "500 gram ikan bandeng, bersihkan",
            "5 lembar daun jeruk",
            "3 lembar daun salam",
            "3 cm lengkuas, memarkan",
            "3 cm jahe, memarkan",
            "5 buah cabai merah keriting, iris halus",
            "2 sdm minyak goreng",
            "Garam dan gula secukupnya"
        ],
        steps: [
            "1.	Campur ikan dengan bumbu halus, air jeruk nipis, dan garam. Diamkan selama 15-30 menit.",
            "2.	Ambil selembar daun pisang, letakkan beberapa potongan ikan, tambahkan potongan tomat, daun jeruk, serai, dan daun salam di atasnya.",
            "3.	Bungkus rapat daun pisang dan ikat menggunakan lidi atau tusuk gigi.",
            "4.	Panggang ikan pepes di atas bara api atau panggangan hingga matang, sekitar 30-40 menit.",
            "5.	Sajikan ikan pepes selagi hangat."
        ]
    }
]

module.exports = recipes;