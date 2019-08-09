import PortableText from "../PortableText";

export default function(props) {
  const { blurb } = props;

  return (
    <div style={{ marginTop: "10%", marginBottom: "10%" }}>
      <div className="responsive-page-padding">
        <PortableText text={blurb.body} />
      </div>
    </div>
  );
}
