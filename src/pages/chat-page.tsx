import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface IMessage {
  type: "user" | "ai";
  text: string;
  time?: string;
}

export const ChatPage = () => {
  const location = useLocation();
  const initialQuestion = location.state?.question;

  const [messages, setMessages] = useState<IMessage[]>([
    {
      type: "ai",
      text: "Hello! Ask me about electrical wiring, DB board, load calculation...",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle initial question from Hero Section
  useEffect(() => {
    if (initialQuestion) handleSend(initialQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion]);

  // Send message function
  const handleSend = async (question?: string) => {
    const userText = question || input;
    if (!userText.trim()) return;

    // Add user message first
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    if (!question) setInput("");

    try {
      // OpenAI API call
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userText }],
          temperature: 0.5,
          max_tokens: 300,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        },
      );

      const aiText = response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: aiText,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Sorry, I couldn't process your request. Please try again. Its now waiting for payment, when Mohammad Razib pay to ai then this chat will work",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }
  };

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 min-h-screen flex flex-col py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white border-x border-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        AI Electrical Assistant
      </h1>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto space-y-4 p-6 md:p-8 bg-gray-900 rounded-2xl shadow-inner scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-5 py-3 rounded-xl break-words shadow-lg ${
                msg.type === "user"
                  ? "bg-gray-400 text-black rounded-br-none"
                  : "bg-neutral-500 text-white rounded-bl-none"
              }`}
            >
              <p className="text-sm md:text-base">{msg.text}</p>
              {msg.time && (
                <span className="text-xs block mt-1 text-black text-right">
                  {msg.time}
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="mt-6 md:mt-8 flex gap-3">
        <input
          type="text"
          placeholder="Ask something about electrical..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 transition-all duration-200"
        />
        <button
          onClick={() => handleSend()}
          className="bg-primary hover:bg-secondary transition duration-300 text-black px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl"
        >
          Send
        </button>
      </div>
    </main>
  );
};
