const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors()); // Ensure CORS is applied once before your routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Import routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");

// Use routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
