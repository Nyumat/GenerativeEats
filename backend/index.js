import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import tracker from "./middleware/tracker.js";
import recipe from "./controllers/recipe.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tracker);

// Routes
app.use("/recipe", recipe);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start Server
app.listen(port, () => {
  console.log(`[⚡️] Server is running on port: ${port}`);
});
