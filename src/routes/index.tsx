import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { Base } from "../pages/Base";
import { routes,privateRouters } from "./allRoutes";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          
          {routes.map((route) => (
            <Route {...route} />
          ))}

          <Route path="app" element={<PrivateRoute />}>
            {privateRouters.map((route) => (
              <Route {...route}/>
            ))}
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
