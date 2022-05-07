import * as React from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";

const Ledger = () => {

  document.title = 'Ledger';

  return (
    <div>
      <Header dashboard={false} ledger={true} settings={false} />
      <Layout>

      </Layout>
    </div>
  );
}

export default Ledger;
