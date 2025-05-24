<<<<<<< HEAD
import styled, { css } from "styled-components";
=======
import styled from "styled-components";
>>>>>>> origin/final-3

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
<<<<<<< HEAD

  grid-template-columns: ${(props) =>
    props.orientation === "vertical" ? "1fr" : "24rem 1fr 1.2fr"};
  gap: ${(props) => (props.orientation === "vertical" ? "0.8rem" : "2.4rem")};
=======
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
>>>>>>> origin/final-3

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
<<<<<<< HEAD
    border-bottom: ${(props) =>
      props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
  }

  /* Special treatment if the row contains buttons, and if it's NOT a vertical row */
  ${(props) =>
    props.orientation !== "vertical" &&
    css`
      &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      }
    `}
=======
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
>>>>>>> origin/final-3
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

<<<<<<< HEAD
function FormRow({ label, error, children, orientation }) {
  return (
    <StyledFormRow orientation={orientation}>
=======
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
>>>>>>> origin/final-3
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
