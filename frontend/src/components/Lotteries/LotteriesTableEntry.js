import React, {Component} from 'react';
import '../../stylesheets/TableView.css';

class LotteriesTableEntry extends Component {

    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.nextDraw}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entry.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteriesTableEntry;