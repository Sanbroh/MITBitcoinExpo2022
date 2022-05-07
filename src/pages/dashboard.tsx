import * as React from "react";
import { useEffect } from "react";

import Layout from "@components/layout";
import Header from "@components/header/header";
import Billboard from "@components/billboard";

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
            <div className="inner">
              
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="sc-container">
            <h1 className="container-title"><i>Supplychain Details</i></h1>
          </div>
          <div className="sr-container">
            <h1 className="container-title"><i>Supplier Details</i></h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
