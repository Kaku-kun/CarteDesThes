import React from "react";
import TeaCard from "./TeaCard";

export default function ListeDesThes({thes}) {
  return (
    <div className="tea-list">
      {thes.map((tea) => (
        <TeaCard key={tea.id} tea={tea} />
      ))}
    </div>
  );
}
