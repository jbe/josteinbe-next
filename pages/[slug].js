import { client } from "../sanityClient";
import Head from "next/head";
import Section from "../components/sections/Section";
import MainLayout from "../layouts/MainLayout";

export default function Page(props) {
  const {
    route: {
      page: { title, content }
    }
  } = props;

  // const {
  //   query: { slug }
  // } = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        {(content || []).map(section => (
          <Section key={section._key} section={section} />
        ))}
      </div>
    </MainLayout>
  );
}

Page.getInitialProps = async req => {
  const {
    query: { slug }
  } = req;

  const result = await client.fetch(
    `{
      "route": *[_type == "route" && slug.current == $slug ] [0] {
        ...,
        page->
      }
    }`,
    {
      slug
    }
  );

  return {
    ...result
  };
};
