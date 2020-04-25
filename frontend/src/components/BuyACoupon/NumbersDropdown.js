import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import './NumbersDropdown.css'
import NumbersCheckbox from "./NumbersCheckbox";

class NumbersDropdown extends Component {
    state = {
        maxValue: 20,
        numbersCount: 5,
        checkedCount: 0
    };

    onChange = event => {
        const newState = this.state;
        newState.checkedCount += event.target.checked ? 1 : -1;
        this.setState(newState);
    };

    isCountReached = () => {
        return this.state.checkedCount >= this.state.numbersCount;
    };

    render() {
        return <div className="col-sm">
            <div className="numbers-dropdown">
                <DropdownButton className="checkbox-menu" size="lg" title="Numbers">
                    <div className="numbers-menu overflow-auto numbers-scrollbar">
                        {[...Array(this.state.maxValue)].map((a, index) => <NumbersCheckbox key={index}
                                                                                            number={index + 1}
                                                                                            isCountReached={this.isCountReached}
                                                                                            onChange={this.onChange}/>)}
                    </div>
                </DropdownButton>
            </div>
        </div>;
    }
}

export default NumbersDropdown;