import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const API_URL =
        "https://strangers-things.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF";

      const response = await fetch(`${API_URL}/posts`);
      const json = await response.json();

      setPosts(json.data.posts);
    };
    //console logging posts prior to mapping to see what is in it. Should be empty
    console.log(posts);
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
}
