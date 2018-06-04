import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div>
        <form className='RegistrationForm'>
          Name: <input type='text' />
          Password: <input type='password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;