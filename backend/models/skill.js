const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    x: { type: String },
  },
);

const Skill = mongoose.model("Skill", skillsSchema);

exports.Skill = Skill;
