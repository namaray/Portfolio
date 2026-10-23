"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Tape } from "@/components/Notebook/Paper";

type Message = {
  role: "user" | "bot";
  content: string;
  // Error replies are shown but never sent back as history
  failed?: boolean;
};

// Turns of earlier conversation sent with each question, so follow-ups
// like "tell me more about that" can be answered. The API accepts up to 20.
const MAX_HISTORY = 12;

// Shown until the visitor asks their first question
const SUGGESTIONS = ["What is ARGUS?", "What are his skills?", "How can I contact him?"];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! I'm an AI assistant that answers from Namare's résumé and portfolio. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the newest message in view. Scroll the panel itself: scrollIntoView
  // would also scroll the page behind it.
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  const send = async (text: string) => {
    const userMsg = text.trim();
    if (!userMsg || isLoading) return;

    // Skip the canned greeting (index 0) and failed replies
    const history = messages
      .slice(1)
      .filter((m) => !m.failed)
      .slice(-MAX_HISTORY)
      .map((m) => ({ role: m.role === "bot" ? "assistant" : "user", content: m.content }));
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      // Served by this app's own route (src/app/api/chat/route.ts)
      const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL || "/api/chat";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg, history }),
      });

      const data = await res.json().catch(() => null);
      if (!data?.answer) {
        throw new Error("Failed to fetch response");
      }

      // Rate-limit and model-outage replies still carry a message worth showing
      setMessages((prev) => [...prev, { role: "bot", content: data.answer, failed: !res.ok }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I am having trouble connecting right now. Please try again later.",
          failed: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -0.6 }}
            exit={{ opacity: 0, y: 24, rotate: 2 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative mb-5 w-[calc(100vw-2rem)] max-w-[400px] h-[min(540px,calc(100dvh-8rem))] chat-paper text-ink flex flex-col shadow-[0_2px_4px_rgba(0,0,0,0.06),0_24px_48px_-16px_rgba(29,43,79,0.45)]"
            role="dialog"
            aria-label="Chat with Namare's AI assistant"
          >
            <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={-2} />

            {/* Header */}
            <div className="flex justify-between items-start px-5 pt-6 pb-3 border-b-2 border-dashed border-rule">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pencil">Résumé chatbot</p>
                <h3 className="font-hand text-3xl font-bold leading-none mt-1">Ask about Namare</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 -mr-1 text-ink-soft hover:text-red-pen transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {messages.map((msg, idx) =>
                msg.role === "user" ? (
                  <div key={idx} className="flex justify-end">
                    <p
                      className={`max-w-[85%] bg-sticky px-3 py-1.5 font-hand text-xl leading-snug shadow-[0_1px_1px_rgba(0,0,0,0.08),0_6px_10px_-6px_rgba(0,0,0,0.3)] ${
                        idx % 2 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      {msg.content}
                    </p>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className={`chat-md max-w-[92%] font-serif text-[15px] leading-relaxed ${
                      msg.failed ? "text-red-pen" : "text-ink"
                    }`}
                  >
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ),
              )}

              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="font-hand text-lg leading-none px-2.5 py-1.5 border-[1.5px] border-ink/40 rounded-[3px] text-ink-soft hover:bg-hl-yellow hover:border-ink hover:text-ink transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <p className="font-hand text-xl text-pencil" aria-live="polite">
                  thinking
                  <span className="inline-block animate-pulse">…</span>
                </p>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="flex items-end gap-3 px-5 pb-5 pt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="write a question…"
                aria-label="Your question"
                className="flex-1 min-w-0 bg-transparent border-b-2 border-ink/60 focus:border-red-pen outline-none font-hand text-2xl leading-tight pb-0.5 placeholder:text-pencil/70 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="shrink-0 w-10 h-10 flex items-center justify-center bg-ink text-paper rounded-[3px] shadow-[2px_2px_0_var(--color-red-pen)] hover:shadow-[1px_1px_0_var(--color-red-pen)] hover:translate-x-[1px] hover:translate-y-[1px] disabled:opacity-40 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0 transition-all"
                aria-label="Send"
              >
                <ArrowUp size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button: a sticky note */}
      <motion.button
        whileHover={{ rotate: 0, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={false}
        animate={{ rotate: isOpen ? 0 : -6 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-sticky text-ink flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.08),0_10px_18px_-8px_rgba(0,0,0,0.4)]"
        aria-label="Toggle chat"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <span className="font-hand text-2xl font-bold leading-[0.9]">ask<br />me?</span>}
      </motion.button>
    </div>
  );
}
