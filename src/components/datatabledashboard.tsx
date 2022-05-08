import React from 'react';
import { JSCGrid } from 'jscharting-react';

const config = {
      data: [
          ['Supplier Count', 10],
          ['Average Score', 79.23],
          ['Average Time', 4.22],
          ['Average Cost', 4.29]
      ],
      columns: [
          { header: 'Type' },
          { header: 'Value' },
      ]
};

const divStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white"
};

export default class DataTableDashboard extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCGrid options={config} /></div>
        );
    }
}
