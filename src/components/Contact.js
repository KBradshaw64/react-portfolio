//look into importing a component library - react-bootstrap possibly, would still need base bootstrap
import React, { useState } from 'react';
import { validateEmail } from '../Utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (e) => {
    const { name, value } = e.target
    if ( name === "email" ) {
        if (!validateEmail(value)) {
            setErrorMessage("Your email is invalid.")
        } else {
            setErrorMessage("")
        }
    } else {
        if (!value.length) {
            setErrorMessage("This is a required field.")
        } else {
            setErrorMessage("")
        }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('Sent.');
  };

  return (
    <div>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          onBlur={handleValidation}
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
          onBlur={handleValidation}
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Your message here"
          onBlur={handleValidation}
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;