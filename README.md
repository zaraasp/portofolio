# Portofolio — Zahara Shabilla Putri

Website portofolio satu halaman (single-page), dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework. Tema visual: "berkas dokumen" (dossier/case file), menggabungkan sisi web developer dan sisi administrasi dokumentasi Zahara.

🌐 **Live**: https://portfolio-zahara.vercel.app
📂 **Repository**: (tautan repo GitHub kamu di sini)

## Isi portofolio

- Profil & foto
- Keahlian (Frontend, Jaringan & Keamanan, Dokumentasi, Kepemimpinan, Bahasa)
- Pengalaman (dengan filter: Teknologi / Kepemimpinan & Organisasi / Komunitas & Publik)
- Karya (4 project dengan tautan repository)
- Sertifikat & pelatihan
- Pencapaian
- Catatan (blog — masih "segera hadir")
- Kontak (Email, LinkedIn, GitHub)

## Struktur file

```
portfolio/
├── index.html          # Seluruh konten & struktur halaman
├── style.css            # Desain visual (token warna, tipografi, layout, responsif)
├── script.js             # Menu mobile, highlight tab aktif, filter pengalaman
└── assets/
    └── foto_zahara.jpg   # Foto profil yang tampil di kartu ID pada hero section
```

## Teknologi

HTML5, CSS3 (custom properties, grid, flexbox), dan JavaScript vanilla (tanpa library atau framework). Font dari Google Fonts: Fraunces, IBM Plex Sans, IBM Plex Mono.

## Menjalankan secara lokal

Cukup buka `index.html` langsung di browser, atau jalankan server statis sederhana:

```bash
cd portfolio
python3 -m http.server 8080
# buka http://localhost:8080
```

Di VS Code, cara paling praktis: klik kanan `index.html` → **Open with Live Server** (kalau extension-nya terpasang). Hindari menekan tombol Run/F5, karena itu untuk debugging JS, bukan untuk sekadar melihat halaman.

## Deploy ulang setelah ada perubahan

Project ini terhubung ke Vercel lewat GitHub. Setiap kali ada commit baru yang di-push ke branch utama, Vercel otomatis membangun ulang dan memperbarui situs live dalam waktu kurang dari satu menit — tidak perlu upload manual.

## Yang masih bisa dikembangkan

- **Live demo project**: kalau Pocket Map, Barrkery Website, EventsLog, atau ProjectWDA sudah punya versi live, tambahkan tautannya di masing-masing kartu project pada `index.html`.
- **Catatan/Blog**: bagian "Catatan" masih berisi tiga placeholder "Segera hadir" — isi dengan tulisan asli begitu siap.
