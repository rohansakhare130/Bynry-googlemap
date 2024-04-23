import React from 'react';
import './ProfileDetails.css';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      {/* Add more details here */}
    </div>
  )
}

export default ProfileDetails