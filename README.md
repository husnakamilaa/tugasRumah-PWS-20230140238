# Tampilan Form

## Daftar Gambar
1. [Halaman Form Input](#halaman-form-input)
2. [Halaman Daftar](#halaman-daftar)
3. [Get /api/records](#get-apirecords)

---

## Halaman Form Input
<p align="center">
  <img width="1920" height="1080" alt="Screenshot (1687)" src="https://github.com/user-attachments/assets/3a958784-f5dd-4f37-b6b4-5bc5ef9fcd5a" width="600" />
</p>

## Halaman Daftar
<p align="center">
  <img width="1920" height="1080" alt="Screenshot (1688)" src="https://github.com/user-attachments/assets/e1876c6a-fe17-4a8e-9e66-1953efe0bb71" width="600" />
</p>

## GET /api/records
<p align="center">
  <img width="1920" height="1080" alt="Screenshot (1689)" src="https://github.com/user-attachments/assets/b7689c52-3eae-4380-9050-3848a6b930d5" width="600" />
</p>

## Struktur Folder

FORMWEB/
├── database/ # Pengaturan database
│ └── db.js # Koneksi database
├── node_modules/ # Folder otomatis berisi library dari npm
├── public/ # File statis (HTML, gambar, dll)
│ ├── uploads/ # Tempat file yang di-upload
│ ├── daftarPage.html # Halaman daftar data
│ └── form.html # Halaman form input data
├── sql/ # Script SQL
│ └── formdiri_users.sql # Struktur tabel database
├── package-lock.json # File pengunci versi library
├── package.json # Konfigurasi project + daftar library
├── README.md # Dokumentasi project
└── server.js # Server utama (Node.js)

## Cara Menjalankan

1. Install library yang dibutuhkan
   npm install
2. jalankan server
   node server.js
3. Buka browser lalu akses
   http://localhost:3380/api/records : untuk akses get
   http://localhost:3380/form.html : akses halaman form input
   http://localhost:3380/daftarPage.html : akses halaman daftar

<img width="731" height="112" alt="image" src="https://github.com/user-attachments/assets/aa42f314-67c7-47aa-a6ae-93aa222cfd7a" width="400" />

   
