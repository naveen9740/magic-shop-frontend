import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
`;

export const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders above 500₹</Container>;
};
