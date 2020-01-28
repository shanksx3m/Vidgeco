import React from 'react'
import { observer, inject } from "mobx-react"
import Household from "./components/Household";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

@inject("mainStore")
@observer
class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props.mainStore
    return (
      <div className="App">
        <Navbar />
        {isLoggedIn ? <Household /> : <Login />}
      </div>
    );
  }
}

export default App
