import React, {Component} from 'react';
import LotteriesTableEntry from "./LotteriesTableEntry";
import "../../stylesheets/TableView.css";
import axios from 'axios';

class LotteriesTable extends Component {
    state = {
        error: null,
        isLoaded: false,
        entries: []
    };

    componentDidMount() {
        this.getCurrentLotteries().then(this.processLotteries(), this.handleError())
    }

    getCurrentLotteries() {
        return axios.get("http://localhost:8008/api/currentLotterySummaries")
            .then(res => res.data._embedded.currentLotterySummaries);
    }

    processLotteries() {
        return lotteries => {
            lotteries.forEach(this.formatLottery());
            this.setState({isLoaded: true, entries: lotteries});
        };
    }

    formatLottery() {
        return (e, i) => {
            e.id = i + 1;
            const date = new Date(e.nextDraw);
            e.nextDraw = date.toLocaleString('en-GB', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });
        };
    }

    handleError() {
        return error => {
            this.setState({
                isLoaded: true,
                error});
            console.log(error);
        };
    }

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.getEntries()}
            </div>
        )
    }

    getEntries() {
        if (this.state.error) {
            return <span className="error-text">Error</span>;
        } else if (!this.state.isLoaded) {
            return <span className="loading-text">Loading...</span>;
        } else {
            return this.state.entries.map(entry => <LotteriesTableEntry key={entry.id} entry={entry}/>);
        }
    }
}

export default LotteriesTable;