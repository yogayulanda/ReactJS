import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import { Home, Product, Login, Daftar, datauser } from "../../pages"
import "./style.css"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    // Get Data User
    componentDidMount() {
        fetch('http://localhost:3030/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }))
    }

    showPage = () => {
        const { changeLogIn, statusLogin } = this.props
        return (
            <Switch>
                <Route exact path="/">
                    <Home statusLogin={statusLogin} />
                </Route>
                <Route path="/product" component={Product} />
                <Route path="/datauser" component={datauser} />
                <Route path="/login">
                    <Login changeLogIn={changeLogIn} listUsers={this.state.users} />
                </Route>
                <Route path="/daftar">
                    <Daftar listUsers={this.state.users} tambahUser={this.addUsers} />
                </Route>
            </Switch>
        )
    }

    addUsers = obj => {
        const { name, username, password } = obj
        let oldUsers = this.state.users
        oldUsers.push({
            name,
            username,
            password
        })
        this.setState({
            users: oldUsers
        })
    }

    render() {
        return (
            <>
                {
                    this.showPage()
                }
            </>
        );
    }
}

export default Body;