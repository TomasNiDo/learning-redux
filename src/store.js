import { createStore } from 'redux'

const initialState = {
  counters: [
    { id: 1, value: 6 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let incrementCounters = [...state.counters]
      let index = incrementCounters.findIndex(counter => counter.id === action.payload.counter.id)

      incrementCounters[index].value++
      state = {...state, counters: incrementCounters}

      break;

    case 'DELETE':
      let deleteCounter = [...state.counters]

      deleteCounter = deleteCounter.filter(counter => counter.id !== action.payload.counterId)
      state = {...state, counters: deleteCounter}

      break;

    case 'RESET':
      let resetCounters = [...state.counters]
      resetCounters = resetCounters.map(counter => {
        counter.value = 0
        return counter
      })
      state = {...state, counters: resetCounters}

      break;
  }

  return state
}

const store = createStore(reducer)

export default store
