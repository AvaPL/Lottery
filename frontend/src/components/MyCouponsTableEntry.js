import React, {Component} from 'react';
import './MyCouponsTableEntry.css'
import '../stylesheets/TableView.css';

class MyCouponsTableEntry extends Component {
    render() {
        return (
            <div className="scroll-table-entry">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-entry">{this.props.number}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.type}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.lotteryDate}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.entries}</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-entry">{this.props.priceWon}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCouponsTableEntry;