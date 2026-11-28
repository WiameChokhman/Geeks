//Réponse aux qestion : Pourquoi le deuxième message ne contient-il pas le premier ?
//Parce que React envoie uniquement le message actuel à Flask et que le backend ne conserve aucun historique de conversation.
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    setError("");
    setResponse("");
    setLoading(true);

    try {
      const result = await axios.post(
        "http://127.0.0.1:5001/chat",
        { message }
      );

      setResponse(result.data.response);
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Impossible de contacter le serveur Flask."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Chatbot Test</h1>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écris ton message..."
        />

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Send"}
        </button>
      </form>

      {response && <p className="success">{response}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;

