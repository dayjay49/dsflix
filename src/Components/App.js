import React, { Component } from "react";
import MyRouter from "./Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <MyRouter/>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
