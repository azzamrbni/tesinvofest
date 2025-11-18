export interface IChatResponseStrategy {
  canHandle(message: string): boolean;
  generateResponse(message: string, conversationHistory?: string): string;
}

export class GreetingStrategy implements IChatResponseStrategy {
  private greetings = ['halo', 'hai', 'hi', 'hello', 'selamat', 'pagi', 'siang', 'sore', 'malam'];

  canHandle(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return this.greetings.some(greeting => lowerMessage.includes(greeting)) && message.length < 20;
  }

  generateResponse(): string {
    return "🌟 Halo! Selamat datang di Galeri Harapan.\n\nSaya siap membantu Anda:\n\n🎨 Info platform\n🖼 Museum VR\n📝 Pendaftaran seniman\n💰 Cara beli karya\n\nAda yang bisa saya bantu?";
  }
}

export class VRTroubleshootStrategy implements IChatResponseStrategy {
  private keywords = ['vr', 'virtual', 'museum', 'error', 'tidak bisa', 'loading', 'lambat', 'crash'];

  canHandle(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return this.keywords.some(keyword => lowerMessage.includes(keyword));
  }

  generateResponse(): string {
    return "🎨 Solusi Museum VR:\n\n1️⃣ Clear cache browser (Ctrl+Shift+Del)\n2️⃣ Update browser terbaru\n3️⃣ Mode landscape di HP\n4️⃣ Koneksi min 5 Mbps\n\nBrowser: Chrome, Firefox, Edge terbaru.\n\nMasih error? WhatsApp: +62 21 1234 5678";
  }
}

export class RegistrationStrategy implements IChatResponseStrategy {
  private keywords = ['daftar', 'register', 'seniman', 'bergabung', 'join', 'cara jadi'];

  canHandle(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return this.keywords.some(keyword => lowerMessage.includes(keyword));
  }

  generateResponse(): string {
    return "📝 Pendaftaran seniman 100% GRATIS:\n\nSyarat:\n✅ Seniman berkebutuhan khusus\n✅ Portofolio 3 karya\n✅ KTP/identitas\n\nLangkah:\n1️⃣ Klik 'Daftar Sebagai Seniman'\n2️⃣ Isi biodata & upload\n3️⃣ Verifikasi email\n4️⃣ Approval 1-3 hari\n\nKomisi 10% dari penjualan.\n\n📞 WhatsApp: +62 21 1234 5678";
  }
}

export class PurchaseStrategy implements IChatResponseStrategy {
  private keywords = ['beli', 'bayar', 'harga', 'pembelian', 'checkout', 'metode pembayaran'];

  canHandle(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return this.keywords.some(keyword => lowerMessage.includes(keyword));
  }

  generateResponse(): string {
    return "💳 Cara Beli Karya:\n\n1️⃣ Pilih karya → 'Lihat Detail'\n2️⃣ Klik 'Beli Sekarang'\n3️⃣ Input alamat pengiriman\n4️⃣ Pilih metode pembayaran\n\nMetode:\n💳 Transfer Bank\n📱 E-Wallet (GoPay, OVO, Dana)\n💸 Kartu Kredit/Debit\n📲 QRIS\n\nGaransi 100% uang kembali (7 hari).\n\n📞 WhatsApp: +62 21 1234 5678";
  }
}

export class ContactStrategy implements IChatResponseStrategy {
  private keywords = ['kontak', 'hubungi', 'telepon', 'email', 'whatsapp', 'alamat', 'customer service'];

  canHandle(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return this.keywords.some(keyword => lowerMessage.includes(keyword));
  }

  generateResponse(): string {
    return "📞 Kontak Kami:\n\n📱 WhatsApp: +62 21 1234 5678\n✉️ Email: info@galeriharapan.id\n☎️ Hotline: 1500-SENI (toll free)\n\nAlamat:\nJl. Seni Raya No. 123\nGedung Kreativitas Lt. 5\nKebayoran Baru, Jakarta Selatan\n\nJam operasional: 09:00-17:00 WIB";
  }
}

export class ChatResponseStrategyManager {
  private strategies: IChatResponseStrategy[] = [
    new GreetingStrategy(),
    new VRTroubleshootStrategy(),
    new RegistrationStrategy(),
    new PurchaseStrategy(),
    new ContactStrategy(),
  ];

  findStrategy(message: string): IChatResponseStrategy | null {
    return this.strategies.find(strategy => strategy.canHandle(message)) || null;
  }

  hasQuickResponse(message: string): boolean {
    return this.findStrategy(message) !== null;
  }
}
