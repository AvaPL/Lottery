import React, {Component} from 'react';
import "../../stylesheets/TableView.css";

class LatestDrawsTableHeader extends Component {
    render() {
        return (
            <div className="scroll-table-header">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-header">type</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">draw&nbsp;date</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">price&nbsp;won</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">numbers&nbsp;drawn</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestDrawsTableHeader;