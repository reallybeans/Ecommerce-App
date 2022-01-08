import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { mobile } from './../responsive';
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-direction: row;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ background: "#eee" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
width: 40%;`;
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BEAN.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <RoomOutlinedIcon style={{marginRight:"10px"}} />
          Võ Chí Công, P.Phú Hữu, Q9, HCM
        </ContactItem>
        <ContactItem>
          <PhoneOutlined style={{marginRight:"10px"}} /> 0944747911
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{marginRight:"10px"}} /> leeanh764@gmail.com
        </ContactItem>
        <Payment src="https://ekyc.vnpt.vn/img/payment/bank.png" />
      </Right>
    </Container>
  );
};
