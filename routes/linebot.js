//------------------------------------------------------------------------------
//  Modules
//------------------------------------------------------------------------------
import express from "express"
import { handleLineBot } from "../controllers/SimpleLineBot.js"

//------------------------------------------------------------------------------
//  Global Variables
//------------------------------------------------------------------------------
const router = express.Router()

//------------------------------------------------------------------------------
//  Code Start
//------------------------------------------------------------------------------
router.post("/webhook", handleLineBot)

export default router