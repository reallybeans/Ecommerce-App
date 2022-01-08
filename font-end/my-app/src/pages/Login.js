import React from "react";
import styled from "styled-components";
import register from "../asset/registers.jpg";
import { mobile } from "../responsive";
const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.imgUrl}) center;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0px 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover{
      opacity: 0.8;
  }
`;
const Link = styled.a`
  margin: 10px 0px;
  font-style: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Login= () => {
  return (
    <Container imgUrl={register}>
      <FormContainer>
        <Title>LOGIN</Title>
        <FormInput>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button>LOGIN</Button>
          <Link>DO YOU REMEMBER PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </FormInput>
      </FormContainer>
    </Container>
  );
};
