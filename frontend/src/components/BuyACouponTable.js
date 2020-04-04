import React, {Component} from 'react';
import BuyACouponTableEntry from "./BuyACouponTableEntry";
import "../stylesheets/TableView.css";
import Button from "react-bootstrap/Button";
import "./BuyACouponTable.css"

class BuyACouponTable extends Component {
    state = {
        entries: [
            {id: 1, type: "lotto", numbers: "1 8 15"},
            {id: 2, type: "mini lotto", numbers: "1 3 4"},
            {id: 3, type: "multi multi", numbers: "12 15 21 57 13 19"},
            {id: 4, type: "euro jackpot", numbers: "2 15 61"},
            {id: 5, type: "lotto", numbers: "8 1 3"},
        ]
    };

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.state.entries.map(entry => (
                    <BuyACouponTableEntry key={entry.id} id={entry.id} type={entry.type} numbers={entry.numbers}/>
                ))}
                <div className="add-button" style={{position: "relative"}}>
                    <Button className="btn-success btn-block"><span className="add-button-text">+</span></Button>
                </div>
            </div>
        );
    }
}

export default BuyACouponTable;