const SORTING_TYPE = {
  ID: 0,
  NAME_ASC: 1,
  NAME_DES: 2,
};
export default function PlantSorting({ plants, setPlants }) {
  function updateSorting(e) {
    const sortingType = Number(e.target.value);
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
    setPlants(plants.sort(sortPlants));
  }

  return (
    <select onChange={updateSorting}>
      <option value={SORTING_TYPE.ID}>Sort by ID</option>
      <option value={SORTING_TYPE.NAME_ASC}>Sort by Name (Ascending)</option>
      <option value={SORTING_TYPE.NAME_DES}>Sort by Name (Descending)</option>
    </select>
  );
}
