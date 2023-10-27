export default function Post({ post }) {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.price}</p>
      <p>{post.description}</p>
    </li>
  );
}
