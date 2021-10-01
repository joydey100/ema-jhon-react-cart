import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Order from "./components/Order/Order";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/review">
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
