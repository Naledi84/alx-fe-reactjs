import React from "react";
import { useQuery } from "react-query";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  // useQuery hook
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
