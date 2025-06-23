import cors from "cors";
import express, { Request, Response } from "express";
import locationRoutes from "./modules/location/location.route";

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

// API calls
app.use("/api/location", locationRoutes);

// Server running test
app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>WSBMS server running on ${port} port</h1>`);
});

export default app;
