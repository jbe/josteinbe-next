import PortableText from "../PortableText";

export default function(props) {
  const { blurb } = props;

  return (
    <div>
      <p>TODO: style text content</p>
      <PortableText text={blurb.body} />
    </div>
  );
}
