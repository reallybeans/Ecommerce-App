import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;
export const WidgetLg = () => {
  return <Container>Large</Container>;
};
