import React from 'react'

import fetchProfile from '../actions/profileActions'

const IndexPage = ({ profile }) => {
  if (Object.keys(profile).length === 0) {
    return <progress />
  }

  return <p>Добро пожаловать, {profile.name}</p>
}

//
// Container implementation.
//

class IndexPageContainer extends React.Component {
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

export default IndexPageContainer
