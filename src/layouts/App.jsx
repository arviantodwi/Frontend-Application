import HeaderBar from "../components/HeaderBar";
import Navigation from "../components/Navigation";
import Home from "./home/Home";
import Product from "./product/Product";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderBar />

      <main className="container">
        <div className="row">
          <Navigation />

          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </div>
      </main>
    </>
  );
};

export default App;
