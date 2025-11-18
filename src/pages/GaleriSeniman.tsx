import { useState, useMemo } from "react";
import { ArtistsGallery } from "../components/ArtistsGallery";
import { Artist, ArtistFilter } from "../types/Artist";

export function GaleriSeniman() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Lukisan", "Patung", "Digital Art", "Keramik", "Fotografi"];

  const galleryArtworks = [
    "https://images.unsplash.com/photo-1713815539197-78db123d8f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzYzMTc3NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1683222042853-37cd29faf895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjMyMTU3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGFydHxlbnwxfHx8fDE3NjMxMjUzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1545181824-24c265f8fd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0fGVufDF8fHx8MTc2MzEyMzQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1736056922338-8e1f135fbcf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGluZyUyMGFydHdvcmt8ZW58MXx8fHwxNzYzMjE1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2MzE1ODQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const allArtists: Artist[] = [
    {
      id: 1,
      name: "Andi Prasetyo",
      location: "Jakarta",
      specialty: "Lukisan Abstrak",
      artworks: 45,
      image: galleryArtworks[0],
      featured: true,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      location: "Bandung",
      specialty: "Lukisan Kontemporer",
      artworks: 32,
      image: galleryArtworks[1],
      featured: true,
    },
    {
      id: 3,
      name: "Budi Santoso",
      location: "Yogyakarta",
      specialty: "Patung Modern",
      artworks: 28,
      image: galleryArtworks[2],
      featured: false,
    },
    {
      id: 4,
      name: "Dewi Lestari",
      location: "Surabaya",
      specialty: "Keramik Artistik",
      artworks: 56,
      image: galleryArtworks[3],
      featured: true,
    },
    {
      id: 5,
      name: "Rudi Hartono",
      location: "Bali",
      specialty: "Digital Art",
      artworks: 67,
      image: galleryArtworks[4],
      featured: false,
    },
    {
      id: 6,
      name: "Maya Angelina",
      location: "Medan",
      specialty: "Lukisan Cat Air",
      artworks: 41,
      image: galleryArtworks[5],
      featured: true,
    },
  ];

  const filteredArtists = useMemo(() => {
    return ArtistFilter.filterArtists(allArtists, {
      searchQuery,
      category: selectedCategory,
    });
  }, [searchQuery, selectedCategory, allArtists]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleArtistClick = (artistId: number) => {
    console.log(`Navigating to artist profile: ${artistId}`);
  };

  const handleLoadMore = () => {
    console.log("Loading more artists...");
  };

  return (
    <div className="pt-15">
      <ArtistsGallery
        artists={filteredArtists}
        categories={categories}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        onArtistClick={handleArtistClick}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}
