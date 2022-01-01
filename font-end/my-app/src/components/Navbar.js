import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;

`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  border-radius: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 125px;
`;
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"gray", fontSize:16}}></SearchIcon>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BEAN.</Logo>
        </Center>
        <Right>
          <MenuItem style={{border:".5px solid black", padding:10, borderRadius:20}}>SIGN UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
