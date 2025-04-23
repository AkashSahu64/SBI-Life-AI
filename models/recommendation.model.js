import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  recommendedPolicies: [
    {
      policyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "policy"
      },
      reason: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const RecommendationModel = mongoose.model("recommendation", recommendationSchema);

export default RecommendationModel;