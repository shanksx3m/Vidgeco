import React from 'react';
import ReactDOM from 'react-dom';
import './products.css';
import Octicon, { Trashcan, Flame } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)



class Product extends React.Component {
    render(props) {
        return (
            <div className='product-output'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img src={this.props.image} class="card-img" alt="" />
                            {this.props.name}
                        </h5>

                        <h6 class="card-subtitle mb-2 text-muted">{this.props.menge} im {this.props.lagerort}<br />Haltbar bis {this.props.mhd}</h6>
                        <button class="card-link btn btn-dark"><Octicon icon={Trashcan} /></button>

                        <button class="card-link btn btn-danger"><Octicon icon={Flame} /></button></div>
                </div>
                
                
                
                
                
                {/* <a class="btn btn-light" data-toggle="collapse" href={"#collapseProduct" + this.props.id} role="button" aria-expanded="false" aria-controls="collapseExample">
                    <div class="card mb-3" >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="https://www.zaubertopf-club.de/files/styles/mainimage_normal/public/images/recipes/2019/15/brokkoli_garen.jpg?itok=_wRGrDbN" class="card-img" alt="" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{this.props.name}</h5>
                                    <div class="collapse" id={"collapseProduct" + this.props.id}>
                                        <p class="card-text">{this.props.menge} im {this.props.lagerort}</p>
                                        <p class="card-text"><small class="text-muted">Haltbar bis {this.props.mhd}</small></p>
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