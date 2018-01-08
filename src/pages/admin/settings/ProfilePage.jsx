import React from 'react'
import _isEmpty from 'lodash/isEmpty'

import fetchProfile from '../../../actions/profileActions'
import MyContent from '../../../components/layout/MyContent'
import Progress from '../../../lib/components/Progress'

const ProfilePage = ({ profile }) => {
  const content = _isEmpty(profile) ? (
    <Progress />
  ) : (
    <p>Здесь будут настройки профиля для {profile.name}</p>
  )

  return (
    <MyContent header={<h1>Мой профиль</h1>} content={content} />
  )
}

//
// Container implementation.
//

class ProfilePageContainer extends React.Component {
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
    return <ProfilePage profile={profile} />
  }
}

export default ProfilePageContainer
