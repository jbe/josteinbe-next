import { useContext } from "react";
import Head from "next/head";
import sanityClient from "../sanityClient";
import { SiteConfigContext } from "../contexts";
import MainLayout from "../layouts/MainLayout";
import Section from "../components/sections/Section";

export default function Index(props) {
  const { frontpage } = props;
  const { title } = useContext(SiteConfigContext);

  if (!frontpage) return null;

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>

      <div style={{}}>
        <div>
          {(frontpage.content || []).map(section => (
            <Section key={section._key} section={section} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

Index.getInitialProps = async req => {
  const result = await sanityClient.fetch(`
      *[_id == "site-config"][0] { frontpage-> }
  `);

  return {
    ...result
  };
};
