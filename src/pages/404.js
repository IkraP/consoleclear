import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Nightscene from "../components/sections/NightScene";
import { Layout } from "../components/layouts/layout";
import "@fontsource/arima-madurai";

export default function NotFoundPage() {
  return (
    <>
      <Wrapper>
        <Layout>
          <TextWrapper>
            <Text>404 - Page not found</Text>
            <Link to="/">
              <LinkText>Go back to home</LinkText>
            </Link>
          </TextWrapper>
          <Nightscene />
        </Layout>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
    174.94deg,
    #9975b3 8.75%,
    #c25d8c 48.43%,
    #ecb684 125.46%
  );
  width: 100%;

  a {
    text-decoration: none;
  }
`;
const TextWrapper = styled.div`
  display: grid;
  justify-content center;

`;

const Text = styled.p`
  color: white;
  font-size: 1.2em;
  font-family: Arima Madurai;
  letter-spacing: 0.2em;
`;

const LinkText = styled.p`
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  color: #32345e;
  font-family: Arima Madurai;
  padding-top: 20px;
  transition: 0.5s ease-in-out;

  &:hover {
    color: #aa289d;
    transform: scale(1.1);
  }
`;
