import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { footer } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;
const SocialIcon = styled.a`
  width: 50px;
  height: 50px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fae2e2" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  /* width: 100%; */
`;

export const Footer = () => {
  return (
    <>
      {footer.map(
        ({ id, logo, desc, title1, title2, links, contacts, img }) => {
          return (
            <Container key={id}>
              <Left>
                <Logo>{logo}</Logo>
                <Desc>{desc}</Desc>
                <SocialContainer>
                  <SocialIcon>
                    <Instagram />
                    <SocialIcon>
                      <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                      <LinkedIn />
                      <SocialIcon>
                        <Facebook />
                      </SocialIcon>
                    </SocialIcon>
                  </SocialIcon>
                </SocialContainer>
              </Left>
              <Center>
                <Title>{title1}</Title>
                <List>
                  {links.map((item) => {
                    return <ListItem>{item}</ListItem>;
                  })}
                </List>
              </Center>
              <Right>
                <Title>{title2}</Title>
                {contacts.map((item) => {
                  return <ContactItem>{item}</ContactItem>;
                })}
                <Payment src={img} />
              </Right>
            </Container>
          );
        }
      )}
    </>
  );
};
