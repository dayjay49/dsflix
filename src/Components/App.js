import React, { Component } from "react";
import MyRouter from "./Router";
import Headers from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Headers/>
        <MyRouter/>
      </>
    );
  }
}

export default App;
