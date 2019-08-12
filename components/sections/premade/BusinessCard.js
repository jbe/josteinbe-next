import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { SiteConfigContext } from "../../../contexts";
import Card from "../../Card";
import FadeIn from "../../animation/FadeIn";

export default function BusinessCard(props) {
  const { mainNavigation } = useContext(SiteConfigContext);

  return (
    <FadeIn
      className="responsive-page-padding responsive-page-padding-top responsive-page-padding-bottom"
      translateFrom="-2em, 0"
    >
      <Card
        style={{
          maxWidth: "32em"
        }}
      >
        <div style={{ margin: "0 0 1em 0" }}>
          <h1>Jostein Berre Eliassen</h1>
        </div>

        <div style={{ margin: "0 0 3em 0" }}>Developer</div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: "1.1em"
          }}
        >
          {mainNavigation.map(({ slug, title }) => (
            <Link key={slug} href="/[slug]" as={"/" + slug}>
              <a style={{ padding: "1em 1em 0 0" }}>{title}</a>
            </Link>
          ))}

          {/* <div style={{ flexGrow: "1" }} /> */}
        </div>
      </Card>
    </FadeIn>
  );
}
