import React from 'react';

const TaskListNumber = ({ data }) => {
  // Ensure data and taskNumbers exist
  const taskNumbers = data?.taskNumbers || {
    newTask: 0,
    completed: 0,
    active: 0,
    failed: 0,
  };

  // Define task details for rendering
  const taskDetails = [
    { count: taskNumbers.newTask, label: 'New Task', bgColor: 'bg-yellow-400', textColor: 'text-yellow-800' },
    { count: taskNumbers.completed, label: 'Completed Task', bgColor: 'bg-green-400', textColor: 'text-green-800' },
    { count: taskNumbers.active, label: 'Accepted Task', bgColor: 'bg-blue-400', textColor: 'text-blue-800' },
    { count: taskNumbers.failed, label: 'Failed Task', bgColor: 'bg-red-400', textColor: 'text-red-800' },
  ];

  return (
    <div className="flex flex-wrap mt-10 justify-center gap-5">
      {taskDetails.map((task, index) => (
        <div
          key={index}
          className={`rounded-xl w-[300px] px-9 py-6 ${task.bgColor}`}
        >
          <h2 className={`text-3xl font-semibold ${task.textColor}`}>{task.count}</h2>
          <h3 className={`text-xl font-medium ${task.textColor}`}>{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
