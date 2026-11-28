
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/chat", methods=["POST"])
def chat():

    # Vérifier que la requête contient du JSON valide
    if not request.is_json:
        return jsonify({
            "error": "Content-Type must be application/json"
        }), 400

    data = request.get_json()

    # Vérifier que les données reçues sont un objet JSON
    if not isinstance(data, dict):
        return jsonify({
            "error": "Invalid JSON"
        }), 400

    # Récupérer le message
    message = data.get("message")

    # Vérifier que le message est une chaîne de caractères
    if not isinstance(message, str):
        return jsonify({
            "error": "Message must be a string"
        }), 400

    # Vérifier que le message n'est pas vide
    if not message.strip():
        return jsonify({
            "error": "Message is required"
        }), 400

    # Répondre au message valide
    return jsonify({
        "response": f"You said: {message}"
    }), 200


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5001, debug=True)

