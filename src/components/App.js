import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Zombo.com App</h1>
  </header>
)

const Game = (props) => (
  <div className='game'>

    

  </div>
)

const Score = () => (
  <div className='score'>

      

  </div>
)

class ZombocomCloneApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Score />
        <Game />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <ZombocomCloneApp />

  </div>
)

export default App

