import React, {Component} from 'react';
import "../../stylesheets/TableView.css";

class LatestDrawsTableEntry extends Component {
    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.drawDate}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.priceWon}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.numbers}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestDrawsTableEntry;