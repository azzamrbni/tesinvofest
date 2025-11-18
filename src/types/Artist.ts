export interface Artist {
  id: number;
  name: string;
  location: string;
  specialty: string;
  artworks: number;
  image: string;
  featured: boolean;
}

export interface ArtistFilterCriteria {
  searchQuery: string;
  category: string;
}

export class ArtistFilter {
  static filterArtists(artists: Artist[], criteria: ArtistFilterCriteria): Artist[] {
    return artists.filter((artist) => {
      const matchesSearch = this.matchesSearchQuery(artist, criteria.searchQuery);
      const matchesCategory = this.matchesCategory(artist, criteria.category);
      return matchesSearch && matchesCategory;
    });
  }

  private static matchesSearchQuery(artist: Artist, query: string): boolean {
    if (!query) return true;
    const lowerQuery = query.toLowerCase();
    return (
      artist.name.toLowerCase().includes(lowerQuery) ||
      artist.specialty.toLowerCase().includes(lowerQuery) ||
      artist.location.toLowerCase().includes(lowerQuery)
    );
  }

  private static matchesCategory(artist: Artist, category: string): boolean {
    return category === "Semua" || artist.specialty.includes(category);
  }

  static sortArtists(artists: Artist[], sortBy: 'name' | 'artworks' | 'featured'): Artist[] {
    const sorted = [...artists];
    
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'artworks':
        return sorted.sort((a, b) => b.artworks - a.artworks);
      case 'featured':
        return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      default:
        return sorted;
    }
  }
}
