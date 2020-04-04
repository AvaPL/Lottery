import React, {Component} from 'react';
import './BuyACoupon.css'
import BuyACouponTableEntry from "../components/BuyACouponTableEntry";
import Header from "../components/Header";
import BuyACouponTableHeader from "../components/BuyACouponTableHeader";

class MyCoupons extends Component {
    render() {
        return (
            <div className="BuyACoupon">
                <Header text="BUY A COUPON"/>
                <BuyACouponTableHeader/>
                <div className="scroll-table overflow-auto scrollbar">
                    <BuyACouponTableEntry id="1" type="lotto" numbers="1 8 15"/>
                    <BuyACouponTableEntry id="2" type="mini lotto" numbers="1 3 4"/>
                    <BuyACouponTableEntry id="3" type="multi multi" numbers="12 15 21"/>
                    <BuyACouponTableEntry id="4" type="euro jackpot" numbers="2 15 61"/>
                    <BuyACouponTableEntry id="5" type="lotto" numbers="8 1 3"/>
                </div>
                <p><a href="/my-coupons" className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY</span></a></p>
            </div>
        );
    }
}

export default MyCoupons;