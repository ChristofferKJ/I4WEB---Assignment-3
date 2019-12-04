import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleRegister(event) {
        event.preventDefault();
        let username;
        let password;
        let confirm_password

        username = event.target.usernameId.value;
        password = event.target.passwordId.value;
        confirm_password = event.target.confirm_passwordId.value;

        fetch('http://localhost:4000/user/register', {
            method: 'post',
            body: JSON.stringify({ username, password, confirm_password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            let reader = response.body.getReader();
            console.log(response.json());
        });
        console.log(JSON.stringify({ username, password, confirm_password }));

    }

    render() {
        return (
            <div>
                <p>Register</p>
                <form className="registerForm" onSubmit={e => this.handleRegister(e)} >
                    Username: <input type="text" name="username" id="usernameId" />
                    Password: <input type="password" name="password" id="passwordId" />
                    Confirm password: <input type="password" name="confirm_password" id="confirm_passwordId" />
                    <input type="submit" value="Register" id="registerId"/>

                </form>
            </div>
        );
    }
}

export default Register;
