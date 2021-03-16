import dbConnect from "../../../utils/dbConnect";
import Player from "../../../models/Player";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      console.log("GET Players");
      try {
        const players = await Player.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: players });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("POST Player");
        console.log(JSON.parse(req.body));
        const player = await Player.create(
          JSON.parse(req.body)
        ); /* create a new model in the database */
        console.log(player);
        res.status(201).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        console.log("DELETE Player");
        const player = await Player.findByIdAndDelete(req.body);
        if (player) {
          res.status(200).json({ success: true, data: player });
        } else {
          res.status(204).json({ success: true, data: null });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
