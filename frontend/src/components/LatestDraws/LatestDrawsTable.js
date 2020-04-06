import React, {Component} from 'react';
import "./LatestDrawsTable.css";
import "../../stylesheets/TableView.css";
import LatestDrawsTableEntry from "./LatestDrawsTableEntry";
import LotteriesTableEntry from "../Lotteries/LotteriesTableEntry";

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
        return fetch("http://localhost:8008/api/latestDrawsSummaries")
            .then(res => res.json()).then(res => res._embedded.latestDrawsSummaries);
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
            console.log(e);
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
        //TODO: Make errors and loadings prettier.
        if (this.state.error) {
            return <span>Error</span>
        } else if (!this.state.isLoaded) {
            return <span>Loading...</span>
        } else {
            return (
                <div className="latest-draws-scroll-table scroll-table overflow-auto scrollbar">
                    {this.state.entries.map(entry => (
                        <LatestDrawsTableEntry key={entry.id} entry={entry}/>
                    ))}
                </div>
            )
        }
    }
}

export default LatestDrawsTable;