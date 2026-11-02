# Alif Fahreza — QA Engineer Portfolio V2.2

Website statis HTML/CSS/JavaScript siap pakai untuk GitHub Pages. V2.2 menampilkan kompetensi QA umum, pengalaman payment testing dan software development, serta area khusus untuk **hasil pengujian independen yang benar-benar sudah dikerjakan**.

## Yang tampil di website

- About, Technical Skills, Experience, Education, Contact
- QA Projects & Testing Deliverables: hanya case study yang ditandai `published: true` dalam `data/projects.js`
- Selected Development Work: repository pengembangan aplikasi yang dipisah dari QA testing

Belum ada case study QA yang dipublikasikan karena belum ada hasil pengujian independen yang diberikan. Draft Web, Android dan API disimpan di `data/projects.js` dengan `published: false`. Tidak ada kartu template kosong atau unduhan workbook di website publik maupun dalam paket deployment ini.

## Struktur utama

```
index.html                  # Halaman utama (menampilkan versi v2.2 di footer)
.nojekyll
assets/css/styles.css      # Styling
assets/js/app.js           # Rendering dan navigasi
assets/files/resume/       # CV versi publik
assets/files/projects/     # Upload dokumen QA buatan sendiri
assets/favicon.svg
data/site.js               # Profil, skills, experience, kontak
data/projects.js           # Data case study QA dan development work
PANDUAN_UPDATE_GITHUB.md   # Langkah pemasangan serta cek deployment
```

## Cara mengisi case study QA

1. Lakukan pengujian sendiri pada aplikasi demo publik atau aplikasi milik sendiri.
2. Simpan dokumen aktual (test scenarios, test cases, issue log, evidence, test report) ke `assets/files/projects/<nama-project>/`.
3. Isi data project dan link file pada `data/projects.js`.
4. Ubah `published: false` ke `published: true` setelah seluruh informasi dan link valid.
5. Commit dan push ke GitHub.

Selalu gunakan data dummy/sintetis. Jangan mengunggah dokumen, log, screenshot, credentials, atau informasi rahasia perusahaan/klien.

## Perubahan profil

- `data/site.js`: lokasi, bio, skill, pengalaman, sosial media dan tautan CV.
- `data/projects.js`: data project dan tautan file.
- `assets/css/styles.css`: warna dan tipografi.

CV PDF di folder `assets/files/resume` berisi nomor telepon dari CV yang diberikan. Ganti dengan CV versi publik jika diperlukan.

Untuk **menghapus konten lama yang masih muncul di situs**, ikuti panduan deployment dan troubleshooting di `PANDUAN_UPDATE_GITHUB.md`. Pastikan halaman hasil deployment menampilkan teks `v2.2` di footer.
