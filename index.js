const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Banner = require("./models/bannerModel");
const Router = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://tabraiz:tabraiz@cluster0.76smate.mongodb.net/bannerDB?retryWrites=true&w=majority"
);

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

app.use(Router);

app.listen(5000, () => console.log("Server running on port 5000"));
