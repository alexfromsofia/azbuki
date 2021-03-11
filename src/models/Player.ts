import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";

export interface IPlayer {
  _id: ObjectId;
  name: string;
  image_url: string;
  age: number;
}

export interface IPlayerDocument extends Omit<IPlayer, "_id">, Document {}

const PlayerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this Player."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  age: {
    type: Number,
  },
  image_url: {
    required: [true, "Please provide an image url for this Player."],
    type: String,
  },
});

/* PlayerSchema will correspond to a collection in your MongoDB database. */

let model: Model<IPlayerDocument, {}>;

try {
  model = mongoose.model("Player");
} catch (error) {
  model = mongoose.model("Player", PlayerSchema);
}

export default model;
