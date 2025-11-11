import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Post as PostType } from "./Board";
const convertPost = (result: unknown) => result as PostType;
export default function Post() {
  const [post, setPost] = useState<PostType>();
  const params = useParams();
  useEffect(() => {
    if (!params.id) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((result) => setPost(convertPost(result)));
  }, [params]);
  return (
    <div>
      {post && (
        <div>
          <h1 className="text-2xl text text-bold">{post.title}</h1>
          <h3 className="text">{post.body}</h3>
        </div>
      )}
    </div>
  );
}
