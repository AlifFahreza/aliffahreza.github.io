# Panduan Update GitHub Pages — Portfolio V2.2

Repository: https://github.com/AlifFahreza/aliffahreza.github.io

Website: https://aliffahreza.github.io/

## A. Langkah yang HARUS dilakukan agar versi lama terganti

1. **Backup**: pada repository GitHub klik **Code → Download ZIP** untuk menyimpan salinan saat ini.
2. Buka GitHub Desktop. Buka repository `AlifFahreza/aliffahreza.github.io`. Pilih **Fetch origin** dan **Pull origin** bila ada perubahan baru. Jika belum punya salinan lokal, pilih **File → Clone repository**.
3. Pilih **Repository → Show in Explorer/Finder** untuk membuka folder repository lokal.
4. Ekstrak `Alif_Fahreza_QA_Portfolio_V2_2_CLEAN.zip`, kemudian **salin SELURUH ISI ZIP** ke root folder repository lokal (bukan folder ZIP-nya). Pilih **Replace/Overwrite** untuk file yang sama. **Jangan hanya mengganti CSS atau satu file.**
5. Hapus artefak website lama yang tidak lagi dipakai, misalnya `contact.html`, `projects.html`, folder `css/`, folder `js/` lama, dan folder `assets/files/templates/` bila masih tersisa. **Jangan hapus `.git`!**
6. Pastikan root memiliki `index.html`, `data/site.js`, `data/projects.js`, `assets/js/app.js`, dan `assets/css/styles.css` dari versi terbaru.
7. Buka GitHub Desktop → **Changes**, pastikan ada file yang berubah dan dihapus → isi Summary `Deploy QA portfolio v2.2` → **Commit to main → Push origin**.
8. Buka halaman repository **Code** dan pastikan commit terbaru benar-benar telah masuk ke branch `main`.
9. Buka **Settings → Pages**. Jika menggunakan **Deploy from a branch**, pilih branch `main` dan folder `/(root)`. Jika Pages menggunakan GitHub Actions, periksa workflow publikasi yang berjalan dan sumber file yang di-deploy.
10. Buka tab **Actions** di repository dan lihat apakah deployment terakhir sukses.
11. Kunjungi website di browser Incognito/Private dan lakukan hard refresh (`Ctrl + Shift + R` Windows; `Cmd + Shift + R` Mac). Cek footer: **harus tampil `v2.2`**.

### B. Jika masih tampil konten website lama

- Di GitHub repository → `index.html` → cari `portfolio-version`. Harus terlihat `content="2.2.0"`.
- Buka `https://aliffahreza.github.io/` dalam tab Incognito dan cari `v2.2` pada footer.
- Jika source GitHub sudah V2.2 tetapi website belum, cek **Settings → Pages** apakah branch/folder yang diterbitkan sesuai. Jika menggunakan Actions, cek status workflow terbaru.
- Jika GitHub Pages memakai branch/folder berbeda (misalnya `gh-pages` atau `/docs`), file di `main` root saja tidak akan otomatis menjadi halaman yang diterbitkan. Sesuaikan publishing source dengan repository Anda atau deploy ke sumber Pages yang benar.
- Coba hard refresh/cache browser. CSS dan JavaScript pada `index.html` V2.2 sudah menggunakan query version `?v=2.2.0`.
- Jika situs masih tidak sesuai setelah verifikasi source dan deployment, ambil screenshot **Settings → Pages** dan tab **Actions**. Dari situ sumber masalah bisa diidentifikasi tanpa menebak.

## C. Update konten QA berikutnya

1. Simpan hasil testing aktual di `assets/files/projects/<slug>/`. Misalnya `test-scenarios.xlsx`, `test-cases.xlsx`, `issue-log.xlsx`, `test-report.pdf` dan folder `evidence/`.
2. Buka `data/projects.js`, cari contoh project yang masih `published: false` atau tambahkan entry baru.
3. Isi title, app yang diuji, scope, cara menguji, hasil yang terverifikasi, dan `artifacts` (tautan file yang benar-benar ada).
4. Ubah `published: true` hanya jika pengujian sudah selesai dan file siap publik.
5. Commit dan push. Kartu QA akan muncul di section **QA Projects & Testing Deliverables**.

Contoh bagian `artifacts`:

```js
artifacts: [
  { label: "Test Scenarios · XLSX", url: "assets/files/projects/demo-web-qa/test-scenarios.xlsx" },
  { label: "Test Cases · XLSX", url: "assets/files/projects/demo-web-qa/test-cases.xlsx" },
  { label: "Issue Log · XLSX", url: "assets/files/projects/demo-web-qa/issue-log.xlsx" },
  { label: "Test Report · PDF", url: "assets/files/projects/demo-web-qa/test-report.pdf" }
]
```

File internal/klien tidak boleh dimasukkan; gunakan project demo dan data sintetis. `published: false` hanya menyembunyikan kartu, **tidak menjadikan file GitHub privat**.
