//------------------------------------------------------------------------------
//  Modules
//------------------------------------------------------------------------------
import express from "express"
import { handleWeatherFC } from "../controllers/weather.js"
import { handleAqiData } from "../controllers/aqi.js"
//------------------------------------------------------------------------------
//  Global Variables
//------------------------------------------------------------------------------
const router = express.Router()

//------------------------------------------------------------------------------
//  Code Start
//------------------------------------------------------------------------------
router.get("/weatherfc/:locationName?", handleWeatherFC)
router.get("/epadata/:api_name?", (req, res) => (res.redirect("/aqi")))
router.get("/aqi", handleAqiData)

export default router