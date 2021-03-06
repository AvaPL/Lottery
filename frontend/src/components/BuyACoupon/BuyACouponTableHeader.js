import React, {Component} from 'react';
import "../../stylesheets/TableView.css";

class BuyACouponTableHeader extends Component {
    render() {
        return (
            <div className="scroll-table-header">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-header">no.</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">type</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">numbers</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyACouponTableHeader;