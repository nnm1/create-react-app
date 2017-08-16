import React from 'react'

class AppLayout extends React.Component {
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
    return (
      <div className={'app-layout ' + (this.state.isSidebarVisible ? '-sidebar-visible' : '')}>
        <aside className="app-sidebar">
          {this.props.sidebar}
        </aside>

        <div className="app-page">
          {this.props.content}
        </div>

        <div className="app-layout-overlay" onClick={this._handleSidebarToggle}/>
      </div>
    )
  }
}

export default AppLayout
