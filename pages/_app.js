import BaseApp, { Container } from "next/app";
import sanityClient from "../sanityClient";
import { blurbTypes } from "../constants";
import { SiteConfigContext, BlurbsContext } from "../contexts";

const query = `{
    "siteConfig": *[_id == "site-config"] [0] {
      ...,
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
  }`;

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    const componentProps = await Component.getInitialProps(ctx);

    const appProps = await sanityClient.fetch(query, { blurbTypes });

    return { componentProps, appProps };
  }

  render() {
    const {
      Component,
      componentProps,
      appProps,
      appProps: { siteConfig, blurbs }
    } = this.props;

    return (
      <Container>
        <SiteConfigContext.Provider value={siteConfig}>
          <BlurbsContext.Provider value={blurbs}>
            <Component {...componentProps} />
          </BlurbsContext.Provider>
        </SiteConfigContext.Provider>
      </Container>
    );
  }
}

export default App;
