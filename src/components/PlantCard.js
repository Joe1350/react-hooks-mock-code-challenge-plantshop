import React, { useState } from "react";

// "https://via.placeholder.com/400"

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true)

  function handleInStockClick() {
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: $ {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStockClick}>In Stock</button>
      ) : (
        <button onClick={handleInStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
