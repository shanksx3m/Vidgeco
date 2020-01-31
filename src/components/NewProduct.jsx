import React from 'react';
import { observer, inject } from 'mobx-react';

//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
@inject('mainStore')
@observer

// Class/Seite zum anlegen neuer Produkte oder zum ändern bestehender Produkte
class NewProduct extends React.Component {
    onProductNameInput() {
        const { updateRegisterProductName } = this.props.mainStore;
        const { value } = document.getElementById("productName")
        updateRegisterProductName(value)
    }
    onProductMengeInput() {
        const { updateRegisterProductMenge } = this.props.mainStore;
        const { value } = document.getElementById("productMenge")
        updateRegisterProductMenge(value)
    }
    onProductEinheitInput() {
        const { updateRegisterProductEinheit } = this.props.mainStore;
        const { value } = document.getElementById("productEinheit")
        updateRegisterProductEinheit(value)
    }
    onProductMHDInput() {
        const { updateRegisterProductMHD } = this.props.mainStore;
        const { value } = document.getElementById("productMHD")
        updateRegisterProductMHD(value)
    }
    onProductLagerortInput() {
        const { updateRegisterProductLagerort } = this.props.mainStore;
        const { value } = document.getElementById("productLagerort")
        updateRegisterProductLagerort(value)
    }
    onProductImgUrlInput() {
        const { updateRegisterProductImgUrl } = this.props.mainStore;
        const { value } = document.getElementById("productImgUrl")
        updateRegisterProductImgUrl(value)
    }


    render() {
        const { saveProduct } = this.props.mainStore;

        return (
            <div className="Content" className="container">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <div className="form-group">
                            <label for="productName">Produktname *</label>
                            <input onChange={this.onProductNameInput.bind(this)} type="text" className="form-control" id="productName" placeholder="z.B. Brokkoli" />
                        </div>
                        <div className="form-group">
                            <label for="productMenge">Menge *</label>
                            <input onChange={this.onProductMengeInput.bind(this)} type="text" className="form-control" id="productMenge" placeholder="z.B. 15" />
                        </div>
                        <div className="form-group">
                            <label for="productEinheit">Mengeneinheit auswählen *</label>
                            <select onChange={this.onProductEinheitInput.bind(this)} className="form-control" id="productEinheit">
                                <option>Stück</option>
                                <option>KG</option>
                                <option>Liter</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="productMHD">Mindesthaltbarkeitsdatum</label>
                            <input onChange={this.onProductMHDInput.bind(this)} type="text" className="form-control" id="productMHD" placeholder="z.B. 20.01.2020" />
                        </div>
                        <div className="form-group">
                            <label for="productLagerort">Lagerort</label>
                            <input onChange={this.onProductLagerortInput.bind(this)} type="text" className="form-control" id="productLagerort" placeholder="z.B. Kühlschrank" />
                        </div>
                        <div className="form-group">
                            <label for="productImgUrl">Bild-Link</label>
                            <input onChange={this.onProductImgUrlInput.bind(this)} type="text" className="form-control" id="productImgUrl" aria-describedby="imgUrlHelp" />
                            <small id="imgUrlHelp" className="form-text text-muted">Wenn sie ein Bild angezeigt haben wollen, so geben Sie hier die URL an.</small>
                        </div>
                        <div className="form-group">
                            <p><small>* Pflichtfeld</small></p>
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
