import React, {Component} from 'react';
import './BuyACoupon.css'
import BuyACouponTableEntry from "../components/BuyACouponTableEntry";

class MyCoupons extends Component {
    render() {
        return (
            <div>
                <div className="BuyACoupon">
                    <div className="header-box">
                        <span className="bar-text">BUY A COUPON</span>
                    </div>
                </div>
                <div className="scroll-table-header">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-header">no.</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">type</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">numbers</span>
                        </div>
                    </div>
                </div>
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