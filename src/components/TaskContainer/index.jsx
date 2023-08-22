import React, { useState } from 'react'
import Task from '../Task'
import './TaskContainer.css'

const TaskContainer = ({ tasks, setTasks, dark }) => {

    const [todo, setTodo] = useState({ completed: false, title: "", description: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title) {
            let newTask = { ...todo }
            let newTasks = [...tasks, newTask]
            setTasks(newTasks)
            setTodo({ title: '', description: '', completed: false })
            localStorage.setItem("myTodoTasks", JSON.stringify(newTasks));
        }
    }

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    const handlePrint = () => {
        const printContents = document.getElementById('printable-task-list').innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };

    return (
        <div className='tasks-container' id='printable-task-list' >
            <form className='input-form' action='handleSubmit' onSubmit={handleSubmit}>
                <input className='task-input task-input-title'
                    name='title' type="text" placeholder='Enter Title'
                    onChange={handleChange} value={todo.title} />
                <input className='task-input task-input-desc'
                    name='description' type="text" placeholder='Enter Description'
                    onChange={handleChange} value={todo.description} />
                <button className={`task-btn ${dark ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`}
                    type='submit'>Add</button>
            </form >
            
            <div className={`${dark ? 'darkMode-box-tasks-container' : "lightMode-box-tasks-container"} box-tasks-container`}>
                {tasks?.map((task, i) => {
                    return <Task task={task} tasks={tasks} setTasks={setTasks} index={i} dark={dark} key={i} />
                })}
            </div>
            <button className={`task-btn ${dark ? 'darkMode-print-btn' : 'lightMode-print-btn'} print-btn`} type="button" onClick={handlePrint}>
                    Print
            </button>
        </div>
    )
}

export default TaskContainer;