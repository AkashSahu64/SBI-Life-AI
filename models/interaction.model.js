import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message: { 
    type: String, 
    required: true 
},
  sentiment: { 
    type: String 
},
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const InteractionModel = mongoose.model("interaction", interactionSchema);
export default InteractionModel;
