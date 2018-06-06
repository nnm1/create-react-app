import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { fetchProfile } from '../../actions/profileActions'
import Main from '../../components/layout/Main'
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
    const actions = (
      <button type="button" className="btn btn-warning">Save</button>
    )

    const profile = this.state.profile
    const content = _isEmpty(profile) ? (
      <Progress />
    ) : (
      <p>Profile settings for {profile.name} go here</p>
    )

    return (
      <Main header="My Profile" actions={actions}>
        {content}
      </Main>
    )
  }
}
