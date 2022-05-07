import * as React from "react";
import { useEffect } from "react";

import Layout from "@components/layout";
import Header from "@components/header/header";

const Home = () => {

  document.title = 'Home';

  return (
    <div>
      <Header dashboard={false} ledger={false} settings={false} />
      <Layout>

      </Layout>
    </div>
  );
}

export default Home;
