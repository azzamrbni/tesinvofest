import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { TentangMisi } from "./pages/TentangMisi";
import { GaleriSeniman } from "./pages/GaleriSeniman";
import { Wawasan } from "./pages/Wawasan";
import { BantuanFAQ } from "./pages/BantuanFAQ";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Handle browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

    // Set initial page from hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "tentang-misi":
        return <TentangMisi />;
      case "galeri-seniman":
        return <GaleriSeniman />;
      case "wawasan":
        return <Wawasan />;
      case "bantuan-faq":
        return <BantuanFAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
