import React from 'react'

export default function Progress() {
  return (
    <div className="progress mx-auto" style={{ width: '150px' }}>
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        style={{ width: '100%' }}
        role="progressbar"
      />
    </div>
  )
}
