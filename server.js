// Import library yang dibutuhkan
const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors'); 
const db = require('./database/db'); 

const app = express();
const PORT = 3380;

// Middleware
app.use(cors()); // mengaktifkan CORS
app.use(express.json()); //  buat baca body request dalam format JSON
app.use(express.urlencoded({ extended: true })); // buat baca form data

// Middleware untuk menyajikan file statis (HTML, CSS, dan gambar yang diupload)
app.use(express.static(path.join(__dirname, 'public')));

// konfigurasi Multer buat penyimpanan file
const storage = multer.diskStorage({
    // nentuin folder tujuan untuk menyimpan file
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    // nentuin nama file yang unik agar tidak terjadi konflik
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// ROUTES API 

// 'upload.single('gambar')' adalah middleware dari multer untuk menangani satu file upload
// dari input form dengan name="gambar"
app.post('/api/records', upload.single('gambar'), (req, res) => {
    const { nama, tinggiBadan, tanggal } = req.body;
    
    if (!req.file) {
        return res.status(400).send('Gambar wajib diupload.');
    }

    // akan menyimpan path yang bisa diakses web, bukan path sistem file
    const gambarPath = '/uploads/' + req.file.filename;

    const sql = 'INSERT INTO users (nama, tinggiBadan, tanggal, gambar) VALUES (?, ?, ?, ?)';
    const values = [nama, tinggiBadan, tanggal, gambarPath];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('❌ Gagal menyimpan data:', err);
            return res.status(500).json({ message: 'Gagal menyimpan data ke database', error: err });
        }
        console.log('✅ Data berhasil disimpan!');
        res.status(201).json({ message: 'Data berhasil disimpan!' });
    });
});

app.get('/api/records', (req, res) => {
    // ngurutin berdasarkan id terbaru (DESC)
    const sql = 'SELECT * FROM users ORDER BY id DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('❌ Gagal mengambil data:', err);
            return res.status(500).json({ message: 'Gagal mengambil data dari database', error: err });
        }
        // kirim semua data sebagai response JSON
        res.json(results);
    });
});


app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`➡️  Form input tersedia di http://localhost:${PORT}/form.html`);
    console.log(`➡️  Daftar data tersedia di http://localhost:${PORT}/daftarPage.html`);
});
