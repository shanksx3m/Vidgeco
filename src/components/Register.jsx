import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Register extends React.Component {
    onHouseholdInput() {
        const { updateRegisterHousehold } = this.props.mainStore;
        const { value } = document.getElementById("registerHousehold")
        updateRegisterHousehold(value)
    }

    onEmailInput() {
        const { updateRegisterEmail } = this.props.mainStore;
        const { value } = document.getElementById("registerEmail")
        updateRegisterEmail(value)
    }

    onPassword1Input() {
        const { updateRegisterPassword1 } = this.props.mainStore;
        const { value } = document.getElementById("registerPassword1")
        updateRegisterPassword1(value)
    }

    onPassword2Input() {
        const { updateRegisterPassword2 } = this.props.mainStore;
        const { value } = document.getElementById("registerPassword2")
        updateRegisterPassword2(value)
    }

    render() {
        const { saveUser } = this.props.mainStore;
        return (
            <div className="Register">

                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label forhtml="registerHousehold">Name Ihres Haushaltes *</label>
                                <input onChange={this.onHouseholdInput.bind(this)} type="text" className="form-control" id="registerHousehold" aria-describedby="householdHelp" />
                                <small id="householdHelp" className="form-text text-muted">Wie soll Ihr Haushalt heißen (damit sind nicht die einzelnen Lagerorte gemeint, sondern der gesamte Haushalt).</small>
                            </div>
                            <div className="form-group">
                                <label forhtml="registerEmail">E-Mail *</label>
                                <input onChange={this.onEmailInput.bind(this)} type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div className="form-group">
                                <label forhtml="registerPassword1">Passwort *</label>
                                <input onChange={this.onPassword1Input.bind(this)} type="password" className="form-control" id="registerPassword1" />
                            </div>
                            <div className="form-group">
                                <label forhtml="registerPassword2">Passwort wiederholen *</label>
                                <input onChange={this.onPassword2Input.bind(this)} type="password" className="form-control" id="registerPassword2" />
                            </div>
                            <div className="form-group">
                            <p><small>* Pflichtfeld</small></p>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={saveUser}>Registrieren</button>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Register;