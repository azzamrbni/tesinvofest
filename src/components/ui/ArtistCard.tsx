import { Artist } from "../types/Artist";

export interface ArtistCardProps {
  artist: Artist;
  onProfileClick?: (artistId: number) => void;
}

export function ArtistCard({ artist, onProfileClick }: ArtistCardProps) {
  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick(artist.id);
    }
  };

  return (
    <div className="group relative">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {artist.featured && (
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm">Unggulan</span>
          </div>
        )}

        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={artist.image}
            alt={`Karya ${artist.name}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{artist.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span>{artist.specialty}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-gray-500 text-sm">
              {artist.artworks} Karya
            </span>
            <button 
              onClick={handleProfileClick}
              className="text-purple-600 hover:text-purple-700 transition-colors cursor-pointer font-medium"
            >
              Lihat Profil →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
