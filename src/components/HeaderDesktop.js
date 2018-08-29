import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';

export const HeaderDesktop = () => (
    <div className="header__container is-desktop">              
        <div className="header__content is-desktop">
            <h1 className="header__title is-desktop">Is This Your Tree?</h1>
            <h3 className="header__subtitle is-desktop">Find your tree from Central Park</h3>
        </div>
        <div className="header__leaf-container is-desktop">
            <div>
                <a href="/"><FontAwesomeIcon icon={faLeaf} className="header__leaf is-desktop"/></a>
            </div>
        </div>
    </div>
)

export default HeaderDesktop;