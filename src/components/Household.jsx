import React from 'react';
import { observer, inject } from 'mobx-react';
import Product from './Product';
import mainStore from '../stores/mainStore';

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
                            <div className="col product-div"><Product /></div>
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
