import ImageBlurb from "./ImageBlurb";
import TextBlurb from "./TextBlurb";

export default function Blurb(props) {
  const {
    blurb,
    blurb: { _type, publishedAt }
  } = props;

  if (!publishedAt) return null; // TODO: should be in the query itself

  const Handler = {
    imageBlurb: ImageBlurb,
    textBlurb: TextBlurb
  }[_type];

  if (!Handler) throw new Error("Unhandled blurb type: " + _type);

  return <Handler blurb={blurb} />;
}
