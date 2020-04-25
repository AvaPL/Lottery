import React, {Component} from "react";

class NumbersCheckbox extends Component {
    state = {
        checked: false
    };

    onChange = event => {
        this.setState({checked: event.target.checked});
        this.props.onChange(event);
    };

    render() {
        return <li>
            <label>
                <input type="checkbox" name={this.props.number} disabled={!this.state.checked && this.props.isCountReached()}
                       onChange={this.onChange}/>
                {this.props.number}
            </label>
        </li>;
    }
}

export default NumbersCheckbox;