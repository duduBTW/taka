import React from "react";
import { Route } from "react-router-dom";
import { RoutesContainer } from "../../styles/navBar";

import routes from "./routesModel";

export default function Routes() {
  return (
    <RoutesContainer>
      {routes.map((route, idx) => {
        return (
          route.component && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                // @ts-ignore
                <route.component {...props} />
              )}
            />
          )
        );
      })}
    </RoutesContainer>
  );
}
