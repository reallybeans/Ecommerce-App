import React from "react";
import styled from "styled-components";
import register from "../asset/registers.jpg";
import { mobile } from "../responsive";
const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8774510/pexels-photo-8774510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500") center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
margin-left: 5px;
  font-size: 24px;
  font-weight: 300;
`;
const FormInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0px;
  padding: 20px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const Desc = styled.span`
  margin: 10px 0px;
  font-style: 12px;
  cursor: pointer;
`;
export const Register = () => {
  return (
    <Container imgUrl={register}>
      <FormContainer>
        <Title>CREATE ACCOUNT</Title>
        <FormInput>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
         
          <Desc>
            By creating an account, I consent to the processing of my persional
            data in accordance with the <b>PRIVACY POLiCY</b>
          </Desc>
          <Button>CREATE</Button>
        </FormInput>
      </FormContainer>
    </Container>
  );
};
