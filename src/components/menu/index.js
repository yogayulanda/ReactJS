import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div
            className={`nav-menu ${this.props.class}`}
            style={this.props.style}
            onClick={this.props.goToPage}
        >
            { this.props.text}
        </div >
        );
    }
}

export default Menu;