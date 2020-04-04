import React, {Component} from 'react';
import BuyACouponTableEntry from "./BuyACouponTableEntry";
import "../stylesheets/TableView.css";

class BuyACouponTable extends Component {
    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                <BuyACouponTableEntry id="1" type="lotto" numbers="1 8 15"/>
                <BuyACouponTableEntry id="2" type="mini lotto" numbers="1 3 4"/>
                <BuyACouponTableEntry id="3" type="multi multi" numbers="12 15 21 57 13 19"/>
                <BuyACouponTableEntry id="4" type="euro jackpot" numbers="2 15 61"/>
                <BuyACouponTableEntry id="5" type="lotto" numbers="8 1 3"/>
            </div>
        );
    }
}

export default BuyACouponTable;