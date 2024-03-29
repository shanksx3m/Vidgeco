//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import React from 'react'
import { observer, inject } from "mobx-react"
import Household from "./components/Household";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './components/Register';
import NewProduct from './components/NewProduct';
import ChangePassword from './components/ChangePassword';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import ChangeHousholdName from './components/ChangeHousholdName';

// Die App class steuert, welche Inhalte ausgegeben werden 
// und greift auf die Komponenten im Ordner components zu und integriert diese
@inject("mainStore")
@observer
class App extends React.Component {
  renderCurrentSite() {
    //Implementiert die Methode 'currentSite()' aus der mainStore.js
    const { currentSite } = this.props.mainStore

    //Methode zum Laden der Richtigen Seite/Component
    switch (currentSite) {
      case 'login':
        return <Login />

      case 'household':
        return <Household />

      case 'register':
        return <Register />

      case 'newProduct':
        return <NewProduct />

      case 'newProduct':
        return <NewProduct />

      case 'editProduct':
        return <NewProduct />

      case 'changePassword':
        return <ChangePassword />

      case 'changeHousholdName':
        return <ChangeHousholdName />

      case 'datenschutz':
        return <Datenschutz />

      case 'impressum':
        return <Impressum />

      default:
        break;
    }
  }


  render() {
    return (
      //Folgendes wird gerendert: Immer die Navigation (Navbar) und zusätzlich der Content der Seite (renderCurrentSite())
      <div className="App">
        <Navbar />
        {
          //Methode die den korrekten Inhalt rendert
          this.renderCurrentSite()
        }
      </div>
    );
  }
}

//exportiert den Inhalt der Class App
export default App
