import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    avatar: {
        type: String,
        default: "https://via.placeholder.com/150",
    },
    mobile: {
        type: String,
        trim: true,
        match: [/^\d{10}$/, "Mobile number must be a valid 10-digit number"], // Example for 10-digit validation
        default: null,
    },
    refresh_token: {
        type: String,
        default: null,
        select: false, // Exclude token from queries by default
    },
    verify_email: {
        type: Boolean,
        default: false,
    },
    last_login_date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active",
    },
    address_details: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
        },
    ],
    forgot_password_otp: {
        type: String,
        default: null,
       // select: false, // Exclude OTP from queries by default
    },
    forgot_password_expiry: {
        type: Date,
        default: "",
    },
    role: {
        type: String,
        enum: ["customer", "agent", "admin"],
        default: "customer"
    },
    preferences: {
        type: Object,
        default: {}
    },
    sentimentScore: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const UserModel = mongoose.model("user", userSchema);

export default UserModel;