import Text from "./Text";
import Premade from "./premade/Premade";
import BlurbStream from "./BlurbStream";

export default function Section(props) {
  const { section } = props;

  const Handler = {
    textSection: Text,
    premadeSection: Premade,
    blurbSection: BlurbStream
  }[section._type];

  if (!Handler) throw new Error("section type not handled: " + section.type);

  return <Handler section={section} />;
}
