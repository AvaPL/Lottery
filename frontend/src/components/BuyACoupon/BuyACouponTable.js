import React, {Component} from 'react';
import BuyACouponTableEntry from "./BuyACouponTableEntry";
import "../../stylesheets/TableView.css";
import Button from "react-bootstrap/Button";
import "./BuyACouponTable.css"

class BuyACouponTable extends Component {

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.props.entries.map(entry => (
                    <BuyACouponTableEntry key={entry.id} entry={entry} onDelete={this.props.onDelete}
                                          onCheckboxChange={this.props.onCheckboxChange}
                                          onLotteryTypeChange={this.props.onLotteryTypeChange}/>
                ))}
                <div className="add-button" style={{position: "relative"}}>
                    <Button className="btn-success btn-block" onClick={this.props.onAdd}><span
                        className="add-button-text">+</span></Button>
                </div>
            </div>
        );
    }
}

export default BuyACouponTable;