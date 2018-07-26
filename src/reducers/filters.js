const filtersDefaultState = {
            commonName: '',
            latinName: '',
            leafType: '',
            venation: '',
            arrangement: '',
            lobing: '',
            texture: '',
            shape: '',
            dryFruits: '',
            fleshyFruits: '',
            other: '',
            margins: ''
};

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_COMMON': 
            return {
                ...state,
                commonName: action.commonName
        }
        case 'FILTER_LATIN': 
            return {
                ...state,
                latinName: action.latinName
        }
        case 'FILTER_FAMILY': 
            return {
                ...state,
                family: action.family
        }
        case 'FILTER_TYPE':
            return {
                ...state,
                leafType: action.leafType
        }
        case 'FILTER_VENATION': 
            return {
                ...state,
                venation: action.venation
        }
        case 'FILTER_ARRANGEMENT':
            return {
                ...state,
                arrangement: action.arrangement
        }
        case 'FILTER_LOBING':
            return {
                ...state,
                lobing: action.lobing
        }
        case 'FILTER_TEXTURE':
            return {
                ...state,
                texture: action.texture
        }
        case 'FILTER_SHAPE':
            return {
                ...state,
                shape: action.shape
        }
        case 'FILTER_MARGINS':
            return {
                ...state,
                margins: action.margins
        }
        case 'FILTER_DRY':
            return {
                ...state,
                dryFruits: action.dryFruits
        }
        case 'FILTER_FLESHY':
            return {
                ...state,
                fleshyFruits: action.fleshyFruits
        }
        case 'FILTER_OTHER':
            return {
                ...state,
                other: action.other
        }
        case 'CLEAR_FILTER': 
            return {
                ...state,
                commonName: '',
                latinName: '',
                leafType: '',
                venation: '',
                arrangement: '',
                lobing: '',
                texture: '',
                shape: '',
                dryFruits: '',
                fleshyFruits: '',
                other: '',
                margins: ''
        }
        default:
            return state;
    }
};