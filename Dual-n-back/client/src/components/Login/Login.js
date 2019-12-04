import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogin(username, password) {
        console.log(username, password);
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form className="loginForm" onSubmit={e => this.handleLogin(e.target.usernameId.value, e.target.passwordId.value)} >
                    Username: <input type="text" name="username" id="usernameId" />
                    Password: <input type="password" name="password" id="passwordId" />
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        );
    }
}

export default Login;