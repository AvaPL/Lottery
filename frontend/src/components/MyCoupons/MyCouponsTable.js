import React, {Component} from 'react';
import MyCouponsTableEntry from "./MyCouponsTableEntry";
import "../../stylesheets/TableView.css";
import AuthenticationService from "../Authentication/AuthenticationService";
import fetchClient from "../Authentication/fetchClient";
import "./MyCouponsTable.css";

class MyCouponsTable extends Component {
    state = {
        error: null,
        isLoaded: false,
        entries: []
    };

    componentDidMount() {
        this.getMyCoupons().then(this.processCoupons(), this.handleError());
    }

    getMyCoupons() {
        return fetchClient.get("myCoupons/" + AuthenticationService.getLoggedInUserName())
            .then(res => res.data.couponSummaries);
    }

    processCoupons() {
        return coupons => {
            coupons.forEach(this.formatCoupon());
            this.setState({isLoaded: true, entries: coupons});
        }
    }

    formatCoupon() {
        return (c, i) => {
            c.id = i + 1;
            const date = new Date(c.betTime);
            c.betTime = date.toLocaleString('en-GB', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            });
            c.priceWon = c.priceWon === null ? "-" : c.priceWon + " €";
        };
    }

    handleError() {
        return error => {
            this.setState({
                isLoaded: true,
                error
            });
            console.log(error);
        }
    }

    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                {this.getEntries()}
            </div>
        );
    }

    getEntries() {
        if (this.state.error) {
            return (
                <div className="container">
                    <div className="center">
                        <span className="error-text">Error</span>
                    </div>
                </div>
            );
        } else if (!this.state.isLoaded) {
            return (
                <div className="container">
                    <div className="center">
                        <span className="loading-text">Loading...</span>
                    </div>
                </div>
            );
        } else {
            if (this.state.entries.length > 0)
                return this.state.entries.map(entry => <MyCouponsTableEntry key={entry.id} entry={entry}/>);
            else
                return (
                    <div className="container">
                        <div className="center">
                            <span className="no-coupons-text">You have no coupons and therefore have no chance to become a millionaire :C</span>
                        </div>
                    </div>
                );
        }
    }
}

export default MyCouponsTable;