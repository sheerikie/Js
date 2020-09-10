import React from "react";
const List = (props) => {
  return (
    <div>
      <ul>
        {props.tasks ? props.tasks.map((task) => <li>{task}</li>) : "no tasks"}
      </ul>
    </div>
  );
};

export default List;
