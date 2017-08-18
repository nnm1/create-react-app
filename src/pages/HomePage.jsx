import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { fetchProfile } from '../actions/profileActions'

const HomePage = ({ profile }) => {
  if (_.isEmpty(profile)) {
    return (
      <progress />
    )
  }

  return (
    <p>Добро пожаловать, {profile.name}</p>
  )
}

//
// Container implementation.
//

class HomePageContainer extends React.PureComponent {
  // Fetch container data for rendering on server.
  // Must be static function with a single parameter - "store".
  static fetchData(dispatch) {
    return dispatch(fetchProfile())
  }

  componentDidMount() {
    this._fetchProfileIfNeeded()
  }

  _fetchProfileIfNeeded() {
    const { profile, dispatch } = this.props
    if (_.isEmpty(profile)) {
      this.constructor.fetchData(dispatch)
    }
  }

  render() {
    const { profile } = this.props

    return (
      <HomePage profile={profile} />
    )
  }
}

const mapStateToProps = state => ({ profile: state.profile.data })

export default connect(mapStateToProps)(HomePageContainer)
