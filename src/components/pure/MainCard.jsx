import { useState } from "react";
import styled from "styled-components";
import ChartModal from "./ChartModal";
import { devices } from "../../devices";

const Border = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: var(${(props) => props.$borderColor});
`;

const Container = styled.section`
  background-color: var(
    ${(props) => (props.$darkMode ? "--cardbg-darkmode" : "--cardbg-lightmode")}
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  &:hover {
    background-color: var(
      ${(props) =>
        props.$darkMode
          ? "--cardbg-hover-darkmode"
          : "--cardbg-hover-lightmode"}
    );
    cursor: pointer;
  }
  margin-top: 4px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h4`
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 600;
  font-size: 12px;
  padding-left: 0.4rem;
`;

const NumberContainer = styled.div`
  padding: .8rem 0;

  @media ${devices.laptop} {
    padding: 1.8rem 0;
  }  
`;

const Number = styled.p`
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"}
  );
  font-weight: 700;
  font-size: 38px;
  text-align: center;
  padding-bottom: 0.5rem;

  @media ${devices.mobileL} {
    font-size: 44px;
  }

  @media ${devices.laptop} {
    font-size: 58px;
  }
`;

const CentralText = styled.p`
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
`;

const BottomText = styled.p`
  color: var(${(props) => (props.$positive ? "--limegreen" : "--brightred")});
  font-weight: 600;
  font-size: 12px;
  padding-left: 0.3rem;
`;

const MainCard = ({
  icon,
  borderColor,
  quantity,
  userName,
  dataName,
  variation,
  positive,
  darkMode,
  toggleModal,
  social,
  variationChart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(false);
  }

  function openModal(e) {
    setIsOpen(true);
  }

  return (
    <>
      <Border $borderColor={borderColor} onClick={openModal}>
        <Container $darkMode={darkMode}>
          <div>
            <TextContainer>
              {icon}
              <Name $darkMode={darkMode}>{userName}</Name>
            </TextContainer>
            <NumberContainer>
              <Number $darkMode={darkMode}>{quantity}</Number>
              <CentralText>{dataName}</CentralText>
            </NumberContainer>
            <TextContainer>
              {positive ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                  <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
                </svg>
              )}
              <BottomText $positive={positive} $darkMode={darkMode}>
                {variation} Today
              </BottomText>
            </TextContainer>
          </div>
        </Container>
      </Border>
      <ChartModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        icon={icon}
        userName={userName}
        quantity={quantity}
        dataName={dataName}
        variation={variation}
        positive={positive}
        darkMode={darkMode}
        social={social}
        variationChart={variationChart}
      />
    </>
  );
};

export default MainCard;
