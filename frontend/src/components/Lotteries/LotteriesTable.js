import React, {Component} from 'react';
import LotteriesTableEntry from "./LotteriesTableEntry";
import "../../stylesheets/TableView.css";

class LotteriesTable extends Component {
    state = {
        error: null,
        isLoaded: false,
        entries: []
    };

    componentDidMount() {
        this.fetchCurrentLotteries().then(this.processLotteries(), this.handleError())
    }

    fetchCurrentLotteries() {
        return fetch("http://localhost:8008/api/currentLotterySummaries")
            .then(res => res.json()).then(res => res._embedded.currentLotterySummaries);
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
                <div className="scroll-table overflow-auto scrollbar">
                    {this.state.entries.map(entry => (
                        <LotteriesTableEntry key={entry.id} entry={entry}/>
                    ))}
                </div>
            )
        }
    }
}

export default LotteriesTable;