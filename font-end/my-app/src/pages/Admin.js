import React from "react";
import styled from "styled-components";
import { HomeAdmin } from "../components/admin/HomeAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
import { TopBarAdmin } from "./../components/TopBarAdmin";

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
          <HomeAdmin />
        </MainPage>
      </Body>
    </Container>
  );
};
