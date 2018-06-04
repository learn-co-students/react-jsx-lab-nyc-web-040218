import React from "react";
    // In the components/RegistrationForm.js file, create a React component called RegistrationForm.
    // This component should contain the following:
    //     One <form> element
    //     Two <input> elements — one has a text type, the other one is a password
    //     One <button> element with the submit type

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit"></button>
      </form>
    );
  }
}

export default RegistrationForm;
