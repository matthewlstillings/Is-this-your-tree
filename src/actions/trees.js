import database from '../firebase/firebase.js'

export const addNewTree = (tree) => ({
    type: 'ADD_TREE',
    tree
});


export const startAddNewTree = (treeData = {}) => {
    return (dispatch, getState) => {
        const {
            commonName= '',
            latinName= '',
            type= '',
            venation= '',
            arrangement= '',
            lobing= '',
            texture= '',
            shape= '',
            dryFruits= '',
            fleshyFruits= '',
            other= '',
            margins= '',
            image= '',
            flowers='',
            info='',
            family=''
        } = treeData;
        const tree = {image, family, margins, type, venation, arrangement, lobing, texture, shape, flowers, info, dryFruits, fleshyFruits, other, commonName, latinName};
        return database.ref().push(tree).then(()=>{
            dispatch(addNewTree({
                ...tree
            }))
        });
        
    };
};

export const setTreeList = (treeList) => ({
    type: 'SET_TREES',
    treeList
});

export const startSetTreeList = () => {
    console.log('set trees');
    return (dispatch, getState) => {
        return database.ref().once('value').then((snapshot) => {
            const treeList = [];
            snapshot.forEach((childSnapshot) => {
                treeList.push({
                    ...childSnapshot.val()
                })
            })
            dispatch(setTreeList(treeList));
        })
    }
};