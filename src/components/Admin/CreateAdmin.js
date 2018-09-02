import React from 'react';
import {firebase} from '../../firebase/firebase.js';

export class CreateAdmin extends React.Component {
    state = {
        email: "",
        password: "",
    }
    updateEmail = (e) => {
        const email = e.target.value;
        this.setState(()=>({email}));
    }
    updatePassword = (e) => {
        const password = e.target.value;
        this.setState(()=>({password}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error)=>{
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
    };
    render() {
        return (
            <div className="admin__log-in">
                <form className="admin__log-in__form" onSubmit={this.onSubmit}>
                    <h2 className="admin__log-in__title">Create new admin</h2>
                    <input placeholder="Email" className="admin__log-in__form-input" type="email" onChange={this.updateEmail}/>
                    <input placeholder="Password" className="admin__log-in__form-input" type="password" onChange={this.updatePassword}/>
                    <button  className="admin__log-in__form-button" type="submit">Create New Admin</button> 
                </form>
            </div>
        );
    };
};

export default CreateAdmin;