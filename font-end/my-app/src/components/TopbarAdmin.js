import React from "react";
import styled from "styled-components";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  //pick topbar alway the top
  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopLeft = styled.div``;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  color: darkblue;
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
  transition: 0.5s ease-in;
  &:hover {
    color: black;
  }
`;
const IconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 5px;
  background: red;
  color: white;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  display: flex;
`;
const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
export const TopbarAdmin = () => {
  return (
    <TopBar>
      <Wrapper>
        <TopLeft>
          <Logo>Bean</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNoneIcon />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <LanguageIcon />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <IconContainer>
            <SettingsIcon />
            <IconBadge>3</IconBadge>
          </IconContainer>
          <TopAvatar src="https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/265244797_1587234394966515_7377361581010283800_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ejJL2CJJCgcAX9Nr4IM&_nc_ht=scontent.fvca1-2.fna&oh=00_AT8EFS5Iz2QqxbilgT_iBPRnwScbV5adH2v6XloLTpHJCA&oe=61FC6D4C" />
        </TopRight>
      </Wrapper>
    </TopBar>
  );
};
