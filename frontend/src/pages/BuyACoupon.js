import React, {Component} from 'react';
import './BuyACoupon.css'
import Header from "../components/Header/Header";
import BuyACouponTableHeader from "../components/BuyACoupon/BuyACouponTableHeader";
import BuyACouponTable from "../components/BuyACoupon/BuyACouponTable";
import "../components/BuyACouponButton/BuyACouponButton.css";

class BuyACoupon extends Component {
    state = {
        entries: [
            {id: 1, numbers: []},
            {id: 2, numbers: []},
            {id: 3, numbers: []}
        ]
    };

    handleDelete = id => {
        const entries = this.state.entries.filter(e => e.id !== id);
        this.setState({entries});
    };

    handleAdd = () => {
        const entries = this.state.entries.concat({
            id: this.state.entries.length ? this.state.entries[this.state.entries.length - 1].id + 1 : 1,
            numbers: []
        });
        this.setState({entries});
    };

    handleCheckboxChange = (id, event) => {
        const newState = this.state;
        const entry = newState.entries.filter(entry => entry.id === id)[0];
        const number = parseInt(event.target.name);
        entry.numbers = event.target.checked ? entry.numbers.concat(number) : entry.numbers.filter(n => n !== number);
        this.setState(newState);
        console.log(newState);
    };

    handleLotteryTypeChange = (id, lotteryType) => {
        const newState = this.state;
        newState.entries.filter(entry => entry.id === id)[0].lotteryType = lotteryType;
        this.setState(newState);
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