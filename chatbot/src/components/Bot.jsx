import React, { useState, useRef } from 'react';
import { fetchReply } from '../service/api';
import DarkVeil from './DarkVeil/DarkVeil';
import { GoogleGenAI } from "@google/genai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey});
// const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false)
  const messageEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', content: input };
    setMessages(prev => [...prev, newMessage]);
    setLoading(true);

    try {
      // const result = await model.generateContent(input);
      // const text = result.response.text();
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
      });
      setInput('')
      const text = response.candidates[0].content.parts[0].text;
      console.log(text);
      const reply = { sender: 'AI', content: text }
      setMessages(prev => [...prev, reply]);
    } catch (error) {
      console.error('Error generating content:', error);
      setMessages(prev => [...prev, { sender: 'AI', content: '⚠️ Error getting response.' }]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };


  const handleClear = () => {
    setMessages([]);
  };

  return (
    <>
      <div className='w-full min-h-screen relative'>
        <DarkVeil hueShift={49}
        />
        <div className='bg-transparent mx-auto w-full text-white absolute top-0 min-h-screen p-6'>
          {/* Header */}
          <div className='text-center text-4xl font-bold text-white tracking-wide comic'>
            ASK.IO 🤖
          </div>

          {/* Chat container */}
          <div className='mx-auto w-[90vw] max-w-3xl mt-6 p-4 rounded-lg h-[65vh] overflow-y-auto bg-white/10 backdrop-blur-lg border border-white/20
 shadow-2xl'>

            {messages.length === 0 && (
              <div className='text-center text-gray-400 mt-24'>No messages yet. Start chatting!</div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap ${msg.sender === 'user'
                  ? 'ml-auto bg-[#1f2937]/70 text-white backdrop-blur-md border border-white/10 shadow-md'
                  : 'mr-auto bg-white/10 backdrop-blur-md text-white border border-white/10 shadow-sm'}`}
              >
                {msg.content}
              </div>
            ))}
            {
              loading ? <p className='my-2 px-4 py-2 rounded-xl max-w-[75%] whitespace-pre-wrap mr-auto bg-white/10 backdrop-blur-md text-white border border-white/10 shadow-sm'>Loading reply...</p> : <p></p>
            }
            <div ref={messageEndRef} />
          </div>

          {/* Input area */}
          <div className='mx-auto w-[90vw] max-w-3xl mt-4 flex max-xs:flex-col gap-2 items-center'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type your message...'
              className='max-xs:w-full flex-grow bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400'
            />

            <button
              onClick={handleSend}
              className='max-xs:w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg transition shadow-md'
            >
              Send
            </button>
          </div>

          {/* Clear chat button */}
          <div className='mx-auto w-[90vw] max-w-3xl mt-2 text-right'>
            <button
              onClick={handleClear}
              className='text-gray-400 hover:text-red-500 text-sm hover:underline transition'
            >
              🧹 Clear Chat
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Bot;
