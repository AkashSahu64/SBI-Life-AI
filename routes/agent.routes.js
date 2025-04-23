import express from "express";
import {getAgentDashboard} from "../controllers/agent.controller.js";
const router = express.Router();

router.get("/dashboard", getAgentDashboard);

module.exports = router;
