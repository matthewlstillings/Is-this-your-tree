import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetTreeList} from './actions/trees'
import {login, logout} from './actions/auth';
import {firebase} from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';
import 'react-dates/lib/css/_datepicker.css';


//Force Webpage to top on refresh
window.onbeforeunload = () => {
    window.scrollTo(0,0);
};

//Build Store
const store = configureStore();


//Pull tree list from firebase
const findTrees = () => {
    store.dispatch(startSetTreeList());
} 
findTrees();  




//Calls app using provider from react-store
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
); 


//Shrink Header if on mobile view
const unlockBody = () => {
    if (document.URL === 'https://is-this-your-tree.herokuapp.com/add-tree' 
    || document.URL === 'https://is-this-your-tree.herokuapp.com/admin' 
    || document.URL === 'https://is-this-your-tree.herokuapp.com/admin-login' 
    || document.URL === 'https://is-this-your-tree.herokuapp.com/new-admin')  {
        //Unlock the body
        const body = document.getElementsByClassName('body')[0];
        body.classList.add('unlock');
    }
}


//Renders application
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
         ReactDOM.render(jsx, document.getElementById('root'));
         hasRendered = true;
         unlockBody();
         //setTimeout(() => {addHeaderActiveClass()}, 200);
    }
};


//Login Actions
firebase.auth().onAuthStateChanged((user)=>{ //Firebase Functions
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
    } else {
        store.dispatch(logout());
        renderApp();
    }
})
 

