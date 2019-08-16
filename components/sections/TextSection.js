import PortableText from "../text/PortableText";
import FadeIn from "../animation/FadeIn";

export default function TextSection(props) {
  const { section } = props;

  return (
    <FadeIn
      translateFrom="0, 2em"
      style={{ marginTop: "3%", marginBottom: "5%" }}
    >
      <div className="responsive-page-padding">
        <PortableText text={section.text} />
      </div>
    </FadeIn>
  );
}
