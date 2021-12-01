import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { Navigate, useNavigate } from "react-router";
const KEY =
  "pk_test_51K1Dd8SErN4FR2QR8Xk165CTUeMK6YY0h6gvEcztILZl0WK1sFFClqiY5b0jPVDSaWa6jHb2LEZEW05eLdyvv5DU00K1pOLHoC";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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
  ${mobile({ display: "none" })}
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
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Quantity = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 300;
  display: flex;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [token, setToken] = useState(null);
  const onToken = (t) => {
    setToken(t);
  };
  const navigate = useNavigate();
  console.log({ token });
  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: token.id,
          amount: cart.total,
        });
        console.log(res.data);
        navigate("/success", {
          state: { stripeData: res.data?.stripeRes, products: cart },
        });
      } catch (error) {
        console.log(error);
      }
    };
    token && makeReq();
  }, [token, cart.total]);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => {
              return (
                <Product>
                  <ProductDetails>
                    <Image src={product?.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                        {product?.title}
                      </ProductName>
                      <ProductId>
                        <b>Id:</b>
                        {product?._id}
                      </ProductId>
                      <ProductColor color={product?.color || "grey"} />
                      <ProductSize>
                        <b>Size: </b>
                        {product?.size || "M"}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductQuantityContainer>
                      <Add />
                      <Quantity>{product?.quantity}</Quantity>
                      <Remove />
                    </ProductQuantityContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetails>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart?.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart?.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="magic-shop"
              billingAddress
              shippingAddress
              description={`Your Total is ₹${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              currency="INR"
              stripeKey={KEY}
            >
              <Button>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};
