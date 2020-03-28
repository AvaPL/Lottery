import React, {Component} from 'react';
import './BuyACouponTableEntry.css'
import '../stylesheets/TableView.css'

class BuyACouponTableEntry extends Component {
    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.id}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.numbers}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyACouponTableEntry;