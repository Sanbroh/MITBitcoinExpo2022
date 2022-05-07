import * as React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";

const Settings = () => {

  document.title = 'Settings';

  return (
    <div>
      <Header dashboard={false} ledger={false} settings={true} />
      <Layout>

      </Layout>
    </div>
  );
}

export default Settings;
