import React from "react";
import styled from "styled-components";
import { devices } from "../../devices";

const Container = styled.section`
  background-color: var(
    ${(props) => (props.$darkMode ? "--cardbg-darkmode" : "--cardbg-lightmode")}
  );
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: var(
      ${(props) =>
        props.$darkMode
          ? "--cardbg-hover-darkmode"
          : "--cardbg-hover-lightmode"}
    );
  }
`;

const UpperContent = styled.div`
  display: flex;
  justify-content:space-between; 
  align-items: center;
  width:80%;
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content:space-between; 
  align-items: end;
  width:80%;
  }
`;

const TopText = styled.h4`
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 600;
  font-size: 12px;

  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;

const Number = styled.span`
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"}
  );
  font-weight: 700;
  font-size: 20px;

  @media ${devices.mobileL} {
    font-size: 26px;
  }

  @media ${devices.laptop} {
    font-size: 34px;
  }
`;

const Variation = styled.span`
  font-family: var(--inter);
  color: var(${(props) => (props.$positive ? "--limegreen" : "--brightred")});
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const OverviewCard = ({
  title,
  icon,
  number,
  variation,
  positive = true,
  darkMode = true,
}) => {
  return (
    <Container $darkMode={darkMode}>
      <UpperContent>
        <TopText $darkMode={darkMode}>{title}</TopText>
        {icon}
      </UpperContent>
      <BottomContent>
        <Number $darkMode={darkMode}>{number}</Number>
        <Variation $positive={positive}>
          {positive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
              <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
            </svg>
          )}
          {variation}%
        </Variation>
      </BottomContent>
    </Container>
  );
};

export default OverviewCard;
