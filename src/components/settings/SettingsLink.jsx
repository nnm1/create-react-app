import React from 'react'
import Link from 'react-router-dom/Link'

export default function SettingsLink({ to, text }) {
  return (
    <div className="card text-center mb-1">
      <Link className="d-block p-4" to={to}>
        {text}
      </Link>
    </div>
  )
}
