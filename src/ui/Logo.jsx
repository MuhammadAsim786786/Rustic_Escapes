import styled from "styled-components";
<<<<<<< HEAD
=======
import { useDarkMode } from "../context/DarkModeContext";
>>>>>>> origin/final-stages

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
<<<<<<< HEAD
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
=======
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
>>>>>>> origin/final-stages
    </StyledLogo>
  );
}

export default Logo;
