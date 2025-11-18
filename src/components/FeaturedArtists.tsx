import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Artist {
  id: number;
  name: string;
  artwork: string;
  description: string;
}

interface FeaturedArtistsProps {
  artworks: string[];
}

export function FeaturedArtists({ artworks }: FeaturedArtistsProps) {
  const artists: Artist[] = [
    {
      id: 1,
      name: "Andi Prasetyo",
      artwork: artworks[0] || "",
      description: "Seniman abstrak dengan keahlian dalam eksplorasi warna dan emosi",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      artwork: artworks[1] || "",
      description: "Pelukis kontemporer yang mengekspresikan pengalaman hidup melalui kanvas",
    },
    {
      id: 3,
      name: "Budi Santoso",
      artwork: artworks[2] || "",
      description: "Seniman patung yang menciptakan karya-karya penuh makna dan inspirasi",
    },
  ];

  return (
    <section id="galeri" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">
            Seniman Unggulan Bulan Ini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kenali para seniman berbakat yang karyanya sedang dipamerkan di galeri kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <ImageWithFallback
                    src={artist.artwork}
                    alt={`Karya oleh ${artist.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {artist.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all group/btn cursor-pointer">
                    <span>Lihat Profil</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#galeri-seniman"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors group"
          >
            <span>Lihat Semua Seniman</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}