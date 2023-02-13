import { useState, useRef } from 'react';
import Overview from '../components/Overview.jsx';

const App = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editID, setEditID] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const taskInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskInput) {
      return;
    } else if (taskInput && !isEditing) {
      setTasks([
        ...tasks,
        { id: new Date().getTime().toString(), text: taskInput }
      ]);
    } else {
      setTasks(
        tasks.map((task) =>
          task.id === editID ? { ...task, text: taskInput } : taskInput
        )
      );
    }

    backToDefault();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    backToDefault();
  };

  const editTask = (id, text) => {
    setEditID(id);
    setIsEditing(true);
    setTaskInput(text);
    taskInputRef.current.focus();
  };

  const backToDefault = () => {
    setTaskInput('');
    setIsEditing(false);
    setEditID('');
  };

  return (
    <main>
      <h1>Task App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Task:</label>
        <input
          type='text'
          name='task'
          id='task'
          ref={taskInputRef}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type='submit'>{!isEditing ? 'Add' : 'Edit'}</button>
      </form>
      <section>
        <Overview tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </section>
    </main>
  );
};
export default App;
