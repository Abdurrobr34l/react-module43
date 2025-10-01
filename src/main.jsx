import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Mobiles from "./components/mobiles/Mobiles.jsx";
import Laptop from "./components/laptop/Laptop.jsx";
import Header from "./components/header/Header.jsx";
import Users from "./components/users/users.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";
import Posts from "./components/posts/Posts.jsx";
import PostsDetails from "./components/posts/PostsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptop", Component: Laptop },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostsDetails,
      },
    ],
  },
  {
    path: "route",
    element: <div>Hi, i'm from React Router</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
