// add all your routes here
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
    key: "home",
  },
  {
    path: "/1",
    element: <h1>1</h1>,
    key: "home",
  },
  {
    path: "/*",
    element: <NotFound/>,
    key: "home",
  }
];
