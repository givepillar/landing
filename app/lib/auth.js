import redirect from './redirect'
import cookie from 'cookie'

export const signIn = ({ token, client, redirect = true }) => {
  document.cookie = cookie.serialize('token', token, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  })

  // Force a reload of all the current queries now that the user is
  // logged in
  client.cache.reset().then(() => {
    if (redirect) redirect({}, '/')
  })
}

export const signOut = client => {
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1, // Expire the cookie immediately
  })

  // Force a reload of all the current queries now that the user is
  // logged in, so we don't accidentally leave any state around.
  client.cache.reset().then(() => {
    // Redirect to a more useful page when signed out
    redirect({}, '/signin')
  })
}
