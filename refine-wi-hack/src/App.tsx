import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/UI/Navbar";
import Generate from "pages/Generate";
import SavedRecipes from "pages/SavedRecipes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<SavedRecipes />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
