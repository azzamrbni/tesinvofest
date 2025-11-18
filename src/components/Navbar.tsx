import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ currentPage, onNavigate, isDarkMode, onToggleDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", page: "home" },
    { label: "Tentang Misi", page: "tentang-misi" },
    { label: "Galeri Seniman", page: "galeri-seniman" },
    { label: "Wawasan", page: "wawasan" },
    { label: "Bantuan/FAQ", page: "bantuan-faq" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200 rounded-lg shadow-lg transition-all duration-300 bg-white">
          <div className="flex justify-between items-center h-20 px-6">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation("home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <img src="/Logo.png" alt="Galeri Harapan Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-gray-900 font-semibold tracking-tight">
                Galeri Harapan
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.page)}
                className={`transition-colors relative group cursor-pointer font-semibold ${
                  currentPage === item.page
                    ? "text-purple-600"
                    : "text-gray-900 hover:text-purple-600"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 transition-all ${
                  currentPage === item.page ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-purple-600" />
              ) : (
                <Moon className="w-5 h-5 text-purple-600" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="border border-gray-200 rounded-lg shadow-lg bg-white">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer font-semibold ${
                    currentPage === item.page
                      ? "bg-purple-100 text-purple-600"
                      : "text-gray-900 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}'
    </nav>
  );
}