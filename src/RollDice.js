import React, {Component} from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {dieOne: 1, dieTwo: 1};
        this.roll = this.roll.bind(this);
    }

    generateRan() {
        return Math.floor(Math.random() * 6) + 1
    }

    roll() {
        this.setState({dieOne: this.generateRan(), dieTwo: this.generateRan()})
    }

    render() {
        let dieOne = this.state.dieOne;
        let dieTwo = this.state.dieTwo;
        return (
            <div>
                <Die num={dieOne}/>
                <Die num={dieTwo}/>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;