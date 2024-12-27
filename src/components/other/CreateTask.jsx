import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !description || !date || !assignTo || !category) {
      alert("All fields are required!");
      return;
    }

    const task = { 
      title, 
      description, 
      date, 
      category, 
      active: false, 
      newTask: true, 
      completed: false, 
      failed: false 
    };

    const updatedData = userData.map((ele) => {
      if (assignTo === ele.firstname) {
        return {
          ...ele,
          tasks: [...ele.tasks, task],
          taskNumbers: {
            ...ele.taskNumbers,
            newTask: ele.taskNumbers.newTask + 1,
          },
        };
      }
      return ele;
    });

    setUserData(updatedData);
    console.log(updatedData);

    localStorage.setItem('employees', JSON.stringify(updatedData));

    // Reset the form fields
    setDate('');
    setDescription('');
    setAssignTo('');
    setCategory('');
    setTitle('');
  };

  return (
    <div className='p-5 bg-[#272626] mt-7 rounded px-20'>
      <form onSubmit={submitHandler} className='flex flex-wrap items-start justify-between w-full '>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Enter Task Title'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="date"
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
            />
          </div>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Design, Developer, etc'
            />
          </div>
        </div>

        <div className='w-1/2 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
          />
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
