<<<<<<< HEAD
import SortBy from 'ui/SortBy';
import Filter from 'ui/Filter';
import TableOperations from 'ui/TableOperations';
=======
import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
>>>>>>> origin/final-4

function BookingTableOperations() {
  return (
    <TableOperations>
<<<<<<< HEAD
      {/* We could do these two as compound components as well, but let's keep it simple, and let's also explore different ways of achieving the same thing */}
      <Filter
        filterField='status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'checked-out', label: 'Checked out' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
=======
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
>>>>>>> origin/final-4
        ]}
      />

      <SortBy
        options={[
<<<<<<< HEAD
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
=======
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
>>>>>>> origin/final-4
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
