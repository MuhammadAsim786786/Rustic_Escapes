<<<<<<< HEAD
import SortBy from 'ui/SortBy';
import Filter from 'ui/Filter';
import TableOperations from 'ui/TableOperations';
=======
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
>>>>>>> origin/final-4

function CabinTableOperations() {
  return (
    <TableOperations>
<<<<<<< HEAD
      {/* We could do these two as compound components as well, but let's keep it simple, and let's also explore different ways of achieving the same thing */}
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
=======
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
>>>>>>> origin/final-4
        ]}
      />

      <SortBy
        options={[
<<<<<<< HEAD
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          {
            value: 'regularPrice-desc',
            label: 'Sort by price (high first)',
          },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by capacity (high first)',
          },
=======
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
>>>>>>> origin/final-4
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
