import React, { Component } from "react";
import MyRouter from "./Router";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <MyRouter/>
      </>
    );
  }
}

export default App;
