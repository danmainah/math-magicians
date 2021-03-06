import React, { useState } from 'react';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleCalculation = (e) => {
    setState({ ...state, ...calculate(state, e.target.value) });
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-md">Let&lsquo;s do some math!</h3>
        <div className=" col-md card">
          <div className="card-body">
            <div className="text">
              {state.total}
              {' '}
              {state.operation}
              {' '}
              {state.next}
            </div>
            <div className="row">
              <input className="background col-3" onClick={handleCalculation} type="button" value="AC" />
              <input className="background col-3" onClick={handleCalculation} type="button" value="+/-" />
              <input className="background col-3" onClick={handleCalculation} type="submit" value="%" />
              <input className="btn  danger col-3" onClick={handleCalculation} type="reset" value="÷" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={handleCalculation} type="button" value="7" />
              <input className="background col-3" onClick={handleCalculation} type="button" value="8" />
              <input className="background col-3" onClick={handleCalculation} type="submit" value="9" />
              <input className="btn danger col-3" onClick={handleCalculation} type="reset" value="x" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={handleCalculation} type="button" value="4" />
              <input className="background col-3" onClick={handleCalculation} type="button" value="5" />
              <input className="background col-3" onClick={handleCalculation} type="submit" value="6" />
              <input className="btn danger col-3" onClick={handleCalculation} type="reset" value="-" />
            </div>
            <div className="row">
              <input className="background col-3" onClick={handleCalculation} type="button" value="1" />
              <input className="background col-3" onClick={handleCalculation} type="button" value="2" />
              <input className="background col-3" onClick={handleCalculation} type="submit" value="3" />
              <input className="btn danger col-3" onClick={handleCalculation} type="reset" value="+" />
            </div>
            <div className="row">
              <input className="background col-6" onClick={handleCalculation} type="submit" value="0" />
              <input className="background col-3" onClick={handleCalculation} type="submit" value="." />
              <input className="btn danger col-3" onClick={handleCalculation} type="submit" value="=" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Calculator;
