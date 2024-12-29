# Dokumentasi Website Seblak Prasmanan Lubis

## Deskripsi Proyek
Website Seblak Prasmanan Lubis adalah landing page yang dirancang untuk memperkenalkan dan mempromosikan Seblak Prasmanan Lubis kepada pengunjung. Website ini menampilkan menu seblak, informasi lokasi, dan memungkinkan pelanggan untuk melakukan pemesanan secara online. Dibangun dengan teknologi modern untuk memberikan pengalaman pengguna yang optimal.

## Teknologi yang Digunakan
- **Next.js 13** - Framework React dengan fitur App Router
- **React** - Library JavaScript untuk membangun antarmuka pengguna
- **Tailwind CSS** - Framework CSS untuk styling
- **AOS** - Library untuk animasi scroll
- **TypeScript** - Bahasa pemrograman yang memberikan fitur static typing pada JavaScript

## Struktur Komponen

### 1. Navbar (`components/navbar`)
- Komponen navigasi utama website
- Menampilkan menu dan logo Seblak Prasmanan Lubis
- Responsif untuk berbagai ukuran layar

### 2. Hero (`components/hero`)
- Bagian banner utama website
- Menampilkan gambar seblak yang menggugah selera
- Dilengkapi dengan animasi AOS

### 3. Menus (`components/menus`)
- Menampilkan daftar varian seblak
- Terorganisir berdasarkan level kepedasan
- Dilengkapi dengan gambar dan harga

### 4. Promo (`components/promo`)
- Menampilkan informasi promosi terkini
- Desain yang menarik untuk menarik perhatian pengunjung

### 5. OrderForm (`components/order-form`)
- Form pemesanan online
- Validasi input untuk memastikan data yang dimasukkan benar
- Integrasi dengan sistem pemesanan

### 6. Address (`components/address`)
- Menampilkan lokasi dan informasi kontak
- Integrasi dengan peta digital
- Informasi jam operasional

### 7. Blog (`components/blog`)
- Menampilkan artikel dan berita terkait seblak
- Konten informatif untuk pengunjung

### 8. Footer (`components/footer`)
- Bagian bawah website
- Berisi informasi tambahan dan link penting

### 9. CallToAction (`components/call-to-action`)
- Komponen untuk mendorong pengunjung melakukan pemesanan
- Desain yang menonjol dan menarik

## Fitur Utama
1. **Responsive Design**
   - Website dapat diakses dari berbagai perangkat
   - Layout yang adaptif

2. **Animasi**
   - Menggunakan AOS (Animate On Scroll)
   - Delay: 100ms
   - Durasi: 1200ms

3. **Navigasi**
   - Menu yang mudah diakses
   - Struktur yang intuitif

4. **Pemesanan Online**
   - Form pemesanan yang user-friendly
   - Proses pemesanan yang efisien

## Panduan Pengembangan
1. **Instalasi**
   ```bash
   npm install
   # atau
   yarn install
   ```

2. **Menjalankan Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

3. **Build untuk Production**
   ```bash
   npm run build
   # atau
   yarn build
   ```

## Pemeliharaan
- Lakukan update berkala untuk dependencies
- Periksa performa website secara rutin
- Backup data secara teratur
- Monitor error dan bug

## Kontribusi
1. Fork repository
2. Buat branch baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

