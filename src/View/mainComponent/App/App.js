import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../../components/Home'
import About from '../../components/About'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    )
  }
}

export default App
