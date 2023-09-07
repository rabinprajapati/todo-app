const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonSchema");
const ObjectId = Schema.Types;

const subTasksSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    required: true,
    default: "pending",
  },
  todo: { type: ObjectId, ref: "Todo" },
  ...commonSchema,
});

module.exports = model("Todo", subTasksSchema);
