import React from 'react'
import PrimaryButton from './ui/Button'

export class FBSigninButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <a
        href={
          'https://www.facebook.com/v3.3/dialog/oauth?' +
          'client_id=2173405042756743' +
          '&redirect_uri=http://localhost:3000/verify/facebook' +
          "&scope=['email', 'user_friends', 'user_likes', 'user_hometown', 'user_location']"
        }
      >
        <PrimaryButton
          type="button"
          style={{
            background: '#3b5998',
          }}
          className="w-full"
        >
          <i className="fab fa-facebook mr-2" /> Sign in with Facebook
        </PrimaryButton>
      </a>
    )
  }
}
