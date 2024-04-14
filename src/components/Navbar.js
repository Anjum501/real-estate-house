// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-xl text-green-400 font-bold">Real Estate Deluxe</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/update-profile" className="mx-2">Update Profile</Link>
        <Link to="/login" className="mx-2">Login</Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
