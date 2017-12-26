import React from 'react'

const AppLayout = ({ sidebar, content, isSidebarVisible, onSidebarToggle }) => {
  return (
    <div
      className={'app-layout' + (isSidebarVisible ? ' -sidebar-visible' : '')}
    >
      <aside className="app-sidebar">{sidebar}</aside>

      <div className="app-page">{content}</div>

      <div className="app-layout-overlay" onClick={onSidebarToggle} />
    </div>
  )
}

//
// Container implementation.
//

class AppLayoutContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isSidebarVisible: false }

    this._handleSidebarToggle = this._handleSidebarToggle.bind(this)
  }

  componentDidMount() {
    document.addEventListener('onSidebarToggle', this._handleSidebarToggle)
  }

  componentWillUnmount() {
    document.removeEventListener('onSidebarToggle', this._handleSidebarToggle)
  }

  _handleSidebarToggle() {
    this.setState(prevState => ({
      isSidebarVisible: !prevState.isSidebarVisible
    }))
  }

  render() {
    const { sidebar, content } = this.props
    const { isSidebarVisible } = this.state
    return (
      <AppLayout
        sidebar={sidebar}
        content={content}
        isSidebarVisible={isSidebarVisible}
        onSidebarToggle={this._handleSidebarToggle}
      />
    )
  }
}

export default AppLayoutContainer
