import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { fetchProfile } from '../../actions/profileActions'
import Progress from '../../lib/components/Progress'

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { profile: {} }
  }

  componentDidMount() {
    fetchProfile()
      .then(profile => this.setState({ profile }))
      .catch(err => console.error(err))
  }

  render() {
    const profile = this.state.profile
    const content = _isEmpty(profile) ? (
      <Progress />
    ) : (
      <p>Здесь будут настройки профиля для {profile.name}</p>
    )
    return (
      <React.Fragment>
        <h1 className="h3">My Profile</h1>
        {content}
      </React.Fragment>
    )
  }
}
