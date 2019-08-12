import { FaGoogle, FaImages, FaSearch } from "react-icons/fa";
import { GiDuck } from "react-icons/gi";

function RabbitHoleButton(props) {
  const { text, href, title, icon } = props;

  return (
    <a href={href} title={title}>
      <button
        style={{
          fontSize: "1.2em",
          border: "2px solid #aaa",
          borderRadius: "0.4em",
          background: "transparent",
          // background: "#666",
          // color: "#555",
          padding: "0.5em 0.5em 0.3em 0.5em",
          marginRight: "0.6em",
          cursor: "pointer"
        }}
      >
        {icon}
      </button>
    </a>
  );
}

export default function RabbitHole(props) {
  const {
    node: { term, google, googleImage, duckDuckGo }
  } = props;

  return (
    <div
      style={{
        display: "flex",
        margin: "5% 0 5% 0",
        fontSize: "1.5em",
        alignItems: "bottom"
      }}
    >
      {google && (
        <RabbitHoleButton
          title={"Google search for " + term}
          icon={<FaGoogle />}
          href={"https://google.com/search?q=" + encodeURIComponent(term)}
        />
      )}

      {googleImage && (
        <RabbitHoleButton
          title={"Google image search for " + term}
          icon={<FaImages />}
          href={
            "https://google.com/search?tbm=isch&q=" + encodeURIComponent(term)
          }
        />
      )}

      {duckDuckGo && (
        <RabbitHoleButton
          title={"DuckDuckGo search for " + term}
          icon={<GiDuck />}
          href={"https://duckduckgo.com/search?q=" + encodeURIComponent(term)}
        />
      )}

      <div style={{ flexGrow: 1 }} />
    </div>
  );
}
