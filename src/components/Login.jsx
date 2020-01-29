import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Login extends React.Component {
    render() {
        const { logIn } = this.props.mainStore;

        return (
            <div className="Login">
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>

                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="loginEmail">E-Mail</label>
                                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Passwort</label>
                                <input type="password" className="form-control" id="loginPassword" />
                            </div>
                            {/* <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="loginCheck" />
                                <label className="form-check-label" htmlFor="loginCheck">Angemeldet bleiben.</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary" onClick={logIn}>anmelden</button>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
