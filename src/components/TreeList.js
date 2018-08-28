import React from 'react';
import {connect} from 'react-redux';
import Tree from './Trees';
import selectTrees from '../filters/trees';

export class TreeList extends React.Component {
    state = {
        render: true
    }
    componentDidMount = () => {
        setTimeout(()=>{this.setState(()=>({render: true}))}, 3000);
    }
    render() {
        return (
            <div className="dashboard__tree-list" >
                <ul className="tree__list">
                    { this.props.trees.length === 0 ? (<h1>We can't find your tree</h1>) : (
                        this.props.trees.map((tree)=>{
                            return (
                            <Tree 
                                key={tree.commonName}
                                {...tree}
                            />
                            ) 
                        })
                        )
                    }
                </ul>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        trees: selectTrees(state.trees, state.filters)
    };
};

export default connect(mapStateToProps)(TreeList);
