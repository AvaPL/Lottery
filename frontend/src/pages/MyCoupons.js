import React, {Component} from 'react';
import './MyCoupons.css'
import Header from "../components/Header/Header";
import MyCouponsTableHeader from "../components/MyCoupons/MyCouponsTableHeader";
import MyCouponsTable from "../components/MyCoupons/MyCouponsTable";
import BuyACouponButton from "../components/BuyACoupon/BuyACouponButton";

class MyCoupons extends Component {
    render() {
        return (
            <div className="MyCoupons">
                <Header text="MY COUPONS"/>
                <MyCouponsTableHeader/>
                <MyCouponsTable/>
                <BuyACouponButton/>
            </div>
        );
    }
}

export default MyCoupons;