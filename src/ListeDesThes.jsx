import React from "react";
import TeaCard from "./TeaCard";

export default function ListeDesThes({thes, setFilter}) {
  return (
    <div className="tea-list">
      {thes.map((tea) => (
        <TeaCard key={tea.id} tea={tea} setFilter={setFilter} />
      ))}
    </div>
  );
}
