
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
from tools import execute_tool

app = Flask(__name__)
CORS(app)


@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()
    message = data.get("message", "")

    if not isinstance(message, str) or not message.strip():
        return jsonify({"error": "Invalid message"}), 400

    # Find order reference
    match = re.search(r"\bA\d+\b", message, re.IGNORECASE)

    if not match:
        return jsonify({
            "response": "Could you provide your order number?"
        })

    order_id = match.group().upper()

    # Execute tool
    result = execute_tool(
        name="get_order_status",
        arguments={"order_id": order_id},
        user_message=message
    )

    if "error" in result:
        return jsonify({"response": result["error"]})

    return jsonify({
        "response": (
            f"Order {result['order_id']} "
            f"has status: {result['status']}."
        )
    })


if __name__ == "__main__":
    app.run(port=5001, debug=True)
