// src/components/UserProfile.js
import React from 'react';
import { useAuth } from './contexts/AuthContext';

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="user-profile">
      {currentUser && (
        <>
          <img src={currentUser.photoURL || 'default_avatar.png'} alt="Profile" />
          <h3>{currentUser.displayName || 'User'}</h3>
          <p>{currentUser.email}</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;
