import React, {Component} from 'react';
import relogio from './assets/cronometro.png';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      number: 0,
      text: 'START'
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.text = 'START';
    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.number += 0.1;
        this.setState(state);
      }, 100);
      state.text = 'PAUSE';
    }

    this.setState(state);
  }

  clear(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.number = 0;
    state.text = 'START';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={relogio} className="img"/>
        <a className="timer">{this.state.number.toFixed(1)}</a>
        
        <div className="areaBtn">
          <a className="btnStyle" onClick={this.start}>{this.state.text}</a>
          <a className="btnStyle" onClick={this.clear}>CLEAR</a>
        </div>
      </div>

    );
  }
}

export default App;