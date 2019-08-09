import ImageBlurb from "./ImageBlurb";
import LinkBlurb from "./LinkBlurb";
import RabbitHoleBlurb from "./RabbitHoleBlurb";
import TextBlurb from "./TextBlurb";

export default function Blurb(props) {
  const {
    blurb,
    blurb: { _type }
  } = props;

  const Handler = {
    imageBlurb: ImageBlurb,
    linkBlurb: LinkBlurb,
    rabbitHoleBlurb: RabbitHoleBlurb,
    textBlurb: TextBlurb
  }[_type];

  if (!Handler) throw new Error("Unhandled blurb type: " + _type);

  return <Handler blurb={blurb} />;
}
