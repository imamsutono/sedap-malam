# **Product Requirement Document (PRD): Web "Sedap Malam Pasuruan"**

# **1\. Pendahuluan & Visi Produk**

"Sedap Malam" bukan sekadar portal informasi, melainkan sebuah **ekosistem kreatif digital** yang dirancang untuk menjadi wadah kolektif bagi pelaku ekonomi kreatif di Kabupaten Pasuruan. Visi utama produk ini adalah menciptakan platform yang fleksibel, dinamis, dan mampu merepresentasikan identitas lokal yang harum dan tumbuh secara universal.  
Produk ini bertujuan untuk menghapus batasan antar-subsektor (musik, literasi, kriya, kuliner, dll.) melalui satu narasi visual yang kohesif, di mana setiap karya dianggap sebagai kontribusi terhadap "keharuman" ekosistem kreatif Pasuruan.

# **2\. Design Vision & Interactive UX (Playful & Animation-Heavy)**

Situs ini harus memberikan pengalaman sensorik digital yang artistik. Arahan desain menekankan pada pergerakan yang halus dan elemen visual yang "hidup".

* **Parallax Scrolling:** Implementasi efek kedalaman pada elemen latar belakang bunga Sedap Malam yang bergerak dengan kecepatan berbeda saat pengguna melakukan scroll.  
* **Micro-interactions:** Setiap kartu karya pada Etalase akan merespons *hover* dengan animasi ekspansi, perubahan saturasi warna, atau munculnya metadata singkat secara *playful*.  
* **Fluid Transitions:** Transisi antar-halaman tidak boleh terasa kaku (instan). Gunakan *fade-in/out* atau pergerakan elemen SVG yang mengalir.  
* **SVG Morphing:** Logo atau elemen dekoratif bunga yang dapat berubah bentuk (morph) secara organik mengikuti interaksi pengguna atau kategori subsektor yang dipilih.

# **3\. Fitur Utama & Functional Requirements**

### **Modul 1: Header & Intelligent Navigation**

* **Logo:** Bunga Sedap Malam / Ekraf Pasuruan.  
* **Menu Navigasi (Bersifat Umum):**  
  * *Beranda*  
  * *Filosofi*  
  * *Etalase Karya* (Drop-down untuk filter subsektor)  
  * *Agenda / Event*  
  * *Ruang Kolaborasi*

### **Modul 2: Dynamic Hero Section**

* **Headline:** *"Bunga Sedap Malam: Inspirasi Tanpa Batas Ekonomi Kreatif Pasuruan"*  
* **Sub-headline:** Sebuah inisiatif kolaboratif untuk mengangkat identitas lokal Pasuruan melalui beragam ekspresi karya, dari seni, teknologi, hingga gaya hidup.  
* **Call to Action (CTA):**  
  * \[ Jelajahi Karya \]  
  * \[ Ikut Berkolaborasi \]  
* **Visual:** Visual yang elegan (bisa abstrak atau siluet) dari Bunga Sedap Malam yang merepresentasikan kreativitas universal, bukan sekadar bunga fisik.

### **Modul 3: Storytelling Section (Filosofi)**

* Penjelasan singkat mengapa Sedap Malam dipilih sebagai *branding* utama.  
* Pesan utama: Bunga ini adalah "kanvas kosong" yang harumnya bisa diinterpretasikan oleh semua pelaku kreatif (baik itu kuliner, fashion, kriya, aplikasi, dll).  
* Deskripsi: “Sedap Malam bukan sekadar flora; ia adalah metafora. Seperti malam yang memberikan ruang bagi wewangian untuk mekar utuh, platform ini menyediakan 'kanvas kosong' bagi para kreator.

Setiap seniman, pengrajin, dan pemikir bebas menginterpretasikan esensi Sedap Malam ke dalam medium mereka masing-masing, menciptakan ekosistem karya yang kaya namun terikat oleh satu akar identitas.”

### 

### **Modul 4: Modular Portfolio Grid (Etalase Karya)**

*Ini adalah bagian inti yang dirancang fleksibel. Menggunakan sistem Cards atau Tab yang bisa terus ditambah ketika ada subsektor baru yang bergabung.*

* **Header:** *"Satu Harum, Beragam Karya"*  
* **Filter/Kategori:** \[Semua\] \[Musik\] \[Seni Pertunjukan\] \[Literasi\] \[Kriya\] \[Kuliner\] \[Lainnya\]  
* **Isi Konten (Contoh Implementasi Saat Ini):**  
  * **Card 1 (Musik):** "Harmoni Sedap Malam" (Embed/Link ke 2 Video YouTube yang sudah ada).  
  * **Card 2 (Seni Pertunjukan):** "Eksplorasi Gerak Tari Sedap Malam" (Status: *In Progress* / Concept Art).  
  * **Card 3 (Literasi):** "Mengenalkan Sedap Malam Lewat Dongeng" (Bisa diisi dokumentasi atau ide dari subsektor literasi).  
  * **Card 4 (Kriya/Fashion):** *Coming Soon* (Placeholder untuk memancing subsektor Kriya/Fashion masuk, misalnya membuat batik motif Sedap Malam).  
  * **Card 5 (Kuliner):** *Coming Soon* (Placeholder untuk inovasi makanan/minuman berbasis Sedap Malam).

### **Modul 5: Ecosystem Activation (Agenda)**

*Sebuah kalender atau daftar acara gabungan dari seluruh subsektor.*

* **Headline:** *"Agenda & Pergerakan Kami"*  
* **List Agenda (Contoh):**  
  * **Playdate Literasi Sedap Malam** (Penyelenggara: Subsektor Literasi)  
    * Tanggal: 15 Sep 2026  
    * Lokasi: Taman Kota Pasuruan  
    * Poster  
    * Pendaftaran:  [**\[ Daftar/RSVP \]**](https://forms.gle/literasi-pasuruan)   
  * **Peluncuran Koreografi Tari** (Penyelenggara: Subsektor Seni Pertunjukan)  
    * Tanggal: 22 Sep 2026  
    * Lokasi: Gedung Kesenian Pasuruan  
    * Poster  
    * Pendaftaran:  [**\[ Daftar/RSVP \]**](https://forms.gle/tari-pasuruan)   
  * **Bazar Kreatif Sedap Malam** (Terbuka untuk Kuliner, Kriya, dll)  
    * Tanggal: 30 Sep 2026  
    * Lokasi: Alun-Alun Pasuruan  
    * Poster  
    * Pendaftaran:  [**\[ Daftar/RSVP \]**](https://forms.gle/bazar-pasuruan) 

### **Modul 6: Collaborative Call-to-Action**

*Bagian ini krusial untuk mengajak subsektor yang belum bergabung.*

* **Headline:** *"Mari Wujudkan Harum Karyamu"*  
* **Deskripsi:** Apakah Anda pelaku Ekraf Pasuruan di bidang Fotografi, Film, Kuliner, atau Desain Komunikasi Visual? Mari gunakan *intellectual property* Bunga Sedap Malam dalam karyamu selanjutnya\!  
* **Call to Action (CTA):**  
  * \[ Kirim Ide Kolaborasi \] (Terhubung ke form pengajuan ide/karya).

### 

### **7\. Footer**

* Info Komite Ekonomi Kreatif Kabupaten Pasuruan.  
* Tautan pendukung, Media Sosial, Kontak.

# **4\. Technical Scope: CMS & Scalability**

Sebagai orang dari subsektor Aplikasi yang akan menyusun PRD, Anda bisa menyoroti beberapa poin teknis berikut untuk menunjukkan **kontribusi sistem yang berkelanjutan**:

> 1. **Content Management System (CMS) Ready:**  
>    Tuliskan dalam PRD bahwa *landing page* ini dirancang dengan arsitektur yang mendukung CMS. Artinya, jika besok subsektor **Fotografi** atau **Kuliner** ingin memasukkan karyanya, admin tidak perlu melakukan *hard-code* ulang, melainkan cukup menambahkan entri data baru melalui *dashboard*.  
> 2. **Scalable Component (Komponen UI yang Reusable):**  
>    Gunakan desain *Card/Grid* untuk "Etalase Karya" dan "Agenda". Komponen ini sangat *reusable* untuk berbagai jenis konten (baik itu video YouTube, gambar produk kriya, atau link pendaftaran acara).  
> 3. **Database Architecture (Tahap Lanjutan):**  
>    Meski ini prototipe, di PRD Anda bisa menyinggung desain *database* sederhana: tabel Karya (berisi id, judul, tipe\_subsektor, media\_url, deskripsi) dan tabel Agenda (id, nama\_acara, tanggal, subsektor\_pic, link\_pendaftaran). Ini menunjukkan pemikiran sistem jangka panjang.

# **5\. User Experience (UX) Flow**

* **Discovery:** User masuk ke Landing Page, disambut dengan animasi Hero Section yang artistik.  
* **Exploration:** User melakukan scroll atau menggunakan filter kategori di Etalase Karya untuk melihat keberagaman subsektor.  
* **Engagement:** User mengklik kartu karya untuk detail lebih lanjut atau melihat agenda acara yang sedang berlangsung.  
* **Conversion:** User mengisi form kolaborasi di bagian Ruang Kolaborasi untuk berkontribusi ide atau karya baru ke dalam ekosistem.