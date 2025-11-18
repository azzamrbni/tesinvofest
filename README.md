<div align="center">

# 🎨 Galeri Harapan

### _Wadah Ekspresi Seni untuk Semua_

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Platform galeri seni digital yang inklusif dan memberdayakan seniman berkebutuhan khusus.**  
Menampilkan karya seni dalam format 2D dan pengalaman VR immersive dengan AI-powered chatbot.

</div>

---

## ✨ Highlights

<table>
<tr>
<td width="50%">

### 🎭 **Museum VR Interaktif**

Jelajahi galeri seni dalam pengalaman 3D immersive menggunakan WebVR dengan A-Frame. Mendukung VR headset dan mode desktop/mobile.

</td>
<td width="50%">

### 🤖 **AI Assistant (Groq LLM)**

Chatbot cerdas dengan Llama 3.3 70B yang didukung oleh RAG system dan Strategy Pattern untuk respons cepat.

</td>
</tr>
<tr>
<td width="50%">

### 🖼️ **1000+ Karya Seni**

Galeri digital dengan filter canggih, search, dan categorization. Menampilkan patung, lukisan, fotografi, dan mixed media.

</td>
<td width="50%">

### ♿ **100% Accessible**

Screen reader friendly, keyboard navigation, contrast mode, dan optimized untuk pengguna berkebutuhan khusus.

</td>
</tr>
</table>

---

## 🎯 Fitur Utama

### 🏠 **Landing Page & Navigation**

- ✅ Hero section dengan portal VR terintegrasi
- ✅ Responsive navbar dengan smooth scroll navigation
- ✅ Multi-page architecture dengan hash routing
- ✅ Footer dengan social media links dan quick navigation

### 🎨 **Galeri & Seniman**

- ✅ Featured Artists showcase dengan filtering
- ✅ Artist profiles dengan location, specialty, dan portfolio count
- ✅ Search & filter by category (Lukisan, Patung, Digital Art, Keramik, Fotografi)
- ✅ Lazy loading images dengan fallback handling
- ✅ Hover effects dan smooth animations (Framer Motion)

### 🤖 **AI-Powered Chat Widget**

- ✅ **Dual-mode interface**: Quick selection (AI Chat/WhatsApp) + full chat
- ✅ **Strategy Pattern**: 5 quick response strategies untuk pertanyaan umum
- ✅ **Groq AI Integration**: Llama-3.3-70b-versatile model
- ✅ **RAG System**: 270+ lines knowledge base dengan few-shot learning
- ✅ **Smart fallback**: Quick response → AI → Error handling
- ✅ Conversation history tracking (last 4 messages)
- ✅ Real-time typing indicator
- ✅ Timestamp untuk setiap message

### 🎓 **Wawasan & Edukasi**

- ✅ Data visualization dengan Recharts
- ✅ Statistik platform (seniman, karya, pengunjung)
- ✅ Interactive charts dan infographics
- ✅ Educational content tentang seni dan aksesibilitas

### 💬 **Help Center & FAQ**

- ✅ Accordion-style FAQ dengan 10+ pertanyaan
- ✅ Category filtering (Umum, Seniman, Pengunjung, Teknis, Aksesibilitas)
- ✅ Contact methods (Email, Phone, Live Chat)
- ✅ Contact form dengan validation
- ✅ Live Chat integration dengan ChatWidget

### 🎮 **Museum VR (A-Frame)**

- ✅ 3D gallery walkthrough dengan custom components
- ✅ Artwork loader dengan dynamic positioning
- ✅ Exit link untuk kembali ke website
- ✅ Cursor trail effects dan motion trail
- ✅ Mobile-friendly dengan landscape mode support

---

## 🏗️ Arsitektur & Design Patterns

Proyek ini mengimplementasikan **6 Design Patterns OOP** untuk kode yang clean, scalable, dan maintainable:

### 1️⃣ **Strategy Pattern**

```
src/strategies/ChatResponseStrategy.ts
```

- Interface `IChatResponseStrategy` untuk respons chat
- 5 strategi: Greeting, VR Troubleshoot, Registration, Purchase, Contact
- Manager untuk auto-select strategi yang tepat

### 2️⃣ **Singleton Pattern**

```
src/services/KnowledgeBaseService.ts
```

- Single instance untuk knowledge base
- Efficient memory usage
- Global access point

### 3️⃣ **Container/Presentational Pattern**

```
Container: src/pages/GaleriSeniman.tsx
Presentational: src/components/ArtistsGallery.tsx
```

- Separation of concerns (logic vs UI)
- Reusable presentational components
- Testable business logic

### 4️⃣ **Composite Pattern**

```
Atomic: src/components/ui/
Molecules: src/components/
Organisms: src/pages/
```

- Component hierarchy yang jelas
- Reusable atomic components
- Composable architecture

### 5️⃣ **Factory Method Pattern**

```
src/components/ui/ArtistCard.tsx
```

- Single flexible component
- Props-based configuration
- Type-safe with TypeScript

### 6️⃣ **Observer Pattern**

- React Hooks (`useState`, `useEffect`)
- State management natural di React

📖 **[Lihat dokumentasi lengkap Design Patterns](./DESIGN_PATTERNS.md)**

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="20%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br><strong>React 18.3</strong>
</td>
<td align="center" width="20%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br><strong>TypeScript</strong>
</td>
<td align="center" width="20%">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
<br><strong>Vite 6.3</strong>
</td>
<td align="center" width="20%">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br><strong>Tailwind CSS</strong>
</td>
<td align="center" width="20%">
<img src="https://raw.githubusercontent.com/motion-canvas/motion-canvas/main/packages/ui/public/favicon.svg" width="48" height="48" alt="Motion" />
<br><strong>Framer Motion</strong>
</td>
</tr>
</table>

### 📦 Core Dependencies

- **UI Framework**: React 18.3.1 + React DOM
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5 + SWC
- **Styling**: Tailwind CSS + class-variance-authority
- **Animation**: Framer Motion (motion package)
- **Icons**: Lucide React 0.487
- **UI Components**: Radix UI (20+ components)
- **Charts**: Recharts 2.15.2
- **AI/LLM**: OpenAI SDK 6.9 (for Groq API)
- **VR**: A-Frame (via public/main.js)

### 🎨 UI Component Library (Radix UI)

Avatar, Scroll Area, Input, Button, Accordion, Dialog, Checkbox, Select, Tabs, Tooltip, Popover, Slider, Switch, Progress, Navigation Menu, Context Menu, Hover Card, Radio Group, Separator, Label, Dropdown Menu, Collapsible

---

## 📂 Struktur Proyek

---
📦 src/
├── 📁 components/              # 🎨 Presentational Components
│   ├── 📁 ui/                 # Atomic UI Components (Radix-based)
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── scroll-area.tsx
│   │   ├── ArtistCard.tsx     # Card component untuk artist display
│   │   ├── FilterComponents.tsx # SearchBar & CategoryFilter
│   │   ├── use-mobile.ts      # Hook untuk mobile detection
│   │   └── utils.ts           # cn() utility untuk className merging
│   ├── 📁 figma/
│   │   └── ImageWithFallback.tsx # Smart image loader dengan fallback
│   ├── AboutMission.tsx       # About & Mission section
│   ├── ArtistsGallery.tsx     # Artist gallery grid (Presentational)
│   ├── ChatWidget.tsx         # AI-powered chat widget (Strategy Pattern)
│   ├── FeaturedArtists.tsx    # Featured artists showcase
│   ├── Footer.tsx             # Footer dengan links & social media
│   ├── HelpFAQ.tsx            # FAQ accordion component
│   ├── HeroPortal.tsx         # Hero section dengan VR portal
│   ├── Insights.tsx           # Data insights & statistics
│   ├── MissionSection.tsx     # Mission statement section
│   └── Navbar.tsx             # Navigation bar dengan mobile menu
│
├── 📁 pages/                  # 📄 Container Components (Pages)
│   ├── Home.tsx               # Landing page
│   ├── TentangMisi.tsx        # About Mission page
│   ├── GaleriSeniman.tsx      # Artist Gallery page (Container)
│   ├── Wawasan.tsx            # Insights page
│   └── BantuanFAQ.tsx         # Help & FAQ page
│
├── 📁 services/               # 🔧 Business Logic Services
│   └── KnowledgeBaseService.ts # Singleton service untuk knowledge base
│
├── 📁 strategies/             # 🎯 Strategy Pattern Implementation
│   └── ChatResponseStrategy.ts # Chat response strategies
│
├── 📁 types/                  # 📐 TypeScript Types & Utilities
│   └── Artist.ts              # Artist interface & ArtistFilter utility
│
├── 📁 utils/                  # 🛠️ Utility Functions
│   └── knowledgeBase.ts       # Knowledge base data & AI prompts
│
├── 📁 styles/                 # 🎨 Global Styles
│   └── globals.css            # Tailwind imports & global CSS
│
├── App.tsx                    # 🏠 Root component & routing
├── main.tsx                   # 🚀 Entry point
├── index.css                  # CSS entry point
└── Attributions.md            # 📝 Credits & attributions

📦 public/
├── Logo.png                   # Logo galeri harapan
├── artworks.csv               # Artwork data
├── museum.html                # VR museum entrance
└── main.js                    # A-Frame VR components

📄 Root Files
├── DESIGN_PATTERNS.md         # 📖 Design patterns documentation
├── README.md                  # 📚 This file
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
└── tailwind.config.js         # Tailwind configuration

## 🚀 Quick Start

### 📋 Prerequisites

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### ⚡ Installation & Run

# 1️⃣ Clone repository
```bash
git clone https://github.com/azzamrbni/tesinvofest.git
cd tesinvofest
```

# 2️⃣ Install dependencies
```bash
npm install
```

# 3️⃣ Setup environment variables (optional)
# Create .env file dan tambahkan:
# VITE_GROQ_API_KEY=your_groq_api_key_here

# 4️⃣ Run development server
```bash
npm run dev
```

# 5️⃣ Open browser
# http://localhost:5173

### 🏗️ Build for Production

```bash
# Build optimized production bundle
## 📊 Project Statistics

```

📝 Total Components : 25+
🎨 UI Components : 10+ (Radix UI based)
📄 Pages : 5 main pages
🔧 Services : 2 (Singleton)
🎯 Strategies : 5 chat response strategies
📐 TypeScript Types : 100% type-safe
🧪 Design Patterns : 6 OOP patterns implemented
📦 Dependencies : 40+ packages

---

## 🎯 Roadmap & Future Features

- [ ] **User Authentication** - Login/Register untuk seniman
- [ ] **Payment Gateway** - Integrasi Midtrans untuk pembelian karya
- [ ] **Artist Dashboard** - Analytics, upload management, order tracking
- [ ] **Advanced Filters** - Price range, color, size, material
- [ ] **Social Features** - Like, comment, share artwork
- [ ] **Multi-language** - Support Bahasa Indonesia & English
- [ ] **Progressive Web App** - PWA dengan offline mode
- [ ] **Real-time Chat** - WebSocket untuk live customer support
- [ ] **Email Notifications** - Order confirmation, updates
- [ ] **Admin Panel** - Content management system

---

## 🤝 Contributing

Kontribusi sangat diapresiasi! 🙏

### Cara Berkontribusi:

1. **Fork** repository ini
2. **Create** branch fitur (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** ke branch (`git push origin feature/AmazingFeature`)
5. **Open** Pull Request

### Guidelines:

- ✅ Follow existing code style & architecture patterns
- ✅ Write meaningful commit messages
- ✅ Update documentation if needed
- ✅ Test your changes thoroughly
- ✅ Keep PRs focused on single feature/fix

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```

MIT License

Copyright (c) 2025 Galeri Harapan - theSpecial.id

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

```

---

## 🙏 Acknowledgments

### 👨‍💻 Development Team
- **Project Lead**: theSpecial.id
- **Repository**: [azzamrbni/tesinvofest](https://github.com/azzamrbni/tesinvofest)

### 🛠️ Technologies & Libraries
- [React](https://react.dev/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible Components
- [Groq](https://groq.com/) - AI/LLM Platform
- [A-Frame](https://aframe.io/) - WebVR Framework
- [Lucide](https://lucide.dev/) - Icon Library
- [Recharts](https://recharts.org/) - Charts & Visualization

### 🎨 Design Resources
- [Unsplash](https://unsplash.com/) - Stock Photos
- [Figma](https://figma.com/) - UI/UX Design
- [shadcn/ui](https://ui.shadcn.com/) - Component Patterns

---

<div align="center">

### 💜 Made with Love for Inclusive Art Community

**[⬆ Back to Top](#-galeri-harapan)**

---

[![Stars](https://img.shields.io/github/stars/azzamrbni/tesinvofest?style=social)](https://github.com/azzamrbni/tesinvofest)
[![Forks](https://img.shields.io/github/forks/azzamrbni/tesinvofest?style=social)](https://github.com/azzamrbni/tesinvofest)
[![Issues](https://img.shields.io/github/issues/azzamrbni/tesinvofest)](https://github.com/azzamrbni/tesinvofest/issues)

**© 2025 Galeri Harapan • Built with ❤️ by [theSpecial.id](https://github.com/azzamrbni)**

</div>
```bash
git push origin [namaFiturKalian]
````

5. Buat Pull Request baru

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

---

## 🙏 Kredit & Atribusi

Terima kasih kepada semua pihak yang sumber dayanya digunakan dalam proyek ini.  
**theSpecial.id**
