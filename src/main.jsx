import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Register from "./features/auth/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetails from "./features/posts/PostDetails.jsx";
import PostPage from "./features/posts/PostPage.jsx";
import Root from "./features/layout/Root";
import Login from "./features/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PostPage />,
      },
      {
        path: "/posts",
        element: <PostPage />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
