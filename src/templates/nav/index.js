import React, { Component } from 'react';
import {Menu} from '../../components'
import logo from '../../img/logo.png'
import './style.css'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Nav  extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    } 
    
    // shouldComponentUpdate(lastProp, nextProp) {
    //     console.log("props: ", this.props);
    //     console.log("lastProp: ", lastProp);
    //     if (lastProp.statusLogin !== this.props.statusLogin)
    //         return true
    //     return false
    // }

    render() { 
    return (
    <>
        <div className="nav-menu">
        <div className="logo">
        <img src={logo} alt="logo-groceries"></img> 
        </div>
        <Link to="/">
        <Menu text="Home" class="first" goToPage={() => this.props.changePage("home")}></Menu>
        </Link>
        <Link to="/product">
        <Menu text="Product" goToPage={() => this.props.changePage("product")} />
        </Link>        
        { this.props.statusLogin ?
                    <>
                    <Link to="/datauser">
                    <Menu  text="Data User" goToPage={() => this.props.changePage("datauser")}/>
                    </Link>
                    <Menu text="Logout" goToPage={this.props.doLogout} />
                    </>
                    :
                    <>
                        <Link to="/login">
                            <Menu text="Login" goToPage={() => this.props.changePage("login")} />
                        </Link>
                        <Link to="/daftar">
                            <Menu text="Daftar" goToPage={() => this.props.changePage("daftar")} />
                        </Link>
                    </>
                }
        </div>
    </>
    );
    }
}
const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)