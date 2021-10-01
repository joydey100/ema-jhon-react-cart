import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Order from "./components/Order/Order";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

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
        <Route exact path="/success">
          <OrderSuccess />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
