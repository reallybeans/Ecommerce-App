import AddOutlined from "@mui/icons-material/AddOutlined";
import RemoveOutlined from "@mui/icons-material/RemoveOutlined";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import { Footer } from "./../components/Footer";
import { mobile } from "./../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBotton: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SumaryTitle = styled.h1`
  font-weight: 300;
`;
const SumaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && " 500"};
  font-size: ${(props) => props.type === "total" && " 24px"};
`;
const SumaryItemText = styled.span``;
const SumaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  font-weight: 600;
`;
const total = 0;
export const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  console.log(cart);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="filled">CONTINUES SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bags (2)</TopText>
            <TopText>Your</TopText>
          </TopTexts>
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddOutlined />
                    <ProductAmount>2</ProductAmount>
                    <RemoveOutlined />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>
          <Summary>
            <SumaryTitle>ORDER SUMARY</SumaryTitle>
            {cart.map((product) => (
              <SumaryItem>
                <SumaryItemText>JESSIE THUNDER SWEATER</SumaryItemText>
                <SumaryItemPrice>$ {product.price}</SumaryItemPrice>
              </SumaryItem>
            ))}

            <SumaryItem>
              <SumaryItemText>Subtotal</SumaryItemText>
              <SumaryItemPrice>$ 0</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem>
              <SumaryItemText>Estimated Shipping</SumaryItemText>
              <SumaryItemPrice>$ 0</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem>
              <SumaryItemText>Shipping Discount</SumaryItemText>
              <SumaryItemPrice>$ 0</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem>
              <SumaryItemText type="total">Total</SumaryItemText>
              {cart.map((product) => (
                <SumaryItemPrice>{total + product.price}</SumaryItemPrice>
              ))}
            </SumaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
