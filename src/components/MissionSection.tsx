import { motion } from "motion/react";
import { Heart, Users, Lightbulb } from "lucide-react";

export function MissionSection() {
  const features = [
    {
      icon: Heart,
      title: "Inklusif",
      description: "Memberikan akses setara bagi semua seniman untuk menampilkan karya mereka",
    },
    {
      icon: Users,
      title: "Memberdayakan",
      description: "Menciptakan peluang ekonomi dan pengakuan bagi seniman disabilitas",
    },
    {
      icon: Lightbulb,
      title: "Inspiratif",
      description: "Mengubah perspektif masyarakat tentang seni dan kemampuan",
    },
  ];

  return (
    <section id="misi" className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-6">
            Memberi Panggung, Membuka Peluang.
          </h2>
          <p className="text-gray-900 dark:text-white max-w-3xl mx-auto leading-relaxed">
            Galeri Harapan adalah platform digital yang didedikasikan untuk seniman berkebutuhan khusus.
            Kami percaya bahwa setiap karya seni memiliki suara yang layak didengar, dan setiap seniman
            berhak mendapatkan panggung untuk berbagi visi mereka dengan dunia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-purple-900/40 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-900 dark:text-white leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#tentang-misi"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Pelajari Lebih Lanjut Tentang Misi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}