export default function Card(props) {
  const { style, border = true, children, ...rest } = props;

  return (
    <div
      style={{
        padding: "3em",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        border: border ? "1px solid #eaeaea" : null,
        borderRadius: "3px",
        boxShadow: "0 15px 50px 0 rgba(100, 100, 180, 0.1)",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
