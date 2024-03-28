import React, {useState} from "react";
import "./App.css";

const App = () => {
    // set state with getter and setter
    const [todos, setTodos] = useState([]);

    // Add new a task
    function handleSubmit(event) {
        event.preventDefault();

        let todo = document.getElementById('todoAdd').value;
        const newTodo = {
            id: new Date().getTime(), // id is set to timestamp
            text: todo.trim(), // to-do task trimmed of white space
            completed: false // completed set to false at start
        };

        if (newTodo.text.length > 0) { // add new to-do to list
            setTodos([...todos].concat(newTodo));
        } else { // else alert user to input non empty task
            alert('Enter Valid Task')
        }
        document.getElementById('todoAdd').value = ""
    }

    // Delete a task
    function handleDelete(id) {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    // Complete a task
    function toggleComplete(id) {
        let updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    // Add the submitEdits code here


    return (
        <div id="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='todoAdd'
                />
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo) =>
                <div className="todo" key={todo.id}>
                    <div className="todo-text"><
                        input type="checkbox" id="completed" checked={todo.completed}
                              onChange={() => toggleComplete(todo.id)}/>
                        {todo.text}
                    </div>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>)}
        </div>
    );
};
export default App;
