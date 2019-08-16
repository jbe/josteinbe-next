import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiteConfigContext } from "../../../contexts";
import Card from "../../Card";
import FadeIn from "../../animation/FadeIn";

const NavItem = styled.a.attrs()`
  padding: 0.5em;
  margin-right: 0.5em;
  text-decoration: none;
  border-radius: 2px;
  background-color: hsl(${props => (props.ms / 200) % 360}, 50%, 97%);
  cursor: pointer;

  &:hover {
    background-color: hsl(${props => (props.ms / 200) % 360}, 50%, 90%);
  }
`;

export default function BusinessCardSection(props) {
  const { mainNavigation } = useContext(SiteConfigContext);

  const [ms, setMs] = useState(20000);
  useEffect(() => {
    const handle = setInterval(() => {
      setMs(ms => ms + 250);
    }, 250);

    return () => clearInterval(handle);
  }, []);

  return (
    <div
      className="responsive-page-padding responsive-page-padding-top responsive-page-padding-bottom"
      style={{ display: "flex", alignItems: "flex-start" }}
    >
      <Card
        style={{
          maxWidth: "32em",
          minWidth: "26em",
          flexGrow: "1",
          backgroundColor: "white",
          backgroundColor: `hsl(${(ms / 200) % 360}, 100%, 99.9%)`
        }}
      >
        <img
          style={{
            position: "absolute",
            maxWidth: "20em",
            margin: "-7em 0 0 -2em"
          }}
          src="/static/jbe-sign.png"
          alt="Jostein Berre Eliassen"
        />

        <div
          className="mono"
          style={{ margin: "0 0 3em 0", textAlign: "right" }}
        >
          ~jbe $
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: "1.1em"
          }}
        >
          {/* {mainNavigation.map(({ slug, title }) => (
            <Link key={slug} href="/[slug]" as={"/" + slug}>
              <NavItem ms={ms}>{title}</NavItem>
            </Link>
          ))} */}

          {/* <div style={{ flexGrow: "1" }} /> */}
        </div>
      </Card>

      {/* <div style={{ marginLeft: "6em", maxWidth: "34em" }}>
        <FaGithub />
      </div> */}
    </div>
  );
}
