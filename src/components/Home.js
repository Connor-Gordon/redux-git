import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'

class Home extends Component {
  render() {
    return (
        <div className="mainContainer">
            <Profile />
            <Repos />
        </div>
    )
  }
}

export default Home;
