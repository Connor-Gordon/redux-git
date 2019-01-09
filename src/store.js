import { createStore } from 'redux'
import gitReducer from './reducers/gitReducer'

const store = createStore(gitReducer)

export default store