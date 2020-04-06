import React, {Component} from 'react';
import Header from "../components/Header/Header";
import "./LatestDraws.css";
import LatestDrawsTable from "../components/LatestDraws/LatestDrawsTable";
import LatestDrawsTableHeader from "../components/LatestDraws/LatestDrawsTableHeader";


class LatestDraws extends Component {
    render() {
        return (
            <div className="LatestDraws">
                <Header text="LATEST DRAWS"/>
                <LatestDrawsTableHeader/>
                <LatestDrawsTable/>
            </div>
        );
    }
}

export default LatestDraws;