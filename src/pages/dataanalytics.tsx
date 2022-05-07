import * as React from "react";
import { useEffect } from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";

const Analytics = () => {
    // sets title name
    document.title = 'Data Analytics'

    return (
        <div>
            <Header dashboard={true} ledger={false} settings={false} />
            <Layout>

            </Layout>
        </div>
    )
}

export default Analytics;
