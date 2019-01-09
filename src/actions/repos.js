import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'http://localhost:3001'

export function getRepos() {
    axios.get('/repos').then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: "GET_REPOS",
            repos: resp.data
        })
    })
}