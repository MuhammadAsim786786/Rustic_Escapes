<<<<<<< HEAD
import Heading from "../ui/Heading";

function Settings() {
  return <Heading as="h1">Update hotel settings</Heading>;
=======
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
>>>>>>> origin/final-3
}

export default Settings;
