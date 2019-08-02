function ImageBlurb(props) {
  const {
    blurb,
    blurb: {
      altText,
      publishedAt,
      title,
      imageFieldAsset: { url }
    }
  } = props;

  return (
    <>
      <h4 key={blurb._id}>
        {title} ({publishedAt})
      </h4>
      <img src={url} alt={altText} />
    </>
  );
}

function BlurbItem(props) {
  const {
    blurb,
    blurb: { _type }
  } = props;

  let Handler;

  if (_type === "imageBlurb") Handler = ImageBlurb;

  if (Handler) return <Handler blurb={blurb} />;

  return (
    <h4>
      {blurb.title} ({blurb._type})
    </h4>
  );
}

export default function BlurbList(props) {
  const { blurbs } = props;

  return (
    <>
      {blurbs.map(blurb => (
        <BlurbItem key={blurb._id} blurb={blurb} />
      ))}
    </>
  );
}
