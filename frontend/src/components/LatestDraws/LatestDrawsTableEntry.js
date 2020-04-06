import React, {Component} from 'react';
import "../../stylesheets/TableView.css";

class LatestDrawsTableEntry extends Component {
    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.drawDate}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.price}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.numbers}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestDrawsTableEntry;