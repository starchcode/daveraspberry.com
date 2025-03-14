import mongoose, { Schema } from "mongoose";

const homePageSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Homepage = mongoose.models.Homepage || mongoose.model("Homepage", homePageSchema);

export default Homepage;
