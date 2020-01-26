import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import PokeList from "./containers/PokeList";
import Search from "./components/layout/NavSearch";
import AboutUs from "./components/aboutUs/AboutUs";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pokelist' component={PokeList} />
            <Route path='/about' component={AboutUs} />
            <Route path='/search' component={Search} />
        </Switch>
    );
}

export default Routes;