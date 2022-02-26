import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../../dummyData";
import { Chart } from "./chart/Chart";
import Publish from "@mui/icons-material/Publish";
const Container = styled.div`
  flex: 4;
  padding: 20px;
  #link {
    text-decoration: none;
    color: inherit;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductTitle = styled.h3`
  font-size: 24px;
`;
const ButtonCreate = styled.div`
  background-color: teal;
  font-size: 18;
  border: none;
  padding: 9px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  color: white;
`;
const ProductTop = styled.div`
  display: flex;
  margin-top: 20px;
`;
const TopLeft = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);

  margin-right: 20px;
`;
const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
`;
const ProductBottom = styled.div`
  margin-top: 10px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const InfoBottom = styled.div`
  margin-top: 10px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const InfoKey = styled.span``;
const InfoValue = styled.span`
  font-weight: 300;
`;
const ProductForms = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductForm = styled.form``;
const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Label = styled.label`
  margin-bottom: 15px;
  font-size: 14px;
  color: #555;
  font-weight: 600;
`;
const LabelUpload = styled.label``;

const Select = styled.select`
  margin-bottom: 5px;
`;
const Option = styled.option``;
const Icon = styled.div`
  font-size: 16px !important;
  margin-right: 5px;
`;
const Input = styled.input`
  border: none;
  width: 450px;
  height: 30px;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
`;
const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const ButtonUpdate = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const Product = () => {
  const location = {
    pathname: "/admin/add-product",
    state: { fromDashboard: true },
  };
  return (
    <Container>
      <TitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link id="link" to={location}>
          <ButtonCreate>Create</ButtonCreate>
        </Link>
      </TitleContainer>

      <ProductTop>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <Image src="https://images.unsplash.com/photo-1611864583067-b002fdc4fa29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kcyUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <ProductName>Apple Airpods</ProductName>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id:</InfoKey>
              <InfoValue>1</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>sales:</InfoKey>
              <InfoValue>5132</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>active:</InfoKey>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>in stock:</InfoKey>
              <InfoValue>no</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductForms>
            <FormLeft>
              <Label>Product Name</Label>
              <Input text placeholder="Apple Airpod" />
              <Label>In Stock</Label>
              <Select name="inStock" id="inStock">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
              <Label>Active</Label>
              <Select name="Active" id="Active">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </FormLeft>
            <FormRight>
              <Upload>
                <UploadImage src="https://gravatar.com/avatar/ac4827cf0816c3cc51ab186e58c4113a?s=400&d=robohash&r=x" />
                <LabelUpload htmlFor="file">
                  <Icon>
                    <Publish style={{ cursor: "pointer" }} />
                  </Icon>
                </LabelUpload>
                <Input type="file" id="file" style={{ display: "none" }} />
              </Upload>
              <ButtonUpdate>Update</ButtonUpdate>
            </FormRight>
          </ProductForms>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};
