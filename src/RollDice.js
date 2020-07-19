import React, {Component} from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {dieOne: 1, dieTwo: 1, isRolling: false};
        this.roll = this.roll.bind(this);
    }

    generateRan() {
        return Math.floor(Math.random() * 6) + 1
    }

    roll() {
        this.setState({dieOne: this.generateRan(), dieTwo: this.generateRan(), isRolling: true});
        setTimeout(() => {
            this.setState({isRolling: false});
        }, 1000);
    }

    render() {
        let dieOne = this.state.dieOne;
        let dieTwo = this.state.dieTwo;
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die num={dieOne} rolling={this.state.isRolling}/>
                    <Die num={dieTwo} rolling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;