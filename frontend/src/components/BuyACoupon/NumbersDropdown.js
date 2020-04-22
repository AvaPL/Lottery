import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import './NumbersDropdown.css'
import NumbersCheckbox from "./NumbersCheckbox";

class NumbersDropdown extends Component {
    state = {maxValue: 20};

    onChange = event => {
        console.log('Checked: ', event.target.checked);
    };

    render() {
        return <div className="col-sm">
            <div className="numbers-dropdown">
                <DropdownButton className="checkbox-menu" size="lg" title="Numbers">
                    <div className="numbers-menu overflow-auto numbers-scrollbar">
                        {[...Array(this.state.maxValue)].map((a, index) => <NumbersCheckbox key={index}
                                                                                            number={index + 1}
                                                                                            onChange={this.onChange}/>)}
                    </div>
                </DropdownButton>
            </div>
        </div>;
    }
}

export default NumbersDropdown;