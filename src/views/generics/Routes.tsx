import React from "react";
import { Route } from "react-router-dom";
import { cardProps, cardPropsContact } from "../../App";
import { RoutesContainer } from "../../styles/layout";

import routes from "./routesModel";

export default function Routes({
  orders,
  setOrders,
  contactInfo,
  setContactInfo,
}: {
  orders: Array<cardProps>;
  setOrders: (value: cardProps[]) => void;
  contactInfo: cardPropsContact;
  setContactInfo: (value: cardPropsContact) => void;
}) {
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
                <route.component
                  // @ts-ignore
                  setOrders={setOrders}
                  orders={orders}
                  contactInfo={contactInfo}
                  setContactInfo={setContactInfo}
                  {...props}
                />
              )}
            />
          )
        );
      })}
    </RoutesContainer>
  );
}
