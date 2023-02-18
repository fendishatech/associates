import { createBrowserRouter } from "react-router-dom";

import {
  Layout,
  Home,
  Authors,
  NewAuthor,
  EditAuthor,
  Jobs,
  NewJob,
  EditJob,
  JobDetail,
} from "../views/index";

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
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/new",
        element: <NewJob />,
      },
      {
        path: "/jobs/edit/:id",
        element: <EditJob />,
      },
      {
        path: "/jobs/detail/:id",
        element: <JobDetail />,
      },
    ],
  },
]);

export default router;
