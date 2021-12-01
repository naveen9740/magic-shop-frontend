import { useState } from "react";
import { useLocation } from "react-router";
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
  const { pathname } = useLocation();
  const cat = pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

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
            <div key={index}>
              <Title>{`${cat}'s Category`}</Title>
              <FilterContainer>
                <Filter>
                  <FilterText>{filterText}</FilterText>
                  <Select name="color" onChange={handleFilters}>
                    <Option disabled>color</Option>
                    {filterOptions1.map((opt, index) => {
                      return <Option key={index}>{opt}</Option>;
                    })}
                  </Select>
                  <Select name="size" onChange={handleFilters}>
                    <Option disabled>size</Option>
                    {filterOptions2.map((opt, index) => {
                      return <Option key={index}>{opt}</Option>;
                    })}
                  </Select>
                </Filter>
                <Filter>
                  <FilterText>{sortText}</FilterText>
                  <Select
                    name="sort"
                    onChange={(e) => {
                      setSort(e.target.value);
                    }}
                  >
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc</Option>
                  </Select>
                </Filter>
              </FilterContainer>
            </div>
          );
        }
      )}
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
