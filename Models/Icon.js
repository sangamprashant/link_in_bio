const mongoose = require("mongoose");

const IconSchema = new mongoose.Schema({
  icon: String,        
});

const ICON = mongoose.model("LINKINBIOICON", IconSchema);

module.exports = ICON;