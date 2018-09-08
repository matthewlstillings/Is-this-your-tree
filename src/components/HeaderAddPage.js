import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';

export const HeaderAddPage = () => (
    <div className="header__container is-add__page">              
            <div className="header__leaf-container is-add__page">
            <a href="/"><FontAwesomeIcon icon={faLeaf} className="header__leaf is-add__page"/></a>
            </div>
    </div>
)

export default HeaderAddPage;