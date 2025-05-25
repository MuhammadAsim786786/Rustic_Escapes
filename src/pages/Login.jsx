import styled from "styled-components";
<<<<<<< HEAD
=======
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
>>>>>>> origin/final-stages

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
<<<<<<< HEAD
  return <LoginLayout>Login</LoginLayout>;
=======
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
>>>>>>> origin/final-stages
}

export default Login;
