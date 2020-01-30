import React from 'react';
import { observer, inject } from 'mobx-react';
import Octicon, { Trashcan, Pencil } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)

@inject('mainStore')
@observer

// Class, die das Layout eines Produktes exportiert
class Product extends React.Component {
    handleEditProductClick(_id){
        const { changeToEditProduct, productID } = this.props.mainStore;
        productID =_id;
        changeToEditProduct() 
    }
    render() {
        const { _id, name, menge, mengeneinheit, lagerort, mhd, imgUrl } = this.props.product;
        const { deleteProduct, changeToEditProduct, productID } = this.props.mainStore;
        return (
            <div className='product-output'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={imgUrl} className="card-img" alt=""/>
                            {name}
                        </h5>

                        <h6 className="card-subtitle mb-2 text-muted">{menge} {mengeneinheit} im {lagerort}<br />Haltbar bis {mhd}</h6>
                        <button className="card-link btn btn-dark" onClick={() => handleEditProductClick(_id)}><Octicon icon={Pencil} /></button>
                        <button className="card-link btn btn-danger" onClick={() => deleteProduct(_id)}><Octicon icon={Trashcan} /></button>
                        </div>
                </div>
                {/* <a className="btn btn-light" data-toggle="collapse" href={"#collapseProduct" + this.props.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                  <div className="card mb-3" >
                      <div className="row no-gutters">
                          <div className="col-md-4">
                              <img src="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN" className="card-img" alt="" />
                          </div>
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{this.props.name}</h5>
                                  <div className="collapse" id={"collapseProduct" + this.props.id}>
                                      <p className="card-text">{this.props.menge} im {this.props.lagerort}</p>
                                      <p className="card-text"><small className="text-muted">Haltbar bis {this.props.mhd}</small></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </a> */}
            </div>
        );
    }
}

export default Product;
