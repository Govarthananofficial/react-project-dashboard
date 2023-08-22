import React from 'react';
import Task from './Task'; // Import your Task component

const PrintableTaskList = ({ tasks, dark }) => {
    return (
        <div className={`printable-task-list ${dark ? 'darkMode' : 'lightMode'}`}>
            {tasks.map((task, i) => (
                <Task task={task} key={i} dark={dark} />
            ))}
        </div>
    );
};

export default PrintableTaskList;
