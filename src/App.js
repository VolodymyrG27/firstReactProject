import {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3 
    }
  }

  plusCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  };

  minusCounter = () => {
    if (this.state.counter >= 1) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  };

  randomCounter = () => {
    this.setState({
      counter: +(Math.random() * (100 - 0) + 0).toFixed(0)
    })
  };

  resetCounter = () => {
    this.setState({
      counter: this.props.counter
    })
  };


  render() {
    
    return (
      <div className="App">
      <div className="counter">
        {this.state.counter}
      </div>
      <div className="buttons">
        <button onClick={this.plusCounter}>Plus</button>
        <button onClick={this.minusCounter}>Minus</button>
        <button onClick={this.randomCounter}>Random</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    </div>
    )
  }
}

export default App;
