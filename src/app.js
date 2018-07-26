import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetTreeList} from './actions/trees'
//import {login, logout} from './actions/auth';
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

//Add Active Header class if window larger than 1040px
const addHeaderActiveClass = () => {
    if (window.innerWidth >= 1040) {
        const header = document.getElementsByClassName('header')[0];
        header.classList.add('shrink');
        const leaf = document.getElementsByClassName('header__leaf')[0];
        leaf.classList.add('rotated');
    }
};

//Renders application
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
         ReactDOM.render(jsx, document.getElementById('root'));
         hasRendered = true;
         setTimeout(() => {addHeaderActiveClass()}, 200);
    }
};
renderApp();




{/*

//Login Actions
firebase.auth().onAuthStateChanged((user)=>{ //Firebase Functions
    if (user) {
        store.dispatch(login(user.uid));
        renderApp()
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
       
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})

*/}

