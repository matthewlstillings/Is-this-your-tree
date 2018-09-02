import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firebase} from '../../firebase/firebase';
import AdminTreeList from './AdminTreeList';


export class AdminPage extends React.Component {
    logOut = () => {
        return firebase.auth().signOut();
    }
    render() {
        return (
            <div className="admin-page">
                <h1 className="admin-page__title">Admin Page</h1> 
                <div className="admin-page__links">
                    <Link className="is--link__hover" to={'/add-tree'}>Add Trees</Link>
                    <Link className="is--link__hover" to={'/new-admin'}>Add Admin</Link>
                    <div className="admin-page__logout-button is--link__hover" onClick={(e)=>{this.logOut()}}><p>Logout</p></div>
                </div>
                <div className="admin-page__tree-list-wrapper">
                    <h2 className="admin-page__tree-list-title">Tree Data</h2>
                    <AdminTreeList />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
        auth: state.auth.user
});

export default connect(mapStateToProps)(AdminPage);

