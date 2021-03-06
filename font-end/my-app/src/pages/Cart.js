import AddOutlined from "@mui/icons-material/AddOutlined";
import RemoveOutlined from "@mui/icons-material/RemoveOutlined";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Navbar } from "../components/Navbar";
import { Footer } from "./../components/Footer";
import { mobile } from "./../responsive";
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;
console.log(process.env.REACT_APP_STRIPE);
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
export const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const cart = carts.products;
  const [striperToken, setStriperToken] = useState(null);
  const ontoken = (token) => {
    setStriperToken(token);
  };
  console.log(striperToken);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="filled">CONTINUES SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bags ({carts.quantity})</TopText>
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
                    <ProductAmount>{product.quantity}</ProductAmount>
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
                <SumaryItemText>{product.title}</SumaryItemText>
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
              {/* {cart.map((product) => (
                <SumaryItemPrice>{total + product.price}</SumaryItemPrice>
              ))} */}
              <SumaryItemPrice>$ {carts.total}</SumaryItemPrice>
            </SumaryItem>
            <StripeCheckout
              name="Bean Shop"
              image="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/273641884_1620371604986127_7737084780392416906_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=PrCTHKG-cykAX-lFBRh&_nc_oc=AQlWJ97CAT0dMktkheeXcvck0Qn5aGYKm2jeFoto30qZkeCcagPOcDRtJT52WKar6w4&_nc_ht=scontent.fhan4-3.fna&oh=00_AT_o_tiGHQjqFbl50dwltY_yqJe69wjybxe4GyhbfGSJdA&oe=62313F14"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total * 100}
              token={ontoken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
