// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Hsnkmlsyhd1405',
    database: 'formDiri',
    port: 3306

});

db.connect((err) => {
    if (err) {
        console.error('❌ Koneksi Gagal:', err.message);
    } else {
        console.log('✅ Koneksi ke MySQL Berhasil!');
    }
});

module.exports = db;