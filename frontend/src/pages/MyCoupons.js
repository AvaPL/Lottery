import React, {Component} from 'react';
import './MyCoupons.css'
import MyCouponsTableEntry from "../components/MyCouponsTableEntry";

class MyCoupons extends Component {
    render() {
        return (
            <div>
                <div className="MyCoupons">
                    <div className="header-box">
                        <span className="bar-text">MY COUPONS</span>
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
                            <span className="column-header">lottery&nbsp;date</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">entries</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">price&nbsp;won</span>
                        </div>
                    </div>
                </div>
                <div className="scroll-table overflow-auto scrollbar">
                    <MyCouponsTableEntry id="1" type="lotto" lotteryDate="26.03.2020" entries="3"
                                         priceWon="3 000 000 €"/>
                    <MyCouponsTableEntry id="2" type="multi multi" lotteryDate="28.03.2020" entries="10"
                                         priceWon="2 €"/>
                    <MyCouponsTableEntry id="3" type="euro jackpot" lotteryDate="31.03.2020" entries="5"
                                         priceWon="0 €"/>
                    <MyCouponsTableEntry id="4" type="mini-lotto" lotteryDate="03.04.2020" entries="1"
                                         priceWon="5 €"/>
                    <MyCouponsTableEntry id="5" type="lotto" lotteryDate="15.04.2020" entries="3"
                                         priceWon="0 €"/>
                </div>
                <p><a href="/buy-a-coupon" className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY A COUPON</span></a></p>
            </div>
        );
    }
}

export default MyCoupons;