import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 4;
`;
const Title = styled.div``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;
const Input = styled.input`
  height: 20px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const UserGender = styled.div`
  ${Label} {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Option = styled.option``;
const Button = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  border-radius: 10px;
  margin-top: 30px;
`;

export const CreateUser = () => {
  return (
    <Container>
      <Title>Create New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type="text" placeholder="Input username " />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type="text" placeholder="Input Full Name " />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="Input Email" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" placeholder="Input password" />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type="text" placeholder="Input phone-number" />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type="text" placeholder="Input address" />
        </Item>
        <Item>
          <Label>Gender</Label>
          <UserGender>
            <Input type="radio" name="gender" id="male" value="male" />
            <Label for="male">Male</Label>
            <Input type="radio" name="gender" id="female" value="female" />
            <Label for="female">Female</Label>
            <Input type="radio" name="gender" id="other" value="other" />
            <Label for="other">Others</Label>
          </UserGender>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};
