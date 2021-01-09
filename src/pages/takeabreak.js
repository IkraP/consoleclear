import * as React from "react";
import { Layout } from "../components/layouts/layout";
import Break from "../components/sections/Break";
import BreakScene from "../components/sections/BreakScene";

export default function TakeABreak() {
  return (
    <Layout>
      <Break />
      <BreakScene />
    </Layout>
  );
}
