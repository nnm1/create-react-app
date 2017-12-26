// Simulate a HTTP request.
const fetchProfile = () =>
  new Promise(resolve =>
    setTimeout(() => {
      const profile = { name: 'User Name' }
      resolve(profile)
    }, 100)
  )

export default fetchProfile
