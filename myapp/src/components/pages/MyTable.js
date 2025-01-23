import React from "react";
import "./MyTable.css"; // Import for styling

const MyTable = () => {
  // Define a placeholder grid with empty slots (adjust as needed)
  const emptySlots = Array.from({ length: 12 });  // Creates an array with 12 empty slots

  return (
    <div className="container">
      <h1>Pokémon Card Collection</h1>
      <div className="table">
        {emptySlots.map((_, index) => (
          <div key={index} className="card-slot">
            <p>Empty Slot</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTable;
