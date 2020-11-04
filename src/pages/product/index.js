import React, { Component } from 'react';
import {Card} from '../../components'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
                // Section2
                let titleProduct = "Beras",
                priceProduct = "Rp. 100.000",
                productImage = "https://cf.shopee.co.id/file/3e8a01f5036da28ea1a6d8e92f9a13d2" 
        return ( 
            <>
            <div className="productSection">
                    <h3 className="title">Berikut Produk yang Kami Jual</h3>
                <div className="product">
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                </div>
                <div className="product">
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                    <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                </div>
                </div>
            </>
        );
    }
}
 
export default Product;