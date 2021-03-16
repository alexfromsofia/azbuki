import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";

export interface IPractice {
  _id: ObjectId;
  weekday: Number;
  price: Number;
}

export interface IPracticeDocument extends Omit<IPractice, "_id">, Document {}

const PracticeSchema = new Schema({
  weekday: {
    type: Number,
    required: [true, "Please provide a valid day for practice."],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide a valid price for practice."],
  },
});

let model: Model<IPracticeDocument, {}>;

try {
  model = mongoose.model("Practice");
} catch (error) {
  model = mongoose.model("Practice", PracticeSchema);
}

export default model;
