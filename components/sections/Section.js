import TextSection from "./TextSection";
import PremadeSection from "./premade/PremadeSection";
import BlurbStreamSection from "./BlurbStreamSection";

export default function Section(props) {
  const { section } = props;

  const Handler = {
    textSection: TextSection,
    premadeSection: PremadeSection,
    blurbSection: BlurbStreamSection
  }[section._type];

  if (!Handler) throw new Error("section type not handled: " + section._type);

  return <Handler section={section} />;
}
