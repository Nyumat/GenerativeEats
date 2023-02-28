import { Router } from "express";
import Meal from "../models/Meal.js";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const meals = await Meal.find();
  
    res.status(200).json(meals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
