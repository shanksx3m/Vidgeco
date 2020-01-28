import React from 'react'
import { observer, inject } from "mobx-react"
import Household from "./components/Household";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './views/register';

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
