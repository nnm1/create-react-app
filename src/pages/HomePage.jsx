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
  static fetchData(store) {
    const { dispatch } = store
    return dispatch(fetchProfile())
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProfile())
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
