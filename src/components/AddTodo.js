import { useState } from 'react'
import './AddTodo.css'

const AddTodo = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos(currentTodos => {
            return [...currentTodos,
            { id: crypto.randomUUID(), title: todo, completed: false },]
        })
        setTodo("");
    }

    const toogleTodo = (id, completed) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    todo.completed = completed
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    return (
        <div className='addtodo-container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <input
                    id="item"
                    className="input"
                    type="text"
                    placeholder="add details"
                    value={todo}
                    onChange={e => setTodo(e.target.value)} />
                <button className="button">Add</button>
            </form>
            <ul className="listtodo">
                {todos.map(todo => {
                    return (
                        <li key={todo.id} className='todo-list'>
                            <label className='todo-item'>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={e => toogleTodo(todo.id, e.target.checked)} />
                                <p>{todo.title}</p>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AddTodo