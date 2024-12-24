import { createBrowserRouter } from "react-router";

import { Layout } from "./layout";
import Detail from "./pages/detail";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
