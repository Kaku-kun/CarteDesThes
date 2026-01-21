import React from "react";

export default function TeaCard({ tea, setFilter }) {
  return (
    <div className="tea-card">
      <h2>{tea.name}</h2>
      <p>Type : <span className="props">{tea.type}</span>, Origine : <span className="props clickable" onClick={() => setFilter(tea.origin)}>{tea.origin}</span>, Tremper dans une eau à <span className="props">{tea.temperature}°C pendant {tea.time}</span></p>
      <p>{tea.notes}</p>
    </div>
  );
}
