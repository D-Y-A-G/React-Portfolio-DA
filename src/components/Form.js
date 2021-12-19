import React, { useState } from "react";
import "../App.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message(message)) {
      setErrorMessage(`${name} please include as message to submit`);
      return;
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="field title fontWeight:600px">
      <h1>Hello {name}</h1>
      <form className="form">
        <input
          className="input"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className="input"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <textarea
          className="field control"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="input"
          placeholder="Type Message here!"
        />
        <button
          className="button is-primary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
