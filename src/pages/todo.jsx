import './todo.css';
import { useState, useEffect } from 'react';
import Switch from "react-switch";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import TaskContainer from '../components/TaskContainer';

function Todo() {

  const [tasks, setTasks] = useState([])
  const [dark, setDark] = useState(true);
  
  useEffect(() => {
    let myTodo = localStorage.getItem('myTodoTasks');
    if (myTodo) {
        setTasks(JSON.parse(myTodo))
    }
}, [])

  return (
    <div className={`${dark ? 'darkMode-App' : "lightMode-App"} App`}>
      <div className={`${dark ? 'darkMode-app-title-container' : "lightMode-app-title-container"} app-title-container`}>
        <h1 className='app-title'>Daily Needs</h1>
      </div>
      <Switch
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<div className='check-sun-btn' ><BsSunFill size={18} /></div>}
        checkedIcon={<div className='check-moon-btn'><BsFillMoonStarsFill size={18} /></div>} />

      <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark} />
    </div >
  );
}

export default Todo;
