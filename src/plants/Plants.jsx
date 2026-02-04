import { useState } from "react";
import PLANTS from "../data";
import "./plants.css";
import PlantList from "./PlantList";
import PlantSorting from "./PlantSorting";

export const SORTING_TYPE = {
  ID: 0,
  NAME_ASC: 1,
  NAME_DES: 2,
};

export default function Plants({ addToCart }) {
  const [sortingType, setSortingType] = useState(SORTING_TYPE.ID);
  function sortPlants(a, b) {
    switch (sortingType) {
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
        <PlantSorting setSortingType={setSortingType} />
      </section>
      <PlantList plants={PLANTS.sort(sortPlants)} addToCart={addToCart} />
    </section>
  );
}
