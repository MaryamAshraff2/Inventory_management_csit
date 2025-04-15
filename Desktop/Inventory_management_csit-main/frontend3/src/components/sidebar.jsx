// Sidebar.jsx
import React from 'react';
import { FaTachometerAlt, FaUsers, FaBuilding, FaMapMarkerAlt, FaBoxes, FaCartPlus, FaWarehouse, FaExchangeAlt, FaClipboardList, FaTrash, FaChartBar, FaCogs } from 'react-icons/fa';

const sidebar = () => {
  const menuItems = [
    { label: 'Dashboard', icon: <FaTachometerAlt /> },
    { label: 'Users', icon: <FaUsers />, active: true },
    { label: 'Departments', icon: <FaBuilding /> },
    { label: 'Locations', icon: <FaMapMarkerAlt /> },
    { label: 'Categories', icon: <FaBoxes /> },
    { label: 'Items', icon: <FaBoxes /> },
    { label: 'Procurements', icon: <FaCartPlus /> },
    { label: 'Inventory', icon: <FaWarehouse /> },
    { label: 'Stock Movements', icon: <FaExchangeAlt /> },
    { label: 'Stock Requests', icon: <FaClipboardList /> },
    { label: 'Discarded Items', icon: <FaTrash /> },
    { label: 'Reports', icon: <FaChartBar /> },
    { label: 'Settings', icon: <FaCogs /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">ManageVerse</div>
      <ul className="p-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${item.active ? 'bg-gray-700' : ''}`}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default sidebar;



