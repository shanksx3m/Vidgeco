import React from 'react';
import { observer, inject } from 'mobx-react';
import { register } from '../serviceWorker';

@inject('mainStore')
@observer
class Navbar extends React.Component {

  render() {
    const { isLoggedIn, logOut, changeToRegister, currentSite, changeToStart, currentHeadline, changeToNewProduct, changeToHousehold } = this.props.mainStore;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#" onClick={changeToStart}><div className="h4">VIDGECO</div></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {
            isLoggedIn ?
              (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#" onClick={changeToHousehold}>Übersicht <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={changeToNewProduct}>Neues Produkt</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Lagerorte</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Impressum</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={logOut}>Abmelden</a>
                    </li>
                  </ul>
                </div>
              ) :
              (<div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Datenschutz</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Impressum</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={changeToRegister}>Registrieren</a>
                  </li>
                </ul>
              </div>)

          }
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">{currentHeadline}</li>
          </ol>
        </nav>
      </div>
    )
  }
}

export default Navbar;
