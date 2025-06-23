import { Location } from "./location.model";

export const getUniqueDivisions = async (): Promise<string[]> => {
  return Location.distinct("division");
};

export const getUniqueThanas = async (division: string): Promise<string[]> => {
  return Location.find({ division }).distinct("thana");
};

export const getUniqueAreas = async (
  division: string,
  thana: string
): Promise<string[]> => {
  return Location.find({ division, thana }).distinct("area");
};

export const getUniqueRoads = async (
  division: string,
  thana: string,
  area: string
): Promise<string[]> => {
  return Location.find({ division, thana, area }).distinct("roadNumber");
};
