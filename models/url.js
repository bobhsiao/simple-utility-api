//------------------------------------------------------------------------------
//  Modules
//------------------------------------------------------------------------------
import mongoose from "mongoose"


//------------------------------------------------------------------------------
//  Global Variables
//------------------------------------------------------------------------------
const urlSchema = new mongoose.Schema({
  url: { type: String, unique: true },
  hash: { type: String, unique: true }
})

const Url = new mongoose.model("Url", urlSchema, "short_url")
//------------------------------------------------------------------------------
//  Code Start
//------------------------------------------------------------------------------

export default Url
