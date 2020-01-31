//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import React from 'react';
import { observer, inject } from 'mobx-react';

// Class die die Navigationausgibt
@inject('mainStore')
@observer
class Navbar extends React.Component {
  render() {
    const {
      successMsg, errorMsg, isLoggedIn, logOut, changeToLogin, changeToRegister, changeToStart,
      currentHeadline, changeToNewProduct, changeToHousehold, changeToChangePassword,
      changeToDatenschutz, changeToImpressum, changeHousholdName, deleteUser
    } = this.props.mainStore;

    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#" onClick={changeToStart}><div className="h4">VIDGECO</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {//Ab hier folgt die Logik, ob ein User angemeldet ist oder nicht und welche Navigatino die App ausgibt.
            isLoggedIn ?
              (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToHousehold}>Übersicht</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToNewProduct}>Neues Produkt</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToChangePassword}>Passwort ändern</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeHousholdName}>Haushalt ändern</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="modal" onClick={deleteUser}>Nutzer endgültig Löschen</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToDatenschutz}>Datenschutz</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToImpressum}>Impressum</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={logOut}>Abmelden</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToLogin}>Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToDatenschutz}>Datenschutz</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToImpressum}>Impressum</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToRegister}>Registrieren</a>
                    </li>
                  </ul>
                </div>
              )

          }
        </nav>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">{currentHeadline}</li>
          </ol>
        </nav>
        {//Verarbeitung, ob eine Erfolgs-/Fehlermeldung angezeigt werden soll und Ausgabe der Meldung
        successMsg ?
          (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMsg}
            </div>
          ) :
          errorMsg ?
            (
              <div className="alert alert alert-danger alert-dismissible fade show" role="alert">
                {errorMsg}
              </div>
            ) : ''
        }

      </div>
    )
  }
}

export default Navbar;
