const BlockContent = require("@sanity/block-content-to-react");
import Card from "../Card";
import RabbitHole from "./RabbitHole";

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    embedHTML: props => (
      <div
        className="responsive-video-iframe"
        dangerouslySetInnerHTML={{ __html: props.node.html }}
      />
    ),
    rabbitHole: props => <RabbitHole node={props.node} />
  }
};

export default function PortableText(props) {
  return <BlockContent blocks={props.text} serializers={serializers} />;
}
