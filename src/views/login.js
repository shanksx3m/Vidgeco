import React from 'react';
import ReactDOM, { render } from 'react-dom';


function Login(props) {
    return (
        <div className="Login">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><div class="h4">VIDGECO</div></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Datenschutz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Impressum</a>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="Content" class="container">
                <div class="row">
                    <div class="col-sm"></div>

                    <div class="col-sm">
                        <div class="form-group">
                            <label for="loginEmail">E-Mail</label>
                            <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Passwort</label>
                            <input type="password" class="form-control" id="loginPassword" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="loginCheck" />
                            <label class="form-check-label" for="loginCheck">Angemeldet bleiben.</label>
                        </div>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>
        </div>
    );

}
export default Login;