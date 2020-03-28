import React, {Component} from 'react';
import '../stylesheets/TableView.css'

class LotteriesTableEntry extends Component {

    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.date}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteriesTableEntry;