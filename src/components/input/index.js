import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
            const { typeInput, nameInput, valueInput, onChangeInput, onClickInput } = this.props
        return (
            <input className = "input"
                type={typeInput}
                name={nameInput}
                value={valueInput}
                onClick={onClickInput}
                onChange={onChangeInput}
            />
        );
    }
}
export default Input;