import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface InsightArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

interface InsightsProps {
  insightImages: string[];
}

export function Insights({ insightImages }: InsightsProps) {
  const articles: InsightArticle[] = [
    {
      id: 1,
      title: "Seni Sebagai Terapi: Bagaimana Melukis Membantu Penyembuhan Mental",
      excerpt: "Eksplorasi mendalam tentang hubungan antara seni dan kesehatan mental, serta bagaimana aktivitas kreatif dapat menjadi alat penyembuhan yang kuat.",
      author: "Dr. Sarah Wijaya",
      date: "15 November 2025",
      readTime: "8 menit",
      category: "Kesehatan Mental",
      image: insightImages[0] || "",
      featured: true,
    },
    {
      id: 2,
      title: "Teknologi VR Membuka Pintu Baru untuk Seniman Disabilitas",
      excerpt: "Bagaimana teknologi virtual reality mengubah cara seniman berkebutuhan khusus menciptakan dan memamerkan karya mereka ke seluruh dunia.",
      author: "Rizky Pratama",
      date: "12 November 2025",
      readTime: "6 menit",
      category: "Teknologi",
      image: insightImages[1] || "",
      featured: true,
    },
    {
      id: 3,
      title: "Profil Seniman: Perjalanan Inspiratif Andi Prasetyo",
      excerpt: "Kisah perjalanan seorang seniman yang tidak membiarkan keterbatasan fisik menghalangi passion-nya dalam dunia seni lukis abstrak.",
      author: "Maya Kusuma",
      date: "10 November 2025",
      readTime: "10 menit",
      category: "Profil Seniman",
      image: insightImages[2] || "",
      featured: false,
    },
    {
      id: 4,
      title: "Membangun Karir Seni di Era Digital: Tips dan Strategi",
      excerpt: "Panduan praktis untuk seniman yang ingin membangun kehadiran online dan mengembangkan karir mereka di dunia digital.",
      author: "Budi Setiawan",
      date: "8 November 2025",
      readTime: "7 menit",
      category: "Karir",
      image: insightImages[3] || "",
      featured: false,
    },
    {
      id: 5,
      title: "Seni Inklusif: Mengubah Persepsi Masyarakat",
      excerpt: "Bagaimana karya seni dari seniman berkebutuhan khusus mengubah cara kita memandang kemampuan dan kreativitas.",
      author: "Dewi Lestari",
      date: "5 November 2025",
      readTime: "5 menit",
      category: "Sosial",
      image: insightImages[4] || "",
      featured: false,
    },
    {
      id: 6,
      title: "Workshop Digital Art: Menguasai Teknik Ilustrasi Modern",
      excerpt: "Ringkasan workshop digital art yang mengajarkan teknik-teknik terkini dalam ilustrasi dan desain grafis untuk seniman pemula.",
      author: "Rudi Hartono",
      date: "3 November 2025",
      readTime: "9 menit",
      category: "Workshop",
      image: insightImages[5] || "",
      featured: false,
    },
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="wawasan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Wawasan & Artikel</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Baca kisah inspiratif, tips, dan wawasan terbaru tentang dunia seni dan seniman berkebutuhan khusus
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8"
          >
            Artikel Pilihan
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <button className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-2 group/btn transition-colors cursor-pointer">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8"
          >
            Artikel Terbaru
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full flex items-center gap-2">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
