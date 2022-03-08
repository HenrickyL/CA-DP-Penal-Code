import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Base } from "../pages/Base";
import { routes } from "./allRoutes";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
