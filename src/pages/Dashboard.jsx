<<<<<<< HEAD
=======
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
>>>>>>> origin/final-stages
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
<<<<<<< HEAD
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
    </Row>
=======
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
>>>>>>> origin/final-stages
  );
}

export default Dashboard;
