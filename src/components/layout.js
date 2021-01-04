import * as React from "react";
import "./layout.css";

export function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
