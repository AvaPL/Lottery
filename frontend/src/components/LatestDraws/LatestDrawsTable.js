import React, {Component} from 'react';
import "./LatestDrawsTable.css";
import "../../stylesheets/TableView.css";
import LatestDrawsTableEntry from "./LatestDrawsTableEntry";
import axios from "axios";

class LatestDrawsTable extends Component {
    state = {
        error: null,
        isLoaded: false,
        entries: []
    };

    componentDidMount() {
        this.fetchLatestDraws().then(this.processLotteries(), this.handleError())
    }

    fetchLatestDraws() {
        return axios.get("http://localhost:8008/api/latestDrawsSummaries")
            .then(res => res.data._embedded.latestDrawsSummaries);
    }

    formatLottery() {
        return (e, i) => {
            e.id = i + 1;
            const date = new Date(e.drawDate);
            e.drawDate = date.toLocaleString('en-GB', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });
            e.numbers = e.numbers.join(", ");
        };
    }

    processLotteries() {
        return lotteries => {
            lotteries.forEach(this.formatLottery());
            this.setState({isLoaded: true, entries: lotteries});
        };
    }

    handleError() {
        return error => {
            this.setState({isLoaded: true, error});
            console.log(error);
        };
    }

    render() {
        return (
            <div className="latest-draws-scroll-table scroll-table overflow-auto scrollbar">
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
            return this.state.entries.map(entry => <LatestDrawsTableEntry key={entry.id} entry={entry}/>);
        }
    }
}

export default LatestDrawsTable;