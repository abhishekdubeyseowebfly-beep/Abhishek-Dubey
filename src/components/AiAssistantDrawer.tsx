import React, { useState, useEffect, useRef } from 'react';
import { X, Zap, Send, Bot, User, Sparkles } from 'lucide-react';
import { AI_KNOWLEDGE } from '../data/portfolioData';
import { ChatMessage } from '../types';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  onClearInitialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: '👋 Welcome! I am Abhishek\'s AI portfolio agent. Ask me anything about his Java proficiencies, DSA practice, MCA curriculum, or five projects like Swasthik and the NIDS system!',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt, isOpen]);

  const handleSendMessage = (text: string) => {
    const query = text.trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      const matched = AI_KNOWLEDGE.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      const replyText = matched
        ? matched.response
        : "Abhishek is a dedicated Software & Web Developer skilled in Java, Python, DSA, and Web technologies. For specific details on his 5 projects or to discuss an opportunity, feel free to contact him at dubeyabhi9794@gmail.com or explore the Work tab!";

      const botMessage: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <>
      {/* Backdrop overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={onClose}
        />
      )}

      <aside
        id="ai-modal"
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] glass-panel border-l border-slate-700/80 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-4 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white flex items-center gap-2">
                  <span>Abhishek's AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Trained on projects &amp; resume
                </div>
              </div>
            </div>
            <button
              id="close-ai-drawer-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="space-y-1.5 text-[11px] font-medium flex-shrink-0">
            <span className="text-slate-500 font-mono uppercase tracking-wider">
              Suggested Queries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() =>
                  handleSendMessage("Summarize Abhishek's technical strengths and key skills.")
                }
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
              >
                Tech strengths?
              </button>
              <button
                onClick={() =>
                  handleSendMessage('Tell me about the Swasthik Hospital Management System.')
                }
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
              >
                Swasthik project?
              </button>
              <button
                onClick={() =>
                  handleSendMessage("What is Abhishek's educational background and CGPA?")
                }
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
              >
                Education summary?
              </button>
              <button
                onClick={() =>
                  handleSendMessage('How can I contact Abhishek for an interview?')
                }
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition-colors"
              >
                Contact info?
              </button>
            </div>
          </div>

          {/* Chat Stream Messages Container */}
          <div
            id="ai-chat-messages"
            className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs font-normal"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3.5 rounded-2xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-sky-600/30 border border-sky-500/40 text-sky-100 ml-8 text-right'
                    : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 mr-8'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <span className="text-sky-400 font-semibold text-[11px] block mb-1">
                    AI Agent:
                  </span>
                )}
                <p>{msg.text}</p>
              </div>
            ))}

            {isTyping && (
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-400 mr-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span className="text-[11px] font-mono">Synthesizing engineering response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="pt-4 border-t border-slate-800 space-y-2 flex-shrink-0">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <input
                id="ai-user-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a question about Abhishek..."
                className="flex-1 bg-[#060913] border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
              />
              <button
                type="submit"
                className="px-3.5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-[10px] text-slate-500 text-center font-mono">
              Real-time simulated AI agent
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
