const BlockContent = require("@sanity/block-content-to-react");

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

export default function PortableText(props) {
  return <BlockContent blocks={props.text} serializers={serializers} />;
}
