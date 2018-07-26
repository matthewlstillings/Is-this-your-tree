

export default (trees, 
        {commonName, latinName, leafType, venation, arrangement, lobing, texture, shape, dryFruits, fleshyFruits, other, margins}
    ) => {
    return trees.filter((tree) => {
        const commonNameMatch = tree.commonName.toLowerCase().includes(commonName.toLowerCase());
        const latinNameMatch = tree.latinName.toLowerCase().includes(latinName.toLowerCase());
        const leafTypeMatch = tree.leafType.toLowerCase().includes(leafType.toLowerCase());
        const venationMatch = tree.venation.includes(venation);
        const arrangementMatch = tree.arrangement.toLowerCase().includes(arrangement.toLowerCase());
        const lobingMatch = tree.lobing.toLowerCase().includes(lobing.toLowerCase());
        const textureMatch = tree.texture.toLowerCase().includes(texture.toLowerCase());
        const shapeMatch = tree.shape.toLowerCase().includes(shape.toLowerCase());
        const dryFruitsMatch = tree.dryFruits.toLowerCase().includes(dryFruits.toLowerCase());
        const fleshyFruitsMatch = tree.fleshyFruits.toLowerCase().includes(fleshyFruits.toLowerCase());
        const otherMatch = tree.other.toLowerCase().includes(other.toLowerCase());
        const marginsMatch = tree.margins.toLowerCase().includes(margins.toLowerCase());
        
        return commonNameMatch && latinNameMatch  && leafTypeMatch && venationMatch
               && arrangementMatch && lobingMatch && textureMatch && shapeMatch && dryFruitsMatch
               && fleshyFruitsMatch && otherMatch && marginsMatch;
    })
}