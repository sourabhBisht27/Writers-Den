import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { useEffect, useState } from "react";
import "./App.css";
import Blog from "./components/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<h1>Landing</h1>}
      />
      <Route
        path="/register"
        element={<Signup title="Register" />}
      />
      <Route
        path="/login"
        element={<Login title="Login" />}
      />
      <Route
        path="/blog"
        element={<Blog title="Write your blog" />}
      />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
