const Calculator = () => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="text">0</div>
        <div className="row">
          <input className="background col-3" type="button" value="AC" />
          <input className="background col-3" type="button" value="+/-" />
          <input className="background col-3" type="submit" value="%" />
          <input className="btn  danger col-3" type="reset" value="&divide;" />
        </div>
        <div className="row">
          <input className="background col-3" type="button" value="7" />
          <input className="background col-3" type="button" value="8" />
          <input className="background col-3" type="submit" value="9" />
          <input className="btn danger col-3" type="reset" value="x" />
        </div>
        <div className="row">
          <input className="background col-3" type="button" value="4" />
          <input className="background col-3" type="button" value="5" />
          <input className="background col-3" type="submit" value="6" />
          <input className="btn danger col-3" type="reset" value="-" />
        </div>
        <div className="row">
          <input className="background col-3" type="button" value="1" />
          <input className="background col-3" type="button" value="2" />
          <input className="background col-3" type="submit" value="3" />
          <input className="btn danger col-3" type="reset" value="+" />
        </div>
        <div className="row">
          <button className="background col-6" type="submit">0</button>
          <input className="background col-3" type="submit" value="." />
          <input className="btn danger col-3" type="reset" value="=" />
        </div>
      </div>
    </div>
  </div>
);

export default Calculator;
