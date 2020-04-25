import React, {Component} from "react";

class NumbersCheckbox extends Component {
    state = {
        checked: false
    };

    handleChange = event => {
        this.setState({checked: event.target.checked});
        this.props.onChange(event);
    };

    render() {
        return <li>
            <label>
                <input type="checkbox" name={this.props.number}
                       disabled={!this.state.checked && this.props.isCountReached()}
                       onChange={this.handleChange}/>
                {this.props.number}
            </label>
        </li>;
    }
}

export default NumbersCheckbox;