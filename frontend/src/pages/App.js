import React from 'react';
import './App.css';
import NavBar from "../components/NavBar";
import {Route} from "react-router";
import MainPage from "./MainPage";
import Lotteries from "./Lotteries";
import MyCoupons from "./MyCoupons";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/lotteries" component={Lotteries}/>
            <Route exact path="/my-coupons" component={MyCoupons}/>
        </div>
    );
}

export default App;
