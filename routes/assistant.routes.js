import express from "express"
import { chatWithAssistant } from "../controllers/assistant.controller.js";
const router = express.Router();

router.post("/chat", chatWithAssistant);

module.exports = router;
