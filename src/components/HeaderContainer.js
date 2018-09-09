import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';
import HeaderAddPage from './HeaderAddPage';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {startLogout} from '../actions/auth';

export class Header extends React.Component {
    state = {
        header: '',
        windowWidth: window.innerWidth,
        unlocked: false
    }
    componentWillMount = () => {
        setInterval(() => {console.log(this.state);},2000);
    }
    renderHeader = () => {
        if (document.URL === 'https://is-this-your-tree.herokuapp.com/add-tree' 
        || document.URL === 'https://is-this-your-tree.herokuapp.com/admin' 
        || document.URL === 'https://is-this-your-tree.herokuapp.com/admin-login' 
        || document.URL === 'https://is-this-your-tree.herokuapp.com/new-admin') {
            this.setState(()=>({header: 'add-tree'}));
        } else if (window.innerWidth >= 794.8) {
            this.setState(()=>({header: 'desktop'}));
        } else {
            this.setState(()=>({header: 'mobile'}));//change this back to mobile
        }
    }
    unlockApp = () => {
        this.setState(()=>({unlocked: true}));
        const body = document.getElementsByClassName('body')[0];
        body.classList.add('unlocked');
        console.log('clicked');
    }
    handleWidthChange = (windowWidth, event) => {
            this.setState({windowWidth: window.innerWidth})
            this.renderHeader();
    }
    componentDidMount = () => {
        window.addEventListener("resize", this.handleWidthChange);
        this.renderHeader();
        if (window.innerWidth >= 794.8) {
            this.unlockApp();
        }
    }
    render() {
        return (
            <header className="header">
                {
                    this.state.header === 'add-tree' ? (
                       <HeaderAddPage /> 
                    ) : (
                        this.state.header === "desktop" ? (
                            <HeaderDesktop />
                        ) : (
                            <HeaderMobile 
                                unlockApp={this.unlockApp}
                                unlocked={this.state.unlocked}
                            
                            />
                        )
                    )
                }
                
            </header>
        )
    }
    
};


export default Header;