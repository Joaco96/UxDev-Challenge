import React from "react";
import styled from "styled-components";
import { devices } from "../../devices";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  width: 100px;

  @media ${devices.mobileL} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 48px;
  height: 24px;
  background: var(
    ${(props) => (props.$darkMode ? "--toggle-darkmode" : "--toggle-lightmode")}
  );
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 3px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 45px;
  transition: 0.2s;
  background: var(
    ${(props) => (props.$darkMode ? "--bg-darkmode" : "--bg-lightmode")}
  );
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${(props) =>
    props.$darkMode
      ? ""
      : `${SwitchLabel} & {left: calc(100% - 2px); transform: translateX(-100%);}`}
`;

const Title = styled.h5`
  font-family: var(--inter);
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 600;
  font-size: 12px;
  padding-right: 0;
  padding-bottom: 8px;
  text-align: end;

  @media ${devices.mobileL} {
    font-size: 14px;
    padding-right: 1rem;
    padding-bottom: 0;
  }
`;

const ToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <Container>
      <Title $darkMode={darkMode}>Dark Mode</Title>
      <SwitchLabel
        className="switch-label"
        onClick={toggleDarkMode}
        $darkMode={darkMode}
      >
        <SwitchButton className="switch-button" $darkMode={darkMode} />
      </SwitchLabel>
    </Container>
  );
};

export default ToggleButton;
