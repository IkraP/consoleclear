import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//navigation buttons with links for Link gatsby component
const navigationButtons = [
  { title: "Home", link: "/" },
  { title: "5 minute break", link: "/5minutebreak" },
  { title: "Guided Meditation", link: "/Meditation" },
];

// TODO: Add Meet the Team link (zen and ene) and Helpful links

export default function Nav() {
  return (
    <>
      <Wraper>
        {navigationButtons.map((navLink) => {
          <Link to={navLink.link}>
            <p>{navLink.title}</p>
          </Link>;
        })}
      </Wraper>
    </>
  );
}

const Wrapper = styled.div``;
