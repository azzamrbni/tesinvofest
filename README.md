# 🎨 Galeri Harapan

![Project Banner](image_b3776b.png)

**Galeri Harapan** adalah sebuah platform web interaktif yang didedikasikan untuk memamerkan karya seni, memberdayakan seniman, dan memberikan wawasan mendalam mengenai dunia seni. Aplikasi ini dibangun dengan teknologi web modern untuk memberikan pengalaman pengguna yang responsif dan estetis.

---

## 🌟 Fitur Utama

- **🏠 Beranda Imersif (`HeroPortal`)**  
  Pintu masuk visual yang menarik untuk menyambut pengunjung.

- **🖼️ Galeri Seniman Digital**  
  Menampilkan profil seniman dan karya-karya terbaik mereka (`FeaturedArtists`, `ArtistsGallery`).

- **💡 Wawasan & Edukasi**  
  Halaman khusus untuk artikel dan data mengenai seni (`Insights`, `ui/chart`).

- **🤖 Asisten Cerdas**  
  Widget obrolan interaktif yang ditenagai oleh basis pengetahuan internal untuk menjawab pertanyaan pengunjung (`ChatWidget`, `utils/knowledgeBase`).

- **❓ Pusat Bantuan**  
  Halaman FAQ yang komprehensif untuk membantu pengguna (`BantuanFAQ`, `HelpFAQ`).

- **📱 Desain Responsif**  
  Dibangun dengan komponen UI modern yang adaptif untuk berbagai perangkat (`use-mobile`, `Sidebar`).

---

## 🛠️ Teknologi (Tech Stack)

- **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI based)
- **Iconography**: Lucide React
- **Visualisasi Data**: Recharts

---

## 📂 Struktur Direktori

```text
src/
├── assets/                 # Aset statis (gambar, font, ikon)
├── components/             # Komponen React yang dapat digunakan kembali
│   ├── figma/              # Komponen spesifik desain (ImageWithFallback)
│   ├── ui/                 # Komponen UI Library (Button, Card, Sidebar, dll.)
│   ├── AboutMission.tsx    # Seksi tentang misi
│   ├── ArtistsGallery.tsx  # Grid galeri seniman
│   ├── ChatWidget.tsx      # Widget chatbot
│   ├── FeaturedArtists.tsx # Seksi seniman unggulan
│   ├── Footer.tsx          # Kaki halaman
│   ├── HelpFAQ.tsx         # Komponen FAQ
│   ├── HeroPortal.tsx      # Hero section utama
│   ├── Insights.tsx        # Komponen wawasan/statistik
│   ├── MissionSection.tsx  # Seksi misi
│   └── Navbar.tsx          # Navigasi utama
├── pages/                  # Halaman-halaman utama aplikasi (Route)
│   ├── BantuanFAQ.tsx      # Halaman Bantuan
│   ├── GaleriSeniman.tsx   # Halaman Galeri
│   ├── Home.tsx            # Halaman Utama
│   ├── TentangMisi.tsx     # Halaman Misi
│   └── Wawasan.tsx         # Halaman Insight
├── styles/                 # File CSS global
│   └── globals.css
├── utils/                  # Fungsi utilitas dan helper
│   └── knowledgeBase.ts    # Data untuk chatbot
├── App.tsx                 # Komponen Root / Routing
├── main.tsx                # Entry point aplikasi
├── index.css               # CSS entry point
└── Attributions.md         # Kredit aset pihak ketiga
```

## 🚀 Cara Menjalankan Proyek

### 🔧 Prasyarat

Pastikan Anda telah menginstal:

- Node.js (v16 atau lebih baru)
- npm atau yarn

### 📥 Instalasi

1. Clone repositori:

```bash
git clone https://github.com/username/galeri-harapan.git
cd galeri-harapan
```

2. Instal dependensi:

```bash
npm install
```

3. Jalankan server pengembangan:

```bash
npm run dev
```

4. Buka di browser:

Akses aplikasi melalui http://localhost:

## 🎨 Komponen UI

Proyek ini menggunakan berbagai komponen antarmuka pengguna, termasuk:

- **Navigasi**: Sidebar, Menubar, Breadcrumb
- **Input**: Form, Input OTP, Checkbox, Switch, Slider
- **Data Display**: Card, Carousel, Table, Accordion
- **Feedback**: Alert, Sonner (Toast), Progress Bar
- **Overlay**: Dialog, Sheet, Popover, Tooltip

---

## 🤝 Kontribusi

Kontribusi sangat dihargai! Langkah-langkah untuk berkontribusi:

1. Fork repositori ini
2. Buat branch fitur baru:

```bash
git checkout -b [namaFiturKalian]
```

3. Commit perubahan Anda:

```bash
git commit -m 'Menambahkan fitur keren'
```

4. Push ke branch tersebut:

```bash
git push origin [namaFiturKalian]
```

5. Buat Pull Request baru

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

---

## 🙏 Kredit & Atribusi

Terima kasih kepada semua pihak yang sumber dayanya digunakan dalam proyek ini.  
**theSpecial.id**