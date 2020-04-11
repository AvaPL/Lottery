import React, {Component} from 'react';
import MyCouponsTableEntry from "./MyCouponsTableEntry";
import "../../stylesheets/TableView.css";
import AuthenticationService from "../Authentication/AuthenticationService";
import fetchClient from "../Authentication/fetchClient";

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
            return <span className="error-text">Error</span>;
        } else if (!this.state.isLoaded) {
            return <span className="loading-text">Loading...</span>;
        } else {
            return this.state.entries.map(entry => <MyCouponsTableEntry key={entry.id} entry={entry}/>);
        }
    }
}

export default MyCouponsTable;