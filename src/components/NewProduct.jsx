import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class NewProduct extends React.Component {
    render() {
        const { saveProduct } = this.props.mainStore;
        return (
            <div className="Content" class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="productName">Produktname</label>
                            <input type="text" class="form-control" id="productName" placeholder="z.B. Brokkoli" />
                        </div>
                        <div class="form-group">
                            <label for="productMenge">Menge</label>
                            <input type="text" class="form-control" id="productMenge" placeholder="z.B. 15" />
                        </div>
                        <div class="form-group">
                            <label for="produktEinheit">Example select</label>
                            <select class="form-control" id="produktEinheit">
                                <option>Stück</option>
                                <option>KG</option>
                                <option>Liter</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="productMHD">Mindesthaltbarkeitsdatum</label>
                            <input type="text" class="form-control" id="productMHD" placeholder="z.B. 20.01.2020" />
                        </div>
                        <div class="form-group">
                            <label for="productLagerort">Lagerort</label>
                            <input type="text" class="form-control" id="productLagerort" placeholder="z.B. Kühlschrank" />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={saveProduct}>speichern</button>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
        )
    }
}
export default NewProduct;