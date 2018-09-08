import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeaf} from '@fortawesome/free-solid-svg-icons';

export const HeaderMobile = (props) => (
    <div className={"header__container is-mobile " + (props.unlocked === true && " unlocked")}>
        <div className={"header__content is-mobile " + (props.unlocked === true && "unlocked")}>
            <h1 className={"header__title is-mobile " + (props.unlocked === true && "unlocked")}>Is This Your Tree?</h1>
            <h3 className={"header__subtitle is-mobile " + (props.unlocked === true && " unlocked")}>Find your tree from Central Park</h3>
        </div>
        <div className={"header__leaf-container is-mobile " + (props.unlocked === true && " unlocked")}>
            <div>
            <a href="/"><FontAwesomeIcon icon={faLeaf} className={"header__leaf is-mobile " + (props.unlocked === true && " unlocked")} onClick={ 
                    () => {
                        props.unlockApp();
                        document.getElementsByClassName('body')[0].classList.add('unlocked')
                    }        
                }/></a>
                <h2 className={"header__leaf-text is-mobile " + (props.unlocked === true && " unlocked")}>Click to start</h2>
            </div>
        </div>
    </div>
)

export default HeaderMobile;
 




    