import PortableText from "../text/PortableText";

export default function Text(props) {
  const { section } = props;

  return <PortableText text={section.text} />;
}
