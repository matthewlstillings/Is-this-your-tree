import React from 'react';
import { connect } from 'react-redux';
import {storage} from '../firebase/firebase'
import {startAddNewTree} from '../actions/trees';




export class TreeForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            image: props.tree ? props.tree.image : "",
            commonName: props.tree ? props.tree.commonName : "",
            latinName: props.tree ? props.tree.latinName : "",
            family: props.tree ? props.tree.family : "",
            type: props.tree ? props.tree.type : "",
            venation: props.tree ? props.tree.venation : "",
            arrangement: props.tree ? props.tree.arrangement : "",
            lobing: props.tree ? props.tree.lobing : "",
            texture: props.tree ? props.tree.texture : "",
            shape: props.tree ? props.tree.shape : "",
            dryFruits: props.tree ? props.tree.dryFruits : "",
            fleshyFruits: props.tree ? props.tree.fleshyFruit : "",
            other: props.tree ? props.tree.other : "",
            margins: props.tree ? props.tree.margins : "",
            info: props.tree ? props.tree.info : "",
            flowers: props.tree ? props.tree.flowers : ""
        }    
    }

    commonNameChange = (e) => {
        const commonName = e.target.value;
        this.setState(()=>({commonName}))
    }
    latinNameChange = (e) => {
         const latinName = e.target.value;
         this.setState(()=>({latinName}))
    }
    familyChange = (e) => {
         const family = e.target.value;
         this.setState(()=>({family}))
    }
    typeChange = (e) => {
         const type = e.target.value;
         this.setState(()=>({type}))
    }
    venationChange = (e) => {
         const venation = e.target.value;
         this.setState(()=>({venation}))
    }
    arrangementChange = (e) => {
         const arrangement = e.target.value;
         this.setState(()=>({arrangement}))
    }
    lobingChange = (e) => {
         const lobing = e.target.value;
         this.setState(()=>({lobing}))
    }
    textureChange = (e) => {
         const texture = e.target.value;
         this.setState(()=>({texture}))
    }
    shapeChange = (e) => {
         const shape = e.target.value;
         this.setState(()=>({shape}))
    }
    dryFruitsChange = (e) => {
         const dryFruits = e.target.value;
         this.setState(()=>({dryFruits}))
    }
    fleshyFruitsChange = (e) => {
        const fleshyFruits = e.target.value;
        this.setState(()=>({fleshyFruits}))
   }
    otherChange = (e) => {
         const other = e.target.value;
         this.setState(()=>({other}))
    }
    marginsChange = (e) => {
         const margins = e.target.value;
         this.setState(()=>({margins}))
    }
    infoChange = (e) => {
        const info = e.target.value;
        this.setState(()=>({info}))
    }
    flowersChange = (e) => {
        const flowers = e.target.value;
        this.setState(()=>({flowers}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.startAddNewTree({
            image: this.state.image,
            commonName: this.state.commonName,
            latinName: this.state.latinName,
            family: this.state.family, 
            type: this.state.type,
            venation: this.state.venation,
            arrangement: this.state.arrangement,
            lobing: this.state.lobing,
            texture: this.state.texture,
            shape: this.state.shape,
            dryFruits: this.state.dryFruits,
            fleshyFruits: this.state.fleshyFruits,
            other: this.state.other,
            margins: this.state.margins,
            info: this.state.info,
            flowers: this.state.flowers
            
        });
        this.props.onSubmit();
    }
    render() {
        return (
            <div>
            <input type="file" name="upload" onChange={(e) => {
                    const file = e.target.files[0];
                    const image = file.name;
                    this.setState(()=>({image}));
                    const storageRef = storage.ref('trees/' + file.name);
                    storageRef.put(file);
                }
            }/>
            <progress defaultValue="0" max="100"></progress>
            <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" name="commonName" placeholder="Common Name" 
                        onChange={this.commonNameChange}
                    />
                </div>
                <div>
                    <input type="text" name="latinName" placeholder="Latin Name" 
                        onChange={this.latinNameChange}
                    />
                </div>
                <div>
                    <input type="text" name="family" placeholder="Family" 
                        onChange={this.familyChange}
                    />
                </div>
                <div className="leaves">
                    <h2 className="leaves__title">Leaf Properties</h2>

                    <select component="select" name="type"
                        onChange={this.typeChange}
                    >
                        <option value="">Type</option>
                        <option value="simple">Simple</option>
                        <option value="compound">Compound</option>
                        <option value="bicompound">Bicompound</option>
                        <option value="trifoliate">Trifoliate</option>
                    </select>

                    <select component="select" name="venation"
                        onChange={this.venationChange}
                    >
                        <option value="">Venation</option>
                        <option value="arcuate">Arcuate</option>
                        <option value="palmate">Palmate</option>
                        <option value="parallel">Parallel</option>
                        <option value="pinnate">Pinnate</option>
                    </select>
                    
                    <select component="select" name="arrangement"
                        onChange={this.arrangementChange}
                    >
                        <option value="">Arrangement</option>
                        <option value="opposite">Opposite</option>
                        <option value="subopposite">Sub-Opposite</option>
                        <option value="alternate">Alternate</option>
                        <option value="whorled">Whorled</option>
                    </select>

                    <select component="select" name="margins"
                        onChange={this.marginsChange}
                    >
                        <option value="">Margins</option>
                        <option value="entire">Entire</option>
                        <option value="serrate">Serrate</option>
                        <option value="dentate">Dentate</option>
                        <option value="toothed">Toothed</option>
                        <option value="spiny">Spiny</option>
                        <option value="doublySerrate">Doubly Serrate</option>
                    </select>

                    <select component="select" name="shape"
                        onChange={this.shapeChange}
                    >
                        <option value="">Shape</option>
                        <option value="spoon">Spoon</option>
                        <option value="lobed">Lobed</option>
                        <option value="cordate">Cordate</option>
                        <option value="linear">Linear</option>
                        <option value="needle">Needle</option>
                        <option value="elliptic">Elliptic</option>
                        <option value="lanceolate">Lanceolate</option>
                    </select>

                    <select component="select" name="lobing"
                        onChange={this.lobingChange}
                    >
                        <option value="none">Lobing(if any)</option>
                        <option value="pinnately">Pinnately</option>
                        <option value="palmately">Palmately</option>
                        <option value="irregular">Irregular</option>
                    </select>

                    <select component="select" name="texture"
                        onChange={this.textureChange}
                    >
                        <option value="">Texture</option>
                        <option value="rough">Rough</option>
                        <option value="smooth">Smooth</option>
                        <option value="hairy">Hairy</option>
                    </select>
                </div>

                <div className="fruit">
                    <h2 className="fruit__title">Fruit Properties:</h2>

                    <select component="select" name="dryFruits"
                        onChange={this.dryFruitsChange}
                    >
                        <option value="">Dry Fruits</option>
                        <option value="achene">Achene</option>
                        <option value="capsule">Capsule</option>
                        <option value="caryopse">Caryopse</option>
                        <option value="cone">Cone</option>
                        <option value="follicle">Follicle</option>
                        <option value="legume">Legume</option>
                        <option value="nut">Nut</option>
                        <option value="samara">Samara</option>
                        <option value="schizocarp">Schizocarp</option>
                    </select>

                    <select component="select" name="fleshyFruits"
                        onChange={this.fleshyFruitsChange}                     
                    >
                        <option value="">Fleshy Fruits</option>
                        <option value="berry">Berry</option>
                        <option value="drupe">Drupe</option>
                        <option value="pepo">Pepo</option>
                        <option value="pomes">Pome</option>
                    </select>

                    <select component="select" name="other"
                        onChange={this.otherChange}
                    >
                        <option value="">Other</option>
                        <option value="aggregate">Aggregate</option>
                        <option value="multiple">Multiple</option>
                    </select>
                </div>
                <div>
                    <h2>Flowers:</h2>
                    <input type="text" name="flowers" placeholder="Flowers" 
                        onChange={this.flowersChange}
                    />
                </div>
                <div>
                    <h2>Extra Info:</h2>
                    <textarea type="text" name="info" placeholder="Info" 
                        onChange={this.infoChange}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>
            
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => ({
    startAddNewTree: (tree) => dispatch(startAddNewTree(tree))
});

export default connect(undefined, mapDispatchToProps)(TreeForm);


