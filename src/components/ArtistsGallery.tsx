import { motion } from "motion/react";
import { Filter } from "lucide-react";
import { Artist } from "../types/Artist";
import { ArtistCard } from "./ui/ArtistCard";
import { SearchBar, CategoryFilter } from "./ui/FilterComponents";

interface ArtistsGalleryProps {
  artists: Artist[];
  categories: string[];
  searchQuery: string;
  selectedCategory: string;
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onArtistClick?: (artistId: number) => void;
  onLoadMore?: () => void;
}

export function ArtistsGallery({ 
  artists, 
  categories, 
  searchQuery, 
  selectedCategory, 
  onSearchChange, 
  onCategoryChange,
  onArtistClick,
  onLoadMore
}: ArtistsGalleryProps) {

  return (
    <section id="galeri-seniman" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Galeri Seniman</h2>
          <p className="text-gray-900 dark:text-white max-w-2xl mx-auto">
            Temukan dan jelajahi karya-karya inspiratif dari seniman berbakat di seluruh Indonesia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Cari seniman atau spesialisasi..."
            />
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ArtistCard 
                artist={artist} 
                onProfileClick={onArtistClick}
              />
            </motion.div>
          ))}
        </div>

        {artists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-900 dark:text-white">
              Tidak ada seniman yang ditemukan. Coba kata kunci lain.
            </p>
          </motion.div>
        )}

        {artists.length > 0 && onLoadMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <button 
              onClick={onLoadMore}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Lihat Lebih Banyak Seniman
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
