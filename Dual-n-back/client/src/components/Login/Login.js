import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogin(e) {
        let username;
        let password;

        username = e.target.usernameId.value;
        password = e.target.passwordId.value;

        console.log(username, password);
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form className="loginForm" onSubmit={e => this.handleLogin(e)} >
                    Username: <input type="text" name="username" id="usernameId" />
                    Password: <input type="password" name="password" id="passwordId" />
                    <input type="submit" value="Login" id="loginId"></input>
                </form>
            </div>
        );
    }
}

export default Login;