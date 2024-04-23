import React from 'react';
import '../asset/css/profilecard.css';

const ProfileCard = ({ profile, onClickSummary }) => {
  return (
    <div className="profile-card-main">
      <img src={profile.photo} alt={profile.name} className="profile-img"/>
      <p className="profile-text1">{profile.name}</p>
      <p className="profile-text2">{profile.description}</p>
      <button onClick={() => onClickSummary(profile)} className="profile-butn2">Summary</button>
    </div>
  )
}

export default ProfileCard