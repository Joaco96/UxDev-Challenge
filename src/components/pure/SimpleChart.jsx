import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { devices } from "../../devices";

const data = [
  {
    name: "",
    uv: 4,
  },
  {
    name: "4",
    uv: 3,
  },
  {
    name: "5",
    uv: 2,
  },
  {
    name: "6",
    uv: 6,
  },
  {
    name: "7",
    uv: 8,
  },
  {
    name: "8",
    uv: 9,
  },
  {
    name: "9",
    uv: 10,
  },
  {
    name: "10",
    uv: 9,
  },
  {
    name: "11",
    uv: 10,
  },
  {
    name: "12",
    uv: 12,
  },
  {
    name: "13",
    uv: 12,
  },
];

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(
    ${(props) => (props.$darkMode ? "--bg-darkmode" : "--bg-lightmode")}
  );
  border-radius: 26px;
`;

const Title = styled.div`
  color: var(
    ${(props) =>
      props.$darkMode
        ? "--textsecondary-darkmode"
        : "--textsecondary-lightmode"}
  );
  font-weight: 400;
  font-size: 18px;
  text-align: start;
  line-height: 1.2rem;
  padding-top: 2.2rem;
  width: 100%;
  margin-left: 3.5rem;

  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
    padding-left: 4rem;
  }
`;
const TootltipContent = styled.p`
  color: var(--textsecondary-darkmode);
  background-color: var(
    ${(props) => (props.$darkMode ? "--bg-darkmode" : "--bg-lightmode")}
  );
  padding: 0.7rem;
  border: 2px solid;
  border-color: var(
    ${(props) =>
      props.$darkMode ? "--textsecondary-darkmode" : "--cardbg-hover-lightmode"}
  );
  font-size: 14px;
`;

const MobileChart = styled.div`
  width: 100%;
  height: 100%;
  @media ${devices.laptop} {
    display: none;
  }
`;

const DesktopChart = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media ${devices.laptop} {
    display: block;
  }
`;

const SimpleChart = ({ darkMode, dataName }) => {
  return (
    <Content $darkMode={darkMode}>
      <Title $darkMode={darkMode}>May 4 - May 13</Title>
      <DesktopChart>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 40,
              right: 80,
              left: 35,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#5C5C5C80" />
            <XAxis dataKey="name" interval={0} tickSize={12} tickLine={false} />
            <YAxis
              ticks={[0, 2, 4, 6, 8, 10, 12]}
              tickSize={12}
              tickLine={false}
            />
            <Tooltip
              content={
                <CustomTooltip
                  dataName={dataName}
                  darkMode={darkMode}
                  $data={data}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#908CD9"
              strokeWidth={2}
              activeDot={{ r: 8, stroke: "#908CD9" }}
              dot={{
                stroke: "#908CD9",
                strokeWidth: 2,
                r: 6,
                fill: darkMode ? "var(--bg-darkmode)" : "var(--bg-lightmode)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </DesktopChart>
      <MobileChart>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 40,
              right: 35,
              left: 0,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#5C5C5C80" />
            <XAxis dataKey="name" interval={1} tickSize={12} tickLine={false} />
            <YAxis
              ticks={[0, 2, 4, 6, 8, 10, 12]}
              tickSize={12}
              tickLine={false}
            />
            <Tooltip
              content={
                <CustomTooltip
                  dataName={dataName}
                  darkMode={darkMode}
                  $data={data}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#908CD9"
              strokeWidth={2}
              activeDot={{ r: 8, stroke: "#908CD9" }}
              dot={{
                stroke: "#908CD9",
                strokeWidth: 2,
                r: 6,
                fill: darkMode ? "var(--bg-darkmode)" : "var(--bg-lightmode)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </MobileChart>
    </Content>
  );
};

const CustomTooltip = ({ active, payload, dataName, darkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div className="">
        <TootltipContent
          $darkMode={darkMode}
        >{`${payload[0].value} new ${dataName}`}</TootltipContent>
      </div>
    );
  }
  return null;
};

export default SimpleChart;
