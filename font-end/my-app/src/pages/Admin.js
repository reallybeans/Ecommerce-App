import React from "react";
import styled from "styled-components";
import { HomeAdmin } from "../components/admin/HomeAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
import { TopBarAdmin } from "./../components/TopBarAdmin";
import { Route, Routes } from "react-router-dom";
import { UserList } from "./../components/admin/UserList";
import { User } from "../components/admin/User";
import { CreateUser } from './../components/admin/CreateUser';

const Container = styled.div``;
const Body = styled.div`
  display: flex;
  margin-top: 10px;
`;
const MainPage = styled.div`
  flex: 4;
`;
export const Admin = () => {
  return (
    <Container>
      <TopBarAdmin></TopBarAdmin>
      <Body>
        <SidebarAdmin />
        <MainPage>
          <Routes>
            <Route exact path="/" element={<HomeAdmin />} />
            <Route path="/users" element={<UserList />} />
            <Route path="users/user/:userId" element={<User />} />
            <Route path="/addUser" element={<CreateUser />} />
          </Routes>
        </MainPage>
      </Body>
    </Container>
  );
};
