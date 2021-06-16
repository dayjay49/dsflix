import React, { Component } from "react";
import Router from "Components/Router";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/tv" exact component={TV} />
        </Router>
      </>  
    );
  }
}

export default App;
