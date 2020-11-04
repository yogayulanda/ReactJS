import React, { Component } from 'react';
import {Input} from "../index"
import "./style.css"


class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { label, type, name, value, onChange } = this.props
        return (
            <div className="row-input">
                <div>
                    {label}
                </div>
                <div>
                    <Input typeInput={type} valueInput={value} nameInput={name} onChangeInput={onChange} />
                </div>
            </div>
        );
    }
}
export default RowInput;