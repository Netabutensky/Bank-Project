import React, { Component } from 'react';



class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: '',
            category: '',
            type: '',
            showAlert: false
        }
    }


    // changes my state based on my input
    amountinput = (a) => {
        let amount = a.target.value
        this.setState({
            amount
        })
    }


    vendorinput = (v) => {
        let vendor = v.target.value
        this.setState({
            vendor
        })
    }


    categoryinput = (c) => {
        let category = c.target.value
        this.setState({
            category
        })
    }


    showAlert = () => {
        this.setState({
            showAlert: !this.state.showAlert
        }, function () {
            console.log(this.state.showAlert)
        })
    }


    // a message shows if i want to withdraw < 500
    alerts = () => {
        return (<div>
            <div className="alert">  <div onClick={this.showAlert} className="x">X</div> Insufficient Funds</div>
        </div>
        )
    }


    // sends to data base the data we put in the input from state 
    setall = (Operations) => {
        const type = Operations.target.value
        type === 'Deposit' ?
            this.props.setall({ amount: parseInt(this.state.amount), vendor: this.state.vendor, category: this.state.category })
            : this.props.setall({ amount: parseInt(0 - this.state.amount), vendor: this.state.vendor, category: this.state.category })
    }



    render() {
        let alert = this.alerts()


        return (
            <div className="inputim" >

                <input placeholder="Amount" className="Amount" value={this.state.amount} onChange={this.amountinput}></input>

                <div><input placeholder="Vendor" className="Vendor" value={this.state.vendor} onChange={this.vendorinput}></input></div>

                <div> <input placeholder="Category" className="Category" value={this.state.category} onChange={this.categoryinput}></input></div>


                {this.props.total === 0 ? <a href="javascript:location.reload(true)"><button className='Deposit' value='Deposit' onClick={this.setall}>Deposit</button></a> :
                    <div> <button className='Deposit' value='Deposit' onClick={this.setall}>Deposit</button> </div>}


                {this.props.total > 500 ?
                    <div>  <button value="Withdraw" className="Withdraw" onClick={this.setall}>Withdraw</button> </div> :
                    <div> <button className="Withdraw" onClick={this.showAlert}>Withdraw </button> </div>}
                {this.state.showAlert ? alert : null}



            </div>
        );
    }
}

export default Operations;
