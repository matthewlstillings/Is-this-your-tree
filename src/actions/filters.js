export const setCommonFilter = (commonName = '') => ({
    type: 'FILTER_COMMON',
    commonName
});

export const setLatinFilter = ( latinName = '') => ({
    type: 'FILTER_LATIN',
    latinName
});

export const setFamilyFilter = ( family = '') => ({
    type: 'FILTER_FAMILY',
    family
});

export const setTypeFilter = ( leafType = '') => ({
    type: 'FILTER_TYPE',
    leafType
});

export const setVenationFilter = ( venation = '') => ({
    type: 'FILTER_VENATION',
    venation
});

export const setArrangementFilter = ( arrangement = '') => ({
    type: 'FILTER_ARRANGEMENT',
    arrangement
});

export const setLobingFilter = ( lobing = '') => ({
    type: 'FILTER_LOBING',
    lobing
});

export const setTextureFilter = ( texture = '') => ({
    type: 'FILTER_TEXTURE',
    texture
});

export const setShapeFilter = ( shape = '') => ({
    type: 'FILTER_SHAPE',
    shape
});

export const setDryFilter = ( dryFruits = '') => ({
    type: 'FILTER_DRY',
    dryFruits
});

export const setFleshyFilter = ( fleshyFruits = '') => ({
    type: 'FILTER_FLESHY',
    fleshyFruits
});

export const setOtherFilter = ( other  = '') => ({
    type: 'FILTER_OTHER',
    other
});

export const setMarginsFilter = ( margins  = '') => ({
    type: 'FILTER_MARGINS',
    margins
});

export const clearFilter = ( 
) => ({
    type: 'CLEAR_FILTER',
    commonName: '',
    latinName: '',
    leafType: '',
    venation: '',
    arrangement: '',
    lobins:  '',
    texture:  '',
    shape: '',
    dryFruits: '',
    fleshyFruits: '',
    other:  '',
    margins:''
});

