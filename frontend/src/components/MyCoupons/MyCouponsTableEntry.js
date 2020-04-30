import React, {Component} from 'react';
import './MyCouponsTableEntry.css';
import '../../stylesheets/TableView.css';
import Collapse from "react-bootstrap/Collapse";
import Entry from "./Entry";

class MyCouponsTableEntry extends Component {
    state = {
        isCollapsed: true,
        entries: [
            {
                lotteryType: "Lotto",
                drawDate: "18/04/2020, 16:00",
                numbers: "1, 2, 3, 4, 5, 6",
                priceWon: "200 €"
            },
            {
                lotteryType: "Euro Jackpot",
                drawDate: "18/04/2020, 18:00",
                numbers: "1, 2, 3, 4, 5, 6",
                priceWon: "500 €"
            },
            {
                lotteryType: "Mini Lotto",
                drawDate: "18/04/2020, 12:00",
                numbers: "1, 2, 3, 4, 5",
                priceWon: "100 €"
            }
        ]
    };

    handleCollapseClick = () => {
        this.setState({isCollapsed: !this.state.isCollapsed});
    };

    render() {
        return (
            <div>
                <div className="scroll-table-entry">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.id}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.betTime}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.numberOfEntries}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.priceWon}</span>
                        </div>
                    </div>
                    <div className="expand-entry-button">
                        <span className="expand-arrow-text noselect"
                              onClick={this.handleCollapseClick}>&#x25BC;</span>
                    </div>
                </div>
                <Collapse in={!this.state.isCollapsed}>
                    <div className="entries-collapse">
                        {this.state.entries.map(entry => <Entry
                            entry={entry}/>).reduce(((previousValue, currentValue) => [previousValue,
                            <hr className="entries-divider"/>, currentValue]))}
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default MyCouponsTableEntry;