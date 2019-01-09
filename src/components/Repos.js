import React, { Component } from 'react'
import { getRepos } from '../actions/repos'
import { connect } from 'react-redux'

class Repos extends Component {
componentDidMount() {
    getRepos
}

    render() {
        return (
            <div>
                {this.props.repos.map(repo => (
                    <li>{repo.name}</li>
                ))}
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.repos
    }
}

export default connect(mapStateToProps)(Repos)