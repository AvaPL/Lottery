import React, {Component} from 'react';
import './MyCoupons.css'
import Header from "../components/Header";
import MyCouponsTableHeader from "../components/MyCouponsTableHeader";
import MyCouponsTable from "../components/MyCouponsTable";
import BuyACouponButton from "../components/BuyACouponButton";

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