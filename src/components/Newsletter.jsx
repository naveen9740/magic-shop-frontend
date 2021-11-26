import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { newsletter } from "../data";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;
const Button = styled.button`
  flex: 1.5;
  border: none;
  background-color: teal;
  color: white;
`;

export const Newsletter = () => {
  return (
    <>
      {newsletter.map(({ id, title, desc }) => {
        return (
          <Container key={id}>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <InputContainer>
              <Input placeholder="Your Email" type="email"></Input>
              <Button>
                <Send />
              </Button>
            </InputContainer>
          </Container>
        );
      })}
    </>
  );
};
