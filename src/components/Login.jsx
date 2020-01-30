import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class Login extends React.Component {

    onLoginEmailInput() {
        const { updateLoginEmail } = this.props.mainStore;
        const { value } = document.getElementById("loginEmail");
        updateLoginEmail(value)
    }    
    onLoginPasswordInput() {
        const { updateLoginPassword } = this.props.mainStore;
        const { value } = document.getElementById("loginPassword");
        updateLoginPassword(value)
    }


    render() {
        const { logIn } = this.props.mainStore;

        return (
            <div className="Login">
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>

                        <div className="col-sm">
                            <p className="mb-0"><div className="h1 text-center">Vidgeco</div></p>
                            <footer className="blockquote-footer text-center">Willkommen bei der virtuellen <cite title="Source Title">Kühlschrank- und Zutatenkontrolle</cite></footer>
                            <hr></hr>
                            <div className="form-group">
                                <label htmlFor="loginEmail">E-Mail</label>
                                <input type="email" onChange={this.onLoginEmailInput.bind(this)} className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="loginPassword">Passwort</label>
                                <input type="password" onChange={this.onLoginPasswordInput.bind(this)} className="form-control" id="loginPassword" />
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
