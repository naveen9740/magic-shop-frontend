import styled from "styled-components";
import {
  Announcement,
  Footer,
  Navbar,
  Newsletter,
  Products,
} from "../components";
import { productListPage } from "../data";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px ", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      {productListPage.map(
        (
          {
            title,
            filterText,
            sortText,
            filterOptions1,
            filterOptions2,
            sortOptions,
          },
          index
        ) => {
          return (
            <>
              <Title>{title}</Title>
              <FilterContainer>
                <Filter>
                  <FilterText>{filterText}</FilterText>
                  <Select>
                    <Option disabled selected>
                      Color
                    </Option>
                    {filterOptions1.map((opt) => {
                      return (
                        <>
                          <Option>{opt}</Option>
                        </>
                      );
                    })}
                  </Select>
                  <Select>
                    <Option disabled selected>
                      Size
                    </Option>
                    {filterOptions2.map((opt) => {
                      return (
                        <>
                          <Option>{opt}</Option>
                        </>
                      );
                    })}
                  </Select>
                </Filter>
                <Filter>
                  <FilterText>{sortText}</FilterText>
                  <Select>
                    <Option disabled selected>
                      SortBy
                    </Option>
                    {sortOptions.map((opt) => {
                      return (
                        <>
                          <Option>{opt}</Option>
                        </>
                      );
                    })}
                  </Select>
                </Filter>
              </FilterContainer>
            </>
          );
        }
      )}
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
