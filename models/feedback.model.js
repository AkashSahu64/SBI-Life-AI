import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  policyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "policy"
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  comments: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const FeedbackModel = mongoose.model("feedback", feedbackSchema);
export default FeedbackModel;