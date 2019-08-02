import { useRouter } from "next/router";

export default function Post() {
  const {
    query: { postId }
  } = useRouter();

  return (
    <div>
      <p>{postId}</p>
    </div>
  );
}
