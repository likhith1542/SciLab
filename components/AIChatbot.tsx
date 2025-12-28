
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a helpful SciLab Health Assistant. Provide general information about medical diagnostic tests (blood tests, genetics, etc.). Always include a disclaimer that you are an AI and the user should consult a real medical professional for specific health advice. Keep answers professional and supportive.",
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again or contact our support.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI assistant. Please check your internet or try later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined icon-filled">smart_toy</span>
              </div>
              <div className="leading-none">
                <h4 className="font-bold text-sm">SciLab AI Assistant</h4>
                <span className="text-[10px] opacity-80">Available 24/7</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50 dark:bg-background-dark/30">
            {messages.length === 0 && (
               <div className="text-center py-10 px-4">
                 <p className="text-slate-500 text-sm">Hello! Ask me anything about our diagnostic services or general health tests.</p>
               </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                m.role === 'user' 
                  ? 'bg-primary text-slate-900 self-end rounded-br-none' 
                  : 'bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 self-start rounded-bl-none shadow-sm'
              }`}>
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-white dark:bg-surface-dark p-3 rounded-2xl rounded-bl-none shadow-sm self-start flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a health question..."
                className="flex-1 bg-slate-100 dark:bg-background-dark border-none rounded-lg text-sm px-4 h-10 focus:ring-1 focus:ring-primary"
              />
              <button 
                type="submit"
                className="size-10 bg-primary text-slate-900 rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 bg-primary text-slate-900 rounded-full shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined text-[30px] icon-filled">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
};

export default AIChatbot;
