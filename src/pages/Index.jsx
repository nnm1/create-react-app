import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import { fetchProfile } from '../actions/profileActions'
import Progress from '../lib/components/Progress'

export default class Index extends React.PureComponent {
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
    if (_isEmpty(profile)) {
      return <Progress />
    }
    return <p>Welcome, {profile.name}</p>
  }
}
