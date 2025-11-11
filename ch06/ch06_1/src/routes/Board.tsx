import { useEffect, useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const convertPost = (result: unknown): Post[] => {
  const list = result as any[];
  return list.map((it) => ({
    id: it.id,
    userId: it.userName,
    title: it.title,
    body: it.body,
  }));
};
export default function Board() {
  const [posts, setPosts] = useState<null | Post[]>();
  const navigate = useNavigate();
  const [search] = useSearchParams();

  const onClick = useCallback(
    (id: number) => {
      return () => {
        navigate(`/board/${id}`);
      };
    },
    [navigate]
  );

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    if (search.get("userId")) url += `?userId=${search.get("userId")}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setPosts(convertPost(result)));
  }, [search]);

  const children = posts?.map((it) => {
    return (
      <button key={it.id} className="mt-4 btn btn-sm" onClick={onClick(it.id)}>
        {it.title}
      </button>
    );
  });

  return (
    <div>
      <h1 className="text-2xl text-bold">Board</h1>
      <div className="flex flex-col items-start">{children}</div>
    </div>
  );
}
