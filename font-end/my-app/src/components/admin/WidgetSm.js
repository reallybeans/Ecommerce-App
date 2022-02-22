import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-right: 20px;
`;
const Title = styled.span`
  font-size: 32px;
  height: 40px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: style none;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const Image = styled.img`
  margin: 0;
  padding: 0;
  border-radius: 50%;
  object-fit: cover;
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-weight: 600;
`;
const JobTitle = styled.span`
  font-weight: 300;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
const Icon = styled.div`
  font-size: 12px !important;
  margin-right: 5px;
`;
export const WidgetSm = () => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <Item>
          <Image src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"></Image>
          <UserDetail>
            <Name>Bean Really</Name>
            <JobTitle>Software Engineer</JobTitle>
          </UserDetail>
          <Button>
            <Icon>
              <VisibilityIcon />
            </Icon>
            Display
          </Button>
        </Item>
      </List>
    </Container>
  );
};
