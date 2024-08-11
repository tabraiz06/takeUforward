const express = require("express");
const Banner = require("../models/bannerModel");
const Router= express.Router()
Router.get("/api/banner", async (req, res) => {
  const banner = await Banner.findOne(); // Assuming a single document for simplicity
  res.json(banner);
});


Router.put("/api/banner", async (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  await Banner.updateOne(
    {},
    { description, timer, link, isVisible },
    { upsert: true }
  );
  res.sendStatus(200);
});
module.exports= Router