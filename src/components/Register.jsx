import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Register extends React.Component {
    
    render() {
        const { saveUser} = this.props.mainStore;
        return (
            <div className="Register">
                
                <div className="Content" class="container">
                    <div class="row">
                        <div class="col-sm"></div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label for="loginEmail">E-Mail</label>
                                <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" class="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword1">Passwort</label>
                                <input type="password" class="form-control" id="loginPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="loginPassword2">Passwort wiederholen</label>
                                <input type="password" class="form-control" id="loginPassword2" />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={saveUser}>Registrieren</button>
                        </div>
                        <div class="col-sm"></div>
                    </div>
                </div>
            </div>
        );

    }
}
export default Register;