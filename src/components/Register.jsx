import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Register extends React.Component {
    
    render() {
        const { saveUser} = this.props.mainStore;
        return (
            <div className="Register">
                
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label for="loginEmail">E-Mail</label>
                                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div className="form-group">
                                <label for="loginPassword1">Passwort</label>
                                <input type="password" className="form-control" id="loginPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="loginPassword2">Passwort wiederholen</label>
                                <input type="password" className="form-control" id="loginPassword2" />
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