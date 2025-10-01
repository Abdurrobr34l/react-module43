import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Mobiles from "./components/mobiles/Mobiles.jsx";
import Laptops from "./components/laptops/Laptops.jsx";
import Header from "./components/header/Header.jsx";
import Users from "./components/users/users.jsx";
import UserDetails from "./components/userDetails/UserDetails.jsx";
import Posts from "./components/posts/Posts.jsx";
import PostsDetails from "./components/posts/PostsDetails.jsx";

import laptopsData from "./components/laptops/LaptopData.json";
import LaptopDetails from "./components/laptops/LaptopDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },

      //* LAPTOP
      {
        path: "laptop",
        loader: () => {
          return laptopsData;
        },
        Component: Laptops,
      },
      {
        path: "laptop/:laptopId",
        loader: ({ params }) => {
          const laptop = laptopsData.find(
            (item) => item.id === parseInt(params.laptopId)
          );
          return laptop;
        },
        Component: LaptopDetails,
      },

      //* USERS
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

      //* POSTS
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
  //* NOT FOUND PAGE
  {
    path: "*",
    element: <h1 className="text-7xl font-extrabold place-self-center place-content-center h-screen text-cyan-400">Page Not Found: 404 Status</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
