import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.guard>
                  <route.element />
                </route.guard>
              }
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
