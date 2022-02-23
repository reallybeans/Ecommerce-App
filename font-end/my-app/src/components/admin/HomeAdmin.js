import React from "react";
import styled from "styled-components";
import { data } from "../../dummyData";
import { Chart } from "./chart/Chart";
import { FeaturedInfo } from "./features/FeaturedInfo";
import { WidgetSm } from "./features/WidgetSm";
import { WidgetLg } from "./features/WidgetLg";
const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;
export const HomeAdmin = () => {
  return (
    <div>
      <FeaturedInfo />
      <Chart data={data} title="User Analytic" grid dataKey="Active User" />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </div>
  );
};
