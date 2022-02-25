import React from "react";
import styled from "styled-components";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  font-style: 13px;
  color: rgb(187, 186, 186);
`;
const SideBarList = styled.ul`
  list-style: none;
  padding: 5px;
  #link {
    text-decoration: none;
    color: inherit;
  }
`;
const Item = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:active {
    background-color: rgb(228, 228, 250);
  }
`;
const Icon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;
export const SidebarAdmin = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <SideBarList>
            <Item>
              <Icon>
                <LineStyleIcon />
              </Icon>
              Home
            </Item>
            <Item>
              <Icon>
                <TimelineIcon />
              </Icon>
              Analytics
            </Item>
            <Item>
              <Icon>
                <TrendingUpIcon />
              </Icon>
              Sale
            </Item>
          </SideBarList>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <SideBarList>
            <Link to="users" id="link">
              <Item>
                <Icon>
                  <PermIdentityIcon />
                </Icon>
                Users
              </Item>
            </Link>
            <Link to="admin/products" id="link">
              <Item>
                <Icon>
                  <StorefrontIcon />
                </Icon>
                Products
              </Item>
            </Link>
            <Item>
              <Icon>
                <AttachMoneyIcon />
              </Icon>
              Transactions
            </Item>
          </SideBarList>
        </Menu>
        <Menu>
          <Title>Notification</Title>
          <SideBarList>
            <Item>
              <Icon>
                <MailOutlineIcon />
              </Icon>
              Mail
            </Item>
            <Item>
              <Icon>
                <DynamicFeedIcon />
              </Icon>
              Feedback
            </Item>
            <Item>
              <Icon>
                <ChatBubbleOutlineIcon />
              </Icon>
              Messages
            </Item>
          </SideBarList>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <SideBarList>
            <Item>
              <Icon>
                <WorkOutlineIcon />
              </Icon>
              Manage
            </Item>
            <Item>
              <Icon>
                <TimelineIcon />
              </Icon>
              Analytics
            </Item>
            <Item>
              <Icon>
                <ReportGmailerrorredOutlinedIcon />
              </Icon>
              Reports
            </Item>
          </SideBarList>
        </Menu>
      </Wrapper>
    </Container>
  );
};
