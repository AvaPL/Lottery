import React, {Component} from 'react';
import BuyACouponTableEntry from "./BuyACouponTableEntry";
import "../../stylesheets/TableView.css";
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

    handleDelete = id => {
        const entries = this.state.entries.filter(e => e.id !== id);
        entries.forEach((e, i) => e.id = i + 1);
        this.setState({entries});
    };

    handleAdd = () => {
        const entries = this.state.entries.concat({
            id: this.state.entries[this.state.entries.length - 1].id + 1,
            type: "lotto",
            numbers: "1 2 3"
        });
        this.setState({entries});
    };

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.state.entries.map(entry => (
                    <BuyACouponTableEntry key={entry.id} onDelete={this.handleDelete} entry={entry}/>
                ))}
                <div className="add-button" style={{position: "relative"}}>
                    <Button className="btn-success btn-block" onClick={this.handleAdd}><span
                        className="add-button-text">+</span></Button>
                </div>
            </div>
        );
    }
}

export default BuyACouponTable;