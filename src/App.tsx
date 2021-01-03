import React, { useEffect } from "react";
// import logo from './logo.svg';
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./views/generics/Routes";

import NavBar from "./components/layout/Navbar";

const loading = () => <div>Carregando...</div>;

function App() {
  let stopTabFunction = function (e: any) {
    if (e.keyCode == 9) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", stopTabFunction);
  });
  return (
    <React.Suspense fallback={loading()}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
