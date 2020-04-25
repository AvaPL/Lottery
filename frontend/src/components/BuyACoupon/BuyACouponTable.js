import React, {Component} from 'react';
import BuyACouponTableEntry from "./BuyACouponTableEntry";
import "../../stylesheets/TableView.css";
import Button from "react-bootstrap/Button";
import "./BuyACouponTable.css"

class BuyACouponTable extends Component {
    // state = {
    //     entries: [
    //         {id: 1},
    //         {id: 2},
    //         {id: 3}
    //     ]
    // };
    //
    // handleDelete = id => {
    //     const entries = this.state.entries.filter(e => e.id !== id);
    //     entries.forEach((e, i) => e.id = i + 1);
    //     this.setState({entries});
    // };
    //
    // handleAdd = () => {
    //     const entries = this.state.entries.concat({
    //         id: this.state.entries[this.state.entries.length - 1].id + 1
    //     });
    //     this.setState({entries});
    // };

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.props.entries.map(entry => (
                    <BuyACouponTableEntry key={entry.id} onDelete={this.props.onDelete} entry={entry}/>
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