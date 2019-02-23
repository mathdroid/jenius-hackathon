export default {
  question: {
    Q:
      'Budi usia 25, bekerja sebagai karyawan di suatu perusahaan swasta. Gaji bulanan Budi 8 juta rupiah. Budi masih tinggal bersama orang tua, dan sedang mencicil uang kredit motor dengan total kurang lebih 12 juta rupiah.Budi baru saja menerima gaji, dan ia sudah harus membayar cicilan motor sejumlah 1 juta rupiah.Dalam kondisi keuangan normal, sebaiknya Budi: ',
    A: [
      {
        label: 'Mengajukan pinjaman untuk membayar cicilan.',
        score: 0.2,
        nextQ: {
          Q:
            'Karena Budi mengajukan pinjaman sejumlah 1.2 juta(termasuk bunga) untuk membayar cicilan motor, di tengah bulan jumlah uang di rekening Budi masih cenderung aman. Budi pun berpikir untuk berakhir pekan di Bandung untuk refreshing karena pekerjaan di kantor sungguh membuat penat kepala Budi. Budi sebaiknya:',
          A: [
            {
              label: 'Pergi ke Bandung akhir pekan ini, karena kondisi keuangan masih aman.',
              score: 0.4,
              nextQ: {
                Q:
                  'Budi melakukan kunjungan kerja ke luar negeri. Namun, ditengah kunjungan, ia jatuh sakit, dan BPJS tidak dapat menanggung pengeluaran kesehatan Budi di luar negeri. Karena Budi baru saja berakhir pekan di Bandung, saldo Budi sudah lumayan menipis. Biaya berobat Budi apabila dirupiahkan bernilai sejumlah 1,5 juta rupiah. Budi sebaiknya:',
                A: [
                  {
                    label:
                      'Menggunakan pinjaman instan seperti FlexiCash untuk membayar biaya berobat',
                    score: 0.4,
                  },
                  {},
                ],
              },
            },
            {
              label:
                'Pergi ke Bandung setelah membayar cicilan pinjaman dan cicilan motor bulan depan.',
              score: 0.6,
            },
          ],
        },
      },
      {
        label: 'Membayar tunai dengan uang gaji Budi.',
        score: 0.8,
        nextQ: {
          Q:
            'Setiap hari, Budi makan siang di food court gedung kantor. Ia dan teman-temannya terbiasa makan siang bersama disana untuk merawat silaturahmi. Rata-rata uang yang terpakai untuk makan siang tiap harinya 60 ribu rupiah. Sekarang sudah tengah bulan, dan gaji Budi setelah berbagai pengeluaran tinggal 3 juta rupiah. Sebaiknya Budi:',
          A: [
            {
              label: 'Mulai membawa bekal tiap dua hari.',
              score: 0.6,
              nextQ: {
                Q:
                  'Budi melakukan kunjungan kerja ke luar negeri bersama rekan-rekannya. Pacar Budi, Rani bekerja sebagai karyawan di perusahaan lain. Rani minta dititipkan gadget terbaru dari luar-negeri. Budi sudah menjalin hubungan dengan Rani selama satu setengah tahun, dan Rani berjanji akan mengganti uangnya bulan depan setelah ia menerima gaji. Budi sebaiknya:',
                A: [
                  {
                    label: 'Menggunakan tabungan untuk menalangi pembelian oleh-oleh.',
                    score: 0.5,
                  },
                  {
                    label:
                      'Mengajukan pinjaman FlexiCash jangka pendek untuk menalangi pembelian oleh-oleh.',
                    score: 0.5,
                  },
                ],
              },
            },
            {
              label: 'Terus makan di foodcourt seperti biasa.',
              score: 0.4,
              nextQ: {
                Q:
                  'Budi melakukan kunjungan kerja ke luar negeri. Namun, ditengah kunjungan, ia jatuh sakit, dan BPJS tidak dapat menanggung pengeluaran kesehatan Budi di luar negeri. Budi terpaksa menggelontorkan uang untuk konsultasi dokter dan membeli obat, yang apabila dirupiahkan bernilai sejumlah 1,5 juta rupiah. Budi sebaiknya:',
                A: [
                  {
                    label:
                      'Menggunakan pinjaman instan seperti FlexiCash untuk membayar biaya berobat.',
                    score: 0.6,
                  },
                  {
                    label: 'Menggunakan uang saku kunjungan kerja yang diberi oleh kantor.',
                    score: 0.4,
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
