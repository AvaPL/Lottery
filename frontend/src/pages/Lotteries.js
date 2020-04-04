import React, {Component} from 'react';
import './Lotteries.css'
import '../stylesheets/TableView.css'
import Header from "../components/Header/Header";
import LotteriesTableHeader from "../components/Lotteries/LotteriesTableHeader";
import LotteriesTable from "../components/Lotteries/LotteriesTable";
import BuyACouponButton from "../components/BuyACouponButton/BuyACouponButton";

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <Header text="LOTTERIES"/>
                <LotteriesTableHeader/>
                <LotteriesTable/>
                <BuyACouponButton/>
            </div>
        );
    }
}

export default Lotteries;