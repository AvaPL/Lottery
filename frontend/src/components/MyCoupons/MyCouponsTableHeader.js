import React, {Component} from 'react';
import "../../stylesheets/TableView.css";

class MyCouponsTableHeader extends Component {
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
                        <span className="column-header">lottery&nbsp;date</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">entries</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">price&nbsp;won</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCouponsTableHeader;