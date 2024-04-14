import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';

const UpdateProfile = () => {
  const { currentUser, loading } = useAuth();
  const [name, setName] = useState(currentUser?.displayName || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading && currentUser) {
      try {
        await currentUser.updateProfile({
          displayName: name
        });
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Failed to update profile:", error);
        alert("Error updating profile.");
      }
    }
  };

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={loading} />
        <button type="submit" disabled={loading}>Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
