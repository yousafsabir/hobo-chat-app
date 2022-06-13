import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput("")
  };
  return (
    <div className="App">
      {/* Message Input */}
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className="w-full my-8 flex justify-center space-x-4">
        <input
          className="bg-slate-200 border-2 rounded border-slate-300 py-1 px-3"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendMessage}
          disabled={!input}
          className="bg-slate-100 px-2 rounded active:scale-95"
        >
          Send Message
        </button>
      </form>

      {/* Display Messages */}
      <div className="container mx-auto my-8 grid grid-cols-1 gap-y-1">
        {
          messages.map((msg, idx) => {
            return (
              <span key={idx}>{msg}</span>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
