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

export default function Text(props) {
  const { section } = props;

  return (
    <BlockContent
      key={section._key}
      blocks={section.text}
      serializers={serializers}
    />
  );
}
