import React, { Fragment, useState } from 'react';
import './App.css';

// components
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import ListTasks from './components/ListTasks';

function App() {

  const [openAddTaskModal, setOpenAddTaskModal] = useState(false)
  const [openEditTaskModal, setOpenEditTaskModal] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState({})

  function editTaskHandler(task) {

    setOpenEditTaskModal(true);
    setTaskToEdit(task);

  }

  return (
    <Fragment>
      <div className='flex justify-between m-5'>
        <div className='text-4xl font-bold text-gray-900'>
          <h1> Task List </h1>
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-400 font-bold py-2 px-4 rounded'
            onClick={() => { setOpenAddTaskModal(true); }}>
            + Add Task </button>
        </div>
      </div>
      <div className=''>
        {openAddTaskModal && <NewTask closeAddTaskModal={setOpenAddTaskModal} />}
      </div>

      <div className=''>
        {openEditTaskModal && <EditTask closeEditTaskModal={setOpenEditTaskModal} task={taskToEdit} />}
      </div>

      <div className='flex flex-col justify-center' >
        <ListTasks editTaskHandler={editTaskHandler} />
      </div>

    </Fragment>
  );
}
export default App;
