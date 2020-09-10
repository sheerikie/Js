import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

const [values, setValues] = useState({ value: "cleaning" });
const [errors, setErrors] = useState({});

const addTask = (value) => {
  //  value.preventDefault();
  console.log("we are here", value);
  // let current = { ...values };
  let Task = [...values, { value }];
  //Task.concat(value);
  console.log(Task);
  setValues(Task);
  setErrors({ errors });
};
const deleteTask = (e) => {
  e.preventDefault();
  setErrors({ errors });
};
const handleSubmit = (e) => {
  e.preventDefault();
  //const { name, value } = e.target;
  console.log(values);
  addTask(values);
  setValues("");
};

function Todo() {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    let valid = true;
    console.log(name);
    console.log(value);
    switch (name) {
      case "task":
        errors.task = value.length < 3 ? "Not Valid Task" : "";
        break;
      default:
        break;
    }
    console.log(errors);

    if (errors) {
      valid = false;
      setErrors({ errors });
    }
  };

  console.log(values);
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Enter Values</h1>
        <form onSubmit={handleSubmit}>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              name="task"
              onChange={handleChange}
              values={values || ""}
            />

            <span class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <span style={{ color: "darkred", fontSize: "bolder" }}> +</span>{" "}
                Add
              </button>
            </span>
          </div>
          {errors.task && <span style={{ color: "blue" }}>{errors.task}</span>}
        </form>
      </div>
    </div>
  );
}

export default Todo;
