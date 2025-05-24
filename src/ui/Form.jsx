import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
<<<<<<< HEAD
    props.type !== "modal" &&
=======
    props.type === "regular" &&
>>>>>>> origin/final-4
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

<<<<<<< HEAD
=======
Form.defaultProps = {
  type: "regular",
};

>>>>>>> origin/final-4
export default Form;
