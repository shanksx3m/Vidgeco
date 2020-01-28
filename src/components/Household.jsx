import React from 'react';
import { observer, inject } from 'mobx-react';
import Product from './Product';

@inject('mainStore')
@observer
class Household extends React.Component {
    render() {
        return (
            <div className="Household">
                <div className="Content" className="container">
                    <p className="h1">Hamsterbau</p>
                    <p className="h4">
                    </p>
                    <div className="Produkte" className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            <div className="col product-div"><Product id="0" name='Brokkoli' menge='400 g' mhd='10.10.2020' lagerort='Gefrierschrank' image="https://cdn.pixabay.com/photo/2015/03/14/13/59/vegetables-673181_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="1" name='Eier' menge='10 Stück' mhd='27.01.2020' lagerort='Eckschrank' image="https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="2" name='Schweine-Hack' menge='200 g' mhd='13.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2020/01/09/13/16/mett-4752771_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="3" name='Gouda' menge='1 Stück' mhd='20.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2013/02/13/17/44/cheese-81403_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="4" name='Serano' menge='10 Scheiben' mhd='30.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2019/01/15/22/09/jamon-3934953_960_720.jpg" /></div>
                            <div className="col product-div"><Product id="5" name='Tomaten' menge='300 g' mhd='27.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565__340.jpg" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Household;
