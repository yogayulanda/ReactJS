import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="productCard">
                <img className="img-product" src={this.props.productImage} alt="ProductImage"></img>
        <h5 className="title-product">{this.props.titleProduct}</h5>
                <p className="price-product">{this.props.priceProduct}</p>
                <p><button className="btn btn-success">Beli Segera</button></p>
            </div> 
        );
    }
}

export default Card;