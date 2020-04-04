import React, {Component} from 'react';
import './BuyACouponTableEntry.css'
import '../stylesheets/TableView.css'
import Button from 'react-bootstrap/Button'

class BuyACouponTableEntry extends Component {
    render() {
        return (
            <div>
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
                    <div className="delete-button">
                        <span className="delete-button-text">-</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyACouponTableEntry;