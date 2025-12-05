import React from "react";  


export default function Filters({ setFilter }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("All")}>Tous</button>
      <button onClick={() => setFilter("Vert")}>Verts</button>
      <button onClick={() => setFilter("Noir")}>Noirs</button>
      <button onClick={() => setFilter("Blanc")}>Blancs</button>
      <button onClick={() => setFilter("Original")}>Originaux</button>
    </div>
  );
}
