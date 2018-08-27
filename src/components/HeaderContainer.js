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
    renderHeader = () => {
        if (document.URL === 'https://is-this-your-tree.herokuapp.com/add-tree') {
            this.setState(()=>({header: 'add-tree'}));
        } else if (window.innerWidth >= 1040) {
            this.setState(()=>({header: 'desktop'}));
        } else {
            this.setState(()=>({header: 'mobile'}));
        }
    }
    unlockApp = () => {
        this.setState(()=>({unlocked: true}));
    }
    handleWidthChange = (windowWidth, event) => {
            this.setState({windowWidth: window.innerWidth})
            this.renderHeader();
    }
    componentDidMount = () => {
        window.addEventListener("resize", this.handleWidthChange);
        this.renderHeader();
        if (window.innerWidth >= 1040) {
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