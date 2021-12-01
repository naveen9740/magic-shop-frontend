import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/apiCalls";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.h2`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    logOut(dispatch);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlined style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>MAGIC-SHOP</Logo>
          </Link>
        </Center>
        <Right>
          {currentUser ? (
            <MenuItem>{`Welcome ${currentUser?.others.username}`}</MenuItem>
          ) : (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Register</MenuItem>
            </Link>
          )}

          {currentUser ? (
            <MenuItem onClick={handleClick}>Sign-Out</MenuItem>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Sign-In</MenuItem>
            </Link>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
