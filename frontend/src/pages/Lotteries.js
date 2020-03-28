import React, {Component} from 'react';
import './Lotteries.css'
import './TableView.css'

class Lotteries extends Component {
    render() {
        return (
            <div className="Lotteries">
                <div className="header-box">
                    <span className="bar-text">LOTTERIES</span>
                </div>
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
                <div className="scroll-table overflow-auto scrollbar">
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-table-entry">
                        <div className="row">
                            <div className="col-sm">
                                <span className="column-entry">lotto</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">26.03.2020 15:00</span>
                            </div>
                            <div className="col-sm">
                                <span className="column-entry">3 000 000 €</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p><a href="/buy-a-coupon" className="btn btn-buy mt-3"><span className="btn-buy-text">BUY A COUPON</span></a></p>
            </div>
        );
    }
}

export default Lotteries;