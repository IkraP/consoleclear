import * as React from "react";
import { Layout } from "../components/layouts/layout";
import Break from "../components/sections/Break";
import BreakScene from "../components/sections/BreakScene";
import Seo from "../components/sections/Seo";

export default function TakeABreak({ location }) {
  return (
    <>
      <Seo title="ConsoleClear | Break" pathname={location.pathname} />
      <Layout>
        <Break />
        <BreakScene />
      </Layout>
    </>
  );
}
