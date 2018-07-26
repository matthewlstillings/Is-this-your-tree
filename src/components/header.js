import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';
//import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {startLogout} from '../actions/auth';

export const Header = () => (
    <header className="header">
        <div className="header__content">
            <h1 className="header__title">Is This Your Tree?</h1>
            <h3 className="header__subtitle">Find your tree from Central Park</h3>
        </div>
        <div className="header__leaf-container">
            <div>
                <FontAwesomeIcon icon={faLeaf} className="header__leaf" onClick={ 
                    () => {
                        const header = document.getElementsByClassName('header')[0];
                        header.classList.add('shrink');
                        const leaf = document.getElementsByClassName('header__leaf')[0];
                        leaf.classList.add('rotated');
                        const leafText = document.getElementsByClassName('header__leaf-text')[0];
                        leafText.classList.add('fadeOut');
                        const body = document.getElementsByClassName('body')[0];
                        body.classList.add('unlock');
                    }        
                }
                />
                <h2 className="header__leaf-text">Click to start</h2>
            </div>
        </div>
    </header>
);


export default Header;