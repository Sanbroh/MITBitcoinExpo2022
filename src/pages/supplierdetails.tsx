import * as React from "react";
import { useEffect } from "react";
import Layout from "@components/layout";
import Header from "@components/header/header";

const SupplierDetails = () => {
    // sets title name
    document.title = 'Supplier Details'

    return (
        <div>
            <Header dashboard={true} ledger={false} settings={false} />
            <Layout>
                
            </Layout>
        </div>
    )
}

export default SupplierDetails;