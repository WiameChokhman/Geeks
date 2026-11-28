
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Orders database (synthetic data)

const orders = {
    A104: {
        order_id: "A104",
        status: "delivered",
        delivery_estimate: "2026-12-02"
    },

    A205: {
        order_id: "A205",
        status: "delivered",
        delivery_estimate: null
    },

    A407: {
        order_id: "A407",
        status: "processing",
        delivery_estimate: null
    }
};

// Get order status
app.get("/orders/:order_id", (req, res) => {
  const orderId = req.params.order_id;

  const order = orders[orderId];

  if (!order) {
    return res.status(404).json({
      error: "Order not found"
    });
  }

  res.json(order);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
