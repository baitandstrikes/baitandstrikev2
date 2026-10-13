# Bait & Strike Editorial

Tema Shopify Online Store 2.0 yang dibuat sendiri, terinspirasi arah visual King / Regal. Ini bukan tema King asli dan tidak menyertakan kode, merek, foto, atau lisensi King. Tata letak mengikuti referensi screenshot seluler: pengumuman hitam, header putih dengan logo tengah, hero layar besar, judul serif miring, strip promosi, grid produk, dan bagian editorial.

## Instalasi

1. ZIP hanya folder assets, config, layout, locales, sections, snippets, templates. Folder-folder tersebut harus berada langsung di root ZIP.
2. Shopify Admin → Online Store → Themes → Add theme → Upload ZIP.
3. Buka Customize. Ganti nama/logo, menu, foto hero, tile koleksi, brand story, teks dan warna.
4. Pilih koleksi di Featured collection. Foto yang terpasang awal adalah ilustrasi SVG original, bukan foto demo Regal.
5. Buat halaman kontak dengan template page.contact. Pilih akun pelanggan Shopify baru jika perlu login; template akun legacy belum disertakan.
6. Aktifkan filter melalui Shopify Search & Discovery. Cek opsi pengiriman, kebijakan dan pembayaran di Admin.
7. Uji produk, varian, jumlah, keranjang, checkout, newsletter dan form kontak di preview Shopify sebelum publish.

## Struktur

- assets/theme.css: desain responsif, desktop dan ponsel.
- assets/theme.js: pergantian varian dan perilaku menu.
- sections/: modul yang bisa diedit dari Customize.
- templates/: susunan halaman Online Store 2.0.
- locales/: UI Inggris dan Indonesia. Teks marketing merupakan pengaturan section.
- scripts/package.ps1: membuat ZIP siap upload.

## Pengembangan

Jalankan Shopify CLI dari root repo: shopify theme dev --store NAMA-TOKO.myshopify.com. Gunakan shopify theme check untuk memeriksa perubahan. Gunakan shopify theme push --unpublished untuk mengirim sebagai tema draft. Jangan gunakan --live sebelum preview disetujui.

Tema ini merupakan implementasi awal mandiri. Fitur tema komersial seperti quick view, cart drawer, predictive search, hotspot, wishlist dan seluruh fitur King tidak diklaim tersedia. Keranjang dan pencarian menggunakan halaman standar. Untuk hasil identik dengan Regal, gunakan tema King berlisensi.

