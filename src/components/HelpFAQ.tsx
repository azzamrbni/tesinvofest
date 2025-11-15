import { motion } from "motion/react";
import { HelpCircle, Mail, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function HelpFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    "Umum",
    "Untuk Seniman",
    "Untuk Pengunjung",
    "Teknis",
    "Aksesibilitas",
  ];

  const faqs: FAQItem[] = [
    {
      question: "Apa itu Galeri Harapan?",
      answer: "Galeri Harapan adalah platform galeri virtual yang didedikasikan untuk menampilkan karya seni dari seniman berkebutuhan khusus. Kami menyediakan ruang digital yang aksesibel di mana seniman dapat memamerkan karya mereka dalam format 2D dan pengalaman VR immersive.",
      category: "Umum",
    },
    {
      question: "Bagaimana cara mendaftar sebagai seniman?",
      answer: "Anda dapat mendaftar dengan mengklik tombol 'Daftar Sebagai Seniman' di halaman utama. Isi formulir pendaftaran dengan informasi Anda dan unggah portofolio karya Anda. Tim kami akan meninjau aplikasi Anda dalam 3-5 hari kerja.",
      category: "Untuk Seniman",
    },
    {
      question: "Apakah ada biaya untuk mendaftar sebagai seniman?",
      answer: "Tidak, pendaftaran sebagai seniman di Galeri Harapan sepenuhnya gratis. Kami berkomitmen untuk menyediakan platform yang aksesibel tanpa barrier finansial bagi seniman berkebutuhan khusus.",
      category: "Untuk Seniman",
    },
    {
      question: "Berapa banyak karya yang bisa saya unggah?",
      answer: "Seniman dapat mengunggah hingga 50 karya seni dalam galeri mereka. Jika Anda memerlukan lebih banyak ruang, silakan hubungi tim kami untuk mendiskusikan opsi premium.",
      category: "Untuk Seniman",
    },
    {
      question: "Bagaimana cara mengakses museum VR?",
      answer: "Untuk mengakses museum VR, cukup klik pada portal VR di halaman utama. Anda dapat menggunakan VR headset untuk pengalaman immersive penuh, atau menjelajahi menggunakan komputer atau perangkat mobile Anda dengan kontrol mouse/touch.",
      category: "Untuk Pengunjung",
    },
    {
      question: "Apakah saya bisa membeli karya seni di platform ini?",
      answer: "Ya! Setiap karya yang dipamerkan dapat dibeli langsung melalui platform kami. Klik pada karya yang Anda minati untuk melihat detail harga dan opsi pembelian. Kami memfasilitasi transaksi aman antara pembeli dan seniman.",
      category: "Untuk Pengunjung",
    },
    {
      question: "Perangkat apa yang didukung untuk pengalaman VR?",
      answer: "Platform kami mendukung berbagai perangkat VR termasuk Oculus Quest, HTC Vive, dan Valve Index. Anda juga dapat mengakses galeri dalam mode non-VR menggunakan komputer desktop, tablet, atau smartphone.",
      category: "Teknis",
    },
    {
      question: "Apakah platform ini ramah untuk pengguna screen reader?",
      answer: "Sangat! Kami merancang platform dengan aksesibilitas sebagai prioritas utama. Semua konten dapat diakses menggunakan screen reader, keyboard navigation tersedia di semua halaman, dan kami menyediakan deskripsi alt yang komprehensif untuk semua gambar.",
      category: "Aksesibilitas",
    },
    {
      question: "Apakah ada fitur aksesibilitas lain yang tersedia?",
      answer: "Ya, kami menyediakan berbagai fitur aksesibilitas termasuk: mode kontras tinggi, ukuran teks yang dapat disesuaikan, navigasi keyboard penuh, dukungan caption untuk konten video, dan opsi untuk menyesuaikan animasi dan transisi.",
      category: "Aksesibilitas",
    },
    {
      question: "Bagaimana cara melaporkan masalah teknis?",
      answer: "Jika Anda mengalami masalah teknis, silakan hubungi tim support kami melalui email di support@galeriharapan.id atau gunakan formulir kontak di bawah. Kami berusaha merespons semua laporan dalam waktu 24 jam.",
      category: "Teknis",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Umum");
  const filteredFAQs = selectedCategory === "Semua" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="bantuan-faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Bantuan & FAQ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum atau hubungi tim support kami untuk bantuan lebih lanjut
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sidebar - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
              <h3 className="text-gray-900 mb-6">Butuh Bantuan Lebih?</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:support@galeriharapan.id"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email Support</div>
                    <p className="text-gray-600">support@galeriharapan.id</p>
                  </div>
                </a>

                <a
                  href="tel:+622112345678"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Telepon</div>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                    <p className="text-gray-500 text-sm">Sen-Jum, 09:00-17:00</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Live Chat</div>
                    <p className="text-gray-600">Chat dengan tim kami</p>
                    <p className="text-gray-500 text-sm">Online sekarang</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-gray-900 mb-4">Jam Operasional</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content - FAQ */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-3">
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="pl-10 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-gray-900 mb-6">Tidak Menemukan Jawaban?</h3>
              <p className="text-gray-600 mb-8">
                Kirim pertanyaan Anda kepada kami dan tim support akan segera membantu Anda
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Topik pertanyaan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tuliskan pertanyaan atau masalah Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
