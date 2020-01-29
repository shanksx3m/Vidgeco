import React from 'react'
import { observer, inject } from "mobx-react"
import Household from "./components/Household";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './components/Register';
import NewProduct from './components/NewProduct';
import ChangePassword from './components/ChangePassword';



@inject("mainStore")
@observer
class App extends React.Component {
  renderCurrentSite() {
    const { currentSite } = this.props.mainStore
    

    switch (currentSite) {
      case 'login':
        return <Login />
        
      case 'household':
        return <Household />

        case 'register':
          return <Register />

        case 'newProduct':
            return <NewProduct />

        case 'changePassword':
            return <ChangePassword />
            
      default:
        break;
    }
  }


  render() {
    const { isLoggedIn } = this.props.mainStore
    return (
      <div className="App">
        <Navbar />
        {this.renderCurrentSite()}
      </div>
    );
  }
}

export default App
