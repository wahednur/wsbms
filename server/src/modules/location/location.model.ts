import mongoose, { Document, Model } from "mongoose";
import { ILocation } from "./location.interface";

const locationSchema = new mongoose.Schema<ILocation & Document>(
  {
    division: { type: String, required: true },
    thana: { type: String, required: true },
    area: { type: String, required: true },
    roadNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Location: Model<ILocation & Document> = mongoose.model(
  "Location",
  locationSchema
);
