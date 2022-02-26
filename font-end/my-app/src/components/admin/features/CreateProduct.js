import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 4;
`;
const Title = styled.div`
  margin-bottom: 30px;
`;
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
export const CreateProduct = () => {
  return (
    <Container>
      <Title>Create New User</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input type="file" id="file" style={{ border: "none" }} />
        </Item>
        <Item>
          <Label>Name Product</Label>
          <Input type="text" placeholder="Input name " />
        </Item>
        <Item>
          <Label>Instock</Label>
          <Input type="text" placeholder="Input Instock" />
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
