import { createBrowserRouter } from "react-router-dom";

import { Layout, Home, Authors } from "../views/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
    ],
  },
]);

export default router;
