import React, { Component } from 'react';
import img1 from '../../img/body.svg'
import section3Image from '../../img/section3.svg'
import {Card} from '../../components'
import { Redirect } from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            users: []
        }
    }

    clickBtn = () => {
        this.props.history.push("/login")
        // this.setState({
        //     redirect: true
        // })
    }

    render() { 
        if (!this.props.statusLogin)
        return <Redirect to="/login" />
         // Section2
        let titleProduct = "Beras",
        priceProduct = "Rp. 100.000",
        productImage = "https://cf.shopee.co.id/file/3e8a01f5036da28ea1a6d8e92f9a13d2"
        return ( 
            <>
        <div className="body">
        <div className="section1">
            <img src={img1} alt="img-section"></img>
            <div>
            <h3>Belanja Lebih Mudah dan Murah Dari Rumah</h3>
            <p>Nikmati Belanja Mudah dan Murah Langsung Melalu Smartphone Anda</p>
            </div>
        </div>

        <div className="section2">
            <h3>Product Terlaris Minggu Ini</h3>
            <div className="product">
                <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
                <Card productImage={productImage} titleProduct={titleProduct} priceProduct={priceProduct} ></Card>
        </div>
    </div>

        <div className="section3">
        <div className="titleSection3">
        <h3>Nikmati Gratis Ongkos Kirim Kemanapun</h3>
        <p>Tinggal Pesan lewat Handphone dan Tunggu Pesenan Datang Tanpa Ribet Keluar Rumah</p>
        </div>
        <img src={section3Image} alt="imagesection"></img>
        </div>
        </div>
            </>
        );
    }
}

export default Home;