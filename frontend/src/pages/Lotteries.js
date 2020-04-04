import React, {Component} from 'react';
import './Lotteries.css'
import '../stylesheets/TableView.css'
import Header from "../components/Header";
import LotteriesTableHeader from "../components/LotteriesTableHeader";
import LotteriesTable from "../components/LotteriesTable";

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <Header text="LOTTERIES"/>
                <LotteriesTableHeader/>
                <LotteriesTable/>
                <p><a href="/buy-a-coupon" className="btn btn-buy mt-3"><span
                    className="btn-buy-text">BUY A COUPON</span></a></p>
            </div>
        );
    }
}

export default Lotteries;