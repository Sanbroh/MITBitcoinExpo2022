import * as React from "react";
import { useEffect } from "react";

import Layout from "@components/layout";
import Header from "@components/header/header";

const Dashboard = () => {

  document.title = 'Dashboard';

  return (
    <div>
      <Header dashboard={true} ledger={false} settings={false} />
      <Layout>

      </Layout>
    </div>
  );
}

export default Dashboard;
