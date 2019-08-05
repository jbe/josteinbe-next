import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import sanityClient from "../sanityClient";
import Nav from "../components/Nav";
import NavItem from "../components/NavItem";
import BlurbList from "../components/BlurbList";

const blurbTypes = [
  "imageBlurb",
  "textBlurb",
  "rabbitHoleBlurb",
  "linkBlurb",
  "tagBlurb"
];

export default function Home(props) {
  const {
    siteConfig,
    siteConfig: { header, description },
    blurbs,
    pages
  } = props;

  return (
    <MainLayout siteConfig={siteConfig} pages={pages}>
      <Head>{/* <title>NextJS learning project</title> */}</Head>

      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "2em",
            margin: "2em",
            backgroundColor: "rgba(255, 255, 255, 0.7)"
          }}
        >
          <div>
            <h1 title={description}>{header}</h1>
          </div>

          <div style={{ margin: "1em 0" }}>&darr;</div>

          <Nav>
            <NavItem active href="/">
              Blurbs
            </NavItem>
            {pages.map(page => (
              <NavItem key={page._id} href={"/" + page.slug.current}>
                {page.title}
              </NavItem>
            ))}
          </Nav>

          <div style={{ margin: "1em 0" }}>&darr;</div>

          <Nav>
            <NavItem active href="/">
              Latest
            </NavItem>
            <NavItem href="/posts/[postId]" as="/posts/1234">
              Archives
            </NavItem>
          </Nav>
        </div>
      </div>

      <div style={{ marginTop: "4em" }}>
        <BlurbList blurbs={blurbs} />
      </div>
    </MainLayout>
  );
}

Home.getInitialProps = async req => {
  const result = await sanityClient.fetch(
    `{
      "siteConfig": *[_id == "site-config"][0],
      "pages": *[_type == "page"],
      "blurbs": *[_type in [${blurbTypes
        .map(name => '"' + name + '"')
        .join(", ")}]] {
          "imageFieldAsset": image.asset->,
          ...
        }
    }`
  );

  return {
    ...result
  };
};
