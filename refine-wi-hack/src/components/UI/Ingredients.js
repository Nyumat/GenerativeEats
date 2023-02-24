import React from "react";

const Ingredients = ({ ingredientsRes }) => {
  return (
    <div>
      {ingredientsRes &&
        ingredientsRes.map((ingredient, i) => (
          <div key={i}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "10%",
                margin: "0 auto",
                marginBottom: "20px",
              }}
            >
              {ingredient}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default Ingredients;
