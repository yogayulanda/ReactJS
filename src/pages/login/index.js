import React, { Component } from 'react';
import { connect } from "react-redux"
import { RowInput, Input } from '../../components';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            dataLogin:{}
        }
    }

    
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
    }
    postData= async(dataLogin)=>{
        await fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLogin)
        })
        .then(response => response.json())
        .then(result => {
            window.alert(result.message)
            const dataUser = result.data[0].dataUser
            const token = result.data[0].token
            this.props.doLogin({dataUser,token})
        })
        .catch(error => console.log('error', error));
    }
    onLogin = () => {
        const { username, password } = this.state
        if (username && password){    
            this.postData({username,password})
        }
        else {
            window.alert("Username dan Password tidak boleh kosong!")
        }
    }
        

    render() { 
        return (
            <div>
                <div>
                    <RowInput value={this.state.username} label="Username" type="text" name="username" onChange={this.onChangeInput} />
                    <RowInput value={this.state.password} label="Password" type="password" name="password" onChange={this.onChangeInput} />
                    <div>
                        <Input typeInput="button" valueInput="Login" onClickInput={this.onLogin} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    usernameLogin: state.auth.username,
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (user) => dispatch({ type: "LOGIN", payload: { username: user } })
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)