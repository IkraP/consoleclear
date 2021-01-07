import * as React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Footer>
        <a
          href="https://twitter.com/console.clear"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="ri-twitter-fill"
            style={{ fontSize: 25 }}
            title="twitter-logo"
          ></i>
        </a>
      </Footer>
    </>
  );
}

const Footer = styled.div``;
