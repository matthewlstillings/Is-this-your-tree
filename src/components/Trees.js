import React from 'react';
import {storage} from '../firebase/firebase';


export class Tree extends React.Component {
    state = {
        url: ''
    }
    getImage = () => {
        storage.ref().child('trees/' + this.props.image).getDownloadURL().then((link)=>{
            const url = link;
            this.setState(()=>({url}));
        })
    }
    componentDidMount = () => {
        this.getImage();
    }
    render() {
        return (
            <div className="tree">
                    <img src={this.state.url} className="tree__image"/>
                    <div className="tree__name-container">
                        <h1 className="tree__name is-common">{this.props.commonName}</h1>
                        <p className="tree__name is-latin"><i>{this.props.latinName}</i></p>
                    </div>
                    <hr className="tree__line"></hr>
                    <div className="tree__info">
                        <p className="tree__info-child"><span className="tree__info-child--title"><b>Family</b></span> {this.props.family.charAt(0).toUpperCase() + this.props.family.substr(1) }</p>
                        <p className="tree__info-child"><span className="tree__info-child--title"><b>Flowers</b></span> {this.props.flowers}</p>
                        <p className="tree__info-child"><span className="tree__info-child--title"><b>Info</b></span> {this.props.info}</p>
                    </div>
            </div>
        )
    }
   
};

export default Tree;