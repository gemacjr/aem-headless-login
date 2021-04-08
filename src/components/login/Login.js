import React, { Component } from 'react'
import './login.css';
import logo from '../../images/logo-main.png'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }
    handleSubmit(evt) {
        evt.preventDefault();

        fetch(`http://localhost:8080/users/${evt.target[0].value}`)
            .then(response => response.json())
            .then(data => console.log(data.memberGroupsList))
        window.location.href = "/home"
    }
    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }



    render() {
        return (
            <>
                <div className="login-clean" onSubmit={this.handleSubmit}>

                    <form action="">
                        <h2 className="sr-only">Login Form</h2>
                        <img src={logo} alt="" />
                        <div className="form-group">
                            <span>User ID</span>
                            <input type="text" className="form-control" data-test="username" value={this.state.username} onChange={this.handleUserChange} placeholder="user id" />
                        </div>
                        <div className="form-group">
                            <span>Password</span>
                            <input className="form-control" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="password" />
                        </div>
                        <div className="form-group">
                            <span>Logging in, the user accepts the terms of use located below:</span>
                            <input type="submit" id="theButton" className="btn btn-primary btn-block" value="Log In" />
                        </div>
                        <a href="/home" className="forgot">Need help logging in?</a>
                    </form>
                </div>
            </>
        )
    }
}

export default Login