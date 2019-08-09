export default function PostedDate(props) {
  const { publishedAt } = props;

  const date = new Date(publishedAt);

  return (
    <div style={{ marginTop: "1.5em", color: "#aaa" }}>
      Posted {date.toDateString()}
    </div>
  );
}
