import React from 'react'
import ProfileCard from './ProfileCard';
// import './ProfileList.css';

const ProfileList = ({ profiles, onClickSummary , loading}) => {
  return (
    <div className="profile-list">
      {loading ? (
        <div>Loading profiles...</div>
      ) : (
        profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClickSummary={onClickSummary}
          />
        ))
      )}
    </div>
  )
}

export default ProfileList