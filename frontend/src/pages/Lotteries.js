import React, {Component} from 'react';
import './Lotteries.css'
import '../stylesheets/TableView.css'
import LotteriesTableEntry from "../components/LotteriesTableEntry";

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <div className="header-box">
                    <span className="bar-text">LOTTERIES</span>
                </div>
                <div className="scroll-table-header">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-header">type</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">next&nbsp;draw</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-header">price&nbsp;to&nbsp;win</span>
                        </div>
                    </div>
                </div>
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