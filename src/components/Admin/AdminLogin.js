import React from 'react';
import {connect} from 'react-redux';
import {firebase} from '../../firebase/firebase';
import {history} from '../../routers/AppRouter';
import {login, startLogin} from '../../actions/auth';



export class AdminLogin extends React.Component {
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
        startLogin(this.state.email, this.state.password).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/invalid-email') {
                alert('Email not valid');
              } else if (errorCode == 'auth/user-not-found') {
                alert('User not found');
              } else {
                  alert('Wrong Password, try again.');
              }
        }).then(()=>{
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  this.props.logIn(user.uid);
                  history.push('/admin');
                } else {
                    history.push('/admin-login');
                   console.log('failed to dispatch');
                }
            });
        });
        
    };
    render() {
        return (
            <div className="admin__login">
                <form className="admin__login__form" onSubmit={this.onSubmit}>
                    <h2 className="admin__login__title">Admin Login</h2>
                    <input placeholder="Email" className="admin__login__form-input" type="email" onChange={this.updateEmail}/>
                    <input placeholder="Password" className="admin__login__form-input"type="password" onChange={this.updatePassword}/>
                    <button className="admin__login__form-button">Log In</button>
                </form>
            </div>
        )
    }
        
};

const mapDispatchToProps = (dispatch) => ({
    logIn: (user) => dispatch(login(user))
})

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);

