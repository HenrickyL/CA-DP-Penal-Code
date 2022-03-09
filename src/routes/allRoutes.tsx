// add all your routes here
import LoginPage from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import PenalCode from "../pages/PenalCode";

export const routes: RouteType[] = [
  {
    path: "login",
    element: <LoginPage/>,
    key: "login",
  },
  {
    path: "*",
    element: <NotFound/>,
    key: "notfound",
  },

];

export const privateRouters: RouteType[] = [
  {
    path: "/",
    element: <PenalCode/>,
    key: "PenalCodes",
  },
];
