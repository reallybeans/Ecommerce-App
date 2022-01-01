import styled from "@emotion/styled";
import React from "react";
const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
export const Announcement = () => {
  return <Container>
      Supper deal! Free ship
  </Container>;
};
