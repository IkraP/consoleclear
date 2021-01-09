import * as React from "react";
import styled from "styled-components";
import { RiTwitterFill, RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <Wrapper>
        <TextWrapper>
          Created by <a href="https://twitter.com/chemtocode">ChemToCode</a>
        </TextWrapper>
        <FooterItems>
          <a
            href="https://twitter.com/console.clear"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterFill size="25" title="twitter logo" />
          </a>
          <a
            href="https://instagram.com/consoleclear"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill size="25" title="instagram logo" />
          </a>
        </FooterItems>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: 25% auto;
  align-items: center;
`;

const FooterItems = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: auto auto;
  padding: 10px;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
  }

  a:nth-child(1) :hover {
    color: #00acee;
  }

  a:nth-child(2) :hover {
    color: #ffdc80;
  }
`;

const TextWrapper = styled.p`
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
`;
