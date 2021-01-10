import * as React from "react";
import { Layout } from "../components/layouts/layout";
import Nightscene from "../components/sections/NightScene";
import Seo from "../components/sections/Seo";

export default function IndexPage({ location }) {
  return (
    <>
      <Seo title="ConsoleClear | Home" pathname={location.pathname} />
      <Layout>
        <Nightscene />
      </Layout>
    </>
  );
}
