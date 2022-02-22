import React from "react";
import styled from "styled-components";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Items = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
`;
const Title = styled.span``;
const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: centers;
`;
const Money = styled.span`
  font-style: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;
const Icons = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: ${(props) => (props.color === "green" ? "green" : "red")};
`;
const Sub = styled.div`
  font-style: 15px;
  color: gray;
`;
export const FeaturedInfo = () => {
  return (
    <Container>
      <Items>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -11.4
            <Icons color="red">
              <ArrowDownwardOutlinedIcon />
            </Icons>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Items>
      <Items>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -4.4{" "}
            <Icons color="red">
              <ArrowDownwardOutlinedIcon />
            </Icons>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Items>
      <Items>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -2.4
            <Icons color="green">
              <ArrowUpwardOutlinedIcon />
            </Icons>
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Items>
    </Container>
  );
};
