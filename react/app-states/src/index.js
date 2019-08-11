import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style.css';

// class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.dec = this.dec.bind(this)
//     this.inc = this.inc.bind(this)
//   }
//
//   // static propTypes = {}
//   // static defaultProps = {}
//
//   dec() {
//     this.setState(({ count }) => { return { count: count - 1 } })
//   }
//
//   inc() {
//     this.setState(({ count }) => { return { count: count + 1 } })
//   }
//
//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-btn" onClick={this.dec}>-</button>
//         <div className="counter-count">{this.state.count}</div>
//         <button className="counter-btn" onClick={this.inc}>+</button>
//       </div>
//     )
//   }
// }


// Как это работает:
// 1. в Counter передаём функцию, например dec, которая вызывается из App.dec
// 2. При нажатии на кнопку dec:
//   2.1. меняем state у App (setState)
//   2.2. Изменение состояния вызывает событие перерисовки (render)
//   2.3. Перерисовываются все компоненты, в том числе и Counter c новыми параметрами
const Counter = ({ count, dec, inc }) => (
  <div className="counter">
    <button className="counter-btn" onClick={dec}>-</button>
    <div className="counter-count">{count}</div>
    <button className="counter-btn" onClick={inc}>+</button>
  </div>
)

const Random = ({ number, random }) => (
  <button className="random" onClick={random}>{number}</button>
)

class App extends Component {
  state = {
    count: 0,
    number: 0
  }

  // если используется так, то в данной ф-ии есть this и не нужно писать
  // this.dec = this.dec.bind(this)
  dec = () => this.setState(({ count }) => ({ count: count - 1 }))
  inc = () => this.setState(({ count }) => ({ count: count + 1 }))
  random = () => this.setState({ number: Math.round(Math.random() * 100) })

  render() {
    const { count, number } = this.state // ещё одна запись получения count = this.state.count и number
    return (
      <Fragment>
        <Counter count={count} dec={this.dec} inc={this.inc}/>
        <Random number={number} random={this.random}/>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
