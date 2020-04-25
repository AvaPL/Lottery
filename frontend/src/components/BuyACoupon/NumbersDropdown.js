import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import './NumbersDropdown.css'
import NumbersCheckbox from "./NumbersCheckbox";

class NumbersDropdown extends Component {

    render() {
        return <div className="col-sm">
            <div className="numbers-dropdown">
                {this.getDropdownButton()}
            </div>
        </div>;
    }

    getDropdownButton() {
        if (this.props.lotteryType)
            return <DropdownButton className="checkbox-menu" size="lg" title="Numbers">
                <div className="numbers-menu overflow-auto numbers-scrollbar">
                    {[...Array(this.props.lotteryType.maxValue)].map((a, index) => <NumbersCheckbox
                        key={this.props.lotteryType.name + index}
                        number={index + 1}
                        isCountReached={this.props.isCountReached}
                        onChange={this.props.onCheckboxChange}/>)}
                </div>
            </DropdownButton>;
        else
            return <DropdownButton className="checkbox-menu" size="lg" title="Numbers" disabled/>
    }
}

export default NumbersDropdown;