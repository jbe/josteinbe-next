import sanityClient from "../sanityClient";
import { useRouter } from "next/router";
import Head from "next/head";
const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

export default function Page(props) {
  const {
    page: { title, body }
  } = props;

  // const {
  //   query: { pageSlug }
  // } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h1>{title}</h1>
        <BlockContent blocks={body} serializers={serializers} />
      </div>
    </>
  );
}

Page.getInitialProps = async req => {
  const {
    query: { pageSlug }
  } = req;

  const result = await sanityClient.fetch(
    `{
      "page": *[_type == "page" && slug.current == $pageSlug ] [0]
    }`,
    {
      pageSlug
    }
  );

  return {
    ...result
  };
};
