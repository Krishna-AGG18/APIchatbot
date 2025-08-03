const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;


export  async function  fetchReply(messgae) {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost",  // Change to your actual domain on deploy
        "X-Title": "My AI Chatbot"
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",  // You can change to Claude or Mixtral too
        messages: [{ role: "user", content: `${messgae}`}]
      })
    });
    const data = await res.json();
    console.log(data);

    const reply = data.choices?.[0]?.message?.content;
    return reply? reply : 'No Reply Recieved';
}