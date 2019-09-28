import React, { Component } from 'react'
import Coin from './Coin'

//Helpers
import { choice } from './helpers'

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Canadian_Dollar_-_obverse.png'},
            { side: 'tails', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Canadian_Dollar_-_reverse.png/220px-Canadian_Dollar_-_reverse.png'}
        ],
    }
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            flips: 0,
            heads: 0,
            headsPerc: 50,
            tails: 0,
            tailsPerc: 50
        }
    }
    flip = () => {
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            return {
                currCoin: newCoin,
                flips: st.flips + 1,
                heads: st.heads + (newCoin.side === 'heads' ? 1 : 0),
                headsPerc: st.flips >= 1 ? st.heads / st.flips * 100 : 50,
                tails: st.tails + (newCoin.side === 'tails' ? 1 : 0),
                tailsPerc: st.flips >= 1 ? st.tails / st.flips * 100: 50,
            }
        })
    }
    handleClick = (e) => {
        this.flip()
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>FLIP ME</button>
                <p>Out {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
                <p>Percentage of Heads winning: {this.state.headsPerc}%</p>
                <p>Percentage of Tails winning: {this.state.tailsPerc}%</p>
            </div>
        )
    }
}

export default CoinFlip