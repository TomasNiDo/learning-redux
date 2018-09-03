import React, { Component } from 'react'
import Counter from './counter'
import { connect } from 'react-redux'

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete } = this.props

    return (
      <div>
        <button onClick={() => this.props.reset()} className="btn-primary btn-sm m-2">Reset</button>
        { this.props.counters.map(counter =>
          <Counter
            key={counter.id}
            counter={counter}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => {
      dispatch({
        type: 'RESET',
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
