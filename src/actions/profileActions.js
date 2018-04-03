// Simulate a HTTP request.
export default function fetchProfile() {
  return new Promise(resolve =>
    setTimeout(() => {
      const profile = { name: 'User Name' }
      resolve(profile)
    }, 100)
  )
}
