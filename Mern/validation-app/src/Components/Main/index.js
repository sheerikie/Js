import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function Main() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let onChange = setValues(value);
    let valid = true;
    console.log(name);
    console.log(value);
    switch (name) {
      case "firstName":
        errors.firstName = value.length < 3 ? "Not Valid firstName" : "";
        break;
      case "lastName":
        errors.lastName = value.length < 3 ? "Not Valid lastName" : "";
        break;
      case "email":
        errors.email = emailRegex.test(value) ? "" : "Not Valid email";
        break;
      case "password":
        errors.password = value.length < 3 ? "Not Valid firstName" : "";
        break;
      default:
        break;
    }
    console.log(errors);

    if (errors) {
      valid = false;
    }
    return { errors };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ errors });
    formValidation({ errors, values });
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Enter Values</h1>
        <form onSubmit={handleSubmit}>
          <div className="firstName">
            <input
              className="form-control"
              type="text"
              //  value={values.firstName || null}
              placeholder="Enter First Name"
              name="firstName"
              onChange={handleChange}
            />
            {errors.firstName && (
              <span style={{ color: "blue" }}>{errors.firstName}</span>
            )}
          </div>

          <div className="createAccount">
            <input className="btn btn-success" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
