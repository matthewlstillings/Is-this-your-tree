import React from 'react';
import {connect} from 'react-redux';
import {startRemoveTree} from '../../actions/trees';


export class AdminTree extends React.Component {
    expandTree = (e) => {
        if (e.target !== e.currentTarget) {
            //const arrow = e.target.parentNode.getElementsByClassName('chevron')[0];
            //arrow.classList.toggle('active');
            //Collapsible
            const collapsible = e.target.parentNode.parentNode.getElementsByClassName("admin-page__tree-info__container")[0];
            collapsible.classList.toggle("active");
            const tree = e.target.parentNode.parentNode.getElementsByClassName("admin-page__tree")[0];
            tree.classList.toggle("active");
        };
        e.stopPropagation();
        
    };
    removeTree = () => {
        this.props.startRemoveTree({id:this.props.id})
    };
    render() {
        return (
            <div className="admin-page__tree" key={this.props.id}>
                <div className="admin-page__tree-name__container" onClick={this.expandTree}>
                    <h3 className="admin-page__tree-name__title">{this.props.commonName}</h3>
                </div>
                <div className="admin-page__tree-info__container">
                    <div>
                        <h4 className="admin-page__tree-info__title">Names</h4>
                        <p className="admin-page__tree-name is-latin"><span className="admin-page__tree-quan">Latin:</span> {this.props.latinName}</p>
                        <p className="admin-page__tree-name is-family"><span className="admin-page__tree-quan">Family:</span> {this.props.family}</p>
                        <h4 className="admin-page__tree-info__title">Fruit Type</h4>
                        {
                            this.props.dryFruits ? (<p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Dry Fruit: </span>{this.props.dryFruits}</p>) 
                            : (<p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Fleshy Fruit: </span>{this.props.fleshyFruits}</p>)
                        }
                        {
                            this.props.other && <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Other: </span>{this.props.other}</p>
                        }
                    </div>
                    <div>
                        <h4 className="admin-page__tree-info__title">Leaf Properties</h4>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Type: </span>{this.props.leafType}</p>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Venation: </span>{this.props.venation}</p>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Margins: </span>{this.props.margins}</p>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Shape: </span>{this.props.shape}</p>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Lobing: </span>{this.props.lobing}</p>
                        <p className="admin-page__tree-name is-prop"><span className="admin-page__tree-quan">Texture: </span>{this.props.texture}</p>
                    </div>
                    <div>
                        <h4 className="admin-page__tree-info__title">Flowers</h4>
                        <p className="admin-page__tree-name is-prop">{this.props.flowers}</p>
                        <h4 className="admin-page__tree-info__title">Other Info</h4>
                        <p className="admin-page__tree-name is-prop">{this.props.info}</p>
                    </div>
                    <button className="admin-page__delete-button" onClick={this.removeTree}>Delete</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    startRemoveTree: (tree) => dispatch(startRemoveTree(tree))
})

export default connect(undefined, mapDispatchToProps)(AdminTree);