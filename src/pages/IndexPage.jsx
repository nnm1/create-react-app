import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { fetchProfile } from '../actions/profileActions'
import Progress from '../lib/components/Progress'

function IndexPage({ profile }) {
  if (_isEmpty(profile)) {
    return <Progress />
  }
  return <p>Добро пожаловать, {profile.name}</p>
}

//
// Container implementation.
//

export default class IndexPageContainer extends React.Component {
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
    const { profile } = this.state
    return <IndexPage profile={profile} />
  }
}
