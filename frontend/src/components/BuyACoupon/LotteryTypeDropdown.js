import React, {Component} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './LotteryTypeDropdown.css'

class LotteryTypeDropdown extends Component {
    state = {
        title: "lottery type"
    };

    handleSelect = eventKey => {
        this.setState({title: eventKey})
    };

    render() {
        return <div className="col-sm">
            <div className="lottery-type-dropdown">
                <DropdownButton size="lg" title={this.state.title}
                                onSelect={this.handleSelect}>
                    <Dropdown.Item eventKey="Lotto">Lotto</Dropdown.Item>
                    <Dropdown.Item eventKey="Mini Lotto">Mini Lotto</Dropdown.Item>
                    <Dropdown.Item eventKey="Multi Multi">Multi Multi</Dropdown.Item>
                    <Dropdown.Item eventKey="Euro Jackpot">Euro Jackpot</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>;
    }
}

export default LotteryTypeDropdown;