// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Slider from './components/Slider';
import Home from './components/Home';         // Home page component
import Login from './components/Login';       // Login page component
import Register from './components/Register'; // Register page component
import Estates from './components/Estates';   // Estates listing page component
import EstateDetails from './components/EstateDetails'; // Estate details page component
import UpdateProfile from './components/UpdateProfile'; // Update profile page component
import UserProfile from './components/UserProfile'; // User profile page component
import NotFound from './components/NotFound'; // 404 Not Found page component
import PrivateRoute from './components/PrivateRoute'; // Private route component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// import Login from './pages/Login';
// import Register from './pages/Register';
// import EstateDetails from './pages/EstateDetails';
// import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>  {/* Ensure Routes wraps all Route components */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/estate/:id" element={
            <ProtectedRoute>
              <EstateDetails />
            </ProtectedRoute>
          } />
          {/* <Route path="/update-profile" element={<PrivateRoute component={UpdateProfile} />} /> */}
          <Route path="/user-profile" element={<PrivateRoute component={UserProfile} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
