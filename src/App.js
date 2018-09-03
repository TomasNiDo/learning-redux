import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.props.counters.filter(counter => counter.value !== 0).length} />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps)(App)
