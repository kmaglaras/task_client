import React, { Fragment, useState } from 'react';
import "../App.css"

function NewTask({ closeAddTaskModal }) {

    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description, priority, status };
            const response = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = "/tasks";
        } catch (err) { console.error(err.message); }
    }

    return (
        <Fragment>
            <div className='fixed inset-0 bg-black bg-opacity-25
            backdrop-blur-sm flex justify-center items-center'>
                <div className='w=[600px]'>
                    <div className='bg-white p-2 rounded'>

                        <div className='text-4xl font-bold text-gray-900 mb-'>
                            <h1> Add Task </h1>
                        </div>

                        <div>
                            <form className='w-screen max-w-lg' onSubmit={onSubmitForm}>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Task Description</label>
                                        <input type='text' className='block uppercase tracking-wide text-gray-700 text-lg font-bold'
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Priority </label>
                                        <select className='block appearance-none w-full bg-gray-200 border border-gray-200 
                                        text-gray-700 p-2 rounded leading-tight focus:outline-none 
                                        focus:bg-white focus:border-gray-500' value={priority}
                                            onChange={e => setPriority(e.target.value)}>
                                            <option value='""'> </option>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Status </label>
                                        <select className='block appearance-none w-full bg-gray-200 border border-gray-200 
                                        text-gray-700 p-2 rounded leading-tight focus:outline-none 
                                        focus:bg-white focus:border-gray-500' value={status}
                                            onChange={e => setStatus(e.target.value)}>
                                            <option value='""'> </option>
                                            <option value="To Do">To Do</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex justify-between m-4'>
                                    <button className='bg-red-500 hover:bg-red-700 text-white hover:text-gray-400 
                                            font-bold py-2 px-4 rounded'
                                        onClick={() => closeAddTaskModal(false)}>
                                        Cancel
                                    </button>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-400
                                            font-bold py-2 px-4 rounded'>
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default NewTask