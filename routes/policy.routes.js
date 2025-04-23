import express from "express";
import { createPolicy, getAllPolicies } from "../controllers/policy.controller.js";
const router = express.Router();

router.get("/", getAllPolicies);
router.post("/", createPolicy);

module.exports = router;
