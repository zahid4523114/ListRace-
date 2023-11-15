import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/home/Home.jsx";
import HowItWorks from "./components/How-it-works/HowItWorks.jsx";
import Explore from "./components/Explore/Explore.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Review from "./components/Review/Review.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/Context/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/howItWorks",
        element: <HowItWorks></HowItWorks>,
      },
      {
        path: "/explore",
        element: <Explore></Explore>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
