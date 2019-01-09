import React, { Component } from 'react'
import { getProfile } from '../actions/profile'
import { connect } from 'react-redux'
import "../styles/App.css"

class Profile extends Component {
componentDidMount() {
    getProfile()
}

    render() {
        return (
            <div>
                <ul className="profileList">
                    <li><img id="avatar" src={this.props.profile.avatar_url}/></li>
                    <li id="name">{this.props.profile.name}</li>
                    <li id="login">{this.props.profile.login}</li>
                    <li>{this.props.profile.location}</li>
                    <li>{this.props.profile.blog}</li>
                    <li>{this.props.profile.email}</li>
                    <li><a href={this.props.profile.html_url}>{this.props.profile.html_url}</a></li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        profile: appState.profileReducer.profile
    }
}

export default connect(mapStateToProps)(Profile)