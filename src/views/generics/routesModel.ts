import Commissions from "../commissions";
import ComItem from "../commissions/item";
import Home from "../home";
import Port from "../portfolio";
import Cart from "../cart";
import Contact from "../contact";
import Finish from "../finish";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Commissions",
    component: Home,
    privateRoute: false,
  },
  {
    path: "/commissions",
    exact: true,
    name: "Commissions",
    component: Commissions,
    privateRoute: false,
  },
  {
    path: "/commissions/:cat/:title",
    exact: true,
    name: "Commissions",
    component: ComItem,
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
    path: "/cart",
    exact: true,
    name: "Card",
    component: Cart,
    privateRoute: false,
  },
  {
    path: "/contact",
    exact: true,
    name: "Contact",
    component: Contact,
    privateRoute: false,
  },
  {
    path: "/finish",
    exact: true,
    name: "Contact",
    component: Finish,
    privateRoute: false,
  },
];

export default routes;
