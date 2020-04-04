import React, {Component} from 'react';
import './MyCoupons.css'
import Header from "../components/Header";
import MyCouponsTableHeader from "../components/MyCouponsTableHeader";
import MyCouponsTable from "../components/MyCouponsTable";

class MyCoupons extends Component {
    render() {
        return (
            <div className="MyCoupons">
                <Header text="MY COUPONS"/>
                <MyCouponsTableHeader/>
                <MyCouponsTable/>
                <p><a href="/buy-a-coupon" className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY A COUPON</span></a></p>
            </div>
        );
    }
}

export default MyCoupons;