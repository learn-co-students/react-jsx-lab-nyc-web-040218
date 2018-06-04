import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form className='RegistrationForm'>
        Name: <input type='text' />
        Password: <input type='password' />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;