import PortableText from "../text/PortableText";
import PostedDate from "./PostedDate";
import FadeIn from "../animation/FadeIn";

export default function(props) {
  const {
    blurb: { body, publishedAt }
  } = props;

  return (
    <FadeIn
      translateFrom="0, 2em"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="responsive-page-padding">
        <PortableText text={body} />
        <PostedDate publishedAt={publishedAt} />
      </div>
    </FadeIn>
  );
}
