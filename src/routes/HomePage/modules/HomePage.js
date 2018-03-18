export const GOOGLE_LOGIN_INITIATE = 'GOOGLE_LOGIN_INITIATE'
export const FACEBOOK_LOGIN_INITIATE = 'FACEBOOK_LOGIN_INITIATE'

export function googleLogin() {
  return (dispatch) => {
    dispatch({
      type: GOOGLE_LOGIN_INITIATE,
    })
    window.location.assign(`${'https://accounts.google.com/o/oauth2/auth?' +
      'redirect_uri='}${window.location.origin}/google&` +
      'response_type=token&' +
      `client_id=${process.env.GOOGLE_ID}&` +
      'scope=https://www.googleapis.com/auth/userinfo.email&' +
      'access_type=online&' +
      'approval_prompt=auto')
  }
}

export function facebookLogin() {
  return (dispatch) => {
    dispatch({
      type: FACEBOOK_LOGIN_INITIATE,
    })
    window.location.assign(`${'https://graph.facebook.com/oauth/authorize?' +
      `client_id=${process.env.FACEBOOK_ID}&` +
      'redirect_uri='}${window.location.origin}/facebook&` +
      'response_type=token&scope=email,public_profile')
  }
}
