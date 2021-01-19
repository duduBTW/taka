import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import Routes from "./views/generics/Routes";

import NavBar from "./components/layout/Navbar";
import { CardItemProps } from "./data";

const loading = () => <div>Carregando...</div>;

export interface cardPropsContact {
  twitter?: string;
  discord?: string;
  email?: string;
}

export interface cardProps {
  quantity: number;
  description: string;
  info?: CardItemProps;
}

function getdefData() {
  var data = localStorage.getItem("orders");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function App() {
  const [orders, setOrders] = useState<Array<cardProps>>(getdefData());
  const [contactInfo, setContactInfo] = useState<cardPropsContact>({});

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <React.Suspense fallback={loading()}>
      <BrowserRouter>
        {/* <Switch> */}
        <Routes
          orders={orders}
          setOrders={setOrders}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
        {/* </Switch> */}
        <NavBar />
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
