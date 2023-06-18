import React, { Fragment, useEffect, useState } from 'react';

import EditTask from "./EditTask";

const ListTasks = (props) => {

    const [tasks, setTasks] = useState([]);

    // Delete Task Function
    const deleteTask = async (id) => {
        try {
            const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`,
                {
                    method: 'DELETE'
                });
            setTasks(tasks.filter(task => task.task_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:5000/tasks")
            const jsonData = await response.json()

            setTasks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    console.log(tasks);
    return (
        <Fragment>

            <div className="flex flex-col m-2 shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th className="px-6 py-3 bg-gray-200">
                                Description
                            </th>
                            <th className="px-6 py-3 bg-gray-200">
                                Priority
                            </th>
                            <th className="px-6 py-3 bg-gray-200">
                                Status
                            </th>
                            <th className="px-6 py-3 bg-gray-200">
                                Edit
                            </th>
                            <th className="px-6 py-3 bg-gray-200">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <tr key={task.task_id} className="border-b border-gray-200">
                                <td className="px-6 py-4">
                                    {task.description}
                                </td>
                                <td className="px-6 py-4">
                                    {task.priority}
                                </td>
                                <td className="px-6 py-4">
                                    {task.status}
                                </td>
                                <td className="px-6 py-4">
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-400 font-bold py-2 px-4 rounded'
                                        onClick={() => props.editTaskHandler(task)}>
                                        Edit
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className='bg-red-500 hover:bg-red-700 text-white hover:text-gray-400 font-bold py-2 px-4 rounded'
                                        onClick={() => deleteTask(task.task_id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </Fragment >)
};

export default ListTasks;