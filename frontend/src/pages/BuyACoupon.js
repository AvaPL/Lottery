import React, {Component} from 'react';
import './BuyACoupon.css'
import Header from "../components/Header";
import BuyACouponTableHeader from "../components/BuyACouponTableHeader";
import BuyACouponTable from "../components/BuyACouponTable";
import "../components/BuyACouponButton.css";

class MyCoupons extends Component {
    render() {
        return (
            <div className="BuyACoupon">
                <Header text="BUY A COUPON"/>
                <BuyACouponTableHeader/>
                <BuyACouponTable/>
                <p><a href={"/my-coupons"} className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY</span></a></p>
            </div>
        );
    }
}

export default MyCoupons;