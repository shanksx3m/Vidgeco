import React from 'react';
import { observer, inject } from 'mobx-react';
import Product from './Product';

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

                    {/* Anzeige der Produkte mit Hilfe der Klasse 'Product' aus der Datei Product.jsx */}
                    <div className="Produkte" className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            {
                                (products && products.length > 0 ?
                                    products.map(product => (<div className="col product-div"><Product product={product} /></div>))
                                    :
                                    <div style={{ opacity: 0.5 }}>Keine Produkte vorhanden</div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Household;
