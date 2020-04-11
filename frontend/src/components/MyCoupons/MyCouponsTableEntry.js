import React, {Component} from 'react';
import './MyCouponsTableEntry.css';
import '../../stylesheets/TableView.css';

class MyCouponsTableEntry extends Component {
    render() {
        return (
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
            </div>
        );
    }
}

export default MyCouponsTableEntry;