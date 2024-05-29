import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
  time: String,
  date: String,
  content: String,
});

export default mongoose.models.Comments ||
  mongoose.model("Comments", dataModel, "Comments");
