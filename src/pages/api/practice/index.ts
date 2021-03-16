import dbConnect from "../../../utils/dbConnect";
import Practice from "../../../models/Practice";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      console.log("GET Practices");
      try {
        const practices = await Practice.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: practices });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log("POST Practice");
        console.log(JSON.parse(req.body));
        const practice = await Practice.create(
          JSON.parse(req.body)
        ); /* create a new model in the database */
        console.log(practice);
        res.status(201).json({ success: true, data: practice });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        console.log("DELETE Practice");
        const { weekday } = req.body;
        const practice = await Practice.findOneAndDelete({ weekday });
        if (practice) {
          res.status(200).json({ success: true, data: practice });
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
