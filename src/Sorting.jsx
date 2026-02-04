import { SORTING_TYPE } from "./App";

export default function SortingDropdown({ setSortingType }) {
  return (
    <select onChange={(e) => setSortingType(Number(e.target.value))}>
      <option value={SORTING_TYPE.ID}>Sort by ID</option>
      <option value={SORTING_TYPE.NAME_ASC}>Sort by Name (Ascending)</option>
      <option value={SORTING_TYPE.NAME_DES}>Sort by Name (Descending)</option>
    </select>
  );
}
