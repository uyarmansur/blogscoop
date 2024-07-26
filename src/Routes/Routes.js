import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import UserMainPage from "../Pages/UserMainPage/UserMainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-main",
    element: <UserMainPage />,
  },
]);
