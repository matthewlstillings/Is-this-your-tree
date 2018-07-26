import React from 'react';
import { connect } from 'react-redux';
import TreeForm from './TreeForm'

export class AddTreePage extends React.Component {
   
    onSubmit = () => {
        console.log('Submitted');
        window.location.reload();
    };

    render() {
        return (
            <div className="new-tree">
                <h1 className="new-tree__title">Submit New Tree</h1>
                <div>
                    <h2>Image</h2>
                    
                </div>
                <TreeForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

