import React from 'react'

import fetchProfile from '../../../actions/profileActions'
import MyContent from '../../../components/layout/MyContent'

const ProfilePage = ({ profile }) => {
  const content = Object.keys(profile).length === 0 ? (
    <progress />
  ) : (
    <p>Здесь будут настройки профиля для {profile.name}</p>
  )

  return (
    <MyContent
      header={<h1>Мой профиль</h1>}
      breadcrumbs={
        <ul className="breadcrumb">
          <li className="breadcrumb-item">Настройки</li>
          {/* <li className="breadcrumb-item">
            <Link to="/settings">Настройки</Link>
          </li> */}
        </ul>
      }
      content={content}
    />
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
