const Overview = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => {
        const { id, text } = task;

        return (
          <li key={id}>
            {text}{' '}
            <button type='button' onClick={() => editTask(id, text)}>
              Edit
            </button>{' '}
            <button type='button' onClick={() => deleteTask(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
