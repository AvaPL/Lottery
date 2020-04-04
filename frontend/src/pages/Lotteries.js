import React, {Component} from 'react';
import './Lotteries.css'
import '../stylesheets/TableView.css'
import LotteriesTableEntry from "../components/LotteriesTableEntry";
import Header from "../components/Header";
import LotteriesTableHeader from "../components/LotteriesTableHeader";

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <Header text="LOTTERIES"/>
                <LotteriesTableHeader/>
                <div className="scroll-table overflow-auto scrollbar">
                    <LotteriesTableEntry type="lotto" date="26.03.2020" price="3 000 000 €"/>
                    <LotteriesTableEntry type="multi multi" date="31.03.2020" price="2 000 000 €"/>
                    <LotteriesTableEntry type="eurojackpot" date="15.03.2020" price="8 000 000 €"/>
                    <LotteriesTableEntry type="mini-lotto" date="01.04.2020" price="1 000 000 €"/>
                    <LotteriesTableEntry type="lotto" date="30.03.2020" price="4 000 000 €"/>
                </div>
                <p><a href="/buy-a-coupon" className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY A COUPON</span></a></p>
            </div>
        );
    }
}

export default Lotteries;