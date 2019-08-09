import { useContext } from "react";
import Link from "next/link";
import { useResponsiveMargin } from "../../../constants";
import { SiteConfigContext } from "../../../contexts";

export default function BusinessCard(props) {
  const { mainNavigation } = useContext(SiteConfigContext);

  const margin = useResponsiveMargin();

  return (
    <div
      style={{
        margin,
        padding: "3em",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        border: "1px solid #eaeaea",
        borderRadius: "3px",
        boxShadow: "0 15px 50px 0 rgba(100, 100, 180, 0.1)",
        maxWidth: "40em"
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
    </div>
  );
}
