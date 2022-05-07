import * as React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";
import Billboard from "@components/billboard";
import LineChartLedger from "@components/linechartledger";
import DataTableLedger from "@components/datatableledger";

import "./ledger.css";

const Ledger = () => {

  document.title = 'Ledger Details';

  return (
    <div>
      <Header dashboard={false} ledger={true} settings={false} />
      <Layout>
        <div className="grid" style={{ marginTop: "3vh" }}>
          <div className="gridbox left">
            <Billboard />
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
