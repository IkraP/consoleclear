import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import "@fontsource/shadows-into-light";
import "@fontsource/arima-madurai";

//navigation buttons with links for Link gatsby component
const navigationButtons = [
  { title: "Take a 10 minute break", link: "/takeabreak" },
];

// TODO: Add Meet the Team link (zen and ene) and Helpful links

export default function Header() {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <TitleText>Console.clear</TitleText>
        </Link>
        <MenuWrapper>
          {navigationButtons.map((navLink) => {
            return (
              <Link to={navLink.link}>
                <MenuItem>{navLink.title}</MenuItem>
              </Link>
            );
          })}
        </MenuWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  z-index: 999;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  top: 0;
  height: auto;

  a {
    margin: 10px;
    color: white;
    font-size: 1em;
    text-decoration: none;
  }
`;

const MenuItem = styled.div`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  font-family: Arima Madurai;
  font-weight: 100;
  color: #32345e;
  font-size: 1.3em;
  letter-spacing: 0.1em;

  &:hover {
    color: #ecb684;
  }
`;

const TitleText = styled.h1`
  font-family: Shadows Into Light;
  font-size: 3em;
  color: white;
  text-decoration: none;
`;
