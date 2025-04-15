// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import Login from './pages/Login';

// function App() {
//   return <Login />;
// }

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes instead of Switch
import Login from './pages/Login';
import UserManagement from './pages/Usermanagement';

function App() {
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<Login />} />  {/* Use element prop instead of component */}
        <Route path="/user-management" element={<UserManagement />} />  {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default App;


