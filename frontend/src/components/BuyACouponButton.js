import React, {Component} from 'react';
import "../stylesheets/TableView.css";

class BuyACouponButton extends Component {
    render() {
        return (
            <p><a href={"/buy-a-coupon"} className="btn btn-buy mt-3"><span
                className="btn-buy-text">BUY A COUPON</span></a></p>
        );
    }
}

export default BuyACouponButton;