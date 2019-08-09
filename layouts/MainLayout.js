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
        h6 {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }

        .responsive-page-padding {
          padding-left: 4%;
          padding-right: 4%;
        }
        .responsive-page-padding-top {
          padding-top: 4%;
        }
        .responsive-page-padding-bottom {
          padding-bottom: 4%;
        }
        .responsive-column {
          max-width: 75%;
        }
        @media (min-width: 600px) {
          .responsive-page-padding {
            padding-left: 10%;
            padding-right: 10%;
          }
          .responsive-page-padding-top {
            padding-top: 10%;
          }
          .responsive-page-padding-bottom {
            padding-bottom: 10%;
          }
          .responsive-column {
            max-width: 75%;
          }
        }
        @media (min-width: 900px) {
          .responsive-column {
            max-width: 50%;
          }
        }
        @media (min-width: 1300px) {
          .responsive-page-padding {
            padding-left: 12%;
            padding-right: 12%;
          }
          .responsive-page-padding-top {
            padding-top: 12%;
          }
          .responsive-page-padding-bottom {
            padding-bottom: 12%;
          }
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
