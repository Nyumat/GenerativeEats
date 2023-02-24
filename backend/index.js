import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tracker from "./middleware/tracker.js";
import recipe from "./controllers/recipe.js";
import meal from "./controllers/meal.js";
import save_meal from "./db/save_meal.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tracker);

// Routes
app.use("/recipe", recipe);
app.use("/gen/meal", meal);
app.use("/meal", save_meal);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("[🚀] Connected to MongoDB");
  })
  .catch((err) => {
    console.log("[❌] Error connecting to MongoDB");
  });

// Start Server
app.listen(port, () => {
  console.log(`[⚡️] Server is running on port: ${port}`);
});
