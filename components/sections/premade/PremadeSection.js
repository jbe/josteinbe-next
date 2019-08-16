import BusinessCardSection from "./BusinessCardSection";
import SiteNavbarSection from "./SiteNavbarSection";

export default function PremadeSection(props) {
  const { section } = props;

  const Handler = {
    bizCard: BusinessCardSection,
    siteNavbar: SiteNavbarSection
  }[section.type];

  if (!Handler)
    throw new Error("premade section type not handled: " + section.type);

  return <Handler section={section} />;
}
