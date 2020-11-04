import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
            <>
                <button className={this.props.classButton} onClick={() => this.props.remove(this.props.data.id)}>{this.props.children}</button>
            </>
        );
    }
}

export default Button;