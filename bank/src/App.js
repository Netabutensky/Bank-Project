
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Report from './components/Report';
import ReportV from './components/ReportV';
import Calaculator from './components/Calculator';
import axios from 'axios';



class App extends Component {
  constructor() {
    super()
    this.state = {
      calculateshow: false,
      who: false,
      show: false,
      bankInfo: []
    }
  }

  who = () => {
    this.setState({
      who: !this.state.who
    })
  }

  
  sum = () => {
    let a = this.state.bankInfo,
      total = 0;
    for (let i = 0; i < a.length; i++) {
      total += a[i].amount;
    }
    console.log('total:', total)
    return total
  }



  change = () => {
    this.setState({
      show: !this.state.show
    }, console.log(this.state.show))
  }


  calculateshow = () => {
    this.setState({
      calculateshow: !this.state.calculateshow
    })
  }



  setall = async (Operations) => {
    await axios.post(`http://localhost:8000/transcation`, Operations)
    await this.componentDidMount()
  }



  async componentDidMount() {
    let response = await axios.get('http://localhost:8000/transcations')
    await this.setState({ bankInfo: response.data }, function () {
      console.log(this.state)
    })
  }



  render() {

    let total = this.sum()
    return (<div className="App">

      {total > 0 ? <div className="balance" >Balance: {total}{this.state.who ?
        <span className="balance" onClick={this.who}>$</span> :
        <span className="balance" onClick={this.who}>₪</span>}</div> :
        <div className="nobalance">Balance: {total}{this.state.who ?
          <span className="nobalance" onClick={this.who}>$</span> :
          <span className="nobalance" onClick={this.who}>₪</span>}</div>}

      {this.state.calculateshow?  <Calaculator showcalculate={this.calculateshow}/>:<button className="buttonshow" onClick={this.calculateshow}>show calculator</button>}
          
      
      <Operations total={total} setall={this.setall} />
      <Transactions data={this.state.bankInfo} who={this.state.who} />

      <button className="myreport" onClick={this.change}>view your report <img src="https://img.icons8.com/doodle/48/000000/business-report.png"></img></button>

      <div className="reports">
        {this.state.show ? <Report data={this.state.bankInfo} /> : null}
        {this.state.show ? <ReportV data={this.state.bankInfo} /> : null}
      </div>


    </div>
    );
  }
}

export default App;
