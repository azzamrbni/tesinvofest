import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Tentang Kami", href: "#home" },
    { label: "Galeri Seniman", href: "#galeri-seniman" },
    { label: "Wawasan", href: "#wawasan" },
    { label: "Bantuan/FAQ", href: "#bantuan-faq" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@galeriharapan.id", href: "mailto:info@galeriharapan.id" },
    { icon: Phone, text: "+62 21 1234 5678", href: "tel:+622112345678" },
    { icon: MapPin, text: "Jakarta, Indonesia", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white">GH</span>
              </div>
              <span className="text-white">Galeri Harapan</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform digital yang memberdayakan seniman berkebutuhan khusus untuk menampilkan
              karya mereka kepada dunia. Bersama, kita membuka peluang dan menginspirasi perubahan.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#galeri-seniman" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Galeri Seniman
                </a>
              </li>
              <li>
                <a href="#wawasan" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Wawasan
                </a>
              </li>
              <li>
                <a href="#bantuan-faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Bantuan/FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Kontak</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.text}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
                    >
                      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{info.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 Galeri Harapan. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                Aksesibilitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}