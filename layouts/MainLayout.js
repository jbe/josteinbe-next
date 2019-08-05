import Head from "next/head";

export default function MainLayout(props) {
  const {
    children,
    siteConfig: { header }
  } = props;

  return (
    <>
      <Head>
        <title>{header}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 16px;
          font-family: sans-serif;
          background-color: #821;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
          font-weight: normal;
          font-family: monospace;
        }

        ol,
        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h1 {
          font-size: 1.2em;
          color: #fff;
          display: inline-block;
          font-weight: 400;
          padding: 0.4em;
        }
        li a {
          text-decoration: none;
        }
        h1,
        .active {
          background-color: #333;
        }
      `}</style>

      {children}
    </>
  );
}
