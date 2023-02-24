import React from "react";

const Recipe = ({ title, ingredients, instructions }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        fontSize: "20px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      {title && <h1>{title}</h1>}
      {ingredients && <IngredientDisplay ingredients={ingredients} />}
      {instructions && <InstructionsDisplay instructions={instructions} />}
    </div>
  );
};

const IngredientDisplay = ({ ingredients }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Ingredients
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {ingredients.map((ingredient, i) => (
          <div key={i}>
            <h1
              style={{
                fontSize: "20px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              {ingredient}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const InstructionsDisplay = ({ instructions }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Instructions
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {instructions.map((instruction, i) => (
          <div key={i}>
            <h1
              style={{
                fontSize: "20px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              {instruction}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
