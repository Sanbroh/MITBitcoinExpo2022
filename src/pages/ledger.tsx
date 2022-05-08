import * as React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";
import Billboard from "@components/billboard";
import LineChartLedger from "@components/linechartledger";
import DataTableLedger from "@components/datatableledger";
import BillboardHistory from "@components/billboardhistory";

import "./ledger.css";

const Ledger = () => {

  document.title = 'Ledger Details';

  return (
    <div>
      <Header dashboard={false} ledger={true} settings={false} />
      <Layout>
        <div className="grid" style={{ marginTop: "3vh" }}>
          <div className="gridbox left">
            <h1 className="curr-ledger">Most Recent</h1>
            <Billboard />
            <h1 className="hist-ledger">Ledger History</h1>
            <BillboardHistory content="Supplier 3: 2 ton of supply at 20c (05/02/2022:12.04)" />
            <BillboardHistory content="Supplier 4: 2 ton of supply at 60c (05/02/2022:9.23)" />
            <BillboardHistory content="Supplier 4: 2 ton of supply at 100c (02/01/2022:11.00)" />
            <BillboardHistory content="Supplier 5: 2 ton of supply at 50c (01/22/2022:18.43)" />
            <BillboardHistory content="Supplier 3: 2 ton of supply at 10c (01/03/2022:3.08)" />
            <BillboardHistory content="Supplier 1: 2 ton of supply at 100c (01/01/2022:12.33)" />
            <p className="more-button">⋯</p>
          </div>
          <div className="gridbox right">
            <h1 className="stats-title">Ledger Statistics</h1>
            <h2 className="chart-title">New Transactions Added</h2>
            <LineChartLedger />
            <h2 className="chart-title" style={{ marginTop: "2vh" }}>Numerical Report</h2>
            <div className="stats-table">
              <DataTableLedger />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Ledger;
