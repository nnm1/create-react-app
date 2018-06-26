// Simulate a HTTP request.
export default function fetchProfile() {
  const promise = resolve =>
    setTimeout(() => {
      const profile = { name: 'User Name' };
      resolve(profile);
    }, 100);

  return new Promise(promise);
}
