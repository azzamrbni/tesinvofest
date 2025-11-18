import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface HeroPortalProps {
  galleryImage: string;
}

export function HeroPortal({ galleryImage }: HeroPortalProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-7xl w-full mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-gray-900 mb-4">
            Selamat Datang di Galeri Harapan
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Jelajahi ruang seni virtual yang menampilkan karya-karya luar biasa dari seniman berkebutuhan khusus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-label="Masuk ke Museum VR"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={galleryImage}
                alt="Museum VR Interior Preview"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-purple-900/40"
                animate={{
                  opacity: isHovered ? 0.7 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: isHovered
                  ? "0 0 60px rgba(147, 51, 234, 0.5), 0 0 100px rgba(236, 72, 153, 0.3)"
                  : "0 0 0px rgba(147, 51, 234, 0)",
              }}
              transition={{ duration: 0.4 }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  y: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  className="mb-6 inline-flex items-center justify-center"
                  animate={{
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="/public/museum.html">
                    <button className="bg-white hover:bg-gray-50 text-purple-900 px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-xl transition-colors cursor-pointer">
                      <span>Masuk ke Museum VR</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                </motion.div>

                <motion.p
                  className="text-white mt-6"
                  animate={{
                    opacity: isHovered ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Arahkan kursor untuk memulai
                </motion.p>
              </motion.div>
            </div>

            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: "100%",
                      opacity: 0,
                    }}
                    animate={{
                      y: "-10%",
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <a
              href="#galeri-seniman"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-purple-600 transition-colors group"
            >
              <span>Atau, jelajahi Galeri 2D kami</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}