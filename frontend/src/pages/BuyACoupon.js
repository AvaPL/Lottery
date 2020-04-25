import React, {Component} from 'react';
import './BuyACoupon.css'
import Header from "../components/Header/Header";
import BuyACouponTableHeader from "../components/BuyACoupon/BuyACouponTableHeader";
import BuyACouponTable from "../components/BuyACoupon/BuyACouponTable";
import "../components/BuyACouponButton/BuyACouponButton.css";

class BuyACoupon extends Component {
    state = {
        entries: [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    };

    handleDelete = id => {
        console.log(id);
        console.log(this.state.entries);
        const entries = this.state.entries.filter(e => e.id !== id);
        console.log(entries);
        entries.forEach((e, i) => e.id = i + 1);
        this.setState({entries});
        console.log(entries);
    };

    handleAdd = () => {
        const entries = this.state.entries.concat({
            id: this.state.entries[this.state.entries.length - 1].id + 1
        });
        this.setState({entries});
    };

    handleCheckboxChange = (id, event) => {
        console.log(id);
        console.log(event.target.name);

    };

    handleLotteryTypeChange = (id, lotteryType) => {
        const newState = this.state;
        newState.entries[id-1].lotteryType = lotteryType;
        this.setState(newState);
        console.log(newState.entries);
    };

    render() {
        return (
            <div className="BuyACoupon">
                <Header text="BUY A COUPON"/>
                <BuyACouponTableHeader/>
                <BuyACouponTable entries={this.state.entries} onAdd={this.handleAdd} onDelete={this.handleDelete}
                                 onCheckboxChange={this.handleCheckboxChange}
                                 onLotteryTypeChange={this.handleLotteryTypeChange}/>
                <p><a href={"/my-coupons"} className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY</span></a></p>
            </div>
        );
    }
}

export default BuyACoupon;