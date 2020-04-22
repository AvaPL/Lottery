import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './NumbersDropdown.css'

class NumbersDropdown extends Component {
    state = {};

    render() {
        return <div className="col-sm">
            <div className="numbers-dropdown">
                <DropdownButton className="checkbox-menu" size="lg" title="Numbers">
                    <div className="numbers-menu overflow-auto numbers-scrollbar">
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                1
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                2
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                3
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                4
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                5
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                6
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                7
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                8
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                9
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                10
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                11
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="name"/>
                                12
                            </label>
                        </li>
                    </div>
                </DropdownButton>
            </div>
        </div>;
    }
}

export default NumbersDropdown;