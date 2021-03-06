import { useContext } from "react";
import Head from "next/head";
import { client } from "../sanityClient";
import { blurbTypes } from "../constants";
import { SiteConfigContext, BlurbsContext } from "../contexts";
import MainLayout from "../layouts/MainLayout";
import Section from "../components/sections/Section";

export default function Index(props) {
  const {
    siteConfig,
    siteConfig: { frontpage, title },
    blurbs
  } = props;

  if (!frontpage) return null;

  return (
    <SiteConfigContext.Provider value={siteConfig}>
      <BlurbsContext.Provider value={blurbs}>
        <MainLayout>
          <Head>
            <title>{title}</title>
          </Head>

          <div>
            {(frontpage.content || []).map(section => (
              <Section key={section._key} section={section} />
            ))}
          </div>

          <footer
            className="responsive-page-padding"
            style={{ color: "#aaa", marginBottom: "5%" }}
          >
            <a href="https://jostein-be.tumblr.com/">
              Enter another rabbit hole
            </a>{" "}
            🐇
          </footer>
        </MainLayout>
      </BlurbsContext.Provider>
    </SiteConfigContext.Provider>
  );
}

Index.getInitialProps = async req => {
  const result = await client.fetch(
    `{
    "siteConfig": *[_id == "site-config"] [0] {
      ...,
      frontpage->,
      logo {asset->{extension, url}},
      mainNavigation[] -> {
        "slug": slug.current,
        "title": page->title
      },
      footerNavigation[] -> {
        "slug": slug.current,
        "title": page->title
      }
    },

    "blurbs": *[_type in 
      $blurbTypes] {
        "imageFieldAsset": image.asset->,
        ...
      }
  }`,
    { blurbTypes }
  );

  return {
    ...result
  };
};
