import React from 'react';
import { connect } from 'react-redux';
import {storage} from '../firebase/firebase';
import {startAddNewTree} from '../actions/trees';




export class TreeForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            image: props.tree ? props.tree.image : "",
            commonName: props.tree ? props.tree.commonName : "none",
            latinName: props.tree ? props.tree.latinName : "none",
            family: props.tree ? props.tree.family : "none",
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
            info: props.tree ? props.tree.info : "none",
            flowers: props.tree ? props.tree.flowers : "none",
            imagePreview: null,
            error: false
        }  
        this.fileChange = this.fileChange.bind(this);  
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
    fileChange = (e) => {
        const file = e.target.files[0];
        const image = file.name;
        this.setState(()=>({image}));
        const storageRef = storage.ref('trees/' + file.name);
        storageRef.put(file);
        this.setState(()=>({imagePreview: URL.createObjectURL(file)}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.image   || !this.state.commonName || !this.state.latinName   || !this.state.family 
        || !this.state.type    || !this.state.venation   || !this.state.arrangement || !this.state.lobing 
        || !this.state.texture || !this.state.shape      || !this.state.dryFruits   || !this.state.fleshyFruits 
        || !this.state.other   || !this.state.margins) 
        { 
            this.setState(()=>({error: true}));
        } else {
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
    }
    render() {
        return (
            <div>
                <h2 className="new-tree__image__title">*Image:</h2>
                <div className="new-tree__image__container">
                    <label htmlFor="upload" className="new-tree__image-upload">
                        Choose File</label>
                        <input type="file" name="upload" onChange={this.fileChange}
                            id="upload"
                            className="new-tree__image-upload-button"
                        />
                    { !this.state.imagePreview ? (<p>No Image Uploaded</p>) : (<img src={this.state.imagePreview} className="new-tree__image-preview"/>)}
                </div>
                
                <form onSubmit={this.onSubmit} className="new-tree__properties__form">
                    <h2 className="new-tree__image__title">*Names:</h2>
                    <div className="new-tree__properties__form-input__container">
                        
                        <input type="text" name="commonName" placeholder="Common Name" 
                            onChange={this.commonNameChange}
                            className="new-tree__properties__form-input is--common"
                        />
                    </div>
                    <div className="new-tree__properties__form-input__container">
                        <input type="text" name="latinName" placeholder="Latin Name" 
                            onChange={this.latinNameChange}
                            className="new-tree__properties__form-input is--latin"
                        />
                    </div>
                    <div className="new-tree__properties__form-input__container">
                        <input type="text" name="family" placeholder="Family Name" 
                            onChange={this.familyChange}
                            className="new-tree__properties__form-input is--family"
                        />
                    </div>
                    <h2 className="leaves__title">Leaf Properties:</h2>
                    <div className="new-tree__properties__field">
                        

                        <div className="properties__container"><select component="select" name="type"
                            onChange={this.typeChange}
                            className="leaves__input"
                        >
                            <option value="">Type</option>
                            <option value="simple">Simple</option>
                            <option value="compound">Compound</option>
                            <option value="bicompound">Bicompound</option>
                            <option value="trifoliate">Trifoliate</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="venation"
                            onChange={this.venationChange}
                            className="leaves__input"
                        >
                            <option value="">Venation</option>
                            <option value="arcuate">Arcuate</option>
                            <option value="palmate">Palmate</option>
                            <option value="parallel">Parallel</option>
                            <option value="pinnate">Pinnate</option>
                        </select></div>
                        
                        <div className="properties__container"><select component="select" name="arrangement"
                            onChange={this.arrangementChange}
                            className="leaves__input"
                        >
                            <option value="">Arrangement</option>
                            <option value="opposite">Opposite</option>
                            <option value="subopposite">Sub-Opposite</option>
                            <option value="alternate">Alternate</option>
                            <option value="whorled">Whorled</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="margins"
                            onChange={this.marginsChange}
                            className="leaves__input"
                        >
                            <option value="">Margins</option>
                            <option value="entire">Entire</option>
                            <option value="serrate">Serrate</option>
                            <option value="dentate">Dentate</option>
                            <option value="toothed">Toothed</option>
                            <option value="spiny">Spiny</option>
                            <option value="doublySerrate">Doubly Serrate</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="shape"
                            onChange={this.shapeChange}
                            className="leaves__input"
                        >
                            <option value="">Shape</option>
                            <option value="spoon">Spoon</option>
                            <option value="lobed">Lobed</option>
                            <option value="cordate">Cordate</option>
                            <option value="linear">Linear</option>
                            <option value="needle">Needle</option>
                            <option value="elliptic">Elliptic</option>
                            <option value="lanceolate">Lanceolate</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="lobing"
                            onChange={this.lobingChange}
                            className="leaves__input"
                        >
                            <option value="none">Lobing(if any)</option>
                            <option value="pinnately">Pinnately</option>
                            <option value="palmately">Palmately</option>
                            <option value="irregular">Irregular</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="texture"
                            onChange={this.textureChange}
                            className="leaves__input"
                        >
                            <option value="">Texture</option>
                            <option value="rough">Rough</option>
                            <option value="smooth">Smooth</option>
                            <option value="hairy">Hairy</option>
                        </select></div>
                    </div>
                    <h2 className="fruit__title">Fruit Properties:</h2>
                    <div className="new-tree__properties__field">
                        

                        <div className="properties__container"><select component="select" name="dryFruits"
                            onChange={this.dryFruitsChange}
                            className="fruit__input"
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
                        </select></div>

                        <div className="properties__container"><select component="select" name="fleshyFruits"
                            onChange={this.fleshyFruitsChange}   
                            className="fruit__input"                  
                        >
                            <option value="">Fleshy Fruits</option>
                            <option value="berry">Berry</option>
                            <option value="drupe">Drupe</option>
                            <option value="pepo">Pepo</option>
                            <option value="pomes">Pome</option>
                        </select></div>

                        <div className="properties__container"><select component="select" name="other"
                            onChange={this.otherChange}
                            className="fruit__input"
                        >
                            <option value="">Other</option>
                            <option value="aggregate">Aggregate</option>
                            <option value="multiple">Multiple</option>
                        </select></div>
                    </div>
                    <h2 className="flowers__title">Flowers:</h2>
                    <div className="new-tree__properties__form-input__container">
                        
                        <input type="text" name="flowers" placeholder="Flowers" 
                            onChange={this.flowersChange}
                            className="new-tree__properties__form-input"
                        />
                    </div>
                    <h2 className="extra__title">Extra Info:</h2>
                    <div className="new-tree__properties__form-input__container">
                        
                        <textarea type="text" name="info" placeholder="Info" 
                            onChange={this.infoChange}
                            className="new-tree__properties__form-input"
                        />
                    </div>
                    {this.state.error && <p className="new-tree__error">Please fill all fields.</p>}
                    <button className="new-tree__submit-button" type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => ({
    startAddNewTree: (tree) => dispatch(startAddNewTree(tree))
});

export default connect(undefined, mapDispatchToProps)(TreeForm);


