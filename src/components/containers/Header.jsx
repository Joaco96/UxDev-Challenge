import styled from "styled-components";
import ToggleButton from "../pure/ToggleButton";
import React from "react";
import { devices } from "../../devices";


const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  margin-bottom: 0.7rem;
  padding-top: 1rem;

  @media ${devices.tablet} {
    height: 15vh;
  }

  @media ${devices.mobileL} {
    padding-top: 0;
  }

`;

const TextPrimary = styled.h1`
  color: var(${(props) => props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"});
  font-weight: 700;
  font-size: 27px;
`;

const TextSecondary = styled.h3`
  color: var(${(props) => props.$darkMode ? "--textsecondary-darkmode" : "--textsecondary-lightmode"});
  font-weight: 600;
  font-size: 14px;
  padding-top: 0.5rem;
`;

const Header = ({darkMode, toggleDarkMode}) => {
  return (
    <Container>
      <div>
        <TextPrimary $darkMode={darkMode}>Social Media Dashboard</TextPrimary>
        <TextSecondary $darkMode={darkMode}>Total Followers: 23,004</TextSecondary>
      </div>
      <ToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}></ToggleButton>
    </Container>
  );
};

export default Header;
