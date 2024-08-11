const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/BannerDB");

// Define Banner schema and model
const bannerSchema = new mongoose.Schema({
  description: String,
  timer: Number,
  link: String,
  isVisible: Boolean,
});

const Banner = mongoose.model("Banner", bannerSchema);

async function seedBannerData() {
  const existingBanner = await Banner.findOne();
  if (!existingBanner) {
    const sampleBanners = [
      {
        description: "Welcome to our Summer Sale!",
        timer: 60, // 1 minute
        link: "https://example.com/summer-sale",
        isVisible: true,
      },
      {
        description: "New Collection Launch!",
        timer: 120, // 2 minutes
        link: "https://example.com/new-collection",
        isVisible: true,
      },
      {
        description: "Sign up for our Newsletter",
        timer: 180, // 3 minutes
        link: "https://example.com/newsletter",
        isVisible: true,
      },
      {
        description: "50% off on all items!",
        timer: 240, // 4 minutes
        link: "https://example.com/discount",
        isVisible: true,
      },
    ];

    await Banner.create(sampleBanners);
    console.log("Banner data seeded!");
  } else {
    console.log("Banner data already exists!");
  }
}
seedBannerData();
// API Routes
app.get("/api/banner", async (req, res) => {
  const banner = await Banner.findOne(); // Assuming a single document for simplicity
  res.json(banner);
});

app.put("/api/banner", async (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  await Banner.updateOne(
    {},
    { description, timer, link, isVisible },
    { upsert: true }
  );
  res.sendStatus(200);
});

app.listen(5000, () => console.log("Server running on port 5000"));
