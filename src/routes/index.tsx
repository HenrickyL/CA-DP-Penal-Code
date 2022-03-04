import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./allRoutes";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
