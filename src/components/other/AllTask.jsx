import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  if (!userData || userData.length === 0) {
    return (
      <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-52 flex items-center justify-center">
        <h3 className="text-gray-400">No tasks or employees available.</h3>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-52">
      {/* Table Header */}
      <div className="bg-red-400 mb-2 py-2 rounded flex justify-between px-4">
        <h3 className="w-1/5 text-center text-purple-900 rounded bg-purple-600">
          Employee Name
        </h3>
        <h3 className="w-1/5 text-center text-yellow-900 rounded bg-yellow-600">
          New Task
        </h3>
        <h5 className="w-1/5 text-center text-blue-900 rounded bg-blue-600">
          Active Task
        </h5>
        <h5 className="w-1/5 text-center text-green-900 rounded bg-green-600">
          Completed Task
        </h5>
        <h5 className="w-1/5 text-center text-red-900 rounded bg-red-600">
          Failed Task
        </h5>
      </div>

      {/* Employee Task Details */}
      <div id="Alltask" className="h-[80%] overflow-auto">
        {userData.map((employee, id) => (
          <div
            key={id}
            className="bg-red-400 mb-2 py-2 rounded flex justify-between px-4"
          >
            <h3 className="w-1/5 mx-1 rounded text-center text-purple-900 bg-purple-500">
              {employee.firstname}
            </h3>
            <h3 className="w-1/5 mx-1 rounded text-center text-yellow-900 bg-yellow-500">
              {employee.taskNumbers.newTask || 0}
            </h3>
            <h5 className="w-1/5 mx-1 rounded text-center text-blue-900 bg-blue-500">
              {employee.taskNumbers.active || 0}
            </h5>
            <h5 className="w-1/5 mx-1 rounded text-center text-green-900 bg-green-500">
              {employee.taskNumbers.completed || 0}
            </h5>
            <h5 className="w-1/5 mx-1 rounded text-center text-red-900 bg-red-500">
              {employee.taskNumbers.failed || 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
