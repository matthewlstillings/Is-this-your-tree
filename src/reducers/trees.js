const defaultTreeState = [];
export default (state = defaultTreeState, action) => {
    switch (action.type) {
        case 'ADD_TREE': 
            return [
                ...state,
                action.tree
        ];
        case 'REMOVE_TREE': 
            return state.filter(({id}) => id !== action.id);
        case 'SET_TREES':
            return action.treeList;
        default:
            return state;
    }
}