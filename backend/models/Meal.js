import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  instructions: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: Array,
    required: false,
  },
});

const Meal = mongoose.model("Meal", MealSchema);
export default Meal;
