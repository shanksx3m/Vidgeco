import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Product from './classes/products.js/index.js';
import Household from '../views/household';
import Login from '../views/login';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          logedin: false
      }

  }

  render() {
      if (this.state.logedin)
          return (
              <div className="App">
                  <div className="Household">
                      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                          <a class="navbar-brand" href="#"><div class="h4">VIDGECO</div></a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>

                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav mr-auto">
                                  <li class="nav-item active">
                                      <a class="nav-link" href="#">Übersicht <span class="sr-only">(current)</span></a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Produkte</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Lagerorte</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#">Impressum</a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="#" onClick={this.onLogoutClick.bind(this)}>Abmelden</a>
                                  </li>
                              </ul>
                          </div>

                      </nav>

                      <div className="Content" class="container">

                          <p class="h1">Hamsterbau</p>
                          <p class="h4">
                          </p>
                          <div className="Produkte" class="container">
                              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                                  <div class="col product-div"><Product id="0" name='Brokkoli' menge='400 g' mhd='10.10.2020' lagerort='Gefrierschrank' image="https://cdn.pixabay.com/photo/2015/03/14/13/59/vegetables-673181_960_720.jpg" /></div>
                                  <div class="col product-div"><Product id="1" name='Eier' menge='10 Stück' mhd='27.01.2020' lagerort='Eckschrank' image="https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_960_720.jpg" /></div>
                                  <div class="col product-div"><Product id="2" name='Schweine-Hack' menge='200 g' mhd='13.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2020/01/09/13/16/mett-4752771_960_720.jpg" /></div>
                                  <div class="col product-div"><Product id="3" name='Gouda' menge='1 Stück' mhd='20.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2013/02/13/17/44/cheese-81403_960_720.jpg" /></div>
                                  <div class="col product-div"><Product id="4" name='Serano' menge='10 Scheiben' mhd='30.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2019/01/15/22/09/jamon-3934953_960_720.jpg" /></div>
                                  <div class="col product-div"><Product id="5" name='Tomaten' menge='300 g' mhd='27.01.2020' lagerort='Kühlschrank' image="https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565__340.jpg" /></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          );
      else return (
          <div className="App">
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
                                  <small id="emailHelp" class="form-text text-muted">Wir werden Ihre E-Mail Adresse zu keinem Zeitpunkt an Dritte weitergeben.</small>
                              </div>
                              <div class="form-group">
                                  <label for="loginPassword">Passwort</label>
                                  <input type="password" class="form-control" id="loginPassword" />
                              </div>
                              <div class="form-group form-check">
                                  <input type="checkbox" class="form-check-input" id="loginCheck" />
                                  <label class="form-check-label" for="loginCheck">Angemeldet bleiben.</label>
                              </div>
                              <button type="submit" class="btn btn-primary" onClick={this.onLoginClick.bind(this)}>anmelden</button>
                          </div>
                          <div class="col-sm"></div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
  onLoginClick() {
      this.setState({ logedin: true })
  }
  onLogoutClick() {
      this.setState({ logedin: false })
  }
  onRegisterClick(){
      
  }
}
export default App;
