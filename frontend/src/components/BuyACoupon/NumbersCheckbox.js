import React, {Component} from "react";

class NumbersCheckbox extends Component {
    render() {
        return <li>
            <label>
                <input type="checkbox" name={this.props.number} onChange={this.props.onChange}/>
                {this.props.number}
            </label>
        </li>;
    }
}

export default NumbersCheckbox;