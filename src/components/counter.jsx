import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        <button onClick={ () => this.props.increment(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={ () => this.props.delete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary"
    return classes
  }

  formatCount() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (counter) => {
      dispatch({
        type: 'INCREMENT',
        payload: { counter }
      })
    },
    delete: (counterId) => {
      dispatch({
        type: 'DELETE',
        payload: { counterId }
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
