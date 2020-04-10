import React from 'react';
import './App.css';
import NavBar from "../components/NavBar/NavBar";
import {Route} from "react-router";
import MainPage from "./MainPage";
import Login from "./Login";
import Lotteries from "./Lotteries";
import MyCoupons from "./MyCoupons";
import BuyACoupon from "./BuyACoupon";
import LatestDraws from "./LatestDraws";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/lotteries" component={Lotteries}/>
            <Route exact path="/my-coupons" component={MyCoupons}/>
            <Route exact path="/buy-a-coupon" component={BuyACoupon}/>
            <Route exact path="/latest-draws" component={LatestDraws}/>
        </div>
    );
}

export default App;
