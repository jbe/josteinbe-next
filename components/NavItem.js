import Router from "next/router";

export default function NavItem(props) {
  const { href, as: _as, active, children, ...rest } = props;

  const onClick = event => {
    event.preventDefault();
    Router.push(href, _as);
  };

  return (
    <li
      onClick={onClick}
      style={{
        margin: "0 0.5em 0 0",
        padding: "0.4em",
        font: "1.2em monospace",
        backgroundColor: active ? "#333" : "#999",
        cursor: "pointer"
      }}
    >
      <a
        onClick={onClick}
        href={_as || href}
        className={active ? "active" : null}
        style={{ color: "#fff" }}
      >
        {children}
      </a>
    </li>
  );
}
