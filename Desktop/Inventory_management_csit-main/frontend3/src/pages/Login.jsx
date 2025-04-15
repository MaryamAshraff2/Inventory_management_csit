// // src/pages/Login.jsx
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const [activeTab, setActiveTab] = useState('Admin');
//   const [portalID, setPortalID] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const credentials = {
//     Admin: { id: 'admin', password: 'admin123' },
//     User: { id: 'user', password: 'user123' },
//   };

//   const handleLogin = () => {
//     const { id, password: correctPassword } = credentials[activeTab];
//     if (portalID === id && password === correctPassword) {
//       setError('');
//       alert(`${activeTab} logged in successfully!`);
//       history.push('/user-management'); // Redirect to user management page
//     } else {
//       setError('Invalid Portal ID or Password');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <img src="/vite.svg" alt="Logo" className="h-20 mb-4" />
//       <h1 className="text-2xl font-bold">NED UNIVERSITY</h1>
//       <p className="text-sm mb-4">OF ENGINEERING & TECHNOLOGY</p>

//       <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
//         <h2 className="text-xl font-semibold text-center mb-4">NED Portal Login</h2>

//         <div className="flex justify-center mb-4">
//           <button
//             className={`px-4 py-2 rounded-l ${activeTab === 'Admin' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveTab('Admin')}
//           >
//             Admin
//           </button>
//           <button
//             className={`px-4 py-2 rounded-r ${activeTab === 'User' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
//             onClick={() => setActiveTab('User')}
//           >
//             User
//           </button>
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Portal ID</label>
//           <input
//             type="text"
//             className="w-full border rounded px-3 py-2 mb-2"
//             placeholder={`Enter ${activeTab} ID`}
//             value={portalID}
//             onChange={(e) => setPortalID(e.target.value)}
//           />
//           <p className="text-xs text-gray-500 mb-3">Use "{credentials[activeTab].id}" for testing</p>

//           <label className="block font-medium mb-1">Password</label>
//           <input
//             type="password"
//             className="w-full border rounded px-3 py-2"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <p className="text-xs text-gray-500 mb-4">Use "{credentials[activeTab].password}" for testing</p>

//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//           <button
//             onClick={handleLogin}
//             className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [activeTab, setActiveTab] = useState('Admin');
  const [portalID, setPortalID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const credentials = {
    Admin: { id: 'admin', password: 'admin123' },
    User: { id: 'user', password: 'user123' },
  };

  // const handleLogin = () => {
  //   const { id, password: correctPassword } = credentials[activeTab];
  //   if (portalID === id && password === correctPassword) {
  //     setError('');
  //     alert(`${activeTab} logged in successfully!`);
  //     // Navigate to the user management page upon successful login
  //     navigate('/user-management');
  //   } else {
  //     setError('Invalid Portal ID or Password');
  //   }
  // };


  //start of new code
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/inventory/login/", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          portalID,
          password,
          userType: activeTab,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        setError("");
        alert(`${activeTab} logged in successfully!`);
        navigate("/user-management");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Try again later.");
    }
  };
  

  //end of new code

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/vite.svg" alt="Logo" className="h-20 mb-4" />
      <h1 className="text-2xl font-bold">NED UNIVERSITY</h1>
      <p className="text-sm mb-4">OF ENGINEERING & TECHNOLOGY</p>

      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-center mb-4">NED Portal Login</h2>

        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l ${activeTab === 'Admin' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('Admin')}
          >
            Admin
          </button>
          <button
            className={`px-4 py-2 rounded-r ${activeTab === 'User' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('User')}
          >
            User
          </button>
        </div>

        <div>
          <label className="block font-medium mb-1">Portal ID</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mb-2"
            placeholder={`Enter ${activeTab} ID`}
            value={portalID}
            onChange={(e) => setPortalID(e.target.value)}
          />
          <p className="text-xs text-gray-500 mb-3">Use "{credentials[activeTab].id}" for testing</p>

          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs text-gray-500 mb-4">Use "{credentials[activeTab].password}" for testing</p>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
