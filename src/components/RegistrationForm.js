import React, { Component } from 'react'

class RegistrationForm extends Component {
  render() {
    return (
      <form className="RegistrationForm">
        Name: <input type='text'></input>
        Password: <input type='password'></input>
      <button type='submit'>Submit?</button>
      </form>
    )
  }
}

export default RegistrationForm;
