import ImageBlurb from "./ImageBlurb";

export default function Blurb(props) {
  const {
    blurb,
    blurb: { _type }
  } = props;

  let Handler;

  if (_type === "imageBlurb") Handler = ImageBlurb;

  if (Handler) return <Handler blurb={blurb} />;

  return (
    <h4>
      {blurb.title} ({blurb._type})
    </h4>
  );
}
