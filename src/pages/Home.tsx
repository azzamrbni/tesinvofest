import { HeroPortal } from "../components/HeroPortal";
import { MissionSection } from "../components/MissionSection";
import { FeaturedArtists } from "../components/FeaturedArtists";

export function Home() {
  const galleryImage = "https://images.unsplash.com/photo-1682660634231-3b73b999cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMjE1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const artworks = [
    "https://images.unsplash.com/photo-1736056922338-8e1f135fbcf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGluZyUyMGFydHdvcmt8ZW58MXx8fHwxNzYzMjE1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwYXJ0fGVufDF8fHx8MTc2MzE1ODQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1762344694142-7d09f51a685c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzY3VscHR1cmUlMjBhcnR8ZW58MXx8fHwxNzYzMjE1NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <>
      <HeroPortal galleryImage={galleryImage} />
      <MissionSection />
      <FeaturedArtists artworks={artworks} />
    </>
  );
}
