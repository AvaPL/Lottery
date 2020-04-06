import React, {Component} from 'react';
import "./LatestDrawsTable.css";
import "../../stylesheets/TableView.css";
import LatestDrawsTableEntry from "./LatestDrawsTableEntry";

class LatestDrawsTable extends Component {
    render() {
        return (
            <div className="scroll-table overflow-auto scrollbar">
                <LatestDrawsTableEntry key="1" type="lotto" drawDate="13.03.20" price="10000" numbers="1234" />
                <LatestDrawsTableEntry key="2" type="mini lotto" drawDate="15.03.20" price="20000" numbers="4456" />
                <LatestDrawsTableEntry key="3" type="eurojackpot" drawDate="13.04.20" price="30000" numbers="1748" />
                <LatestDrawsTableEntry key="4" type="eurojackpot" drawDate="13.04.20" price="30000" numbers="1748" />
            </div>
        );
    }
}

export default LatestDrawsTable;