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
        return fetchClient.get("drawTypes").then(res=>res.data._embedded.drawTypes);
    }

    processDrawTypes(){
        return drawTypes => {
            drawTypes.forEach(this.formatDrawType());
            const newState = this.state;
            newState.isLoaded = true;
            newState.lotteryTypes = drawTypes;
            this.setState(newState);
        }
    }

    formatDrawType(){
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