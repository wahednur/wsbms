import express from "express";
import * as locationController from "./location.controller";

const locationRoutes = express.Router();
locationRoutes.get("/divisions", locationController.getDivisions);
locationRoutes.get("/thanas", locationController.getThanas);
locationRoutes.get("/areas", locationController.getAreas);
locationRoutes.get("/roads", locationController.getRoads);
locationRoutes.post("/create", locationController.postLocation);

export default locationRoutes;
