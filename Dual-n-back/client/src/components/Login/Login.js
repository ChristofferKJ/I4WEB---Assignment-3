import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form className="loginForm">
                    Username: <input type="text" name="username" />
                    Password: <input type="password" name="password" />
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        );
    }
}

export default Login;