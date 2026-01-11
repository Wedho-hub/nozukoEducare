import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ageGroup: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);
