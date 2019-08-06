export default function ImageBlurb(props) {
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
