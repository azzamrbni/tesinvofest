import { motion } from "motion/react";
import { Search, Filter, MapPin, Palette, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface Artist {
  id: number;
  name: string;
  location: string;
  specialty: string;
  artworks: number;
  image: string;
  featured: boolean;
}

interface ArtistsGalleryProps {
  artworkImages: string[];
}

export function ArtistsGallery({ artworkImages }: ArtistsGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Lukisan", "Patung", "Digital Art", "Keramik", "Fotografi"];

  const artists: Artist[] = [
    {
      id: 1,
      name: "Andi Prasetyo",
      location: "Jakarta",
      specialty: "Lukisan Abstrak",
      artworks: 45,
      image: artworkImages[0] || "",
      featured: true,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      location: "Bandung",
      specialty: "Lukisan Kontemporer",
      artworks: 32,
      image: artworkImages[1] || "",
      featured: true,
    },
    {
      id: 3,
      name: "Budi Santoso",
      location: "Yogyakarta",
      specialty: "Patung Modern",
      artworks: 28,
      image: artworkImages[2] || "",
      featured: false,
    },
    {
      id: 4,
      name: "Dewi Lestari",
      location: "Surabaya",
      specialty: "Keramik Artistik",
      artworks: 56,
      image: artworkImages[3] || "",
      featured: true,
    },
    {
      id: 5,
      name: "Rudi Hartono",
      location: "Bali",
      specialty: "Digital Illustration",
      artworks: 67,
      image: artworkImages[4] || "",
      featured: false,
    },
    {
      id: 6,
      name: "Maya Angelina",
      location: "Medan",
      specialty: "Lukisan Cat Air",
      artworks: 41,
      image: artworkImages[5] || "",
      featured: true,
    },
  ];

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Semua" || artist.specialty.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="galeri-seniman" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 mb-4">Galeri Seniman</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan dan jelajahi karya-karya inspiratif dari seniman berbakat di seluruh Indonesia
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari seniman atau spesialisasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
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

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Featured Badge */}
                {artist.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Unggulan</span>
                  </div>
                )}

                {/* Artist Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback
                    src={artist.image}
                    alt={`Karya ${artist.name}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{artist.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Palette className="w-4 h-4" />
                      <span>{artist.specialty}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-500">
                      {artist.artworks} Karya
                    </span>
                    <button className="text-purple-600 hover:text-purple-700 transition-colors">
                      Lihat Profil →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredArtists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              Tidak ada seniman yang ditemukan. Coba kata kunci lain.
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredArtists.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Lihat Lebih Banyak Seniman
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
