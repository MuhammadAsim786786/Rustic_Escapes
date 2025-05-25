import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
<<<<<<< HEAD
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
=======
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
>>>>>>> origin/final-stages

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD

  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
=======
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
>>>>>>> origin/final-stages
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
=======
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
>>>>>>> origin/final-stages
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large">Login</Button>
      </FormRow>
=======
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
>>>>>>> origin/final-stages
    </Form>
  );
}

export default LoginForm;
