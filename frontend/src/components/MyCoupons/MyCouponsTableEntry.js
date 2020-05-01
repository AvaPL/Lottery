import React, {Component} from 'react';
import './MyCouponsTableEntry.css';
import '../../stylesheets/TableView.css';
import Collapse from "react-bootstrap/Collapse";
import Entry from "./Entry";
import fetchClient from "../Authentication/fetchClient";
import Spinner from "react-bootstrap/Spinner";

class MyCouponsTableEntry extends Component {
    state = {
        isCollapsed: true,
        entries: []
    };

    fetchCouponEntries() {
        return fetchClient.get("couponEntries/" + this.props.coupon.id)
            .then(res => res.data.entrySummaries);
    }

    formatEntry() {
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
            e.priceWon = e.priceWon === null ? "-" : e.priceWon.toLocaleString() + " €";
        };
    }

    processEntries() {
        return entries => {
            entries.forEach(this.formatEntry());
            const newState = this.state;
            newState.isLoaded = true;
            newState.entries = entries;
            this.setState(newState);
        };
    }

    handleError() {
        return error => {
            const newState = this.state;
            newState.isLoaded = true;
            newState.error = error;
            this.setState(newState);
            console.log(error);
        };
    }

    handleCollapseClick = () => {
        if (this.state.isCollapsed) {
            if (this.state.error)
                this.cleanError();
            this.fetchCouponEntries().then(this.processEntries(), this.handleError());
        }
        const newState = this.state;
        newState.isCollapsed = !this.state.isCollapsed;
        this.setState(newState);
    };

    cleanError() {
        const newState = this.state;
        newState.error = null;
        newState.isLoaded = null;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div className="scroll-table-entry">
                    <div className="row">
                        <div className="col-sm">
                            <span className="column-entry">{this.props.coupon.no}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.coupon.betTime}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.coupon.numberOfEntries}</span>
                        </div>
                        <div className="col-sm">
                            <span className="column-entry">{this.props.coupon.priceWon}</span>
                        </div>
                    </div>
                    <div className="expand-entry-button">
                        <span className="expand-arrow-text noselect"
                              onClick={this.handleCollapseClick}>&#x25BC;</span>
                    </div>
                </div>
                <Collapse in={!this.state.isCollapsed}>
                    <div className="entries-collapse">
                        {this.getEntries()}
                    </div>
                </Collapse>
            </div>
        );
    }

    getEntries() {
        if (this.state.error) {
            return (
                <div className="entries-container">
                    <div className="entries-center">
                        <span className="error-text">Error</span>
                    </div>
                </div>
            );
        } else if (!this.state.isLoaded) {
            return (
                <div className="entries-container">
                    <div className="entries-center">
                        <Spinner className="spinner-border text-primary" role="status"/>
                        <span className="loading-text"> Loading...</span>
                    </div>
                </div>
            );
        } else {
            return this.state.entries.map(entry => <Entry key={entry.id}
                                                          entry={entry}/>).reduce(((previousValue, currentValue) => [previousValue,
                <hr key={'hr' + previousValue.id} className="entries-divider"/>, currentValue]));
        }
    }
}

export default MyCouponsTableEntry;