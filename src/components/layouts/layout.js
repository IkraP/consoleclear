import * as React from "react";
import "./layout.css";
import styled from "styled-components";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContentWrapper>
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
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 50px 30px;
  margin: 0 auto;
  height: 100vh;
`;
