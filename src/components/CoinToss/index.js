// Write your code here
import './index.css'
import {Component} from 'react'

let headCount = 0
let tailCount = 0
let totalCount = 0

class CoinToss extends Component {
  state = {tossResult: 'heads'}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({tossResult: 'heads'})
      headCount += 1
    } else {
      this.setState({tossResult: 'tails'})
      tailCount += 1
    }
    totalCount += 1
  }

  render() {
    const {tossResult} = this.state
    const imgSrc =
      tossResult === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img className="heads-tails-image" src={imgSrc} alt="toss result" />
          <div className="button-container">
            <button
              className="toss-button"
              type="button"
              onClick={this.onClickToss}
            >
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="count-text">Total:{totalCount} </p>
            <p className="count-text">Heads: {headCount}</p>
            <p className="count-text">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
