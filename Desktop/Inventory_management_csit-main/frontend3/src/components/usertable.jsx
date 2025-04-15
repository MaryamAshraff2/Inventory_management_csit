// // UserTable.jsx
// import React, { useState } from 'react';

// const users = [
//   { id: 1, name: 'Admin User', email: 'admin@ned.edu.pk', role: 'Admin', department: 'IT Administration' },
//   { id: 2, name: 'Jahanzaib', email: 'jahanzaib@ned.edu.pk', role: 'User', department: 'Engineering Department' },
//   { id: 3, name: 'Saad', email: 'saad@ned.edu.pk', role: 'User', department: 'Computer Science' },
//   { id: 4, name: 'Fahad', email: 'fahad@ned.edu.pk', role: 'User', department: 'Electrical Engineering' },
// ];

// const usertable = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState(users);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)));
//   };

//   return (
//     <div className="ml-64 p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Users</h1>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add User</button>
//       </div>

//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by name or email..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="border px-4 py-2 rounded-md w-1/3"
//         />
//         <select className="border px-4 py-2 rounded-md">
//           <option>All Departments</option>
//           {/* Add department options here */}
//         </select>
//         <select className="border px-4 py-2 rounded-md">
//           <option>All Roles</option>
//           {/* Add role options here */}
//         </select>
//         <button className="px-4 py-2 border rounded-md">Clear Filters</button>
//       </div>

//       <table className="w-full table-auto border-collapse bg-white shadow rounded-lg">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-3 text-left">ID</th>
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Email</th>
//             <th className="p-3 text-left">Role</th>
//             <th className="p-3 text-left">Department</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map(user => (
//             <tr key={user.id} className="border-t">
//               <td className="p-3">{user.id}</td>
//               <td className="p-3">{user.name}</td>
//               <td className="p-3">{user.email}</td>
//               <td className="p-3">
//                 <span className={`px-3 py-1 rounded-full text-sm ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
//                   {user.role}
//                 </span>
//               </td>
//               <td className="p-3">{user.department}</td>
//               <td className="p-3">...</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default usertable;


// UserTable.jsx
import React from 'react';

const users = [
  { id: 1, name: 'Admin User', email: 'admin@ned.edu.pk', role: 'Admin', department: 'IT Administration' },
  { id: 2, name: 'Jahanzaib', email: 'jahanzaib@ned.edu.pk', role: 'User', department: 'Engineering Department' },
  { id: 3, name: 'Saad', email: 'saad@ned.edu.pk', role: 'User', department: 'Computer Science' },
  { id: 4, name: 'Fahad', email: 'fahad@ned.edu.pk', role: 'User', department: 'Electrical Engineering' },
];

const usertable = () => {
  return (
    <div className="ml-64 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add User</button>
      </div>

      <div className="flex gap-4 mb-4">
        <input type="text" placeholder="Search by name or email..." className="border px-4 py-2 rounded-md w-1/3" />
        <select className="border px-4 py-2 rounded-md">
          <option>All Departments</option>
          {/* Add department options here */}
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option>All Roles</option>
          {/* Add role options here */}
        </select>
        <button className="px-4 py-2 border rounded-md">Clear Filters</button>
      </div>

      <table className="w-full table-auto border-collapse bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-sm ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                  {user.role}
                </span>
              </td>
              <td className="p-3">{user.department}</td>
              <td className="p-3">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default usertable;
