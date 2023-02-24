// The below import defines which components come from formik
import React from "react";

export default function FormT({
  setTextRes,
  ingredientsRes,
}: {
  setTextRes: any;
  ingredientsRes: any;
}) {
  const [value, setValue] = React.useState(
    "Enter Your Ingredients And Get Recipes"
  );

  const haandleSubmit = (e: any) => {
    e.preventDefault();
    setTextRes([...ingredientsRes, value]);
    setValue("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        value={value}
        onFocus={() => setValue("")}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          height: "50px",
          fontSize: "20px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        <button
          style={{
            backgroundColor: "#fff",
            padding: "10px",
          }}
          onClick={haandleSubmit}
        >
          Submit
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            padding: "10px",
          }}
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          Ingredients Entered:
        </h1>
      </div>
    </div>
  );
}
