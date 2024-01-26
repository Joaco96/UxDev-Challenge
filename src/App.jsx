import styled from "styled-components";
import Header from "./components/containers/Header";
import MainCardsContainer from "./components/containers/MainCardsContainer";
import OverviewCardsContainer from "./components/containers/OverviewCardsContainer";
import { useState } from "react";
import { devices } from "./devices";

const Container = styled.main`
  position: relative;
  background-color: var(
    ${(props) => (props.$darkMode ? "--bg-darkmode" : "--bg-lightmode")}
  );
  height: 160vh;
  z-index:5;

  @media ${devices.mobileL} {
    height: 120vh;
  }

  @media ${devices.tablet} {
    height: 110vh;
  }

  @media ${devices.laptop} {
    height: 100vh;
  }
`;

const Body = styled.div`
  height: 100vh;
  padding: 0 5vw;
  z-index: 100;
  position: absolute;
  top: 0px;
  width: 90%;

  @media ${devices.laptop} {
    padding: 0 10vw;
    width: 80%;
  }
`;

const Topbg = styled.div`
  background-color: var(
    ${(props) => (props.$darkMode ? "--topbg-darkmode" : "--topbg-lightmode")}
  );
  height: 30vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  z-index: 10;
  border-radius: 0 0 26px 26px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container $darkMode={darkMode}>
        <Body>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <MainCardsContainer darkMode={darkMode} />
          <OverviewCardsContainer darkMode={darkMode} />
        </Body>
        <Topbg $darkMode={darkMode} />
    </Container>
  );
}

export default App;
