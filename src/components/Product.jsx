import React from 'react';
import { observer, inject } from 'mobx-react';
import Octicon, { Trashcan, Pencil } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)

@inject('mainStore')
@observer

// Class, die das Layout eines Produktes exportiert
class Product extends React.Component {
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
        const imgSrc = imgUrl || 'https://lh3.googleusercontent.com/proxy/cUAPGV4InGLw9JgljjtqbNUS8sgs3anOhfizsPlM6SymT4rCeIhQPxGEtlF2x6ZWjy0T6oIQ1IW5Vz7ZDVu-MXcfwEJCRO53bCeM_rka8eLw42owPFBqNPvK88OeXysieI3WgLg'

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
                        <button className="card-link btn btn-danger" onClick={() => deleteProduct(_id)}><Octicon icon={Trashcan} /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
