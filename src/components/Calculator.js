import React, { Component } from 'react';
import calculate from '../logic/Calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalculation(e) {
    const obj = calculate(this.state, e.target.value);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="text">
              {total}
              {' '}
              {operation}
              {' '}
              {next}
            </div>
            <div className="row">
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="AC" />
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="+/-" />
              <input className="background col-3" onClick={this.handleCalculation} type="submit" value="%" />
              <input className="btn  danger col-3" onClick={this.handleCalculation} type="reset" value="÷" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="7" />
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="8" />
              <input className="background col-3" onClick={this.handleCalculation} type="submit" value="9" />
              <input className="btn danger col-3" onClick={this.handleCalculation} type="reset" value="x" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="4" />
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="5" />
              <input className="background col-3" onClick={this.handleCalculation} type="submit" value="6" />
              <input className="btn danger col-3" onClick={this.handleCalculation} type="reset" value="-" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="1" />
              <input className="background col-3" onClick={this.handleCalculation} type="button" value="2" />
              <input className="background col-3" onClick={this.handleCalculation} type="submit" value="3" />
              <input className="btn danger col-3" onClick={this.handleCalculation} type="reset" value="+" />
            </div>
            <div className="row">
              <input className="background col-6" onClick={this.handleCalculation} type="submit" value="0" />
              <input className="background col-3" onClick={this.handleCalculation} type="submit" value="." />
              <input className="btn danger col-3" onClick={this.handleCalculation} type="submit" value="=" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
