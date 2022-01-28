import React, { useState } from "react";

function NewPlantForm({ onNewPlantSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleFormChange(e) {
    console.log(e.target.name, e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    onNewPlantSubmit(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Plant name"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Image URL"
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          step="0.01"
          placeholder="Price"
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
