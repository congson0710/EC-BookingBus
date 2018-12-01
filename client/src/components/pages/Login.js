import React, { Component } from 'react'

import Menu from '../Menu'
import Footer from '../Footer'
import LoginForm from '../LoginForm'

class LoginPage extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Menu />
        <LoginForm />
        <Footer />
      </React.Fragment>
    )
  }
}

export default LoginPage
