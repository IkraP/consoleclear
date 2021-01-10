import * as React from "react";
import { Layout } from "../components/layouts/layout";
import Break from "../components/sections/Break";
import BreakSceneDesktop from "../components/sections/BreakSceneDesktop";
import BreakSceneMobile from "../components/sections/BreakSceneMobile";
import Seo from "../components/sections/Seo";
import PageTransition from "gatsby-plugin-page-transitions";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function TakeABreak({ location }) {
  const breakpoints = useBreakpoint();
  return (
    <>
      <PageTransition
        defaultStyle={{
          transition: `all 1s ease-in-out`,
        }}
        transitionStyles={{
          entering: { opacity: 0.9 },
          entered: { opacity: 1 },
          exiting: { opacity: 1 },
          exited: { opacity: 0.9 },
        }}
        transitionTime={200}
      >
        <Seo title="ConsoleClear | Break" pathname={location.pathname} />
        <Layout>
          <Break />
          {breakpoints.md ? <BreakSceneMobile /> : <BreakSceneDesktop />}
        </Layout>
      </PageTransition>
    </>
  );
}
