import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  const plantsToDisplay = plants.filter(plant => 
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleNewPlantSubmit(newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  function handleSearchChange(value) {
    setSearch(value)
  }

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={handleNewPlantSubmit} />
      <Search search={search} onSearchChange={handleSearchChange} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
