import React, {Component} from 'react';
import './Lotteries.css'

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <div className="box">
                    <span className="lotteries-bar">LOTTERIES</span>
                </div>
                <div className="scroll-table-header">
                <div className="row">
                    <div className="col-sm">
                        <span className="column-header">type</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">next draw</span>
                    </div>
                    <div className="col-sm">
                        <span className="column-header">price to win</span>
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default Lotteries;