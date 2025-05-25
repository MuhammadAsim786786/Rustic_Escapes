<<<<<<< HEAD
=======
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
>>>>>>> origin/final-stages
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
<<<<<<< HEAD
        <p>Update user data form</p>
=======
        <UpdateUserDataForm />
>>>>>>> origin/final-stages
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
<<<<<<< HEAD
        <p>Update user password form</p>
=======
        <UpdatePasswordForm />
>>>>>>> origin/final-stages
      </Row>
    </>
  );
}

export default Account;
