import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleRegister(e) {
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
                <p>Register</p>
                <form className="registerForm" onSubmit={e => this.handleRegister(e)} >
                    Username: <input type="text" name="username" id="usernameId" />
                    Password: <input type="password" name="password" id="passwordId" />
                    <input type="submit" value="Register" id="registerId"></input>

                </form>
            </div>
        );
    }
}

export default Register;