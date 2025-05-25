import styled from "styled-components";
<<<<<<< HEAD
=======
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
>>>>>>> origin/final-stages

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
<<<<<<< HEAD
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
=======

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
>>>>>>> origin/final-stages
}

export default Header;
