import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>{"Stranger's Things"}</h1>
      <menu>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </menu>
    </nav>
  );
}
