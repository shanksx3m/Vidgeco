import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class NewProduct extends React.Component {
    render() {
        const { saveProduct } = this.props.mainStore;
        return (
            <div className="Content" className="container">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label for="productName">Produktname</label>
                            <input type="text" className="form-control" id="productName" placeholder="z.B. Brokkoli" />
                        </div>
                        <div className="form-group">
                            <label for="productMenge">Menge</label>
                            <input type="text" className="form-control" id="productMenge" placeholder="z.B. 15" />
                        </div>
                        <div className="form-group">
                            <label for="produktEinheit">Example select</label>
                            <select className="form-control" id="produktEinheit">
                                <option>Stück</option>
                                <option>KG</option>
                                <option>Liter</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="productMHD">Mindesthaltbarkeitsdatum</label>
                            <input type="text" className="form-control" id="productMHD" placeholder="z.B. 20.01.2020" />
                        </div>
                        <div className="form-group">
                            <label for="productLagerort">Lagerort</label>
                            <input type="text" className="form-control" id="productLagerort" placeholder="z.B. Kühlschrank" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={saveProduct}>speichern</button>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        )
    }
}
export default NewProduct;