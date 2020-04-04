import React, {Component} from 'react';
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="header-box">
                <span className="bar-text">{this.props.text}</span>
            </div>
        );
    }
}

export default Header;