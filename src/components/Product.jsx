import React from 'react';
import { observer, inject } from 'mobx-react';
import Octicon, { Trashcan, Flame } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)

@inject('mainStore')
@observer

// Class, die das Layout eines Produktes exportiert
class Product extends React.Component {
    render() {
        return (
            <div className='product-output'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={this.props.image} className="card-img" alt="" />
                            {this.props.name}
                        </h5>

                        <h6 className="card-subtitle mb-2 text-muted">{this.props.menge} im {this.props.lagerort}<br />Haltbar bis {this.props.mhd}</h6>
                        <button className="card-link btn btn-dark"><Octicon icon={Trashcan} /></button>

                        <button className="card-link btn btn-danger"><Octicon icon={Flame} /></button></div>
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
