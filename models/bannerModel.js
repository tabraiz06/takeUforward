const mongoose = require("mongoose");
const bannerSchema = new mongoose.Schema({
  description: String,
  timer: Number,
  link: String,
  isVisible: Boolean,
});
const Banner = mongoose.model("Banner", bannerSchema);
module.exports=Banner