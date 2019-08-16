import Link from "next/link";
import { useContext } from "react";
import { BlurbsContext } from "../../contexts";
import Blurb from "../blurb/Blurb";

export default function BlurbStreamSection(props) {
  const blurbs = useContext(BlurbsContext);

  return (
    <>
      <div style={{ marginTop: "4em" }}>
        {blurbs.map(blurb => (
          <Blurb key={blurb._id} blurb={blurb} />
        ))}
      </div>
    </>
  );
}
