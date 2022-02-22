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
  justify-content: space-between;
`;
const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  //pick topBar alway the top
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
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
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
export const TopBarAdmin = () => {
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
          <TopAvatar src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/120856595_1272457719777519_4534389576795430282_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gYlqYQEe7PcAX8bj3ak&_nc_oc=AQn67nBXRC1fftLkWdrNqOtnhePJgozd8sllHY0O5axREGVtXYynZWmf7Y-oGjEHrYU&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT-37Hy-JVh5of3_Z4VVXR1H1A0SGaROE0LcOv_UJ-51fw&oe=62330098" />
        </TopRight>
      </Wrapper>
    </TopBar>
  );
};
