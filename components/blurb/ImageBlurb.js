import { useResponsiveMargin } from "../../constants";
import PortableText from "../PortableText";

export default function ImageBlurb(props) {
  const {
    blurb: {
      altText,
      text,
      publishedAt,
      title,
      imageFieldAsset: { url }
    }
  } = props;

  const margin = useResponsiveMargin(0);

  const date = new Date(publishedAt);

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <img
        src={url}
        alt={altText}
        style={{ paddingLeft: margin, paddingRight: margin }}
      />
      {title && (
        <div style={{ color: "#aaa", textAlign: "right", marginRight: margin }}>
          {title}
        </div>
      )}
      <div
        style={{
          display: "flex",
          marginLeft: margin,
          marginRight: margin,
          marginTop: "2%"
        }}
      >
        <div
          style={{
            marginRight: "1em",
            flexGrow: 1,
            lineHeight: 2,
            maxWidth: "50%"
          }}
        >
          <PortableText text={text} />
          <div style={{ marginTop: "2em", color: "#aaa" }}>
            Posted {date.toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
