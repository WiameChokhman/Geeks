
import requests

EXPRESS_URL = "http://localhost:3000"


def execute_tool(name, arguments, user_message):

    # Check tool name
    if name != "get_order_status":
        return {"error": "Unknown tool"}

    # Validate arguments
    order_id = arguments.get("order_id")

    if not isinstance(order_id, str):
        return {"error": "order_id must be a string"}

    if not order_id.strip():
        return {"error": "order_id is required"}

    # Call Express API
    try:
        response = requests.get(
            f"{EXPRESS_URL}/orders/{order_id}"
        )

        response.raise_for_status()

        return response.json()

    except requests.exceptions.RequestException:
        return {"error": "Unable to retrieve order"}
