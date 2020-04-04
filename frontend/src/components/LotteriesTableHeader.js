import React, {Component} from 'react';
import "../stylesheets/TableView.css";

class LotteriesTableHeader extends Component {
    render() {
        return (
            <div className="scroll-table-header">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-header">type</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">next&nbsp;draw</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">price&nbsp;to&nbsp;win</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LotteriesTableHeader;