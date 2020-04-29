import React, {Component} from 'react';
import './BuyACouponTableEntry.css';
import '../../stylesheets/TableView.css';
import LotteryTypeDropdown from "./LotteryTypeDropdown";
import NumbersDropdown from "./NumbersDropdown";
import fetchClient from "../Authentication/fetchClient";

class BuyACouponTableEntry extends Component {
    state = {
        lotteryTypes: [],
        error: null,
        isLoaded: false,
        checkedCount: 0
    };

    componentDidMount() {
        this.getDrawTypes().then(this.processDrawTypes(), this.handleError());
    }

    getDrawTypes() {
        return fetchClient.get("drawTypes").then(res => res.data._embedded.drawTypes);
    }

    processDrawTypes() {
        return drawTypes => {
            const formattedDrawTypes = drawTypes.map(this.formatDrawType());
            const newState = this.state;
            newState.isLoaded = true;
            newState.lotteryTypes = formattedDrawTypes;
            this.setState(newState);
        }
    }

    formatDrawType() {
        return t => {
            return {
                name: t.name,
                numbersCount: t.numbersCount,
                maxValue: t.maxValue
            }
        }
    }

    handleError() {
        return error => {
            const newState = this.state;
            newState.isLoaded = true;
            newState.error = error;
            this.setState(newState);
            console.log(error);
        }
    }

    handleCheckboxChange = event => {
        const newState = this.state;
        newState.checkedCount += event.target.checked ? 1 : -1;
        this.setState(newState);
        this.props.onCheckboxChange(this.props.entry.id, event);
    };

    isCountReached = () => {
        return this.state.checkedCount >= this.state.lotteryType.numbersCount;
    };

    handleLotteryTypeChange = lotteryType => {
        if (this.state.lotteryType === lotteryType) return;
        const newState = this.state;
        newState.lotteryType = lotteryType;
        newState.checkedCount = 0;
        this.setState(newState);
        this.props.onLotteryTypeChange(this.props.entry.id, lotteryType);
    };

    render() {
        return (
            <div>
                <div className="scroll-table-entry">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-entry">{this.props.index}</span>
                        </div>
                        <LotteryTypeDropdown lotteryTypes={this.state.lotteryTypes}
                                             onLotteryTypeChanged={this.handleLotteryTypeChange}/>
                        <NumbersDropdown lotteryType={this.state.lotteryType}
                                         numbers={this.props.entry.numbers}
                                         onCheckboxChange={this.handleCheckboxChange}
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