import React, {Component} from 'react';
import './BuyACouponTableEntry.css';
import '../../stylesheets/TableView.css';
import LotteryTypeDropdown from "./LotteryTypeDropdown";
import NumbersDropdown from "./NumbersDropdown";

class BuyACouponTableEntry extends Component {
    state = {
        lotteryTypes: [
            {
                name: "Lotto",
                maxValue: 50,
                numbersCount: 6
            },
            {
                name: "Mini Lotto",
                maxValue: 20,
                numbersCount: 4
            },
            {
                name: "Multi Multi",
                maxValue: 30,
                numbersCount: 5
            },
            {
                name: "Euro Jackpot",
                maxValue: 60,
                numbersCount: 6
            }
        ],
        checkedCount: 0
    };

    onCheckboxChange = event => {
        const newState = this.state;
        newState.checkedCount += event.target.checked ? 1 : -1;
        this.setState(newState);
    };

    isCountReached = () => {
        return this.state.checkedCount >= this.state.lotteryType.numbersCount;
    };

    onLotteryTypeChanged = lotteryType => {
        if (this.state.lotteryType === lotteryType) return;
        const newState = this.state;
        newState.lotteryType = lotteryType;
        newState.checkedCount = 0;
        this.setState(newState);
    };

    render() {
        return (
            <div>
                <div className="scroll-table-entry">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-entry">{this.props.entry.id}</span>
                        </div>
                        <LotteryTypeDropdown lotteryTypes={this.state.lotteryTypes}
                                             onLotteryTypeChanged={this.onLotteryTypeChanged}/>
                        <NumbersDropdown lotteryType={this.state.lotteryType} onCheckboxChange={this.onCheckboxChange}
                                         isCountReached={this.isCountReached}/>
                    </div>
                    <div className="delete-button">
                        <span className="delete-button-text"
                              onClick={() => this.props.onDelete(this.props.entry.id)}>-</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyACouponTableEntry;