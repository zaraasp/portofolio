# Portofolio — Zahara Shabilla Putri

Website portofolio satu halaman (single-page), dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework. Tema visual: "berkas dokumen" (dossier/case file), menggabungkan sisi web developer dan sisi administrasi dokumentasi Zahara.

## Struktur file

```
portfolio/
├── index.html      # Seluruh konten & struktur halaman
├── style.css        # Desain visual (token warna, tipografi, layout, responsif)
├── script.js         # Menu mobile, highlight tab aktif, filter pengalaman
└── assets/
    └── foto_zahara.jpg   # Foto profil yang tampil di kartu ID pada hero section
```

## Yang perlu diganti sebelum publish

- **Live demo project** (opsional): jika proyek Pocket Map / Barrkery / EventsLog sudah di-deploy, tambahkan tautan live demo di masing-masing `.project-card` pada `index.html`.
- **Catatan/Blog**: bagian "Catatan" masih berisi placeholder "Segera hadir" — isi dengan tulisan asli saat sudah siap.

## Cara deploy (gratis, tanpa perlu backend)

### Opsi 1 — GitHub Pages (disarankan)
1. Buat repository baru di GitHub, misal `portfolio-zahara`.
2. Upload ketiga file (`index.html`, `style.css`, `script.js`) beserta folder `assets/` ke repository tersebut (lewat web GitHub atau `git push`).
3. Buka **Settings → Pages** di repository, pilih branch `main` dan folder `/root`, lalu simpan.
4. Setelah beberapa menit, situs akan aktif di `https://<username-github>.github.io/portfolio-zahara/`.

### Opsi 2 — Netlify / Vercel (drag and drop)
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop) (atau [vercel.com](https://vercel.com), New Project → Import).
2. Seret folder `portfolio` (berisi `index.html`, `style.css`, `script.js`, `assets/`) ke halaman tersebut.
3. Situs langsung online dengan URL otomatis (bisa diganti nama di pengaturan project).

## Menjalankan secara lokal

Cukup buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
cd portfolio
python3 -m http.server 8080
# buka http://localhost:8080
```
