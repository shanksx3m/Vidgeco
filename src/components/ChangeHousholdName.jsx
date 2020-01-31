//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer

// Class/Seite zum ändern des Haushaltnamen
class ChangeHousholdName extends React.Component {

    //onChange Methoden um die aktuelle Eingabe in Hilfsvariablen zu speichern.
    onHouseholdInput() {
        const { updateRegisterHousehold } = this.props.mainStore;
        const { value } = document.getElementById("registerHousehold")
        updateRegisterHousehold(value)
    }

    //Renderfunktion mit ausgabe des Contents
    render() {

        const { saveHouseholdName } = this.props.mainStore; //saveHouseholdName Methode aus der mainStore.jsx
        return (
            <div className="ChangeHousholdName">
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">

                            <div className="form-group">
                                <label forhtml="registerHousehold">Name Ihres Haushaltes ändern</label>
                                <input onChange={this.onHouseholdInput.bind(this)} type="text" className="form-control" id="registerHousehold" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveHouseholdName}>ändern</button>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        );

    }
}

export default ChangeHousholdName;
