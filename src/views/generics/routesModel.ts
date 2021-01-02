import React from "react";
const Commissions = React.lazy(() => import("../commissions"));
const Port = React.lazy(() => import("../portfolio"));

const routes = [
  {
    path: "/commissions",
    exact: true,
    name: "Commissions",
    component: Commissions,
    privateRoute: false,
  },
  {
    path: "/portfolio",
    exact: true,
    name: "Portfolio",
    component: Port,
    privateRoute: false,
  },
];

export default routes;
