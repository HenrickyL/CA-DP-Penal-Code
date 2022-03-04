// add all your routes here
import { Home } from "../pages/Home";

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
    path: "/2",
    element: <h1>2</h1>,
    key: "home",
  }
];
