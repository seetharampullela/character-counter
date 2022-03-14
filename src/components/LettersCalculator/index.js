// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {counter: 0, searchInput: ''}

  counterChar = event => {
    this.setState({
      searchInput: event.target.value,
      counter: event.target.value.length,
    })
  }

  render() {
    const {counter, searchInput} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input-element">Enter the phrase</label>
          <input
            onChange={this.counterChar}
            id="input-element"
            className="input-element"
            placeholder="Enter the phrase"
            value={searchInput}
          />
          <p>No.of letters: {counter}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
