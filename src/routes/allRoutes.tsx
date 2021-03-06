// add all your routes here
import AddPenalCode from "../pages/AddPenalCode";
import LoginPage from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import PenalCode from "../pages/PenalCode";
import PenalCodeDetails from "../pages/PenalCodeDetails";

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
    path: "",
    element: <PenalCode/>,
    key: "PenalCodes",
  },
  {
    path: "add",
    element: <AddPenalCode/>,
    key: "PenalCodes",
  },
  {
    path: ":id",
    element: <PenalCodeDetails edit={false}/>,
    key: "PenalCodeDetails",
  },
  {
    path: ":id/edit",
    element: <PenalCodeDetails edit={true}/>,
    key: "PenalCodeDetailsEdit",
  },
  {
    path: "*",
    element: <NotFound/>,
    key: "notfound",
  },
];
