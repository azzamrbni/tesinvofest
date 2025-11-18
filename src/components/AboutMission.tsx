import { motion } from "motion/react";
import { Target, Eye, Award, Globe, Accessibility, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutMissionProps {
  studioImage: string;
  teamImage: string;
}

export function AboutMission({ studioImage, teamImage }: AboutMissionProps) {
  const values = [
    {
      icon: Accessibility,
      title: "Aksesibilitas Universal",
      description: "Kami berkomitmen untuk menciptakan platform yang dapat diakses oleh semua orang, tanpa terkecuali. Setiap fitur dirancang dengan prinsip desain universal.",
    },
    {
      icon: Award,
      title: "Kualitas & Keunggulan",
      description: "Kami menghargai setiap karya seni dengan standar profesional yang tinggi, memberikan platform terbaik untuk menampilkan karya-karya luar biasa.",
    },
    {
      icon: Globe,
      title: "Jangkauan Global",
      description: "Melalui teknologi digital, kami membawa karya seniman Indonesia ke panggung dunia, membuka peluang kolaborasi internasional.",
    },
    {
      icon: Sparkles,
      title: "Inovasi Berkelanjutan",
      description: "Kami terus berinovasi dalam teknologi VR dan platform digital untuk memberikan pengalaman terbaik bagi seniman dan pengunjung.",
    },
  ];

  const stats = [
    { number: "500+", label: "Seniman Terdaftar" },
    { number: "2000+", label: "Karya Dipamerkan" },
    { number: "50K+", label: "Pengunjung Virtual" },
    { number: "15+", label: "Negara Terjangkau" },
  ];

  return (
    <section id="tentang-misi" className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-6">Tentang Misi Kami</h2>
          <p className="text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Galeri Harapan lahir dari visi untuk menciptakan ekosistem seni yang inklusif,
            di mana setiap seniman memiliki kesempatan yang sama untuk berbagi karya dan
            mendapatkan pengakuan yang layak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
              <ImageWithFallback
                src={studioImage}
                alt="Studio seniman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Visi Kami</h3>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Menjadi platform galeri virtual terdepan di Indonesia yang memberdayakan
                seniman berkebutuhan khusus untuk berkarya, berkembang, dan diakui secara
                global melalui teknologi yang inovatif dan inklusif.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
              <ImageWithFallback
                src={teamImage}
                alt="Tim Galeri Harapan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Misi Kami</h3>
              </div>
              <ul className="text-gray-900 leading-relaxed space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Menyediakan platform digital yang aksesibel untuk seniman disabilitas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Meningkatkan apresiasi masyarakat terhadap seni inklusif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Menciptakan peluang ekonomi bagi seniman berkebutuhan khusus</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-white mb-2">{stat.number}</div>
                <p className="text-purple-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-gray-900 text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl hover:bg-purple-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-900 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
