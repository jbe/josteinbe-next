export default function Nav(props) {
  const { children } = props;

  return (
    <>
      <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
        {children}
      </ul>
    </>
  );
}
