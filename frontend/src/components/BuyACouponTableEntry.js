import React, {Component} from 'react';
import './BuyACouponTableEntry.css'
import '../stylesheets/TableView.css'

class BuyACouponTableEntry extends Component {
    render() {
        return (
            <div>
                <div className="scroll-table-entry">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.id}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.type}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.numbers}</span>
                        </div>
                    </div>
                    <div className="delete-button">
                        <span className="delete-button-text" onClick={() => this.props.onDelete(this.props.entry.id)}>-</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyACouponTableEntry;