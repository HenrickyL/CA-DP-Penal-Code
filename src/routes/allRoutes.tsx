// add all your routes here
import LoginPage from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export const routes: RouteType[] = [
  {
    path: "/",
    element: <h1>Home</h1>,
    key: "home",
  },
  {
    path: "login",
    element: <LoginPage/>,
    key: "login",
  },
  {
    path: "*",
    element: <NotFound/>,
    key: "notfound",
  }
];
