import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, Phone, ChevronRight, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import OpenAI from "openai";
import KnowledgeBaseService from "../services/KnowledgeBaseService";
import { ChatResponseStrategyManager } from "../strategies/ChatResponseStrategy";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";
const groqClient = new OpenAI({
  apiKey: GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true
});

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"selection" | "chat">("selection");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Selamat datang di Galeri Harapan. Saya asisten virtual Anda. Ada yang bisa dibantu?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const knowledgeBase = KnowledgeBaseService.getInstance();
  const strategyManager = new ChatResponseStrategyManager();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, mode]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      let botAnswer: string;

      const strategy = strategyManager.findStrategy(userMsg.text);
      if (strategy) {
        botAnswer = strategy.generateResponse(userMsg.text);
      } else {
        try {
          if (!GROQ_API_KEY) {
            throw new Error("API_KEY_MISSING");
          }

          const conversationHistory = messages
            .slice(-4)
            .map(m => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
            .join('\n');

          const systemPrompt = knowledgeBase.generatePrompt(userMsg.text, conversationHistory);
          
          const completion = await groqClient.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userMsg.text }
            ],
            temperature: 0.7,
            max_tokens: 1024,
            top_p: 0.95,
          });

          botAnswer = completion.choices[0]?.message?.content || "Maaf, tidak ada respons.";
        } catch (aiError: any) {
          console.error("Groq API Error:", aiError);
          botAnswer = "⚠️ Maaf, terjadi gangguan koneksi AI.\n\nSilakan coba lagi atau hubungi admin:\n📞 WhatsApp: +62 21 1234 5678\n✉️ Email: info@galeriharapan.id";
        }
      }

      const botMsg: Message = {
        id: Date.now() + 1,
        text: botAnswer,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error: any) {
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "⚠️ Terjadi kesalahan.\n\nSilakan hubungi admin:\n📞 WhatsApp: +62 21 1234 5678\n✉️ Email: info@galeriharapan.id",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/622112345678?text=Halo%20Admin%20Galeri%20Harapan,%20saya%20butuh%20bantuan.", "_blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setMode("selection");
  };

  return (
    <div className="fixed z-50 flex flex-col items-end gap-4" style={{ bottom: '1.5rem', right: '1.5rem' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ width: '350px', maxHeight: '600px' }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  {mode === "chat" ? <Bot className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-sm">Bantuan Galeri Harapan</h3>
                  <p className="text-xs text-purple-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online Sekarang
                  </p>
                </div>
              </div>
              {mode === "chat" && (
                <button 
                  onClick={() => setMode("selection")}
                  className="cursor-pointer text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors mr-1"
                  title="Kembali ke menu"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              )}
              <button 
                onClick={toggleChat}
                className="cursor-pointer text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gray-50 flex-1 relative" style={{ minHeight: '380px', overflowY: 'auto' }}>
              {mode === "selection" ? (
                <div className="p-6 flex flex-col gap-4 h-full justify-center">
                  <div className="text-center mb-2">
                    <h4 className="text-gray-900 font-medium mb-2">Halo! 👋</h4>
                    <p className="text-sm text-gray-900">Bagaimana Anda ingin menghubungi kami hari ini?</p>
                  </div>
                  
                  <button 
                    onClick={() => setMode("chat")}
                    className="cursor-pointer group flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all"
                    style={{ borderColor: '#f3f4f6' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#e9d5ff';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f3f4f6';
                      e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">Chat dengan AI</div>
                        <div className="text-xs text-gray-900">Tanya soal teknis & konten</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
                  </button>

                  <button 
                    onClick={handleWhatsAppClick}
                    className="cursor-pointer group flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all"
                    style={{ borderColor: '#f3f4f6' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#bbf7d0';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f3f4f6';
                      e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-gray-900">WhatsApp Admin</div>
                        <div className="text-xs text-gray-900">Bicara dengan manusia</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-full" style={{ height: '450px' }}>
                  <ScrollArea className="flex-1" style={{ padding: '1.25rem' }}>
                    <div className="flex flex-col gap-4 pb-6">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-3 items-end ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                          style={{
                            paddingLeft: '0',
                            paddingRight: msg.sender === "user" ? '1rem' : '0'
                          }}
                        >
                          {msg.sender === "bot" && (
                            <Avatar className="w-8 h-8 flex-shrink-0">
                              <AvatarImage src="/bot-avatar.png" />
                              <AvatarFallback className="bg-gray-100 text-gray-600 text-xs"></AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`rounded-2xl text-sm ${
                              msg.sender === "user"
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-800"
                            }`}
                            style={{ 
                              maxWidth: '75%',
                              marginLeft: msg.sender === "user" ? 'auto' : undefined,
                              padding: '0.875rem 1.125rem',
                              lineHeight: '1.6',
                              borderTopRightRadius: msg.sender === "user" ? '4px' : undefined,
                              borderTopLeftRadius: msg.sender === "bot" ? '4px' : undefined,
                              whiteSpace: 'pre-wrap',
                              wordWrap: 'break-word'
                            }}
                          >
                            {msg.text}
                            <div className={`text-right ${msg.sender === 'user' ? 'text-purple-200' : 'text-gray-700'}`} style={{ fontSize: '10px', marginTop: '0.5rem' }}>
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex gap-3 items-end flex-row" style={{ paddingLeft: '0' }}>
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs"></AvatarFallback>
                          </Avatar>
                          <div className="bg-gray-100 rounded-2xl" style={{ borderTopLeftRadius: '4px', padding: '0.875rem 1.125rem' }}>
                            <div className="flex gap-1">
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={scrollRef} />
                    </div>
                  </ScrollArea>
                  
                  <div className="bg-white border-t border-gray-100" style={{ padding: '1rem 1.25rem' }}>
                    <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ketik pesan Anda..."
                        className="rounded-full border-gray-200"
                        style={{ paddingRight: '3rem' }}
                        autoFocus
                      />
                      <Button 
                        type="submit" 
                        size="icon" 
                        className="absolute rounded-full bg-purple-600 hover:bg-purple-700"
                        style={{ right: '0.25rem', height: '2rem', width: '2rem' }}
                        disabled={!inputValue.trim() || isTyping}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                    <div className="text-center" style={{ marginTop: '0.75rem' }}>
                        <span className="text-gray-900" style={{ fontSize: '10px', lineHeight: '1.4' }}>
                            AI dapat membuat kesalahan. Cek info penting.
                        </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer group relative rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none bg-gradient-to-r from-purple-600 to-pink-500"
        style={{ width: '3.5rem', height: '3.5rem', boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.3)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
              <span className="absolute top-0 right-0 rounded-full border-2 border-white" style={{ width: '0.875rem', height: '0.875rem', backgroundColor: '#ef4444' }}></span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <div className="absolute bg-gray-900 text-white rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" style={{ right: '100%', marginRight: '1rem', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingTop: '0.375rem', paddingBottom: '0.375rem', fontWeight: 500 }}>
            Butuh Bantuan?
            <div className="absolute bg-gray-900" style={{ right: '-4px', top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: '0.5rem', height: '0.5rem' }}></div>
          </div>
        )}
      </motion.button>
    </div>
  );
}
