import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleRegister(event) {
        event.preventDefault();
        let username;
        let password;
        let confirm_password

        username = event.target.registerUsernameId.value;
        password = event.target.registerPasswordId.value;
        confirm_password = event.target.confirm_registerPasswordId.value;

        fetch('http://localhost:4000/user/register', {
            method: 'post',
            body: JSON.stringify({username, password, confirm_password}),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            response.json().then(json => {
                const {token} = json;
                //todo save token here
                console.log(token);
            })
        });


    }
    render() {
        return (
            <div>
                <p>Register</p>
                <form className="registerForm" onSubmit={e => this.handleRegister(e)}>
                    Username: <input type="text" name="username" id="registerUsernameId"/>
                    Password: <input type="password" name="password" id="registerPasswordId"/>
                    Confirm password: <input type="password" name="confirm_password" id="confirm_registerPasswordId"/>
                    <input type="submit" value="Register" id="registerId"/>

                </form>
            </div>
        );
    }
}

export default Register;
