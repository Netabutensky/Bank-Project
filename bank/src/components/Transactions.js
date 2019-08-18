import React, { Component } from 'react';
import Transaction from './Transaction';


class Transactions extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        // sends all the data to transaction
        const transactions = this.props.data
        
        return (
            
            <div >
            <span className="everydata">
             {transactions.map(t=> <Transaction who= {this.props.who} transaction={t} />)}
             </span>
            </div>
        );
    }

}


export default Transactions;
