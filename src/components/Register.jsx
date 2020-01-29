import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Register extends React.Component {
    onEmailInput() {
        const { updateRegisterEmail } = this.props.mainStore;
        const { value } = document.getElementById("loginEmail")
        updateRegisterEmail(value)
    }

    onPassword1Input() {
        const { updateRegisterPassword1 } = this.props.mainStore;
        const { value } = document.getElementById("loginPassword1")
        updateRegisterPassword1(value)
    }

    onPassword2Input() {
        const { updateRegisterPassword2 } = this.props.mainStore;
        const { value } = document.getElementById("loginPassword2")
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
                                <label forhtml="loginEmail">E-Mail</label>
                                <input onChange={this.onEmailInput.bind(this)} type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div className="form-group">
                                <label forhtml="loginPassword1">Passwort</label>
                                <input onChange={this.onPassword1Input.bind(this)} type="password" className="form-control" id="loginPassword1" />
                            </div>
                            <div className="form-group">
                                <label forhtml="loginPassword2">Passwort wiederholen</label>
                                <input onChange={this.onPassword2Input.bind(this)} type="password" className="form-control" id="loginPassword2" />
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