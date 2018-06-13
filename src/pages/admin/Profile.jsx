import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { fetchProfile } from '../../actions/profile'
import Main from '../../components/layout/Main'
import Progress from '../../lib/components/Progress'

export default class Profile extends React.PureComponent {
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
      <button type="button" className="btn btn-warning">
        Save
      </button>
    )

    const profile = this.state.profile
    const cardContent = _isEmpty(profile) ? (
      <Progress />
    ) : (
      <p className="card-text">Profile settings for {profile.name} go here</p>
    )

    return (
      <Main header="My Profile" actions={actions} back>
        <section className="card">
          <div className="card-body">
            <h4 className="card-title">My Profile</h4>
            {cardContent}
          </div>
        </section>
      </Main>
    )
  }
}
