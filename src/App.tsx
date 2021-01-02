import React from "react";
// import logo from './logo.svg';
import { BrowserRouter, Switch } from "react-router-dom";
import { NavBar } from "./styles/navBar";
import Routes from "./views/generics/Routes";

const loading = () => <div>Carregando...</div>;

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={loading()}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Routes />
          </Switch>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
