const express = require("express");
const cors = require("cors");
const quoteRoutes = require("./routes/quotes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🎯 Welcome to QuoteSphere API!",
    endpoints: ["/api/random", "/api/category/:name"],
  });
});

app.use("/api", quoteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
