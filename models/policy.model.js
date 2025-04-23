import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    features: [
        String
    ],
    premium: {
        type: Number,
        required: true
    },
    term: {
        type: Number,
        required: true
    },
    riders: [
        String
    ]
}, { timestamps: true });

const PolicyModel = mongoose.model("policy", policySchema);

export default PolicyModel;