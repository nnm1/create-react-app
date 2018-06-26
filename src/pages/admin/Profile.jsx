import React from 'react'
import Link from 'react-router-dom/Link'

import fetchProfile from '../../actions/profile'
import Page from '../../components/layout/Page'

export default class Profle extends React.PureComponent {
  state = {
    profile: {
      name: '',
    },
  }

  async componentDidMount() {
    try {
      const profile = await fetchProfile()
      this.setState({ profile })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { profile } = this.state
    const actions = (
      <Link className="text-grey-dark hover:text-black" to="/logout">
        Logout
      </Link>
    )

    return (
      <Page header="My Profile" actions={actions} back>
        <section className="p-4 border border-grey-light rounded">
          <h3 className="mb-3">My Profile</h3>
          Welcome, {profile.name}
        </section>
      </Page>
    )
  }
}
