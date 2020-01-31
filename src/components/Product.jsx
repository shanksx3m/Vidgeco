//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import React from 'react';
import { observer, inject } from 'mobx-react';
import Octicon, { Trashcan, Pencil } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)

@inject('mainStore')
@observer

// Class, die das Layout eines Produktes exportiert
class Product extends React.Component {
    //Funktion zum bearbeiten des Produkt bearbeiten (Icon-Pencil) Buttons
    handleEditProductClick(product) {
        const { changeToEditProduct } = this.props.mainStore;
        changeToEditProduct(product)
    }

    render() {
        const { _id, name, menge, mengeneinheit, lagerort, mhd, imgUrl } = this.props.product;
        const { deleteProduct } = this.props.mainStore;

        const mengeText = `${menge} ${mengeneinheit}`
        const ortText = lagerort ? <span> im <b>{lagerort}</b></span> : ""
        const mhdText = <b>{mhd || 'Keine Angabe'}</b>
        const altImgUrl = 'https://live.staticflickr.com/65535/47999311277_b438d15abd_b.jpg'; //Alternative Bild URL wenn kein Bild angegeben wurde
        const imgSrc = imgUrl ? imgUrl : altImgUrl

        return (
            <div className='product-output'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={imgSrc} className="card-img" alt="" />
                            {name}
                        </h5>

                        <h6 className="card-subtitle mb-2 text-muted"><b>{mengeText}</b>{ortText}<br />Haltbar bis {mhdText}</h6>
                        <button className="card-link btn btn-dark" onClick={() => this.handleEditProductClick(this.props.product)}><Octicon icon={Pencil} /></button>
                        <button className="card-link btn btn-danger" onClick={
                            //Beim onClick wird die Funktion zum Löschen des Produktes aufgerufen.
                            () => deleteProduct(_id)                            
                        }><Octicon icon={Trashcan} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
