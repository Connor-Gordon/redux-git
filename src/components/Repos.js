import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'
import "../styles/App.css"

class Repos extends Component {
componentDidMount() {
    getRepos()
}

    render() {
        return (
            <div>
                <h3>Repositories</h3>
                <ul className="reposList">
                {this.props.repos.map(repo => (
                        <li className="repoLi" key={ + repo.id}>
                                <div className="listDivs">
                                    <p className="repoName">{repo.name}</p>
                                    <p className="repoLanguage">{repo.language}</p>
                                    <p className="repoUpdate">{repo.updated_at}</p>
                                </div>
                        </li>
                ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.reposReducer.repos
    }
}

export default connect(mapStateToProps)(Repos)