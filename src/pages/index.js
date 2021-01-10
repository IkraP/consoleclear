import * as React from "react";
import { Layout } from "../components/layouts/layout";
import NightSceneDesktop from "../components/sections/NightSceneDesktop";
import NightSceneMobile from "../components/sections/NightSceneMobile";
import Seo from "../components/sections/Seo";
import PageTransition from "gatsby-plugin-page-transitions";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function IndexPage({ location }) {
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
        <Seo title="ConsoleClear | Home" pathname={location.pathname} />
        <Layout>
          {breakpoints.md ? <NightSceneMobile /> : <NightSceneDesktop />}
        </Layout>
      </PageTransition>
    </>
  );
}
