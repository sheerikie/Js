const [tasks, setTasks] = useState();
let value = "";
const addTaskHandler = (e) => {
  let task = e.target.value;
  value = task;
};
let tasksA = [];

//let taskB = [];
const onsubmit = (e) => {
  e.preventDefault();
  tasksA = tasksA.concat(tasks);
  tasksA.push(value);
  setTasks(tasksA);
  return tasksA;
};

return (
  <div className="App">
    <header className="App-header">
      Add Todo
      <Task onAddTask={addTaskHandler} onsubmit={onsubmit} />
      <p style={{ color: "white" }}>{tasks}</p>
      <List tasks={tasks} />
    </header>
  </div>
);
