import React from 'react';
import { JSCGrid } from 'jscharting-react';

const config = {
      data: [
        ['Daily Supply Gain (t)', 2, "-2", "+2", 80.1 ],
        ['Daily Supply Fail (t)', 4, "+1", "+4", 42.8 ],
        ['Daily Transaction ($B)', 3.23, "+0.04", "+3.23", 88.0 ],
        ['Net Transaction ($B)', 27.8, "+0.4", "+27.8", 79.5 ]
      ],
      columns: [
          { header: 'Type' },
          { header: 'Value' },
          { header: 'Change (Monthly)' },
          { header: 'Net Change' },
          { header: 'Health Score' },
      ]
};

const divStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white"
};

export default class DataTableSC extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCGrid options={config} /></div>
        );
    }
}
