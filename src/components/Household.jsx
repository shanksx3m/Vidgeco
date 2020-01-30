import React from 'react';
import { observer, inject } from 'mobx-react';
import Product from './Product';
import mainStore from '../stores/mainStore';
import Octicon, { Trashcan, Pencil } from '@primer/octicons-react'; //Octicon ist eine Sammlung an Icons (https://octicons.github.com/)

@inject('mainStore')
@observer

//Zeigt übersicht über alle Produkte/Zutaten mit allen Daten an. Löschung der Daten durch Buttonclick möglich. 
//Die Ausgabe erfolgt dir die Class 'Product' aus der Produkt.jsx
class Household extends React.Component {
    render() {
        const { householdName, products } = this.props.mainStore;

        return (
            <div className="Household">
                <div className="Content" className="container">
                    {/* Name des Haushaltes */}
                    <p className="h1">{householdName}</p>
                    <p className="h4"></p>

                    <div className="Produkte" className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            {products.map(product => {
                                <div className='product-output'>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <img src={product.image} className="card-img" alt="" />
                                            {product.name}
                                        </h5>
                
                                        <h6 className="card-subtitle mb-2 text-muted">{product.menge + ' ' + product.einheit} im {product.lagerort}<br />Haltbar bis {product.mhd}</h6>
                                        <button className="card-link btn btn-dark"><Octicon icon={Pencil} /></button>
                
                                        <button className="card-link btn btn-danger"><Octicon icon={Trashcan} /></button></div>
                                </div>
                            </div>
                            })}
                            {/* <div className="col product-div"><Product /></div> */}
                            {/* <div className="col product-div"><Product id="1" name='Eier' menge='10 Stück' mhd='27.01.2020' lagerort='Eckschrank' image="https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="2" name='Schweine-Hack' menge='200 g' mhd='13.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2020/01/09/13/16/mett-4752771_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="3" name='Gouda' menge='1 Stück' mhd='20.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2013/02/13/17/44/cheese-81403_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="4" name='Serano' menge='10 Scheiben' mhd='30.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2019/01/15/22/09/jamon-3934953_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="5" name='Tomaten' menge='300 g' mhd='27.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565__340.jpg" /></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Household;
