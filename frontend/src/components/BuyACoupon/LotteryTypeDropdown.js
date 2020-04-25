import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './LotteryTypeDropdown.css'

class LotteryTypeDropdown extends Component {
    state = {
        lotteryType: 'Lottery type'
    };

    handleSelect = eventKey => {
        this.setState({lotteryType: eventKey});
        const lotteryType = this.props.lotteryTypes.filter(type => type.name === eventKey)[0];
        this.props.onLotteryTypeChanged(lotteryType);
    };

    render() {
        return <div className="col-sm">
            <div className="lottery-type-dropdown">
                <DropdownButton size="lg" title={this.state.lotteryType} onSelect={this.handleSelect}>
                    {this.props.lotteryTypes.map(type => <Dropdown.Item key={type.name}
                                                                        eventKey={type.name}>{type.name}</Dropdown.Item>)}
                </DropdownButton>
            </div>
        </div>;
    }
}

export default LotteryTypeDropdown;