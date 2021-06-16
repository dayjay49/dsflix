import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";

const MyRouter = () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
    </Router>
);
export default MyRouter

// export default () => (
//     <Router>
//         <Route path="/" exact component={Home} />
//         <Route path="/tv" exact component={TV} />
//         <Route path="/search" exact component={Search} />
//     </Router>
// );
