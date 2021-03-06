import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "@components/layout";
import Header from "@components/header/header";
import Billboard from "@components/billboard";
import DataCounter from "@components/datacounter";
import LineChart from "@components/linechart";
import DataTableDashboard from "@components/datatabledashboard";
import DataTableSC from "@components/datatablesc";

import "./dashboard.css";

const Dashboard = () => {

  document.title = 'Main Dashboard';

  return (
    <div>
      <Header dashboard={true} ledger={false} settings={false} />
      <Layout>
        <div className="top-container">
          <div className="da-container">
            <h1 className="container-title"><i>Data Analytics</i></h1>
            <div className="inner-wrapper" style={{ lineHeight: "auto" }}>
              <div style={{ display: "inline-block" }}>
                <DataCounter marginR={20} title="Suppliers" count={10} countColor="blue" countUnit="TOTAL" newCount={0} />
                <DataCounter marginR={20} title="Weakpoints" count={2} countColor="red" countUnit="PREDICTED" newCount={0} />
                <DataCounter marginR={20} title="Transactions" count={28} countColor="orange" countUnit="COMPLETED" newCount={2} />
              </div>
              <div style={{ height: 120, width: 2, backgroundColor: "lightgray", display: "inline-block", marginLeft: 16, marginRight: 34 }}></div>
              <div style={{ display: "inline-block", backgroundColor: "white" }}>
                <LineChart />
              </div>
            </div>
            <Link to="/dashboard/analytics" className="detail-button">More Details</Link>
          </div>
        </div>
        <div className="bottom-container">
          <div className="sc-container">
            <h1 className="container-title" style={{ marginBottom: 12 }}><i>Supplychain Details</i></h1>
            <DataTableSC />
            <Link to="/dashboard/supplychains" className="detail-button">More Details</Link>
          </div>
          <div className="sr-container">
            <h1 className="container-title" style={{ marginBottom: 12 }}><i>Supplier Details</i></h1>
            <DataTableDashboard />
            <Link to="/dashboard/suppliers" className="detail-button">More Details</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
