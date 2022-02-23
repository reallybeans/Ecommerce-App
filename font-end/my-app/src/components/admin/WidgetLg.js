import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const Tr = styled.tr`
  text-align: left;
`;
const Th = styled.th``;
const Td = styled.td``;
const Image = styled.img`
  width: 40px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  font-weight: 500;
`;
const Date = styled.span`
  font-weight: 300;
`;
const Amount = styled.span`
  font-weight: 300;
`;
const Status = styled.span``;
const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => {
    const type = props.type;

    if (type === "approved") {
      return "#e5faf2";
    } else if (type === "declined") {
      return "#fff0f1";
    } else {
      return "#ebf1fe";
    }
  }};
  color: ${(props) => {
    const type = props.type;

    if (type === "approved") {
      return "#3bb077";
    } else if (type === "declined") {
      return "#d95087";
    } else {
      return "#2a7ade";
    }
  }};
`;

export const WidgetLg = () => {
  // case using className
  // const Button = ({type})=>{
  //   return <button className={"Button" + type}>{type}</button>
  // }
  return (
    <Container>
      <Title>Last Transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td>
            <User>
              <Image
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="avatar user"
              />
              <Name>Happy Danial</Name>
            </User>
          </Td>
          <Td>
            <Date>2 Feb 2022</Date>
          </Td>
          <Td>
            <Amount>$113.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="approved">Approved</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="avatar user"
            />
            <Name>Happy Danial</Name>
          </Td>
          <Td>
            <Date>2 Feb 2022</Date>
          </Td>
          <Td>
            <Amount>$113.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="declined">Declined</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="avatar user"
            />
            <Name>Happy Danial</Name>
          </Td>
          <Td>
            <Date>2 Feb 2022</Date>
          </Td>
          <Td>
            <Amount>$113.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="pending">Pending</Button>
            </Status>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="avatar user"
            />
            <Name>Happy Danial</Name>
          </Td>
          <Td>
            <Date>2 Feb 2022</Date>
          </Td>
          <Td>
            <Amount>$113.00</Amount>
          </Td>
          <Td>
            <Status>
              <Button type="approved">Approved</Button>
            </Status>
          </Td>
        </Tr>
      </Table>
    </Container>
  );
};
