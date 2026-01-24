# GlobalForecast

**GlobalForecast** adalah aplikasi web prakiraan cuaca sederhana yang menyajikan data cuaca real-time dari berbagai kota di dunia dan Indonesia. Proyek ini dikembangkan sebagai syarat penyelesaian mata kuliah **Proyek Open Source**.

## Fitur Utama

* **Kondisi Cuaca Global**: Menampilkan informasi cuaca terkini (suhu, angin, kelembapan) untuk kota-kota besar internasional seperti New York, London, Tokyo, dan Jakarta.
* **Eksplorasi Kota Indonesia**: Menampilkan data cuaca dari 16 kota di Indonesia secara acak, memberikan pandangan luas mengenai kondisi cuaca di berbagai wilayah tanah air.
* **Pencarian Berdasarkan Kota**: Memungkinkan pengguna untuk mencari informasi cuaca spesifik dengan memasukkan nama kota.
* **Geolokasi Real-time**: Fitur untuk mendapatkan prakiraan cuaca di lokasi pengguna saat ini secara otomatis menggunakan koordinat GPS.
* **Prakiraan 5 Hari**: Menyediakan rincian perkiraan cuaca untuk lima hari ke depan guna membantu perencanaan aktivitas pengguna.

## Teknologi yang Digunakan

* **Struktur**: HTML5.
* **Gaya & Desain**: CSS3 dengan Google Fonts ('Staatliches') dan desain responsif yang menggunakan latar belakang dinamis dari Unsplash.
* **Logika Aplikasi**: Vanilla JavaScript.
* **Sumber Data**: OpenWeather API untuk pengambilan data cuaca secara akurat.

## Cara Menjalankan Proyek

1. Unduh atau klon seluruh file proyek (HTML, CSS, dan JavaScript).
2. Buka file `index.html` menggunakan peramban (browser) pilihan Anda.
3. Pastikan Anda memiliki koneksi internet untuk memuat data cuaca dari API OpenWeather.

Tentu, berikut adalah tambahan bagian **Cara Berkontribusi** (*How to Contribute*) untuk file `README.md` proyek **GlobalForecast** Anda, disusun agar tetap konsisten dengan gaya bahasa sebelumnya:

## Cara Berkontribusi

Saya sangat terbuka bagi siapa saja yang ingin membantu mengembangkan proyek ini. Karena proyek ini merupakan bagian dari tugas mata kuliah **Proyek Open Source**, setiap kontribusi sangat berarti bagi perkembangan aplikasi ini ke depan. Berikut adalah langkah-langkah untuk berkontribusi:

1. **Fork Repositori**: Klik tombol *Fork* di bagian atas halaman repositori ini untuk membuat salinan proyek di akun GitHub Anda.
2. **Klon Repositori**: Unduh salinan proyek ke perangkat lokal Anda dengan perintah:
```bash
git clone https://github.com//IamDoctrin/simple-weather-app.git

```


3. **Buat Branch Baru**: Gunakan branch baru untuk setiap fitur atau perbaikan yang ingin Anda kerjakan:
```bash
git checkout -b fitur/nama-fitur-anda

```


4. **Lakukan Perubahan**: Anda bisa membantu mengoptimalkan gaya di `style.css`, memperbaiki logika di `script.js`, atau menyempurnakan struktur di `index.html`.
5. **Commit dan Push**: Simpan perubahan Anda dengan pesan commit yang jelas, lalu push ke GitHub:
```bash
git commit -m "Menambahkan fitur X"
git push origin fitur/nama-fitur-anda

```


6. **Buat Pull Request**: Kembali ke halaman repositori asli di GitHub dan buat *Pull Request* baru agar saya dapat meninjau kontribusi Anda.

### Ide Kontribusi yang Disarankan:

* **Penambahan Kota**: Memperluas daftar `indonesiaCities` di dalam file `script.js` agar mencakup lebih banyak wilayah.
* **Peningkatan UI/UX**: Memperbaiki desain responsif atau menambahkan animasi transisi pada `style.css` agar tampilan lebih modern.
* **Optimasi Kode**: Memperbaiki cara pengambilan data dari OpenWeather API agar lebih cepat dan efisien.
* **Pelaporan Bug**: Jika Anda menemukan kendala teknis, silakan buka *Issue* baru untuk melaporkannya.

## Hak Cipta dan Lisensi

Proyek ini dilisensikan di bawah **MIT License**.
