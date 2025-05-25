import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

<<<<<<< HEAD
        {/* {bookings.map((booking) => (
            <BookingRow key={booking.id} booking={booking} />
          ))} */}

        {/* Render props! */}
=======
>>>>>>> origin/final-4
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

<<<<<<< HEAD
// We could create yet another layer of abstraction on top of this. We could call this component just <Results>, like: Results({data, count, isLoading, columns, rowComponent}). Then <BookingTable> and ALL other tables would simply call that.
// BUT, creating more abstractions also has a cost! More things to remember, more complex codebase to understand. Sometimes it's okay to just copy and paste instead of creating abstractions

=======
>>>>>>> origin/final-4
export default BookingTable;
