import React from 'react';
import { JSCharting } from 'jscharting-react';

const config = {
    type: 'line',
    series: [
        {
            points: [
                { x: 'January', y: 2 },
                { x: 'Feburary', y: 15 },
                { x: 'March', y: 10 },
                { x: 'April', y: 28 },
                { x: 'May', y: 72 }
            ]
        }
    ]
};

const divStyle = {
    width: "22vw",
    height: "30vh",
    marginLeft: "auto",
    marginRight: "auto"
};

export default class LineChartLedger extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCharting options={config} /></div>
        );
    }
}
