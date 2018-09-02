import {firebase} from '../firebase/firebase';

export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const startLogin = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};



//Create a if statement to check if there is a budget object and its "creation" 
//property is true, if not create it, if so change nothing. Make it possible to edit
//the object, not constantly change and replace object