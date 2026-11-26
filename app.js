require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    aplikasi: process.env.APP_NAME || 'Portal Katalog TI',
    status: 'Server Aktif',
    versi: '1.0.0'
  });
});

// === AREA PENDAFTARAN RUTE MODUL TIM ===
// (Rute modul buku dan anggota akan ditambahkan di bawah baris ini)

const anggotaRoutes = require('./routes/anggotaRoutes');
app.use('/api/anggota', anggotaRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
// Route Modul Buku
const bukuRoutes = require('./routes/bukuRoutes');
app.use('/api/buku', bukuRoutes);
