import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostPage from "./features/posts/PostPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostPage />
    </>
  );
}

export default App;
