import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { fetchProfile } from '../../actions/profileActions'
import MyContent from '../../components/ui/layout/MyContent'

const ProfilePage = ({ profile }) => {
  const content = _.isEmpty(profile) ? (
    <progress />
  ) : (
      <p>Здесь будут настройки профиля для {profile.name}</p>
    )

  return (
    <MyContent
      header="Мой профиль"
      breadcrumbs={
        <ul className="breadcrumb">
          <li className="breadcrumb-item">Настройки</li>
          {/* <li className="breadcrumb-item"><Link to="/settings">Настройки</Link></li> */}
        </ul>
      }
      content={content} />
  )
}

//
// Container implementation.
//

class ProfilePageContainer extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProfile())
  }

  render() {
    const { profile } = this.props

    return (
      <ProfilePage profile={profile} />
    )
  }
}

const mapStateToProps = state => ({ profile: state.profile.data })

export default connect(mapStateToProps)(ProfilePageContainer)
