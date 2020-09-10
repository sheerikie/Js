import React from "react";
const Task = (props) => {
  return (
    <div>
      <form class="form-inline" onSubmit={props.onsubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control "
            id="task"
            style={{ marginRight: "25px" }}
            onChange={props.onAddTask}
          />

          <button type="submit" class="btn btn-success pull-right">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Task;
