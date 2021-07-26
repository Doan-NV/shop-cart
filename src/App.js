import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProducts from "./components/ListProducts";
import Navbar from "./components/Navbar";
import DataProvider from "./components/DataProvider";
import Details from "./components/Details";
import Sidebar from "./components/Sidebar";
import { Cart } from "./components/Cart";
import Section from "./components/Section";
function App() {
  const [isToggle, setIsToggle] = useState(true);
  const handleToggle = () => {
    setIsToggle((isToggle) => {
      return !isToggle;
    });
    console.log(isToggle);
  };
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Sidebar isToggle={isToggle} handleToggle={handleToggle} />
          <Navbar isToggle={isToggle} handleToggle={handleToggle} />
          <section className="products">
            <Switch>
              <Route path="/products">
                <ListProducts isToggle={isToggle} />
              </Route>
              <Route path="/addtocart/:id">
                <Details />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </section>
          <Switch>
            <Route exact path="/">
              <Section />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
