import { useContext } from "react";
import Head from "next/head";
import { SiteConfigContext } from "../contexts";

export default function MainLayout(props) {
  const { children } = props;

  const { header } = useContext(SiteConfigContext);

  return (
    <>
      <Head>
        <title>{header}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font: 14px/1.5 -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
            Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol;
          background-color: white;
        }

        .mono {
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
            monospace;
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
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>

      {children}
    </>
  );
}
