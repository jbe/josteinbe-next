const BlockContent = require("@sanity/block-content-to-react");
import { FaGoogle, FaImages, FaSearch } from "react-icons/fa";
import { GiDuck } from "react-icons/gi";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    embedHTML: props => (
      <div dangerouslySetInnerHTML={{ __html: props.node.html }} />
    ),
    rabbitHole: props => (
      <div>
        <FaSearch /> {props.node.term}
      </div>
    )
  }
};

export default function PortableText(props) {
  return <BlockContent blocks={props.text} serializers={serializers} />;
}
