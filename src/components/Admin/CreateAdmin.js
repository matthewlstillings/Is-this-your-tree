import React from 'react';
import {firebase} from '../../firebase/firebase.js';
import {Fade} from 'react-reveal';

export class CreateAdmin extends React.Component {
    state = {
        email: "",
        password: "",
        error: "",
        checkPassword: "",
        passwordError: false,
        passwordMatchError: false
    }
    updateEmail = (e) => {
        const email = e.target.value;
        this.setState(()=>({email}));
    }
    updatePassword = (e) => {
        const password = e.target.value;
        this.setState(()=>({password}));
    }
    updateCheckPassword = (e) => {
        const checkPassword = e.target.value;
        this.setState(()=>({checkPassword}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        let password = this.state.password;
        let email = this.state.email;
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (password.length < 8) {
            this.setState(()=>({error: "Password must be 8 characters or more."}));
            this.setState(()=>({passwordError: true}));
        } else if (!regex.test(password)) {
            this.setState(()=>({passwordError: true}));
            this.setState(()=>({error: "Password must contain a uppercase letter, a number, and a symbol."}));
        } else if (this.state.password !== this.state.checkPassword) {
            this.setState(()=>({passwordMatchError: true}));
            this.setState(()=>({error: "Passwords must match."}));
        } else {
            firebase.auth().createUserWithEmailAndPassord(email, password).catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                  } else if (errorCode == 'auth/invalid-email') {
                    alert('This is not an email');
                  } else {
                      alert(errorMessage);
                  }
            });
        }
        
    };
    render() {
        return (
            <div className="admin__login">
                <form className="admin__login__form" onSubmit={this.onSubmit}>
                    <h1 className="admin__login__title">Create new admin</h1>
                    <input placeholder="Email" className="admin__login__form-input" type="email" onChange={this.updateEmail}/>
                    <input placeholder="Password" className={"admin__login__form-input " + (this.state.passwordError && " form-error") } type="password" onChange={this.updatePassword}/>
                    <input placeholder="Confirm password" className={"admin__login__form-input " + (this.state.passwordMatchError && " form-error") } type="password" onChange={this.updateCheckPassword}/>
                    <button  className="admin__login__form-button" type="submit">Submit New Admin</button> 
                    <Fade top opposite when={this.state.error}><p className="error">{this.state.error}</p></Fade>
                </form>
            </div>
        );
    };
};

export default CreateAdmin;