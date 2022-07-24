import styled from "styled-components";
import { mobile } from "../responsive";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  width: 40%;
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
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input type="text" placeholder="First Name" required />
          <Input placeholder="Last Name" required />
          <Input
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            minLength="4"
            maxLength="7"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input type="password" placeholder="Confirm Password" required />
          <Agreement>
            By Creating an Account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
            onClick={async (e) => {
              e.preventDefault();
              const result = await userRequest.post("/register", {
                username: userName,
                email: email,
                password: password,
              });
              if (result) {
                navigate("/login");
              }
            }}
          >
            CREATE
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
