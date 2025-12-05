import React from "react";
import { useState, useEffect } from "react";
import ListeDesThes from "./ListeDesThes";
import Filters from "./Filtres";
import "./App.css";

export default function App() {
  
  const [lesThes, setLesThes] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/listDesThes.json`)
    .then((response) => {
      console.log("status:", response.status);
      return response.json();
    })
    .then((data) => setLesThes(data));
  }, []);

  const filteredThes = filter === "All" 
  ? lesThes 
  : lesThes.filter((the) => 
    the.type === filter || the.type2 === filter
);
    
  return (
    <div className="App">
      <div className="body">
        
      <h1>Carte des Thés</h1>
      <h2 style={{textAlign: "center"}}>Make the good choice</h2>

      <Filters setFilter={setFilter} />

      <ListeDesThes thes={filteredThes} />
      
      </div>
    </div>
  );
}