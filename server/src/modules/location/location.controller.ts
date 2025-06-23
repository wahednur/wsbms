import { Request, Response } from "express";
import { ILocation } from "./location.interface";
import { Location } from "./location.model";
import * as locationService from "./location.service";

export const getDivisions = async (_req: Request, res: Response) => {
  try {
    const divisions: string[] = await locationService.getUniqueDivisions();
    res.json(divisions);
  } catch (error) {
    res.status(500).json({ error: "Fail to get division" });
  }
};

export const getThanas = async (req: Request, res: Response) => {
  try {
    const { division } = req.query;
    const thanas: string[] = await locationService.getUniqueThanas(
      division as string
    );
    res.json(thanas);
  } catch (error) {
    res.status(500).json({ error: "Failed to get thanas" });
  }
};

export const getAreas = async (req: Request, res: Response) => {
  try {
    const { division, thana } = req.query;
    const areas: string[] = await locationService.getUniqueAreas(
      division as string,
      thana as string
    );
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: "Failed to get areas" });
  }
};

export const getRoads = async (req: Request, res: Response) => {
  try {
    const { division, thana, area } = req.query;
    const roads: string[] = await locationService.getUniqueRoads(
      division as string,
      thana as string,
      area as string
    );
    res.json(roads);
  } catch (error) {
    res.status(500).json({ error: "Failed to get roads" });
  }
};

export const postLocation = async (req: Request, res: Response) => {
  try {
    const payload: ILocation = req.body;

    const location = await Location.create(payload);

    res.status(201).json({
      success: true,
      message: "Location created successfully",
      data: location,
    });
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save in database",
    });
  }
};
