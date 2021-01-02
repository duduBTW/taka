import React from "react";
import Home from "../home";
import Commissions from "../commissions";
import Port from "../portfolio";

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
  {
    path: "/home",
    exact: true,
    name: "Home",
    component: Home,
    privateRoute: false,
  },
];

export default routes;
