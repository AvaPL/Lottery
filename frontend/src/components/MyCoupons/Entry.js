import React, {Component} from "react";

class Entry extends Component {
    render() {
        return <div className="row">
            <div className="col-sm">
                <span className="entry-text">{this.props.entry.lotteryType}</span>
            </div>
            <div className="col-sm">
                <span className="entry-text">{this.props.entry.drawDate}</span>
            </div>
            <div className="col-sm">
                <span className="entry-text">{this.props.entry.numbers}</span>
            </div>
            <div className="col-sm">
                <span className="entry-text">{this.props.entry.priceWon}</span>
            </div>
        </div>;
    }
}

export default Entry;