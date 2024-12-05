import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import MasterLayout_1 from "./components/Work/MasterLayout/MasterLayout_1";
import GraphicDesign from "./components/Work/Graphic Design/Graphic Design";
import Apps from "./components/Work/Apps/Apps";
import Software from "./components/Work/Software/Software";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "experience",
          element: <Experience />,
        },
        {
          path: "work",
          element: <MasterLayout_1 />,
          children: [
            {
              index: true,
              element: <GraphicDesign />,
            },
            {
              path: "graphic_design",
              element: <GraphicDesign />,
            },
            {
              path: "apps",
              element: <Apps />,
            },
            {
              path: "software",
              element: <Software />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
