---
layout: post
title: Apa Itu Portable Document Format (PDF)?
thumbnail: /assets/img/que-es-el-pdf.webp
description: "Pelajari apa itu PDF, arti, sejarah, cara kerjanya, dan mengapa format ini penting untuk berbagi dokumen digital secara aman dan profesional."
lang: id
ref: que-es-el-pdf
---

PDF adalah singkatan dari **Portable Document Format**. Adobe menciptakan format ini pada tahun 1993, dan namanya sendiri sudah menjelaskan fungsinya: dokumen ini bersifat portabel. Tampilan file PDF akan tetap sama di layar Anda, di layar rekan kerja Anda, pada printer di negara lain, atau bahkan di ponsel yang berusia beberapa tahun. File ini menyimpan semua yang diperlukan agar dapat ditampilkan dengan benar dan tidak bergantung pada perangkat lunak atau pengaturan yang terpasang di perangkat Anda.

## Dari Mana Ide PDF Berasal?

Ide PDF berasal dari sebuah memo yang ditulis oleh salah satu pendiri Adobe, John Warnock, berjudul *The Camelot Project* pada tahun 1991.

Masalah yang ingin diselesaikannya sangat jelas: Anda membuat sebuah dokumen di komputer Anda, tetapi ketika dibuka di komputer lain, tampilannya bisa berubah—font berbeda, tata letak rusak, dan format menjadi tidak konsisten.

Warnock ingin dokumen dideskripsikan sebagai serangkaian instruksi untuk membuat tampilan dokumen, bukan bergantung pada aplikasi tertentu. Dengan kata lain, ia ingin menciptakan sesuatu yang menyerupai dokumen cetak, tetapi dalam bentuk digital.

---

## Seperti Apa Sebenarnya File PDF?

PDF bukan sekadar gambar dari halaman dokumen. Sebaliknya, PDF pada dasarnya adalah kumpulan instruksi yang memberi tahu pembaca PDF cara menampilkan isi dokumen.

Di dalam PDF terdapat *content stream* yang berisi semua instruksi yang diperlukan untuk membuat ulang setiap elemen dokumen, misalnya:

> "Tampilkan karakter ini pada koordinat tertentu menggunakan font ini."

Definisi font, gambar, warna, dan sumber daya lainnya disematkan langsung ke dalam file. Semua komponen dikemas menjadi satu.

Di bagian akhir file PDF terdapat indeks yang disebut **cross-reference table**, yang memberi tahu pembaca PDF lokasi setiap halaman dan objek di dalam file. Berkat struktur ini, pembaca PDF dapat langsung membuka halaman 80 tanpa harus membaca halaman 1 hingga 79 terlebih dahulu.

---

## Arti Versi PDF

Semua file PDF diawali dengan nomor versi pada baris pertama, misalnya:

```text
%PDF-1.7
```

Format PDF telah mengalami banyak revisi sejak pertama kali diperkenalkan pada tahun 1993.

Namun, tonggak paling penting terjadi pada tahun 2008 ketika Adobe menyerahkan spesifikasi PDF kepada **International Organization for Standardization (ISO)**. Sejak saat itu PDF menjadi standar terbuka dengan nama **ISO 32000**, sehingga tidak dimiliki oleh satu perusahaan saja.

Artinya, siapa pun dapat mengakses spesifikasi tersebut dan membuat perangkat lunak yang mendukung PDF tanpa harus membayar Adobe atau meminta izin.

Karena itulah dukungan PDF dapat diterapkan oleh browser seperti Mozilla Firefox, Google Chrome, dan Apple Safari tanpa batasan.

Pada tahun 2017, PDF versi 2.0 dirilis dengan peningkatan pada fitur enkripsi dan aksesibilitas.

Hingga saat ini, sebagian besar file PDF yang digunakan masih menggunakan versi 1.4 hingga 1.7.

---

## Bagaimana Browser Dapat Membuka PDF Tanpa Plugin?

Sebelum tahun 2010, membuka file PDF di Chrome atau Firefox biasanya memerlukan plugin Adobe Reader di dalam browser. Plugin tersebut terkenal lambat dan sering menyebabkan browser mengalami crash.

Pada tahun 2010, Google mulai menyertakan pembaca PDF bawaan di Chrome yang disebut **PDFium**.

PDFium bersifat *open source* dan kini digunakan secara luas di berbagai aplikasi, termasuk:

- Microsoft Edge
- Android WebView
- Browser lain yang berbasis Chromium

Firefox menggunakan mesin render miliknya sendiri yang disebut **PDF.js**, sedangkan Safari menggunakan renderer PDF bawaan milik Apple.

Saat ini, pembaca PDF bawaan menjadi bagian penting dari browser modern dan digunakan oleh jutaan orang setiap hari tanpa mereka sadari.

---

## Mengapa Beberapa File PDF Berukuran Sangat Besar?

Banyak orang menganggap semua file PDF selalu berukuran kecil. Kenyataannya tidak demikian.

Teks dapat dikompresi dengan sangat baik karena huruf dapat disimpan secara efisien.

Lalu, apa yang sebenarnya membuat ukuran PDF menjadi besar?

**Gambar.**

Satu gambar beresolusi tinggi dapat memakan ruang hingga beberapa megabyte. Dokumen hasil pemindaian sebanyak sepuluh halaman dapat dengan mudah melebihi 50 MB karena setiap halaman berisi gambar penuh.

Berbagai jenis data menggunakan algoritma kompresi yang berbeda.

| Jenis Data | Algoritma Kompresi |
| ----------- | ------------------ |
| Foto | JPEG |
| Hasil pindai hitam putih | JBIG2 |
| Data dokumen umum | Flate |

Lalu, apa yang sebenarnya dilakukan oleh perangkat lunak kompresi PDF?

Sebagian besar, perangkat lunak tersebut mengurangi kualitas gambar sambil mempertahankan kualitas teks agar tetap sama.

---

## Pertanyaan yang Sering Diajukan

### Apakah Saya Bisa Mengedit Teks di Dalam Dokumen PDF?

Secara teori, ya.

Dalam praktiknya, tidak selalu mudah.

PDF dirancang terutama untuk dilihat dan dibagikan, bukan untuk diedit.

Aplikasi seperti Adobe Acrobat dan berbagai editor PDF online memang memungkinkan pengeditan teks, tetapi hasil formatnya terkadang berubah karena PDF memang tidak dirancang seperti dokumen pengolah kata.

---

### Mengapa Saya Tidak Bisa Menyorot Teks di PDF Ini?

Kemungkinan besar file tersebut adalah dokumen hasil pemindaian.

Tidak ada lapisan teks yang sebenarnya, hanya gambar dari teks tersebut. Agar teks dapat dipilih atau disorot, dokumen harus diproses menggunakan **OCR (Optical Character Recognition)**.

---

### Apakah Aman Membuka File PDF dari Sumber yang Tidak Dikenal?

Secara umum, ya.

File PDF secara teknis dapat berisi kode JavaScript, dan perangkat lunak pembaca PDF pernah memiliki celah keamanan di masa lalu.

Namun, pembaca PDF modern yang terintegrasi di browser jauh lebih aman dan jauh lebih sulit dieksploitasi dibandingkan aplikasi pembaca PDF lama yang berdiri sendiri.
