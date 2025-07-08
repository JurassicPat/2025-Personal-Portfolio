import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
//import Project1 from "./pages/Project1";
//import Project2 from "./pages/Project2";
//import Project3 from "./pages/Project3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      //{ path: "project1", element: <Project1 /> },
      //{ path: "project2", element: <Project2 /> },
      //{ path: "project3", element: <Project3 /> },
    ],
  },
]);
