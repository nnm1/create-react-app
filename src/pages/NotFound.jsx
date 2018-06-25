import React from 'react'

export default function NotFound() {
  return (
    <div className="bg-red rounded text-white m-6 p-4" role="alert">
      <h2 className="mb-2">Page Not Found</h2>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
  )
}
