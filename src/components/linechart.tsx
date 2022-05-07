import React from 'react';
import { JSCharting } from 'jscharting-react';

const config = {
    type: 'vertical column',
    series: [
        {
            points: [
                { x: 'Suppliers', y: 10 },
                { x: 'Weakpoints', y: 2 },
                { x: 'Transactions', y: 28 }
            ]
        }
    ]
};

const divStyle = {
    width: 420,
    height: 160,
    marginTop: -30,
    paddingTop: 30,
};

export default class LineChart extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCharting options={config} /></div>
        );
    }
}
