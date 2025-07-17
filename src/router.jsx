import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
     { path: "project/:id", element: <ProjectPage /> },
     {
  path: "*",
  element: <NotFound />,
  handle: { pageClass: "not-found" },
},
    ],
  },
]);
