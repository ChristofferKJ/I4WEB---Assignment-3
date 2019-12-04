import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLogin(event, username, password) {
        event.preventDefault()
        fetch('http://localhost:4000/user/login', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            console.log(response.json());
        });
        console.log(JSON.stringify({username, password}));
    }

    render() {
        return (
            <div>
                <p>Login</p>
                <form className="loginForm" onSubmit={e => this.handleLogin(e, e.target.usernameId.value, e.target.passwordId.value)} >
                    Username: <input type="text"  id="usernameId" />
                    Password: <input type="password"  id="passwordId" />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;
