<<<<<<< HEAD
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

=======
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
>>>>>>> origin/final-4
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
<<<<<<< HEAD
        <p>Filter / Sort</p>
=======
        <CabinTableOperations />
>>>>>>> origin/final-4
      </Row>

      <Row>
        <CabinTable />
<<<<<<< HEAD

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
=======
        <AddCabin />
>>>>>>> origin/final-4
      </Row>
    </>
  );
}

export default Cabins;
