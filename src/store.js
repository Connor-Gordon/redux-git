import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/profileReducer'
import reposReducer from './reducers/reposReducer'

const rootReducer = combineReducers({
    profileReducer,
    reposReducer
})

const store = createStore(rootReducer)


export default store