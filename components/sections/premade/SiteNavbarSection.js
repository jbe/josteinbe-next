import { useContext } from "react";
import Link from "next/link";
import { SiteConfigContext } from "../../../contexts";
import Card from "../../Card";

export default function SiteNavbarSection(props) {
  const { title, mainNavigation } = useContext(SiteConfigContext);

  return (
    <div
      className="responsive-page-padding"
      style={{
        paddingTop: "5%",
        paddingBottom: "5%"
      }}
    >
      <Card
        style={{
          maxWidth: "32em"
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "1.1em"
          }}
        >
          <Link href="/">
            <a style={{ padding: "0 1em 0 0" }}>{title}</a>
          </Link>
          {mainNavigation.map(({ slug, title }) => (
            <Link key={slug} href="/[slug]" as={"/" + slug}>
              <a style={{ padding: "0 1em 0 0" }}>{title}</a>
            </Link>
          ))}

          {/* <div style={{ flexGrow: "1" }} /> */}
        </div>
      </Card>
    </div>
  );
}
