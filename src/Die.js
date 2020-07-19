import React, {Component} from 'react';
import './Die.css';

class Die extends Component {

    getClassName(num) {
        let strnum = '';
        switch (num) {
            case 1:
                strnum = 'one';
                break;
            case 2:
                strnum = 'two';
                break;
            case 3:
                strnum = 'three';
                break;
            case 4:
                strnum = 'four';
                break;
            case 5:
                strnum = 'five';
                break;
            case 6:
                strnum = 'six';
                break;
        }
        return 'fas fa-dice-' + strnum;
    }

    render() {
        return (
            <div>
                <i className={this.getClassName(this.props.num)}></i>
            </div>
        )
    }
}

export default Die;