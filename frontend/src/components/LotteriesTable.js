import React, {Component} from 'react';
import LotteriesTableEntry from "./LotteriesTableEntry";
import "../stylesheets/TableView.css";

class LotteriesTable extends Component {
    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                <LotteriesTableEntry type="lotto" date="26.03.2020" price="3 000 000 €"/>
                <LotteriesTableEntry type="multi multi" date="31.03.2020" price="2 000 000 €"/>
                <LotteriesTableEntry type="eurojackpot" date="15.03.2020" price="8 000 000 €"/>
                <LotteriesTableEntry type="mini-lotto" date="01.04.2020" price="1 000 000 €"/>
                <LotteriesTableEntry type="lotto" date="30.03.2020" price="4 000 000 €"/>
            </div>
        );
    }
}

export default LotteriesTable;