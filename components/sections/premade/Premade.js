import BusinessCard from "./BusinessCard";

export default function Section(props) {
  const { section } = props;

  const Handler = {
    bizCard: BusinessCard
  }[section.type];

  if (!Handler)
    throw new Error("premade section type not handled: " + section.type);

  return <Handler section={section} />;
}
