import PortableText from "../PortableText";

export default function Text(props) {
  const { section } = props;

  return <PortableText text={section.text} />;
}
