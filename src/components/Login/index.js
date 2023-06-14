// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form onSubmit={this.onSubmitForm}>
          <h1>Please Login</h1>
          <button type="submit">Login with Sample Creds</button>
        </form>
      </div>
    )
  }
}

export default Login
