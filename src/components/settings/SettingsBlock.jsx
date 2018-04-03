import React from 'react'

export default function SettingsBlock({ header, children }) {
  return (
    <div className="mb-3 settings-block">
      {header}
      <div className="row">{children}</div>
    </div>
  )
}
