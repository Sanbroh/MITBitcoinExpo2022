import React from 'react';
import { JSCGrid } from 'jscharting-react';

export default class DataTableLedger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                data: [
                    ['Supplies Received (t)', 340, "+40"],
                    ['Failed Deliveries (t)', 220, "+20"],
                    ['Net Transactions ($B)', 3.23, "+0.04"],
                    ['Ledger Height', 22, "+2"],
                    ['Current Chain', "Stablecoin", "-"],
                ],
                columns: [
                    { header: 'Type' },
                    { header: 'Value' },
                    { header: 'Change (Monthly)' },
                ]
            }
        };
    }

    render() {
        return (
            <JSCGrid options={this.state.options} />
        );
    }
}
