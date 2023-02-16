import { createBrowserRouter } from "react-router-dom";

import { Layout, Home, Authors, NewAuthor, EditAuthor } from "../views/index";

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
      {
        path: "/authors/new",
        element: <NewAuthor />,
      },
      {
        path: "/authors/edit/:id",
        element: <EditAuthor />,
      },
    ],
  },
]);

export default router;
