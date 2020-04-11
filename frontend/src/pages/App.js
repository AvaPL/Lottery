import React from 'react';
import './App.css';
import NavBar from "../components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./Login";
import Lotteries from "./Lotteries";
import MyCoupons from "./MyCoupons";
import BuyACoupon from "./BuyACoupon";
import LatestDraws from "./LatestDraws";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticatedRoute from "../components/Authentication/AuthenticatedRoute";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/lotteries" component={Lotteries}/>
                    <Route exact path="/latest-draws" component={LatestDraws}/>
                    <AuthenticatedRoute exact path="/my-coupons" component={MyCoupons}/>
                    <AuthenticatedRoute exact path="/buy-a-coupon" component={BuyACoupon}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
