import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { Home } from "./pages/Home";
import { TentangMisi } from "./pages/TentangMisi";
import { GaleriSeniman } from "./pages/GaleriSeniman";
import { Wawasan } from "./pages/Wawasan";
import { BantuanFAQ } from "./pages/BantuanFAQ";
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

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
    <div className="min-h-screen pt-8">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="pb-16">{renderPage()}</main>
      <Footer />
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-24 right-6 z-[100] w-14 h-14 bg-white rounded-full shadow-2xl border-2 border-purple-500 flex items-center justify-center hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Toggle dark mode"
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-purple-600" />
        ) : (
          <Moon className="w-6 h-6 text-purple-600" />
        )}
      </button>
      <ChatWidget />
    </div>
  );
}
