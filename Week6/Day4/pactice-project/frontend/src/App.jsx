
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://127.0.0.1:5001/chat",
        { message }
      );

      setResponse(result.data.response);
    } catch (error) {
      setResponse("Server error");
    }
  };

  return (
    <div className="container">
      <h1>Tool Calling Chatbot</h1>

      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your order..."
        />

        <button type="submit">Send</button>
      </form>

      <p>{response}</p>
    </div>
  );
}

export default App;
