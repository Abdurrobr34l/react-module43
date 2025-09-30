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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "mobiles", Component: Mobiles},
      {path: "laptop", Component: Laptop},
    ]
  },
  {
    path: "route",
    element: <div>Hi, i'm from React Router</div>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
