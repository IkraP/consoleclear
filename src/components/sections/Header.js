import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//navigation buttons with links for Link gatsby component
const navigationButtons = [
  { title: "Home", link: "/" },
  { title: "Take a 5 minute break", link: "/takeabreak" },
  { title: "Meditation", link: "/meditation" },
];

// TODO: Add Meet the Team link (zen and ene) and Helpful links

export default function Header() {
  return (
    <>
      <Wrapper>
        <p>Logo for consoleclear</p>
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
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  top: 0;
  z-index: 999;
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

  &:hover {
    color: #ecb684;
  }
`;
