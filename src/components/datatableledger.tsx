import React from 'react';
import { JSCGrid } from 'jscharting-react';

const config = {
      data: [
          ['Supplies Received (t)', 340, "+40"],
          ['Failed Deliveries (t)', 220, "+20"],
          ['Net Transactions ($B)', 3.23, "+0.04"],
          ['Ledger Height', 22, "+2"],
          ['Current Chain', "Supplycoin", "-"],
      ],
      columns: [
          { header: 'Type' },
          { header: 'Value' },
          { header: 'Change (Monthly)' },
      ]
};

const divStyle = {
    marginLeft: "auto",
    marginRight: "auto"
};

export default class DataTableLedger extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCGrid options={config} /></div>
        );
    }
}
