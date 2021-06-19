import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import MyHeader from "./Header";
import Detail from "../Routes/Detail"

const MyRouter = () => (
    <Router>
      <>
        <MyHeader/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" componeent={Detail} />
            <Route path="/tv/:id" componeent={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
);
export default MyRouter
