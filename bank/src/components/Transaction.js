import React, { Component } from 'react';


class Transaction extends Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    
    const transaction = this.props.transaction
    return (
      <div >
        <div className="y">
          <span className="all">Vendor: </span>{transaction.vendor}
          <span className="all">  Category: </span>{transaction.category}
          {transaction.amount > 0 ?
            <span className="alltrue"> Amount: {transaction.amount}{this.props.who? <span className="alltrue" >$</span>:<span className="alltrue" >₪</span>}</span > :
            <span className="allfalse"> Amount: {transaction.amount}{this.props.who? <span className="allfalse" >$</span>:<span className="allfalse" >₪</span>}</span >}
          <div>----------------------------------</div>
        </div>

      </div>

    );
  }
}
export default Transaction;
