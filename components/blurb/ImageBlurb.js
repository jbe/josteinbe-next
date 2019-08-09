import PortableText from "../PortableText";
import PostedDate from "./PostedDate";

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

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <img className="responsive-page-padding" src={url} alt={altText} />
      {title && (
        <div
          className="responsive-page-padding"
          style={{ color: "#aaa", textAlign: "right" }}
        >
          {title}
        </div>
      )}
      <div
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
          <PortableText text={text} />
          <PostedDate publishedAt={publishedAt} />
        </div>
      </div>
    </div>
  );
}
