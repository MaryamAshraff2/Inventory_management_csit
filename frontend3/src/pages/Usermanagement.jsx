// //new code
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Usermanagement = () => {
//   const [users, setUsers] = useState([]); // Empty initial state
//   const [search, setSearch] = useState('');
//   const [department, setDepartment] = useState('All');
//   const [role, setRole] = useState('All');
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // New useEffect to fetch users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/inventory/usermanagement/');
//         setUsers(response.data);
//       } catch (err) {
//         console.error('Failed to fetch users', err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchUsers();
//   }, []); // Empty dependency array means this runs once on mount

//   // Form Fields
//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//     role: 'User',
//     department: 'Engineering Department',
//   });

//   const filteredUsers = users.filter(user => {
//     const matchesSearch =
//       user.name.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase());
//     const matchesDepartment = department === 'All' || user.department === department;
//     const matchesRole = role === 'All' || user.role === role;
//     return matchesSearch && matchesDepartment && matchesRole;
//   });

//   const uniqueDepartments = ['All', ...new Set(users.map(u => u.department))];
//   const uniqueRoles = ['All', ...new Set(users.map(u => u.role))];


//   const handleAddUser = () => {
//     axios.post('http://localhost:8000/inventory/usermanagement/', newUser)
//       .then(res => {
//         setUsers([...users, res.data]);  // Add new user to the frontend state
//         setShowModal(false);  // Close modal
//         setNewUser({
//           name: '',
//           email: '',
//           role: 'User',
//           department: 'Engineering Department',
//         });
//       })
//       .catch(err => console.error('Add user failed', err.response?.data || err.message));
//   };
  

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-4">
//         <h2 className="text-xl font-bold mb-4">ManageVerse</h2>
//         <nav className="space-y-2">
//           <a href="#" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
//           <a href="#" className="block bg-gray-700 p-2 rounded">Users</a>
//           <a href="#" className="block hover:bg-gray-700 p-2 rounded">Departments</a>
//           <a href="#" className="block hover:bg-gray-700 p-2 rounded">Locations</a>
//           <a href="#" className="block hover:bg-gray-700 p-2 rounded">Items</a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <input
//             type="text"
//             placeholder="Search users by name or email..."
//             className="border rounded px-3 py-2 w-1/3"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//           <div className="space-x-2">
//             <select
//               className="border rounded px-3 py-2"
//               value={department}
//               onChange={e => setDepartment(e.target.value)}
//             >
//               {uniqueDepartments.map(dep => (
//                 <option key={dep}>{dep}</option>
//               ))}
//             </select>
//             <select
//               className="border rounded px-3 py-2"
//               value={role}
//               onChange={e => setRole(e.target.value)}
//             >
//               {uniqueRoles.map(r => (
//                 <option key={r}>{r}</option>
//               ))}
//             </select>
//             <button
//               onClick={() => setShowModal(true)}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Add User
//             </button>
//           </div>
//         </div>

//         {/* Table */}
//         <table className="min-w-full bg-white rounded shadow">
//           <thead>
//             <tr className="text-left border-b">
//               <th className="p-3">ID</th>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Role</th>
//               <th className="p-3">Department</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map(user => (
//               <tr key={user.id} className="border-b hover:bg-gray-100">
//                 <td className="p-3">{user.id}</td>
//                 <td className="p-3">{user.name}</td>
//                 <td className="p-3">{user.email}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded-full text-sm font-medium ${
//                       user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
//                     }`}
//                   >
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="p-3">{user.department}</td>
//                 <td className="p-3 text-gray-500">...</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//               <h2 className="text-xl font-semibold mb-1">Add New User</h2>
//               <p className="text-sm text-gray-500 mb-4">Add a new user to the system</p>

//               <label className="block font-medium mb-1">Username</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-3 py-2 mb-3"
//                 value={newUser.name}
//                 onChange={e => setNewUser({ ...newUser, name: e.target.value })}
//                 placeholder="Enter username"
//               />

//               <label className="block font-medium mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full border rounded px-3 py-2 mb-3"
//                 value={newUser.email}
//                 onChange={e => setNewUser({ ...newUser, email: e.target.value })}
//                 placeholder="Enter email address"
//               />

//               <label className="block font-medium mb-1">Role</label>
//               <select
//                 className="w-full border rounded px-3 py-2 mb-3"
//                 value={newUser.role}
//                 onChange={e => setNewUser({ ...newUser, role: e.target.value })}
//               >
//                 <option>Admin</option>
//                 <option>User</option>
//               </select>

//               <label className="block font-medium mb-1">Department</label>
//               <select
//                 className="w-full border rounded px-3 py-2 mb-4"
//                 value={newUser.department}
//                 onChange={e => setNewUser({ ...newUser, department: e.target.value })}
//               >
//                 {uniqueDepartments.filter(dep => dep !== 'All').map(dep => (
//                   <option key={dep}>{dep}</option>
//                 ))}
//               </select>

//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleAddUser}
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   Add User
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Usermanagement;




//new code
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Usermanagement = () => {
  const [users, setUsers] = useState([]); // Empty initial state
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [role, setRole] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);


  // New useEffect to fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/inventory/usermanagement/');
        setUsers(response.data);
      } catch (err) {
        console.error('Failed to fetch users', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // Form Fields
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'User',
    department: 'Engineering Department',
  });
  
  // Edit User Handlers
  const handleEditClick = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleUpdateUser = () => {
    axios.put(`http://localhost:8000/inventory/usermanagement/${editingUser.id}/`, editingUser)
      .then(res => {
        setUsers(users.map(user => user.id === editingUser.id ? res.data : user));
        setShowEditModal(false);
      })
      .catch(err => console.error('Update failed', err.response?.data || err.message));
  };

  // Delete User Handler
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:8000/inventory/usermanagement/${userId}/`)
        .then(() => {
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(err => console.error('Delete failed', err.response?.data || err.message));
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = department === 'All' || user.department === department;
    const matchesRole = role === 'All' || user.role === role;
    return matchesSearch && matchesDepartment && matchesRole;
  });

  const uniqueDepartments = ['All', ...new Set(users.map(u => u.department))];
  const uniqueRoles = ['All', ...new Set(users.map(u => u.role))];


  const handleAddUser = () => {
    axios.post('http://localhost:8000/inventory/usermanagement/', newUser)
      .then(res => {
        setUsers([...users, res.data]);  // Add new user to the frontend state
        setShowModal(false);  // Close modal
        setNewUser({
          name: '',
          email: '',
          role: 'User',
          department: 'Engineering Department',
        });
      })
      .catch(err => console.error('Add user failed', err.response?.data || err.message));
  };
  

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">ManageVerse</h2>
        <nav className="space-y-2">
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a>
          <a href="#" className="block bg-gray-700 p-2 rounded">Users</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Departments</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Locations</a>
          <a href="#" className="block hover:bg-gray-700 p-2 rounded">Items</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search users by name or email..."
            className="border rounded px-3 py-2 w-1/3"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="space-x-2">
            <select
              className="border rounded px-3 py-2"
              value={department}
              onChange={e => setDepartment(e.target.value)}
            >
              {uniqueDepartments.map(dep => (
                <option key={dep}>{dep}</option>
              ))}
            </select>
            <select
              className="border rounded px-3 py-2"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              {uniqueRoles.map(r => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add User
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="min-w-full bg-white rounded shadow">
          <thead>{/* ... same headers */}</thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6">Loading...</td></tr>
            ) : filteredUsers.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-3">{user.department}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        {/*Add user Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
              <h2 className="text-xl font-semibold mb-1">Add New User</h2>
              <p className="text-sm text-gray-500 mb-4">Add a new user to the system</p>

              <label className="block font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-3"
                value={newUser.name}
                onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Enter username"
              />

              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 mb-3"
                value={newUser.email}
                onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="Enter email address"
              />

              <label className="block font-medium mb-1">Role</label>
              <select
                className="w-full border rounded px-3 py-2 mb-3"
                value={newUser.role}
                onChange={e => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option>Admin</option>
                <option>User</option>
              </select>

              <label className="block font-medium mb-1">Department</label>
              <select
                className="w-full border rounded px-3 py-2 mb-4"
                value={newUser.department}
                onChange={e => setNewUser({ ...newUser, department: e.target.value })}
              >
                {uniqueDepartments.filter(dep => dep !== 'All').map(dep => (
                  <option key={dep}>{dep}</option>
                ))}
              </select>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddUser}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}


        {/* Edit User Modal */}
        {showEditModal && editingUser && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-1">Edit User</h2>
              
              <label>Username</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 mb-3"
                value={editingUser.name}
                onChange={e => setEditingUser({...editingUser, name: e.target.value})}
              />

              <label>Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 mb-3"
                value={editingUser.email}
                onChange={e => setEditingUser({...editingUser, email: e.target.value})}
              />

              <label>Role</label>
              <select
                className="w-full border rounded px-3 py-2 mb-3"
                value={editingUser.role}
                onChange={e => setEditingUser({...editingUser, role: e.target.value})}
              >
                <option>Admin</option>
                <option>User</option>
              </select>

              <label>Department</label>
              <select
                className="w-full border rounded px-3 py-2 mb-4"
                value={editingUser.department}
                onChange={e => setEditingUser({...editingUser, department: e.target.value})}
              >
                {uniqueDepartments.filter(dep => dep !== 'All').map(dep => (
                  <option key={dep}>{dep}</option>
                ))}
              </select>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateUser}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Usermanagement;