
import React, { Component } from 'react';


class Calculator extends Component {

    constructor() {
        super()
        this.state = {
            dollar: '',
            shekels: '',
            show: false
        }
    }

    calculate = () => {
        let transfer = (this.state.shekels * 0.2870)
        this.setState({
            dollar: transfer
        })

    }


    calculateSecond = () => {
        let transfer = (this.state.dollar * 3.4794)
        this.setState({
            shekels: transfer
        })

    }

    show = () => {
        this.setState({
            show: !this.state.show,
            shekels: '',
            dollar: ''
        })
    }

    shekelsChange = (shekels) => {
        let shekel = shekels.target.value
        this.setState({
            shekels: shekel
        })
    }

    dollarChange = (dollar) => {
        let dollars = dollar.target.value
        this.setState({
            dollar: dollars
        })
    }


    dollarfn = () => {
        return (<div>
            <div onClick={this.showcalculate} className="xs">X</div>
            <input placeholder='Shekels' value={this.state.shekels} onChange={this.shekelsChange} />₪
        <br></br>
            <button className="is" onClick={this.calculate}>is</button>
            <br></br>
            <input placeholder='Dollar' value={this.state.dollar} onChange={this.dollarChange} />$
                < br ></br >

        </div>
        )
    }

    showcalculate=()=>{
        this.props.showcalculate()
    }

    shekelsfn = () => {
        return (<div>
            <div onClick={this.showcalculate} className="xs">X</div>
            <input placeholder='Dollar' value={this.state.dollar} onChange={this.dollarChange} />$

             <br></br>
            <button className="is"  onClick={this.calculateSecond}>is</button>
            <br></br>
            <input placeholder='Shekels' value={this.state.shekels} onChange={this.shekelsChange} />₪
                < br ></br >

        </div>
        )
    }

    render() {
        let dollar = this.dollarfn()
        let shekel = this.shekelsfn()

        return (

            <div className="calculator">
                <h3 className="h1cal">Calculate your amount</h3>
                {this.state.show ? dollar : shekel}
                <span onClick={this.show} className="fas fa-exchange-alt"></span>
            </div>
        );
    }

}


export default Calculator;