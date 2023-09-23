import React, { useState } from 'react';

function Todo({ index, todo, removeTodo, editTodo, toggleComplete }) {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (editedTask.trim() !== '') {
      editTodo(index, editedTask);
      setEditing(false);
    }
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className="task">
        {editing ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            {todo.task}
            <div className="buttons">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => removeTodo(index)}>X</button>
              <button onClick={() => toggleComplete(index)}>
                {todo.completed ? 'Remove Strike' : 'Mark as Completed'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;