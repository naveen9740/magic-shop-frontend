import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fbf0f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username, password);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  const { isFetching, error } = useSelector((state) => state?.user);
  return (
    <Container>
      <Wrapper>
        <Title>Login to your Account</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            required
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went Wrong</Error>}
          <Link>Forgot Password</Link>
          <Link>Create Account</Link>
        </Form>
        <Button
          onClick={() => {
            document.getElementById("username").value = "admin";
            document.getElementById("password").value = "admin123";
            setUsername("admin");
            setPassword("admin12");
          }}
        >
          Autofill with Test Credentials
        </Button>
      </Wrapper>
    </Container>
  );
};
