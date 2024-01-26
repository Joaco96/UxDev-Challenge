import React from "react";
import styled from "styled-components";
import SimpleChart from "./SimpleChart";
import { devices } from "../../devices";

const Portal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
  z-index: 100;
`;

const Content = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(
    ${(props) => (props.$darkMode ? "--topbg-darkmode" : "--topbg-lightmode")}
  );
  z-index: 200;
  border-radius: 1rem;
  box-shadow: 11px 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media ${devices.mobileL} {
    height: 90%;
  }

  @media ${devices.tablet} {
    height: 70%;
  }

  @media ${devices.laptop} {
    width: 85%;
  }

  @media ${devices.laptopM} {
    width: 75%;
  }
`;

const Title = styled.h5`
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"}
  );
  font-weight: 700;
  font-size: 22px;
  vertical-align: bottom;
  padding-top: 0.7rem;
  padding-left: 1.5rem;
  padding-top: 0;

  @media ${devices.tablet} {
    padding-left: 2rem;
    font-size: 27px;
  }

  @media ${devices.laptop} {
    padding-left: 4rem;
    padding-top: 1.2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
`;

const Button = styled.button`
  border: 0;
  padding: 0;
  font-family: inherit;
  background-color: var(
    ${(props) => (props.$darkMode ? "--topbg-darkmode" : "--topbg-lightmode")}
  );
  cursor: pointer;
  background: none;
  padding-bottom: 1.2rem;
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"}
  );
  font-weight: 500;
  font-size: 27px;
  padding: 1.5rem 1.5rem 0 0;

  @media ${devices.tablet} {
    padding: 1.8rem 1.8rem 1rem 0;
  }
`;

const SocialSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 600;
  font-size: 14px;
  gap: 0.6rem;
  padding-top: 0.5rem;

  @media ${devices.tablet} {
    padding-top: 1rem;
  }
`;

const Icon = styled.span`
  padding-left: 1.5rem;

  @media ${devices.tablet} {
    padding-left: 2rem;
  }

  @media ${devices.laptop} {
    padding-left: 4rem;
  }
`;

const DataSection = styled.section`
  display: flex;
  justify-content: start;
  flex-direction:column;
  align-items: start;
  width: 100%;
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  gap: 1rem;

  @media ${devices.tablet} {
    padding-top: 2.5rem;
    padding-bottom: 1.2rem;
    flex-direction: row;
    align-items: center;
  }

  @media ${devices.laptop} {
    gap: 3rem;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;

  @media ${devices.laptop} {
    gap: 1rem;
  }
`;

const Text = styled.p`
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textprimary-lightmode"}
  );
  font-weight: 300;
  font-size: 14px;
  text-align: start;
  line-height: 1rem;

  @media ${devices.laptop} {
    font-size: 16px;
    line-height: 1.2rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.5rem;

  @media ${devices.tablet} {
    padding-left: 0;
`;

const Number = styled.p`
  color: var(
    ${(props) =>
      props.$darkMode ? "--textprimary-darkmode" : "--textsecondary-lightmode"}
  );
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  padding-left: 1.5rem;

  @media ${devices.tablet} {
    padding-left: 2rem;

  @media ${devices.laptop} {
    padding-left: 4rem;
    font-size: 46px;
  }
`;

const VariationNumber = styled.p`
  color: var(${(props) => (props.$positive ? "--limegreen" : "--brightred")});
  font-weight: 700;
  font-size: 34px;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 46px;
  }
`;

const ChartModal = ({
  icon,
  quantity,
  userName,
  dataName,
  variation,
  positive,
  darkMode,
  toggleModal,
  isOpen,
  social,
  variationChart,
}) => {
  return (
    <>
      {isOpen ? (
        <Portal>
          <Content $darkMode={darkMode}>
            <Wrapper>
              <Title $darkMode={darkMode}>
                {social} {dataName}
              </Title>
              <Button onClick={toggleModal} $darkMode={darkMode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M17.9171 16.4575C18.1109 16.6512 18.2197 16.914 18.2197 17.188C18.2197 17.4619 18.1109 17.7247 17.9171 17.9184C17.7234 18.1122 17.4606 18.221 17.1867 18.221C16.9127 18.221 16.6499 18.1122 16.4562 17.9184L11 12.4605L5.54213 17.9167C5.3484 18.1104 5.08564 18.2193 4.81166 18.2193C4.53769 18.2193 4.27493 18.1104 4.0812 17.9167C3.88746 17.723 3.77863 17.4602 3.77863 17.1862C3.77863 16.9123 3.88746 16.6495 4.0812 16.4558L9.53909 10.9996L4.08291 5.54171C3.88918 5.34798 3.78034 5.08522 3.78034 4.81124C3.78034 4.53726 3.88918 4.27451 4.08291 4.08077C4.27665 3.88704 4.5394 3.7782 4.81338 3.7782C5.08736 3.7782 5.35012 3.88704 5.54385 4.08077L11 9.53866L16.4579 4.07991C16.6516 3.88618 16.9144 3.77734 17.1884 3.77734C17.4624 3.77734 17.7251 3.88618 17.9189 4.07991C18.1126 4.27365 18.2214 4.5364 18.2214 4.81038C18.2214 5.08436 18.1126 5.34712 17.9189 5.54085L12.461 10.9996L17.9171 16.4575Z"
                    fill={
                      darkMode
                        ? "var(--textprimary-darkmode)"
                        : "var(--textprimary-lightmode)"
                    }
                  />
                </svg>
              </Button>
            </Wrapper>
            <SocialSection $darkMode={darkMode}>
              <Icon>{icon}</Icon>
              <p>{userName}</p>
            </SocialSection>
            <DataSection $darkMode={darkMode}>
              <DataWrapper>
                <Number $darkMode={darkMode}>{quantity}</Number>
                <Text $darkMode={darkMode}>
                  Total
                  <br />
                  {dataName}
                </Text>
              </DataWrapper>
              <DataWrapper>
                <Div>
                  {positive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_153_1323)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 7L7 0L14 7H0Z"
                          fill="#1EB589"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_1323">
                          <rect width="14" height="7" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_153_1321)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0L7 7L14 0H0Z"
                          fill="#DC414C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_1321">
                          <rect width="14" height="7" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                  <VariationNumber $positive={positive}>
                    {variationChart}
                  </VariationNumber>
                </Div>
                <Text $darkMode={darkMode}>
                  New {dataName} in
                  <br />
                  the past 10 days
                </Text>
              </DataWrapper>
              <DataWrapper>
                <Div>
                  {positive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_153_1323)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 7L7 0L14 7H0Z"
                          fill="#1EB589"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_1323">
                          <rect width="14" height="7" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_153_1321)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0L7 7L14 0H0Z"
                          fill="#DC414C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_153_1321">
                          <rect width="14" height="7" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                  <VariationNumber $positive={positive}>
                    {variation}
                  </VariationNumber>
                </Div>
                <Text $darkMode={darkMode}>
                  New {dataName}
                  <br />
                  TODAY
                </Text>
              </DataWrapper>
            </DataSection>
            <SimpleChart darkMode={darkMode} dataName={dataName} />
          </Content>
        </Portal>
      ) : null}
    </>
  );
};

export default ChartModal;
