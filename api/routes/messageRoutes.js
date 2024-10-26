import express from "express";

import {protectRoute} from "../middleware/auth.js";

import {sendMessage} from "../controllers/messageController.js"
import { getConversation } from "../controllers/messageController.js";

const router=express.Router();

router.use(protectRoute)

router.post("/send",protectRoute, sendMessage);
router.get("/conversation/:userId",protectRoute,getConversation)


export default router;