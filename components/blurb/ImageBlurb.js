import PortableText from "../text/PortableText";
import PostedDate from "./PostedDate";
import FadeIn from "../animation/FadeIn";
import { useInView } from "react-intersection-observer";

export default function ImageBlurb(props) {
  const {
    blurb: {
      altText,
      text,
      publishedAt,
      title,
      imageFieldAsset,
      imageFieldAsset: { url }
    }
  } = props;

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <FadeIn translateFrom="2em, 0">
        <img className="responsive-page-padding" src={url} alt={altText} />
        {title && (
          <div
            className="responsive-page-padding"
            style={{ color: "#aaa", textAlign: "right" }}
          >
            {title}
          </div>
        )}
      </FadeIn>
      <FadeIn
        className="responsive-page-padding"
        style={{
          display: "flex",
          marginTop: "2%"
        }}
      >
        <div
          className="responsive-column"
          style={{
            flexGrow: 1,
            lineHeight: 2
          }}
        >
          {text && <PortableText text={text} />}
          <PostedDate publishedAt={publishedAt} />
        </div>
      </FadeIn>
    </div>
  );
}
