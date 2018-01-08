import React from 'react'

const SettingsBlock = ({ header, children }) => (
  <div className="mb-3 settings-block">
    {header}
    <div className="row">{children}</div>
  </div>
)

export default SettingsBlock
