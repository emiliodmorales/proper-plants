import { useState } from "react";
import PLANTS from "../data";
import "./plants.css";
import PlantList from "./PlantList";
import SortingDropdown from "../Sorting";
import { SORTING_TYPE } from "../App";

export default function Plants({ addToCart }) {
  const [plantSortingType, setPlantSortingType] = useState(SORTING_TYPE.ID);
  function sortPlants(a, b) {
    switch (plantSortingType) {
      case SORTING_TYPE.NAME_ASC:
        return a.name.localeCompare(b.name);

      case SORTING_TYPE.NAME_DES:
        return b.name.localeCompare(a.name);

      default:
        return a.id - b.id;
    }
  }

  return (
    <section id="plants">
      <section className="headerSort">
        <h2>Plants</h2>
        <SortingDropdown setSortingType={setPlantSortingType} />
      </section>
      <PlantList plants={PLANTS.sort(sortPlants)} addToCart={addToCart} />
    </section>
  );
}
