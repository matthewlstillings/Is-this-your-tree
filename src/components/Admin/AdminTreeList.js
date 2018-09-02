import React from 'react';
import {connect} from 'react-redux';
import AdminTree from './AdminTree';
import selectTrees from '../../filters/trees';


export class AdminTreeList extends React.Component {

    render() {
        return (
            <div className="admin-page__tree-list">
                {
                    this.props.trees.length === 0 ? (<p>Can't seem to retrieve any trees</p>) : (
                        this.props.trees.map((tree, index)=>{
                            return (
                               <AdminTree key={tree.id} {...tree}/> 
                            )
                        })
                    ) 
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trees: selectTrees(state.trees, state.filters)
    };
}

export default connect(mapStateToProps)(AdminTreeList);